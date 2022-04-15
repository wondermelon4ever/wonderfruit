import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
    //   expandIcon={<ExpandMoreIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(0),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

const AddressGroup = (props) => {
    const { title, shortDesc, children, showAddMemberIcon } = props;
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        console.log("handleChange clicked...");
        setExpanded(isExpanded ? panel : false);
    };

    const handleMemberAddition = (event) => {
        event.stopPropagation();
        console.log("addmember icon clicked !!!" + event);
    }

    return (
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backgroundColor: "#fafafa" }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
              {
                showAddMemberIcon === true? 
                <PersonAddAlt1Icon sx={{ color: "#757575", paddingRight: "7px"}} onClick={ handleMemberAddition }/>
                :
                ""
              }
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    { title }
                </Typography>
                <Typography sx={{ color: 'text.secondary', paddingLeft: "10px"}}>{ shortDesc }</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "10px", paddingLeft: "15px" }}>
                { children }
            </AccordionDetails>
        </Accordion>
    );
}

export default AddressGroup;
