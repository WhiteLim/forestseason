import React, { useEffect, useState } from 'react'
import {style} from './components/Style'
import {light,dark} from './color_config'
export default function Footer({mode,page,setPage,display}) {
  const [modeName, setModeName] = useState('l_')
  const move = (v)=>{ setPage(v) }
  useEffect(()=>{ setModeName(mode == light ? 'l_' : 'd_' ) },[mode])
  return (
    <section style={display == 'pc' ? style.footbox : style.mfootbox}>
      <figure onClick={()=>{move('home')}}><img src={`/image/icon/${page == `home` ?  `${modeName}home_active.png` :  `${modeName}home.png` } `} alt='home' /></figure>
      <figure onClick={()=>{move('lim')}}><img src={`/image/icon/${page == `lim` ?  `${modeName}lim_active.png` : `${modeName}lim.png` } `} alt='lim' /></figure>
      <figure onClick={()=>{move('pr')}}><img src={`/image/icon/${page == `pr` ?  `${modeName}pr_active.png` : `${modeName}pr.png` } `} alt='portfolio'/></figure>
      <figure onClick={()=>{move('blog')}}><img src={`/image/icon/${page == `blog` ?  `${modeName}blog_active.png` : `${modeName}blog.png` }`} alt='blog' /></figure>
    </section>
  )
}
