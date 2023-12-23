import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import { useState } from "react";
import theme from "../../theme/";
import { useDispatch, useSelector } from "react-redux";
import { IinitialState, addMassage } from "../../store/massage/slice";
import { useSearchParams } from "react-router-dom";
import openai, { OpenAI } from "openai";

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
  const handleSend = () => {
    dispatch(
      addMassage({
        newMassage: [{ massageId: 5, sender: "aysooda", text: input }],
        userId: user_id,
      }),
    );

    if (input.trim() !== "") {
      console.log(input);
      setInput("");
    }
    generateText();
    setTimeout(
      () =>
        dispatch(
          addMassage({
            newMassage: [{ massageId: 6, sender: "bot", text: generatedText }],
            userId: user_id,
          }),
        ),
      3000,
    );
  };

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInput(event.target.value);
  };

  return (
    <Box className="h-full flex flex-col bg-white-main !w-full">
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {/* @ts-ignore */}
        {data.reducer.massage[user_id].data.map((message) => (
          <Box
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
                      : "secondary.main",
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
      <Box className="p-2">
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              size="small"
              fullWidth
              placeholder="Type a message"
              variant="outlined"
              value={input}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              onClick={handleSend}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ChatContent;
