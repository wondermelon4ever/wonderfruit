import React from 'react';

import Avatar from '@mui/material/Avatar';
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
                <Avatar alt={ props.name } src={ props.src } sx={{ width: 56, height: 56 }} />
            </div>
            <div style={{ marginLeft: "15px" }}>
                <div style={{ display: "flex" }}>
                    <CircleIcon sx={{ color: color, fontSize: "18px", paddingTop: "2px" }} />
                    <Typography sx={{ paddingLeft: "5px"}}>
                        { props.kname } / { props.ename }
                    </Typography>
                </div>
                <div style={{ paddingLeft: "25px"}}>
                    <Typography>
                        { props.department } / { props.company }
                    </Typography>
                </div>
            </div>
            <div style={{ paddingTop: "20px", paddingLeft: "50px" }}>
            {
                props.removeIcon == true ?
                <RemoveCircleIcon onClick={ removeMemberCallback }/>
                :
                ""
            }
            </div>
        </div>
    )
}

export default PersonRow;
