"use client"
import React, { useEffect, useRef, useState } from 'react'
import {style} from '../components/Style'
import {light,dark} from '../color_config'
import axios from 'axios';

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

  if(!pr) return <></>

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
                  </section>
                </div>
              ))
            }
          </div>
      </section>
      <section style={display == 'pc' ? style.viewbox : style.mviewbox}>
        {
          !url ? <h1 style={style.build}>Please click Portfolio</h1> : <iframe src={url} />
        }
        
      </section>
    </div>
  )
}
