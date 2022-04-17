import React from 'react';

import {
    Divider,
} from '@mui/material';

import ConferenceRow from './ConferenceRow';

const ConferenceList = (props) => {
    return (
        <div>
            <ConferenceRow confName="도면설계검토화상회의" type="audio" status="DOING" memberCount="10"/>
            <Divider />
            <ConferenceRow confName="최수영" type="video" status="WILLBE" memberCount="2"/>
            <Divider />
            <ConferenceRow confName="손예진" type="video" status="DONE" memberCount="5"/>
            <Divider />
        </div>
    )
}

export default ConferenceList;