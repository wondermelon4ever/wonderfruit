import React from 'react';

import {
    Divider,
} from '@mui/material';

import ChatRow from './ChatRow';

const ChatList = (props) => {
    return (
        <div>
            <ChatRow name="Group" chatName="Nexplant솔루션그룹대화방" newChatCount={ 3 } memberCount={ 4 }/>
            <Divider />
            <ChatRow name="swim.choi" src="images/avatar/4.jpg" chatName="최수영" newChatCount={ 1 } memberCount={ 1 }/>
            <Divider />
        </div>
    )
}

export default ChatList;