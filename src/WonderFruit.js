import React from 'react';
import Divider from '@mui/material/Divider';
import TitleBar from './TitleBar';
import MainTabMenu from './MainTabMenu';


// should define properties, callbacks
// 오픈여부, 파일공유 여부, 스크린 공유여부, 룸생성 및 초대, 쳇, Custom style, size, size 고정여부, modal or not
// chat save callback, 동영상 recording callback
// review 결과 postit 붙이는 기능 추가하면 좋을 듯...
// 공유된 스크린 이미지로 저장 (로컬에)
// 동영상, 검토 등의 내용을 서버에 저장하면 좋으나, 서버 정보가 지정되지 않으면 기본으로 local storage에 저장하는 것으로 함
// 별도 window로 띄울지, 기존 App내에 modal로 뛰울지는 app 개발자가 결정할 사항이며, props로 받아야 함
// find mamber callback
const WonderFruit = (props) => {
    const [show, setShow] = React.useState(true);
    const [showShareDialog, setShowShareDialog] = React.useState(false);

    // 이 부분에서 props로 넘어온 signaling 서버 주소로 접속해야 함. Signaling 서버 주소가 없거나 접속에 실패하면 Error 처리하고 끝내야 함
    React.useEffect(()=>{

    }, []);

    const mainMenuShowToggle = (props) => {
        setShow(!show);
    }

    return(
        <div styles={{ display: show ? "block" : "none", width: "430px" }}>
           <TitleBar title="WonderTeams" type="Main" mainMenuShowToggle={ mainMenuShowToggle }/>
           <Divider style={{ width: "430px" }}/>
           <MainTabMenu show={ show } />
        </div>
    );
}

export default WonderFruit;
