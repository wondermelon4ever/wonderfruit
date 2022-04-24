import React from 'react';
import {
    Box, 
    IconButton,
    Typography
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import PushPinIcon from '@mui/icons-material/PushPin';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

import {
    ChevronBarDownIcon,
    ChevronBarUpIcon,
    PinAngleFill,
    PinFill
} from './icons/CustomIcons';

import { useTheme } from '@mui/material/styles';

const styles = {
    height: "37px",
    width : "430px",
    backgroundColor: "#0d47a1",
}

const TitleBar = (props) => {
    const theme = useTheme();

    const { title, type } = props;

    const [pinned, setPinned] = React.useState(false);
    const [fold, setFold] = React.useState(false);
    const [alarm, setAlarm] = React.useState(true);

    const toggleMainMenuShow = props.mainMenuShowToggle;

    const handleClose = () => {
        console.log("handleClose clicked!");
    }

    const handleAlarmToggle = () => {
        setAlarm(!alarm);
    }

    const handlePinToggle = () => {
        setPinned(!pinned);
    }

    const handleFoldToggle = () => {
        setFold(!fold);
        toggleMainMenuShow();
    }

    return (
        <div style={styles}>
            <Box sx={{ display: 'flex', flexGrow: 1 }} m={0} pt={ 0.3 } pl={ 1.5 }>
                {
                    type === "Main" ?
                    <Typography
                        noWrap
                        component="div"
                        sx={{fontSize: "16px", color: "white" }}
                        pt={ 0.6 }
                    >
                        { title }
                    </Typography>
                    :
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleAlarmToggle}
                        sx={{ width: "25px"}}
                    >
                        <HomeIcon style={{ color: "white" }} sx={{ fontSize: "16px" }}/>
                    </IconButton>
                }
                
                <Box sx={{ flexGrow: 1 }} />
                <Box
                    item
                    sx={{
                        display: { justifyContent: "flex-end" }
                    }}
                    pr="7px"
                >
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleAlarmToggle}
                        sx={{ width: "25px"}}
                    >
                        {
                            alarm == true ? 
                            <NotificationsActiveIcon style={{ color: "white" }} sx={{ fontSize: "16px" }}/>
                            :
                            <NotificationsOffIcon style={{ color: "white" }} sx={{ fontSize: "16px" }}/>
                        }
                    </IconButton>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleFoldToggle}
                        sx={{ width: "25px"}}
                    >
                        { 
                            fold == true ? 
                            <UnfoldMoreIcon style={{ color: "white" }} sx={{ fontSize: "16px" }}/>
                            :
                            <UnfoldLessIcon style={{ color: "white" }} sx={{ fontSize: "16px" }}/>
                        }
                    </IconButton>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handlePinToggle}
                        sx={{ width: "25px"}}
                    >
                        {
                            pinned == true ?
                            <PushPinIcon style={{ color: "white" }} sx={{ fontSize: "16px" }}/>
                            :
                            <PushPinIcon style={{ color: "white" }} sx={{ fontSize: "16px" }}/>
                        }
                        
                    </IconButton>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleClose}
                        sx={{ width: "25px"}}
                    >
                        <CloseIcon style={{ color: "white" }} sx={{ fontSize: "16px" }}/>
                    </IconButton>
                </Box>
            </Box>
        </div>
    );
}

export default TitleBar;
