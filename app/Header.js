"use client"
import React, { useEffect, useState } from 'react'
import Logo from './components/Logo'
import {light,dark} from './color_config'
import {style} from './components/Style'


export default function Header({mode,setPage,modeChang,display}) {
    const [modeName, setModename] = useState('Dark Mode');
    useEffect(()=>{ setModename(mode == light ? "Dark Mode" : "Light Mode"); },[mode])

  return (
    <section style={style.header_box}>
        <Logo mode={mode} setPage={setPage} />
        <p style={display =='pc' ? style.header_p : style.mheader_p}>White Lim - ForestSeason</p>
        { display =='pc' ? <button onClick={modeChang} style={style.modebtn}>{modeName}</button> : '' }
    </section>
  )
}
