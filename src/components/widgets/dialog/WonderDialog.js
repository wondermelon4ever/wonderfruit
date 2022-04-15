import React from 'react';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const WonderDialog = styled(Dialog)(({ theme}) =>({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const WonderDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

WonderDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const WonderModalDialog = (props) => {
    const { title, show, cancelCallback, confirmCallback, children } = props;
    const [open, setOpen] = React.useState(show);

    React.useEffect(()=>{
      setOpen(show);
    }, [props.show]);

    const handleClickOpen = () => {
        setOpen(false);
        cancelCallback();
    }

    const handleClose = () => {
      setOpen(false);
      cancelCallback();
    }

    const handleConfirm = () => {
      handleClose();
      confirmCallback();
    }

    return (
        <WonderDialog
          onClose={ handleClose }
          aria-labelledby="customized-dialog-title"
          open={ open }
        >
          <WonderDialogTitle id="customized-dialog-title" onClose={ handleClickOpen }>
            <Typography gutterBottom sx={{ fontSize: "16px" }}>
              { title }
            </Typography>
          </WonderDialogTitle>
          <DialogContent dividers>
            { children }
          </DialogContent>
          <DialogActions>
          <Button autoFocus onClick={ handleConfirm }>
              Confirm
            </Button>
            <Button autoFocus onClick={ handleClose }>
              Cancel
            </Button>
          </DialogActions>
        </WonderDialog>
    )
}

export default WonderModalDialog;
