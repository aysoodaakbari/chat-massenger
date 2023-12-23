import { Avatar, List } from "@mui/material";
import ChatRow from "./ChatRow";

const ChatList = () => {
  return (
    <div>
      <div className="flex flex-col h-full">
        <List className="flex h-full flex-col gap-2 bg-white-200">
          <li className={`mb-12 mt-8 flex items-center justify-center`}>
            <Avatar></Avatar>
          </li>
          <ChatRow />
          <ChatRow />
          <ChatRow />
          <ChatRow />
        </List>
      </div>
    </div>
  );
};

export default ChatList;
