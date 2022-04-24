import { style } from '@mui/system';
import React from 'react';
import Draggable from 'react-draggable';


export default function App() {
    const [position, setPosition] = React.useState({ x: 0, y: 0 }); // box의 포지션 값
    // 업데이트 되는 값을 set 해줌
    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    };

    return (
        <div className="App">
            <Draggable onDrag={ (e, data) => trackPos(data) }>
                <div className={ style.box }>
                    <div>BOX</div>
                    <div>x: { position.x.toFixed(0) }, y: { position.y.toFixed(0) }</div>
                </div>
            </Draggable>
        </div>
    );
}

const style ={
    box: {
        position: 'absolute',
        cursor: 'move',
        color: 'black',
        width: '100px',
        borderRadius: '5px',
        padding: '1em',
        margin: 'auto',
        userSelect: 'none',
        background: 'lightgrey'
    }
}