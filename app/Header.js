"use client"
import React, { useEffect, useState } from 'react'
import Logo from './components/Logo'
import {light,dark} from './color_config'


export default function Header({style,mode,setMode}) {
    const [modeName, setModename] = useState('Dark Mode');
    useEffect(()=>{
        setModename(mode == light ? "Dark Mode" : "Light Mode")
    },[mode])
    

    const modeChang = ()=>{
        setMode(mode == light ? dark : light)
    }

  return (
    <section style={style.header_box}>
        <Logo />
        <p style={style.header_p}>White Lim - ForestSeason</p>
        <button onClick={modeChang} style={style.modebtn}>{modeName}</button>
    </section>
  )
}
