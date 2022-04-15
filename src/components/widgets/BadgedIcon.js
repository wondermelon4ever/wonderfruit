import React from 'react';

import Badge from '@mui/material/Badge';

const BadgedIcon = ({ children, ...props }) => {

    return (
        <Badge badgeContent={ props.badgeCount } color={ props.color }>
            { children }
        </Badge>
    )
}

export default BadgedIcon;
