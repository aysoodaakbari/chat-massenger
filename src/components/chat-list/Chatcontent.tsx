import { Avatar, Box, Paper, Typography } from '@mui/material'
import React from 'react'
import theme from '../../theme'
import { IChatContentProps } from './interface'


const Chatcontent = (props: IChatContentProps) => {
    return (
        <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
            {props.massageData.map((message, index) => (
                <Box
                    key={message.massageId + index}
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
                                        : "secondary.600",
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
    )
}

export default Chatcontent