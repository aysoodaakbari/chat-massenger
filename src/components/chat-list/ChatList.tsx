import { Avatar, IconButton, List } from "@mui/material";
import ChatRow from "./ChatRow";
import { useDispatch, useSelector } from "react-redux";
import { IProfileState, setPhoto } from "../../store/profilePhoto/slice";

const ChatList = () => {
  const dispatch = useDispatch();
  const photo = useSelector<
    { reducer: { profile: IProfileState } },
    { reducer: { profile: IProfileState } }
  >((state) => state);

  const handlePhotoChange = (newPhoto: string) => {
    dispatch(setPhoto(newPhoto));
  };
  console.log(photo);
  return (
    <div>
      <div className="flex flex-col h-full">
        <List className="flex h-full flex-col gap-2 bg-white-200">
          <li className={`mb-12 mt-8 flex items-center justify-center`}>
            <label htmlFor="contained-button-file">
              <Avatar
                src={photo.reducer.profile.photo}
                style={{
                  margin: "10px",
                  width: "60px",
                  height: "60px",
                }}
              />
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
          <ChatRow userId={0} name={"Aysooda"} />
          <ChatRow userId={1} name={"Shirin"} />
          <ChatRow userId={2} name={"Masoud"} />
          <ChatRow userId={3} name={"Maryam"} />
        </List>
      </div>
    </div>
  );
};

export default ChatList;
