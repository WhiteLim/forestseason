"use client"
import React, { useEffect, useRef, useState } from 'react'
import {style} from '../components/Style'
import {light,dark} from '../color_config'
import Skil from '../call/Skil';
import Profileskill from '../call/Profileskill';

export default function Lim({display,cf,setPage,setUrl,setVnum}) {
  const [ bd, setBd] = useState(false);
  const [ buding , setBuilding] = useState(false);
  const load = useRef();
  const build = ()=>{
    setBd(true)
  }

  let num = 0;
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      if(load.current != undefined){
        const a = setInterval(() => {
          num += 5
          load.current.style.width = `${num}%`          
        if (num > 100) {
          clearInterval(a);
          setBuilding(true)
        }
        }, 50);
      }
    }
  },[bd])


  return (
    <div style={display == 'pc' ? style.subpage : style.msubpage}>
      {
        display == 'pc' || (display == 'mobile' && !buding) ?
          <section style={display == 'pc' ? style.codebox : style.mcodebox}>
            <div style={display == 'pc' ? {} : {oder:'2'} }>
                <p> <span style={style.code}>const</span> <span style={style.var}>Name</span> <span style={style.codebu}>=</span> "<span style={style.codeText}>{cf[0]?.name}</span>" </p>
                <p> <span style={style.code}>const</span> NickName <span style={style.codebu}>=</span> "<span style={style.codeText}>{cf[0]?.nickname}</span>" </p>
                <p> <span style={style.code}>const</span> Phone <span style={style.codebu}>=</span> "<span style={style.codeText}>{cf[0]?.phone}</span>" </p>
                <p> <span style={style.code}>let</span> Skill <span style={style.codebu}>=</span> <span style={style.codear}>[</span> <Skil /> <span style={style.codear}>]</span> </p>
                <p> <span style={style.code}>const</span> Summary <span style={style.codebu}>=</span> "<span style={style.codeText}>{cf[0]?.summary}</span>"</p>
            </div>
            <button style={display == 'pc' ? style.mainBtn : {...style.mainBtn,order:'1'}}  onClick={build}>Build</button>
          </section>
      :
      ''
      }
      
      <section style={display == 'pc' ? style.viewbox : buding ? {...style.mviewbox,height:'100%'} : style.mviewbox}>
        {
          !bd ?
          <h1 style={display == 'pc' ? style.build : {...style.build,fontSize:'18px'}}>Please click Build</h1>
          :
          !buding ? 
          <div>
            <h1>Building now...</h1>
            <p style={style.load}><span style={style.loading} ref={load}></span></p>
          </div>
          :
          <div style={style.profiled}>
            <section style={style.ma}>
              <h1 style={style.textcenter}>{cf[0]?.title}</h1>
              <figure style={style.fircent}>
                <img style={style.imgsize} src="/image/lim.jpg" alt='profile img'/>
              </figure>
              <section style={style.profile}>
                  <p>Name : {cf[0]?.name} [ {cf[0]?.phone} ]</p>
                  <p>Career : 프리랜서[PHP+퍼블리싱+DB & 카페24 & 고도몰] 8년 | React/Next 신입</p>
                  <p>Use Skill : <Skil /></p>
                <p>{cf[0]?.summary}</p>
              </section>
            </section>
            <Profileskill display={display} setPage={setPage} setUrl={setUrl} setVnum={setVnum} />
          </div>
        }
      </section>
    </div>
  )
}
