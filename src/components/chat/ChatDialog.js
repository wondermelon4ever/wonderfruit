import React from 'react';
import SearchBar from '../widgets/SearchBar';

const ChatDialog = (props) => {

    const searchPerson = () => {
        console.log("search person entered !!")
    }

    const openSearchDialog = () => {
        console.log("search clicked !!")
    }

    return (
        <div style={{ height: '600px', width: "100%" }}>
            <SearchBar 
                doSearchCallback={ searchPerson } 
                label="이름, 전화번호 또는 담당업무로 검색"
                onClick={ openSearchDialog }
            />
        </div>
    );
}

export default ChatDialog;
