"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Skil() {
    const [skill, setSkill] = useState();
    useEffect(()=>{
        axios.get('./api/skill')
        .then(res=> setSkill(res.data))
    },[])

    if(!skill) return <></>
    return (
        <>
        {
            skill.map((v,k)=>(
                <img key={k} src={`https://img.shields.io/badge/${v.text}-${v.color}?style=${v.style}&logo=${v.logo}&logoColor=${v.logocolor}`} alt="my skill" />
            ))
        }
        </>
    )
}
