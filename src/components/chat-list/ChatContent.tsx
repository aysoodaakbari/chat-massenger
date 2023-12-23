import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import theme from "../../theme/";
import { useDispatch, useSelector } from "react-redux";
import { IinitialState, addMassage } from "../../store/massage/slice";
import { useSearchParams } from "react-router-dom";
import openai, { OpenAI } from "openai";
import { randomNumberInRange } from "../../utils/generateRandomNum";
import { Send } from "../../assets/icons";

const ChatContent = () => {
  const [searchParams] = useSearchParams();
  const user_id = Number(searchParams.get("id"));
  const [input, setInput] = useState<string>("");
  const [generatedText, setGeneratedText] = useState("");

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });
  const generateText = async () => {
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt: input,
      max_tokens: 50,
    });
    setGeneratedText(response.choices[0].text);
  };
  const dispatch = useDispatch();
  const data = useSelector<
    { reducer: { massage: IinitialState[] } },
    { reducer: { massage: IinitialState[] } }
  >((state) => state);

  const handleSend = (e?: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (input === "") {
      e?.preventDefault();
    } else {
      dispatch(
        addMassage({
          newMassage: [
            {
              massageId: randomNumberInRange(10, 900),
              sender: "aysooda",
              text: input,
            },
          ],
          userId: user_id,
        }),
      );

      if (input.trim() !== "") {
        setInput("");
      }
      generateText();
      setTimeout(
        () =>
          dispatch(
            addMassage({
              newMassage: [
                {
                  massageId: randomNumberInRange(10, 900),
                  sender: "bot",
                  text: generatedText || "Hi How can I assist you?",
                },
              ],
              userId: user_id,
            }),
          ),
        3000,
      );
    }
  };
  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInput(event.target.value);
  };

  return (
    <Box className="h-full flex flex-col bg-white-main !w-full">
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {data.reducer.massage[user_id].data.map((message, index) => (
          <Box
            key={message.massageId + index}
            sx={{
              display: "flex",
              justifyContent:
                message.sender === "bot" ? "flex-start" : "flex-end",
              mb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: message.sender === "bot" ? "row" : "row-reverse",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  bgcolor:
                    message.sender === "bot"
                      ? "primary.main"
                      : "secondary.600",
                }}
              >
                {message.sender === "bot" ? "B" : "U"}
              </Avatar>
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  ml: message.sender === "bot" ? 1 : 0,
                  mr: message.sender === "bot" ? 0 : 1,
                  backgroundColor:
                    message.sender === "bot"
                      ? theme.palette.primary.main
                      : "rgba(66, 66, 66, 0.4)",
                  borderRadius:
                    message.sender === "bot"
                      ? "20px 20px 20px 5px"
                      : "20px 20px 5px 20px",
                }}
              >
                <Typography variant="body1">{message.text}</Typography>
              </Paper>
            </Box>
          </Box>
        ))}
      </Box>
      <Box className="p-2 w-full">
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <TextField
              size="small"
              className="!w-full"
              placeholder="Type a message"
              variant="outlined"
              value={input}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton
              className="!bg-primary-main"
              onClick={(e) => handleSend(e)}
              onKeyDown={(e) => (e.key === "Enter" ? handleSend : "")}
            >
              <Send width={20} height={20} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ChatContent;
