"use client"
import React, { useEffect, useState } from 'react'
import Logo from './components/Logo'
import {light,dark} from './color_config'


export default function Header({noto,mode,setMode}) {
    const [modeName, setModename] = useState('Dark Mode');
    useEffect(()=>{
        setModename(mode == light ? "Dark Mode" : "Light Mode")
    },[mode])

    const style={
        header_box : {
            width:'100%',
            height:'100px',
            padding:'20px',
            display:'flex',
            justifyContent: 'space-between',
            alignItems : 'center',
            background:mode.top_bar,
            borderBottom : `1px solid ${mode.line}`
        },
        header_p : {
            color : mode.font_color,
            fontFamily : noto.style.fontFamily,
            fontSize : '20px',
            fontWeight : '700'
        },
        modebtn : {
            background : mode.mode_btn,
            color : mode.mode_color,
            border : '0',
            fontFamily : noto.style.fontFamily,
            fontWeight : '700',
            minWidth : '150px',
            height : '45px',
            borderRadius :  '10px',
            cursor: 'pointer'
        }
    }
    

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
