import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/userActions';




function Timer() {
    const dispatch = useDispatch()
  const navigate = useNavigate()
    const checkExpireTime =() =>{
        let expritiontime = localStorage.getItem("expritiontime")
        if(expritiontime) {
            setInterval(function() {
                // console.log(expritiontime*1 < Date.now(), expritiontime*24, Date.now())
                if(expritiontime*1 < Date.now()) {
                    dispatch(logout())
                    localStorage.clear()
                    clearTime()
                    navigate('/')
                }
            },1000*60)
        } else{
            clearInterval()
        }
    }
    const clearTime = ()=> {
        clearInterval()
    }
    
    
    useEffect (() =>{
        checkExpireTime()
    }, [])
    
    return (
        <div>
            
        </div>
    )
}

export default Timer
