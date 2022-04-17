import React from 'react';

import {
    Avatar,
    Badge,
 } from '@mui/material';

 import { withStyles } from "@mui/styles";

const StyledBadge = withStyles(theme => ({
    badge: {
      backgroundColor: "red",
      color: "red",
    //   boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "1px solid currentColor",
        content: '""'
      }
    }
}))(Badge);

const AvatarWithBadge = (props) => {
    const { alt, src, badgeContent } = props;
    return (
        <div>
          <Badge
            overlap="circular"
            badgeContent={ badgeContent }
            anchorOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            // variant="dot"
            color="warning"
          >
            <Avatar alt={ alt } src={ src } />
          </Badge>
        </div>
      );
}

export default AvatarWithBadge;