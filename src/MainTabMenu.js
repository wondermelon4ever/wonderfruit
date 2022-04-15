import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ChatIcon from '@mui/icons-material/Chat';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import WonderTabPanel from './components/widgets/tabs/WonderTabPanel';
import AddressBook from './components/addressbook/AddressBook';
import BadgedIcon from './components/widgets/BadgedIcon';

const MainTabMenu = (props) => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [show, setShow] = React.useState(props.show);

    React.useEffect(()=>{
        setShow(props.show);
    }, [props.show]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const styles = {
        tab: {
            color: "#ffffff",
            fontSize: "12px"
        },
        indicator: {
            "& .MuiTabs-indicator": {
                // display: "none",
                backgroundColor: "transparent",
            },
        }
    }

    return(
        <Box sx={{ display: show === true? "block" : 'none'}}>
            <AppBar position="static" sx={{ width: "430px", backgroundColor: "#0d47a1" }}>
                <Tabs 
                    // style={{ width: "430px", backgroundColor: "#0d47a1" }} 
                    value={value} 
                    onChange={handleChange} 
                    centered aria-label="icon label tabs example"
                    TabIndicatorProps={{
                        style: {
                                    backgroundColor: "#FFFFFF",
                        }
                    }}
                    textColor="inherit"
                >
                    <Tab style={ styles.tab} icon={<ContactMailIcon style={{ color: "white", fontSize: 28}} />} label="연락처" />
                    <Tab 
                        style={ styles.tab} 
                        icon={
                            <BadgedIcon badgeCount={10} color="warning">
                                <ChatIcon style={{ color: "white", fontSize: 28}}/>
                            </BadgedIcon>
                        } 
                        label="대화" 
                    />
                    <Tab 
                        style={ styles.tab} 
                        icon={
                            <BadgedIcon badgeCount={10} color="warning">
                                <PersonPinIcon style={{ color: "white", fontSize: 28}} />
                            </BadgedIcon>
                        } 
                        label="컨퍼런스" 
                    />
                    <Tab style={ styles.tab} icon={<MoreHorizIcon style={{ color: "white", fontSize: 28}} />} label="더보기" />
                </Tabs>
            </AppBar>
            <div style={{ width: "430px", height: "600px", backgroundColor: "#fffff", border: "1px solid gray" }}>
                <SwipeableViews index={value} >
                    <WonderTabPanel value={value} index={0}>
                        <AddressBook />
                    </WonderTabPanel>
                    <WonderTabPanel value={value} index={1}>
                        Chat !!  
                    </WonderTabPanel>
                    <WonderTabPanel value={value} index={2}>
                        Conference !!  
                    </WonderTabPanel>
                    <WonderTabPanel value={value} index={3}>
                        Show more !!  
                    </WonderTabPanel>
                </SwipeableViews>
            </div>
        </Box>
    );
}

export default MainTabMenu;
