import {
  Box,
  TextField,
  Grid,
  IconButton,
} from "@mui/material";

import { Send } from "../../assets/icons";
import Chatcontent from "../../components/chat-list/Chatcontent";
import { IChatContainerProps } from "container/chat/interface";


const ChatContent = (props:IChatContainerProps) => {
 
  return (
    <Box className="h-full flex flex-col bg-white-main !w-full">
      <Chatcontent massageData={props.data.reducer.massage[props.user_id].data} />
      <Box className="p-2 w-full">
        <Grid container spacing={2}>
          <Grid item xs={11}>
            <TextField
              size="small"
              className="!w-full"
              placeholder="Type a message"
              variant="outlined"
              value={props.input}
              onChange={props.handleInputChange}
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton
              className="!bg-primary-main"
              onClick={(e) => props.handleSend(e)}
              onKeyDown={(e) => (e.key === "Enter" ? props.handleSend : "")}
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
