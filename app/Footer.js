import React, { useEffect, useState } from 'react'
import {style} from './components/Style'
import {light,dark} from './color_config'
export default function Footer({mode,page,setPage,display,modeChang}) {
  const [modeName, setModeName] = useState('l_')
  const move = (v)=>{ setPage(v) }
  useEffect(()=>{ setModeName(mode == light ? 'l_' : 'd_' ) },[mode])
  return (
    <section style={display == 'pc' ? style.footbox : style.mfootbox}>
      <figure onClick={()=>{move('home')}}><img src={`/image/icon/${page == `home` ?  `${modeName}home_active.png` :  `${modeName}home.png` } `} alt='home' style={style.pointer} /></figure>
      <figure onClick={()=>{move('lim')}}><img src={`/image/icon/${page == `lim` ?  `${modeName}lim_active.png` : `${modeName}lim.png` } `} alt='lim' style={style.pointer} /></figure>
      <figure onClick={()=>{move('pr')}}><img src={`/image/icon/${page == `pr` ?  `${modeName}pr_active.png` : `${modeName}pr.png` } `} alt='portfolio' style={style.pointer} /></figure>
      <figure onClick={()=>{move('blog')}}><img src={`/image/icon/${page == `blog` ?  `${modeName}blog_active.png` : `${modeName}blog.png` }`} alt='blog' style={style.pointer} /></figure>
      { display == 'pc' ? '' : <p onClick={modeChang} style={style.fomo}>{mode == light ? 'D' : 'W'}</p> }
      { display == 'pc' ? <figure onClick={()=>{move('admin')}}><img src={`/image/icon/${page == `admin` ?  `${modeName}admin_active.png` : `${modeName}admin.png` }`} alt='admin' style={style.pointer} /></figure> : '' }
    </section>
  )
}
