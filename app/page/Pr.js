"use client"
import React, { useEffect, useState } from 'react'
import {style} from '../components/Style'
import {light,dark} from '../color_config'
import axios from 'axios';

export default function Pr({display,mode}) {
  const [modeName, setModeName] = useState('d_')
  const [pr,setPr] = useState();
  const [url,setUrl] = useState();

  useEffect(()=>{
    axios.get('/api/portfolio')
    .then(res=>setPr(res.data))
  },[])

  useEffect(()=>{ setModeName(mode == light ? 'l_' : 'd_' ) },[mode])

  const view = (k)=>{
    setUrl(k)
  }

  if(!pr) return <></>

  return (
    <div style={display == 'pc' ? style.subpage : style.msubpage}>
      <section style={display == 'pc' ? style.codebox : style.mcodebox}>
          <div>
            {
              pr.map(v=>(
                <div>
                  <p key={v.num} onClick={()=>{view(v.url)}}><img src={`./image/icon/${modeName}dir.png`} /> {v.title} </p>
                  <seciton>
                    <p><span style={style.code}>Work</span> : {v.work}</p>
                    <p><span style={style.code}>Work Date</span> : {v.workdate}</p>
                    <p><span style={style.code}>Team</span> : {v.team}</p>
                  </seciton>
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
