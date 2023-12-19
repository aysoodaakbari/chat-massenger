import { AppBar, Drawer, IconButton, List, Toolbar, Typography, useMediaQuery } from "@mui/material"
import { AzkiLogo, Menu } from "../../assets/icons"
import theme from "../../theme";
import { useEffect } from "react";

const ChatList = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const largeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    useEffect(() => {
        if (largeScreen !== undefined && !largeScreen) {
            setIsOpen(false);
        } else if (largeScreen !== undefined) {
            setIsOpen(true);
        }
    }, [largeScreen]);

    const handleDrawerToggle = () => {
        setIsOpen((prev) => !prev);
    };


    return (
        <div>
            <AppBar position="static" open={isOpen} >
                <Toolbar className="!px-0flex !justify-end !items-end bg-primary-main">
                    <div>
                        {largeScreen && (
                            <IconButton className="!mr-2" onClick={handleDrawerToggle}>
                                <Menu width={24} height={24} />
                            </IconButton>
                        )}

                    </div>

                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" anchor="left" open={isOpen}>
                <List className="flex h-full flex-col gap-2 bg-white-200">
                    <li className={`mb-12 mt-8 flex items-center justify-center`}>
                        {isOpen ? (
                            <AzkiLogo height={32} width={100} />
                        ) : (
                            ''
                        )}
                    </li>
                    <Typography>jfdjjjoaoeijf</Typography>
                </List>
            </Drawer>
        </div>
    )
}

export default ChatList