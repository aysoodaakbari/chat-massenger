import { Avatar, Badge, IconButton, List, styled } from "@mui/material";
import ChatRow from "./ChatRow";
import { useDispatch, useSelector } from "react-redux";
import { IProfileState, setPhoto } from "../../store/profilePhoto/slice";

const ChatList = () => {
  const dispatch = useDispatch();
  const name: string[] = ["Aysooda", "Shirin", "Masoud", "Maryam"];
  const photo = useSelector<
    { reducer: { profile: IProfileState } },
    { reducer: { profile: IProfileState } }
  >((state) => state);

  const handlePhotoChange = (newPhoto: string) => {
    dispatch(setPhoto(newPhoto));
  };

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 16,
    height: 16,
    border: `2px solid ${theme.palette.primary.main}`,
    background: theme.palette.primary.main,
  }));

  return (
    <div>
      <div className="flex flex-col h-full">
        <List className="flex h-full flex-col gap-2 bg-white-200">
          <li className={`mb-12 mt-8 flex items-center justify-center`}>
            <label htmlFor="contained-button-file">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<SmallAvatar>+</SmallAvatar>}
              >
                <Avatar
                  src={photo.reducer.profile.photo}
                  style={{
                    margin: "10px",
                    width: "60px",
                    height: "60px",
                  }}
                />
              </Badge>
            </label>
            <input
              accept=""
              className="!hidden"
              id="contained-button-file"
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const newPhoto = URL.createObjectURL(file);
                  handlePhotoChange(newPhoto);
                }
              }}
            />
          </li>
          {name.map((name, index) => (
            <ChatRow userId={index} name={name} />
          ))}
        </List>
      </div>
    </div>
  );
};

export default ChatList;
