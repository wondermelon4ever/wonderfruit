import React from 'react';
import {
    Fab,
    SpeedDial,
    SpeedDialIcon,
    SpeedDialAction
 } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PrintIcon from '@mui/icons-material/Print';
import VideocamIcon from '@mui/icons-material/Videocam';

import SearchBar from '../widgets/SearchBar';
import ConferenceList from './ConferenceList';

const actions = [
    { icon: <LocalPhoneIcon />, name: '음성' },
    { icon: <VideocamIcon />, name: '비디오' },
    { icon: <PrintIcon />, name: '프린트' },
  ];

const ConferenceTabView = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const searchConference = () => {
        console.log("search conference entered !!")
    }

    const openSearchDialog = () => {
        console.log("search clicked !!")
    }

    return (
        <div style={{ height: '600px', width: "100%" }}>
            <SearchBar 
                doSearchCallback={ searchConference } 
                label="맴버이름, 컨퍼런스 제목으로 검색"
                onClick={ openSearchDialog }
            />
            <ConferenceList />
            <SpeedDial
                ariaLabel="SpeedDial controlled open example"
                sx={{ position: 'fixed', bottom: 25, left: 1242-33 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {
                    actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={handleClose}
                />
        ))}
            </SpeedDial>
            {/* <Fab 
                color="primary" 
                aria-label="add" 
                size="medium"
                sx={{
                    position: 'fixed',
                    left: (1242-25),
                    bottom: 25
                }}
            >
                <AddIcon />
            </Fab> */}
        </div>
    );
}

export default ConferenceTabView;