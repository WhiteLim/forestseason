"use client"
import React, { useEffect, useState } from 'react'
import {light,dark} from '../color_config'

const style = {
    logo: {
        width:'100%',
        maxWidth : '120px',
        objectFit : 'cover',
        cursor: 'pointer'
    },
};

export default function Logo({mode,setPage}) {
  const [modeName, setModename] = useState('l_');
  useEffect(()=>{ setModename(mode == light ? "l_" : "d_"); },[mode])
  const home = ()=>{
    setPage('home')
  }
  return <figure onClick={home}><img src={`/image/${modeName}logo-nt.png`} style={style.logo} alt="nextforest-wh" /></figure>
}
