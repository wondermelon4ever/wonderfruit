import React from 'react';

import {
    Avatar,
    Chip,
    IconButton,
    Tooltip,
    Typography
} from '@mui/material';

import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AvatarWithBadge from '../widgets/AvatarWithBadge';

const ChatRow = (props) => {
    const { removeMemberCallback, newChatCount, memberCount } = props;

    return (
        <div style={{ display: "flex", margin: "0px", padding: "10px" }}>
            <div>
                <IconButton sx={{ padding: 0 }}>
                    <AvatarWithBadge alt={ props.name } src={ props.src } sx={{ width: 56, height: 56 }} badgeContent={ newChatCount }>
                        <PeopleIcon fontSize='large'/>
                    </AvatarWithBadge>
                </IconButton>
            </div>
            <div style={{ marginLeft: "7px" }}>
                <div style={{ display: "flex" }}>
                    <IconButton sx={{ padding: "0px", margin: "0px"}}>
                        <RemoveCircleIcon />
                    </IconButton>
                    <Typography sx={{ fontWeight: 600, paddingLeft: "5px", fontSize: "16px", width: "220px"}}>
                        { props.chatName }
                    </Typography>
                    
                    {
                        memberCount > 1 ?
                        <Chip
                            icon={<PersonIcon/>}
                            label="3"
                            variant="outlined"
                            sx={{ padding: "0px"}}
                            size="small"
                            color="info"
                        />
                        :
                        ""
                    }
                    <Typography align="right" 
                        sx={{ 
                            width: memberCount > 1 ? "70px" : "110px", 
                            paddingLeft: "5px", 
                            paddingTop: "5px", 
                            fontSize: "12px" 
                        }}>
                        04월 17일
                    </Typography>
                </div>
                <div style={{ width: "340px", paddingTop: "5px" }}>
                    <Typography color="#757575" sx={{ wordWrap: "break-word", paddingLeft: "5px", paddingTop: "5px", fontSize: "12px" }}>
                        우리는 민족중흥의 역사적 사명을 띄고 이 땅에 태어났다...
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default ChatRow;