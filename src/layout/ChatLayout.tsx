import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "../theme";
import ChatList from "../components/chat-list/ChatList";

const ChatLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <ChatList />

      <Box
        component="main"
        className="flex h-full flex-row p-4 md:p-3 w-full"
        sx={{
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default ChatLayout;
