import { Avatar, ListItem, Typography, useMediaQuery } from "@mui/material";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";
import { randomDate } from "../../utils/generateRandomDate";

interface IProps {
  userId: number;
  name: string;
}
const ChatRow = (props: IProps) => {
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const d = randomDate(new Date(2023, 11, 10), new Date())
  return (
    <ListItem
      disablePadding
      className={`p-3 flex flex-col md:bg-white-100 cursor-pointer`}
      onClick={() => navigate(`chatroom/?id=${props.userId}`)}
    >
      <div className="flex flex-row gap-x-2">
        <Avatar>{`${props.name.slice(0, 1)}`}</Avatar>
        {largeScreen ? (
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <Typography className="!font-semibold">{props.name}</Typography>
              <Typography>{`${d.getHours()}:${d.getMinutes()} `}</Typography>
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
