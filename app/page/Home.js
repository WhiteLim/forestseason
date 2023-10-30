import React, { useEffect, useState } from 'react'
import Mainbtn from '../components/btn/Mainbtn'
import {style} from '../components/Style'
import {light,dark} from '../color_config'

export default function Home({mode,setPage}) {
  const move = (url)=>{ window.open(url) }
  const [modeName,setName] = useState('l_');
  useEffect(()=>{setName(mode == light ? 'l_' : 'd_' )},[mode])
  return (
    <div style={style.section}>
      <div>
        <figure>
          <img src="/image/logo.png" />
        </figure>
        <div style={style.btnbox}>
          <Mainbtn setPage={setPage} children="White Lim" />
          <Mainbtn setPage={setPage} children="Protfolio" />
          <Mainbtn setPage={setPage} children="Blog" />
        </div>
      </div>
      <div style={style.pro}>
        <figure onClick={()=>{move('https://github.com/WhiteLim')}}><img style={style.git} src={`/image/${modeName}git.png`} /></figure>
        <figure onClick={()=>{move('https://www.notion.so/wh-pf/White-lim-Portfolio-32cc6df132924daa9fc6a84d2c324394')}}><img style={style.notion} src={`/image/${modeName}notion.png`} /></figure>
      </div>
    </div>
  )
}
