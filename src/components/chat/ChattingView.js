import React from 'react';

import TitleBar from '../widgets/TitleBar';

const ChattingView = (props) => {
    const [show, setShow] = React.useState(true);

    const mainMenuShowToggle = () => {
        setShow(!show);
    }

    return (
        <div style={{ display: show ? "block" : "none", width: "430px" }}>
            <TitleBar title="WonderTeams" mainMenuShowToggle={{ mainMenuShowToggle }} />
            <Divider style={{ width: "430px" }} />
        </div>
    );
}

export default ChattingView;