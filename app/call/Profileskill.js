"use client"
import React, { useEffect, useState } from 'react'
import {style} from '../components/Style'
import axios from 'axios';

export default function Profileskill() {
    const [skill, setSkill] = useState();
    const [myskillD, setMyskillD] = useState(0)
    const [pr, setPr] = useState()
    useEffect(()=>{
        axios.get('./api/skill')
        .then(res=> setSkill(res.data))
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
              <figcaption >
                <p>Ability [ {skill[myskillD].ab} ]</p>
                <p style={style.skbg}><span style={{...style.skper, width:`${skill[myskillD].per}%`}  } >{skill[myskillD].per}%</span></p>
              </figcaption>
            </figure>
            <h1>Project</h1>
            <ul>
              {
                pr?.map(v=>(
                  <li key={v.num}><img src={v.img} style={{width:'200px'}} /> {v.title} </li>
                ))
              }
            </ul>
          </div>
        </section>
    )
}
