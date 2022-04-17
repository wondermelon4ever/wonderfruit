import React from 'react';

import {
    Avatar,
    IconButton,
    Tooltip
 } from '@mui/material';

import Typography from '@mui/material/Typography';

import CircleIcon from '@mui/icons-material/Circle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const COLOR = {
    SEAT: "#1b5e20",
    BUSY: "#e64a19",
    OFFL: "#616161"
}

const PersonRow = (props) => {

    const { removeMemberCallback } = props;
    var color = props.state === "SEATED" ? COLOR.SEAT : props.state === "BUSY" ? COLOR.BUSY : COLOR.OFFL;

    return (
        <div style={{ display: "flex", margin: "0px", padding: "0px" }}>
            <div>
                <Tooltip title={ props.name }>
                    <IconButton sx={{ padding: 0 }}>
                        <Avatar alt={ props.name } src={ props.src } sx={{ width: 56, height: 56 }} />
                    </IconButton>
                </Tooltip>
            </div>
            <div style={{ marginLeft: "15px" }}>
                <div style={{ display: "flex" }}>
                <Tooltip title={ props.state }>
                    <CircleIcon sx={{ color: color, fontSize: "18px", paddingTop: "2px" }} />
                </Tooltip>
                <Typography sx={{ paddingLeft: "5px"}}>
                    { props.kname } / { props.ename }
                </Typography>
                </div>
                <div style={{ paddingLeft: "25px", width: "270px" }}>
                    <Typography>
                        { props.department } / { props.company }
                    </Typography>
                </div>
            </div>
            <div style={{ paddingTop: "20px", paddingLeft: "0px" }}>
            {
                props.removeIcon == true ?
                <Tooltip title="Remove">
                    <IconButton>
                        <RemoveCircleIcon onClick={ removeMemberCallback }/>
                    </IconButton>
                </Tooltip>
                :
                ""
            }
            </div>
        </div>
    )
}

export default PersonRow;
