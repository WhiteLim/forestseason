import React, { useEffect, useState } from 'react'
import {style} from '../components/Style'
import axios from 'axios';

export default function Profileskill() {
    const [skill, setSkill] = useState();
    const [myskillD, setMyskillD] = useState(0)
    useEffect(()=>{
        axios.get('./api/skill')
        .then(res=> setSkill(res.data))
    },[])

    const set = (k)=>{ setMyskillD(k) }

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
              <li></li>
            </ul>
          </div>
        </section>
    )
}
