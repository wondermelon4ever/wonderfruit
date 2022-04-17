import React from 'react';

import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.10),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.15),
    },
    marginRight: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: '100%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(3)})`,
      transition: theme.transitions.create('width'),
      // width: '100%',
      width: "330px",
      [theme.breakpoints.up('md')]: {
        width: '330px',
      },
      fontSize: "13px",
    },
}));

const RightmostIcon = ({children, onClick }) => {
    return (
        <div style={{ paddingTop: "2px", paddingLeft: "6.5px", color: "#757575"}}>
            <IconButton onClick={ onClick }>
                {children}
            </IconButton>
        </div>
    )
}

const SearchBar = (props) => {

    const { label } = props;
    const doSearch = props.doSearchCallback;

    return (
        <Search onKeyPress={ doSearch }>
            <SearchIconWrapper>
                <SearchIcon sx={{ color: "#757575" }}/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder={ label }
                inputProps={{ 'aria-label': 'search' }}
            />
            <RightmostIcon onClick={ props.onClick }>
                { props.additionalIcon }
            </RightmostIcon>
        </Search>
    )
}

export default SearchBar;
