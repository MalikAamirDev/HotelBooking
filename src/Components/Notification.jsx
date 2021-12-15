import React from 'react'
import { Alert, Snackbar } from '@mui/material';


export default function Notification(props) {
    const {notify, setNotify} = props;
    const handleClose =(event, reason)=>{
        if(reason === 'clickaway'){
            return
        }
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
        <div>
            <Snackbar
            open={notify.isOpen}
            autoHideDuration={4000}
            anchorOrigin={{horizontal:'right', vertical:'top'}}
            onClose={handleClose}
            >
                <Alert severity={notify.type} onClose={handleClose}>
                    {notify.message}
                </Alert>
            </Snackbar>
        </div>
    )
}
