"use client"
import React, { useEffect, useState } from 'react'
import {style} from '../components/Style'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Profileskill(display) {
    const [skill, setSkill] = useState();
    const [myskillD, setMyskillD] = useState(0)
    const [pr, setPr] = useState()
    useEffect(()=>{
        axios.get('./api/skill')
        .then(res=> setSkill(res.data))
        axios.get(`./api/skill/detail?num=1`)
        .then(res=>setPr(res.data))
    },[])

    const set = (k)=>{ 
      setMyskillD(k);
      axios.get(`./api/skill/detail?num=${k+1}`)
      .then(res=>setPr(res.data))
    }

    if(!skill) return <></>
    return (
        <section style={style.skillbox}>
          <ul>
            {
              skill.map((v,k)=>(
                <li key={k} onClick={()=>{set(k)}}>{v.text}</li>
              ))
            }
          </ul>
          <div style={style.skilldetail}>
            <figure style={style.fl}>
              <p style={style.skillradius}>{skill[myskillD].id}</p>
              <figcaption style={style.mfg}>
                <p>Ability [ {skill[myskillD].ab} ]</p>
                <p style={ display == 'pc' ? style.skbg : style.mskbg}><span style={{...style.skper, width:`${skill[myskillD].per}%`}  } >{skill[myskillD].per}%</span></p>
              </figcaption>
            </figure>
            <h1>Project</h1>
            <Swiper
            spaceBetween={50}
            slidesPerView={5}
             >
              {
                pr?.map(v=>(
                  <SwiperSlide key={v.num}>
                    <img src={v.img} style={{width:'100%', height:'100%'}} /><p> {v.title}</p>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </section>
    )
}
