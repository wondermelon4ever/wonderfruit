import React from 'react';
import {
    Fab
 } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

import SearchBar from '../widgets/SearchBar';
import ChatList from './ChatList';

const ChatTabView = (props) => {

    const searchPerson = () => {
        console.log("search person entered !!")
    }

    const openSearchDialog = () => {
        console.log("search clicked !!")
    }

    const addAndShowNewChat = () => {
        console.log("add new chat...");
    }

    return (
        <div style={{ height: '600px', width: "100%" }}>
            <SearchBar 
                doSearchCallback={ searchPerson } 
                label="이름, 대화방 제목 또는 내용으로 검색"
                onClick={ openSearchDialog }
            />
            <ChatList />
            <Fab 
                color="primary" 
                aria-label="add" 
                // size="medium"
                sx={{
                    position: 'fixed',
                    left: (812-33),
                    bottom: 25
                }}
                onClick={ addAndShowNewChat }
            >
                <AddIcon />
            </Fab>
        </div>
    );
}

export default ChatTabView;
