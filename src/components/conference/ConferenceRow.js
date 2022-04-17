import React from 'react';

import {
    Avatar,
    Chip,
    IconButton,
    Tooltip,
    Typography
} from '@mui/material';

import CircleIcon from '@mui/icons-material/Circle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import VideocamIcon from '@mui/icons-material/Videocam';

var stateCode = new Map();
stateCode.set("DONE", {
    color: "#61616",
    dname: "종료"
});

stateCode.set("DOING", {
    color: "#ff5722",
    dname: "진행"
});

stateCode.set("WILLBE", {
    color: "#1b5e20",
    dname: "예약"
});


const ConferenceRow = (props) => {
    const { removeConferenceCallback, type, status, memberCount } = props;

    var color, dname;
    stateCode.forEach( (value, key) => {
        if(status===key) {
            color = value.color;
            dname = value.dname;
        }
    });

    return (
        <div style={{ display: "flex", margin: "0px", padding: "10px" }}>
            <div>
                <IconButton sx={{ padding: 0 }}>
                    {
                        type === "audio" ?
                        <LocalPhoneIcon sx={{color: color }}/>
                        :
                        <VideocamIcon sx={{color: color }}/>
                    }
                </IconButton>
                <Chip
                    icon={<CircleIcon style={{ color: color }}/>}
                    label={ dname }
                    variant="outlined"
                    sx={{ padding: "0px", color: color }}
                    size="small"
                />
            </div>
            <div style={{ marginLeft: "7px" }}>
                <div style={{ display: "flex" }}>
                    <IconButton sx={{ padding: "0px", margin: "0px"}}>
                        <RemoveCircleIcon />
                    </IconButton>
                    <Typography sx={{ fontWeight: 600, paddingLeft: "5px", fontSize: "16px", width: "320px"}}>
                        { props.confName } ({ memberCount }명 참석)
                    </Typography>
                </div>
                <div style={{ display: "flex", width: "340px", paddingTop: "5px" }}>
                    <Typography
                        sx={{ 
                            paddingLeft: "5px", 
                            paddingTop: "5px", 
                            fontSize: "12px" 
                        }}
                    >
                        진행자: 박인수
                    </Typography>
                    <Typography 
                        align="right"
                        sx={{ 
                            width: "250px", 
                            paddingLeft: "5px", 
                            paddingTop: "5px", 
                            fontSize: "12px" 
                        }}
                    >
                        2022-04-18 15:30 ~ 16:30
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default ConferenceRow;