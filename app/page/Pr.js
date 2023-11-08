"use client"
import React, { useEffect, useRef, useState } from 'react'
import {style} from '../components/Style'
import {light,dark} from '../color_config'
import axios from 'axios';
import Loadding from '../call/Loadding';

export default function Pr({display,mode,url,setUrl,vnum}) {
  const [modeName, setModeName] = useState('d_')
  const [pr,setPr] = useState();
  const setction = useRef([])
  useEffect(()=>{
    axios.get('/api/portfolio')
    .then(res=>setPr(res.data))
    if(url){
      setTimeout(() => {
        setction.current.forEach((v,z)=>{
          z == vnum ? v.style = style.lisetworkactive : v.style = 'display:none'
        })
      },500);
    }
  },[])

  useEffect(()=>{ setModeName(mode == light ? 'l_' : 'd_' ) },[mode])
  const view = (url,k)=>{
    setUrl(url);
    setction.current.forEach((v,z)=>{
      z == k ? v.style = style.lisetworkactive : v.style = 'display:none'
      
    })
  }

  if(!pr) return <Loadding />

  return (
    <div style={display == 'pc' ? style.subpage : style.msubpage}>
      <section style={display == 'pc' ? style.codebox : style.mcodebox}>
          <div>
            {
              pr.map((v,k)=>(
                <div key={k}>
                  <p key={v.num} onClick={()=>{view(v.url,v.num)}} style={style.list}><img src={`./image/icon/${modeName}dir.png`} /> {v.title} </p>
                  <section style={style.listwork} ref={(e)=>{setction.current[v.num] = e}}>
                    <p><span style={style.code}>Work</span> : {v.work}</p>
                    <p><span style={style.code}>Work Date</span> : {v.workdate}</p>
                    <p><span style={style.code}>Team</span> : {v.team}</p>
                    <p><button style={style.mainBtn} onClick={()=>{window.open(v.url)}} >사이트 방문</button></p>
                  </section>
                </div>
              ))
            }
          </div>
      </section>
      <section style={display == 'pc' ? style.viewbox : style.mviewbox}>
        {
          !url ? <h1 style={display == 'pc' ? style.build : {...style.build,fontSize:'18px'}}>Please click Portfolio</h1> : display == 'pc' ? <iframe src={url} /> : ''
        }
        
      </section>
    </div>
  )
}
