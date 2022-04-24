import React from 'react';

import {
    Avatar,
    IconButton,
    Tooltip,
    Typography
} from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import CircleIcon from '@mui/icons-material/Circle';

const COLOR = {
    SEAT: "#1b5e20",
    BUSY: "#e64a19",
    OFFL: "#616161"
}

const PersonRowWithMoreDetailInfo = (props) => {
    var color = props.state == "SEATED" ? COLOR.SEAT : props.state === "BUSY" ? COLOR.BUSY : COLOR.OFFL;

    return (
        <div style={{ display: 'flex', margin: "0px", padding: "0px" }}>
            <div>
                <Tooltip title={ props.name }>
                    <IconButton sx= {{ padding: 0 }}>
                        <Avatar alt={ props.name } src={ props.src } sx={{ width: 56, height: 56 }} />
                    </IconButton>
                </Tooltip>
            </div>
            <div style={{ marginLeft: "15px" }}>
                <div style={{ display: "flex" }}>
                    <Tooltip title={ props.state }>
                        <CircleIcon sx={{ color: color, fontSize: "18px", paddingTop: "2px" }} />
                    </Tooltip>
                    <Typography sx={{ paddingLeft: "5px" }}>
                        { props.kname } / { props.ename }
                    </Typography>
                    <Typography>
                        { props.department } / { props.company }
                    </Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <Typography>
                        { props.officePhoneNumber } / { props.mobilePhoneNumber }
                    </Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <Typography>
                        { props.responsibility }
                    </Typography>
                </div>
            </div>
            <div style={{ marginLeft: "15px" }}>
                <Tooltip title="Add">
                    <IconButton sx= {{ padding: 0 }}>
                        <AddCircleIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    );
}

export default PersonRowWithMoreDetailInfo;