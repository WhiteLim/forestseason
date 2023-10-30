import React, { useEffect, useState } from 'react'
import {style} from './components/Style'
import {light,dark} from './color_config'
export default function Footer({mode,page,setPage}) {
  const [modeName, setModeName] = useState('l_')
  const move = (v)=>{ setPage(v) }
  useEffect(()=>{ setModeName(mode == light ? 'l_' : 'd_' ) },[mode])
  return (
    <section style={style.footbox}>
      <figure onClick={()=>{move('home')}}><img src={`/image/icon/${page == `home` ?  `${modeName}home_active.png` :  `${modeName}home.png` } `} /></figure>
      <figure onClick={()=>{move('lim')}}><img src={`/image/icon/${page == `lim` ?  `${modeName}lim_active.png` : `${modeName}lim.png` } `} /></figure>
      <figure onClick={()=>{move('pr')}}><img src={`/image/icon/${page == `pr` ?  `${modeName}pr_active.png` : `${modeName}pr.png` } `}/></figure>
      <figure onClick={()=>{move('blog')}}><img src={`/image/icon/${page == `blog` ?  `${modeName}blog_active.png` : `${modeName}blog.png` }`} /></figure>
    </section>
  )
}
