import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { IChatRowProps } from './interface'
import { useNavigate } from 'react-router-dom'

const ChatRow = (props:IChatRowProps) => {
    const navigate=useNavigate()
  return (
    <ListItem
    onClick={
      props.link ? () => navigate(props.link as string) : props.onClick
    }
    disablePadding
    className={`${props.className} block`}
  >
    <ListItemButton
      open={props.open}
      className={`h-12 ${props.className} ${
        !props.open && "justify-center"
      } px-2`}
    >
      {props.image !== undefined && (
        <ListItemIcon
          className={`!min-w-0 justify-center`}
          style={{ width: 31 }}
        >
          img
        </ListItemIcon>
      )}
      <ListItemText
        className={`pr-4 transition-opacity ${
          props.open ? "opacity-100" : "opacity-0"
        }`}
        primary={props.label}
      />
    </ListItemButton>
  </ListItem>
  )
}

export default ChatRow