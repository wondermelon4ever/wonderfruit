import React from 'react';
import AddressGroup from './AddressGroup';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import PersonRow from './PersonRow';

const AddressGroupList = (props) => {

    const removeMember = () => {
        console.log("remove member clicked !!!");
    }

    return (
        <div>
            <AddressGroup title="내 프로필" shortDesc="" showAddMemberIcon={ false }>
                <PersonRow 
                    name="ispark" 
                    kname="박인수" 
                    ename="insoo.park" 
                    department="Nextplant솔루션그룹" 
                    company="삼성SDS" 
                    src="images/avatar/1.jpg"
                    state="BUSY"
                    removeIcon={ false }
                />
            </AddressGroup>
            <AddressGroup title="우리부서 (27)" shortDesc="우리부서원들" showAddMemberIcon={ true }>
                <PersonRow 
                    name="yoona" 
                    kname="송윤아" 
                    ename="yoona.song" 
                    department="Nextplant솔루션그룹" 
                    company="삼성SDS" 
                    src="images/avatar/2.jpg"
                    state="BUSY"
                    removeIcon={ true }
                    removeMemberCallback={ removeMember }
                />
                <Divider sx={{ width: "430px", marginTop: "5px", marginBottom: "5px" }}/>
                <PersonRow 
                    name="yjson" 
                    kname="손예진" 
                    ename="yeojin.son" 
                    department="Nextplant솔루션그룹" 
                    company="삼성SDS" 
                    src="images/avatar/3.jpg"
                    state="BUSY"
                    removeIcon={ true }
                    removeMemberCallback={ removeMember }
                />
            </AddressGroup>
            <AddressGroup title="계열사 (2897)" shortDesc="계열사직원들" showAddMemberIcon={ true }>
                <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                    Aliquam eget maximus est, id dignissim quam.
                </Typography>
            </AddressGroup>
        </div>
            
    )
}

export default AddressGroupList;
