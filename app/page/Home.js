import React, { useEffect, useState } from 'react'
import Mainbtn from '../components/btn/Mainbtn'
import {style} from '../components/Style'
import {light,dark} from '../color_config'
import Skil from '../call/Skil'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios'

export default function Home({mode,setPage,display,cf,setUrl,setVnum,setTitle,setContents,setCa}) {
  const move = (url)=>{ window.open(url) }
  const [pr, setPr] = useState()
  const [list, setList] = useState()
  const [modeName,setName] = useState('l_');
  useEffect(()=>{setName(mode == light ? 'l_' : 'd_' )},[mode])
  useEffect(()=>{
    axios.get('./api/portfolio').then(res=> setPr(res.data))
    axios.post('./api/blog/l').then(res=>setList(res.data))
  },[])
  const prmove = (url,k) => {
    setPage('pr');
    setUrl(url)
    setVnum(k)
  }
  const blmove = (url,title,contents,category) => {
    setUrl(url);
    setTitle(title);
    setContents(contents);
    setCa(category)
    setPage('blog');
  }
  if(!cf || !list || !pr) return <></>
  return (
    <div style={display == 'pc' ? {...style.section,marginTop:'100px'} : style.msection}>
      <div>
        <h1 style={style.textcenter}>{cf[0]?.title}</h1>
        <figure style={display == 'pc' ? style.firadius : style.mfiradius}>
          <img style={style.imgsize} src="/image/lim.jpg" alt='profile img'/>
          <figcaption style={display == 'pc' ? style.boxsize : style.mwidht}>
            <p> <span style={style.code}>const</span> <span style={style.var}>Name</span> <span style={style.codebu}>=</span> "<span style={style.codeText}>{cf[0]?.name}</span>" </p>
            <p> <span style={style.code}>const</span> NickName <span style={style.codebu}>=</span> "<span style={style.codeText}>{cf[0]?.nickname}</span>" </p>
            <p> <span style={style.code}>const</span> Phone <span style={style.codebu}>=</span> "<span style={style.codeText}>{cf[0]?.phone}</span>" </p>
            <p> <span style={style.code}>let</span> Skill <span style={style.codebu}>=</span> <span style={style.codear}>[</span> <Skil /><span style={style.codear}>]</span> </p>
            <p> <span style={style.code}>const</span> Summary <span style={style.codebu}>=</span> "<span style={style.codeText}>{cf[0]?.summary}</span>"</p>
            <div style={style.pro}>
              <figure onClick={()=>{move('https://github.com/WhiteLim')}}><img style={style.git} src={`/image/${modeName}git.png`} alt="white lim git"  /></figure>
              <figure onClick={()=>{move('https://www.notion.so/wh-pf/White-lim-Portfolio-32cc6df132924daa9fc6a84d2c324394')}}><img style={style.notion} src={`/image/${modeName}notion.png`} alt='white lim notion' /></figure>
            </div>
            <Mainbtn setPage={setPage} children='View lim code' />
          </figcaption>
        </figure>
        <hr />
        <h1>My Portfolio</h1>
        <div style={display == 'pc' ? {width:'890px'} : style.mfg}>
            <Swiper
            spaceBetween={50}
            slidesPerView={4.5}
             >
              {
                pr?.map(v=>(
                  <SwiperSlide key={v.num}>
                    <img src={v.img} style={{width:'100%', height:'100%'}} onClick={()=>{ prmove(v.url,v.num) }} /><p> {v.title}</p>
                  </SwiperSlide>
                ))
              }
            </Swiper>
        </div>
        <h1>My Blog</h1>
        <div style={display == 'pc' ? {width:'890px',marginBottom:'50px'} : {...style.mfg,marginBottom:'50px'}}>
            {
              list.slice(0,5).map(v=>(
                <p style={{...style.list,...style.bottom,padding:'10px 0'}} onClick={()=>{blmove(v.num,v.title,v.contents,v.category)}} >{v.title}</p>
              ))
            }
        </div>
      </div>
    </div>
  )
}
