import React ,{useEffect}from 'react'
import Alert from '@mui/material/Alert'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function MessageInfo() {
    const dispatch = useDispatch()
    const {severity, open, message} = useSelector((state)=>state.userData.alert)

    useEffect(()=>{
        setTimeout(() => {
      dispatch({ type: 'ALERT', payload: { open: false, severity: '', message: "" } })
            
        }, 2000);
    },[open])
    return (
        <div>
            {open&&
            <Alert variant="filled" severity={severity}>{message}</Alert>}
        </div>
    )
}

export default MessageInfo
