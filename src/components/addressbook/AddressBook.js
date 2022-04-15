import React from 'react';

// import DialogContent from '@mui/material/DialogContentText';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import AddressGroupList from './AddressGroupList';
import SearchBar from '../widgets/SearchBar';
import WonderModalDialog from '../widgets/dialog/WonderDialog';

const AddressBook = (props) => {

    const [additionDialogShow, setAdditionDialogShow] = React.useState(false);

    const searchPerson = () => {
        console.log("search person entered !!")
    }

    const cancelNewAddressGroupCreation = () => {
        setAdditionDialogShow(false);
    }

    const confirmNewAddressGroupCreation = () => {
        console.log("confirm add address clicked !!");
        setAdditionDialogShow(false);
    }

    const openSearchDialog = () => {
        console.log("search clicked !!")
    }

    const showAddressGroupAdditionDialog = () => {
        console.log("Add new address group !!!");
        setAdditionDialogShow(true);
    }

    const handleSubmit = () => {
        confirmNewAddressGroupCreation();
    }

    return (
        <div style={{ height: '600px', width: "100%" }}>
            <SearchBar 
                doSearchCallback={ searchPerson } 
                label="이름, 전화번호 또는 담당업무로 검색"
                additionalIcon={<PersonSearchIcon />}
                onClick={ openSearchDialog }
            />
            <AddressGroupList />
            <Fab 
                color="primary" 
                aria-label="add" 
                size="medium"
                sx={{
                    position: 'fixed',
                    right: 15,
                    bottom: 15
                }}
                onClick={ showAddressGroupAdditionDialog }
            >
                <AddIcon />
            </Fab>
            <form onSubmit={ handleSubmit }>
                <WonderModalDialog 
                    title="연락처그룹 생성"
                    confirmCallback={ confirmNewAddressGroupCreation }
                    cancelCallback={ cancelNewAddressGroupCreation }
                    show={ additionDialogShow }
                >
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        // value={ dialogValue.name }
                        onChange={ (event) => 
                            // setDialogValue({
                            //     ...dialogValue,
                            //     name: event.target.value,
                            // })
                            log.console("")
                        }
                        label="Name"
                        type="text"
                        variant="standard"
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        // value={ dialogValue.description }
                        onChange={ (event) => 
                            // setDialogValue({
                            //     ...dialogValue,
                            //     description: event.target.value,
                            // })
                            console.log("")
                        }
                        label="Description"
                        type="text"
                        variant="standard"
                    />
                </WonderModalDialog>
            </form>
        </div>

    )
}

export default AddressBook;
