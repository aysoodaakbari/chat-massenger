import { Avatar, ListItem, Typography, useMediaQuery } from "@mui/material";
import theme from "../../theme";

const ChatRow = () => {
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

  // const navigate = useNavigate();
  return (
    <ListItem disablePadding className={`p-3 flex flex-col md:bg-white-100`}>
      <div className="flex flex-row gap-x-2">
        <Avatar>A</Avatar>
        {largeScreen ? (
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <Typography className="!font-semibold">Aysooda</Typography>
              <Typography>13:50</Typography>
            </div>
            <Typography>
              hi, how are you today? do you feel better now?
            </Typography>
          </div>
        ) : (
          <></>
        )}
      </div>
    </ListItem>
  );
};

export default ChatRow;
