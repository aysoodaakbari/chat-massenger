import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
//import "./style.scss";
import theme from "../theme";
import ChatList from "../components/chat-list/ChatList";

const ChatLayout = () => {
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {isLargeScreen && (
        <ChatList isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      )}
      <Box
        component="main"
        className="flex h-full flex-col p-4 md:p-3"
        sx={{
          marginLeft: isLargeScreen ? (isMenuOpen ? "282px" : "64px") : "unset",
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default ChatLayout;
