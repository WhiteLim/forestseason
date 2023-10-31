"use client"
import React, { useEffect, useRef, useState } from 'react'
import {style} from '../components/Style'
import {light,dark} from '../color_config'

export default function Lim({display}) {
  const [ bd, setBd] = useState(false);
  const [ buding , setBuilding] = useState(false);
  const [ skill , setSkill ] = useState('next')
  const load = useRef();
  let myskill = ['Next.js','React.js','sass','html','javascript','css','php','mariadb','mysql','Node.js','json']
  let myskillD = {
    "next" : {id:'N', ab:'Next.js를 활용하여 웹사이트를 제작 할 수 있습니다.',persent:30,pr:'none'},
    "react" : {id:'R', ab:'React.js를 활용하여 웹사이트를 제작 할 수 있습니다.',persent:30,pr:'none'},
    "sass" : {id:'S', ab:'웹 애니메이션 및 반응형 제작에 문제 없이 활용 할 수 있습니다.',persent:50,pr:'none'},
    "html" : {id:'H', ab:'디자인을 보고 마크업이 가능 할정도로 편하게 사용할 수 있습니다.',persent:100,pr:'none'},
    "javascript" : {id:'J', ab:'데이터 가공 및 애니메이션 등을 구현 할 수 있습니다.',persent:70,pr:'none'},
    "css" : {id:'C', ab:'웹 애니메이션 및 반응형 제작에 문제 없이 활용 할 수 있습니다.',persent:100,pr:'none'},
    "php" : {id:'P', ab:'그누보드를 활용하여 백오피스 및 프론트를 문제 없이 구현 할 수 있습니다.',persent:70,pr:'none'},
    "mariadb" : {id:'M', ab:'웹 구현에 필요한 데이터의 CRUD가 가능합니다.',persent:70,pr:'none'},
    "mysql" : {id:'M', ab:'웹 구현에 필요한 데이터의 CRUD가 가능합니다.',persent:70,pr:'none'},
    "node" : {id:'N', ab:'Express를 활용하여 api 및 DB CRUD가 가능합니다.',persent:50,pr:'none'},
    "json" : {id:'J', ab:'DB와 별도로 필요시 제작하여 활용 할 수 있습니다.',persent:50,pr:'none'}
  }
  
  const set = (k)=>{
    switch(k){
      case 0 : setSkill('next'); break;
      case 1 : setSkill('react'); break;
      case 2 : setSkill('sass'); break;
      case 3 : setSkill('html'); break;
      case 4 : setSkill('javascript'); break;
      case 5 : setSkill('css'); break;
      case 6 : setSkill('php'); break;
      case 7 : setSkill('mariadb'); break;
      case 8 : setSkill('mysql'); break;
      case 9 : setSkill('node'); break;
      case 10 : setSkill('json'); break;
    }
  }

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
    <div style={style.subpage}>
      <section style={style.codebox}>
        <div>
            <p> <span style={style.code}>const</span> <span style={style.var}>Name</span> <span style={style.codebu}>=</span> "<span style={style.codeText}>한은일</span>" </p>
            <p> <span style={style.code}>const</span> NickName <span style={style.codebu}>=</span> "<span style={style.codeText}>WhiteLim (백림)</span>" </p>
            <p> <span style={style.code}>const</span> Phone <span style={style.codebu}>=</span> "<span style={style.codeText}>010.7484.9304</span>" </p>
            <p> <span style={style.code}>let</span> Skill <span style={style.codebu}>=</span> <span style={style.codear}>[
            </span> <img src="https://img.shields.io/badge/Nextjs-000000?style=flat&logo=Next.js&logoColor=white" alt="my skill" />,
            <img src="https://img.shields.io/badge/REACT-61DAFB?style=flat&logo=REACT&logoColor=white" alt="my skill"  />, 
            <img src="https://img.shields.io/badge/SASS-CC6699?style=flat&logo=sass&logoColor=white" alt="my skill" />,
            <img src="https://img.shields.io/badge/JAVASCRIPT-007396?style=flat&logo=Javascript&logoColor=white" alt="my skill" />, 
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" alt="my skill" />, 
            <img src="https://img.shields.io/badge/CSS3-1572b6?style=flat&logo=css3&logoColor=white" alt="my skill" />, 
            <img src="https://img.shields.io/badge/PHP-777bb4?style=flat&logo=php&logoColor=white" alt="my skill" />, 
            <img src="https://img.shields.io/badge/Maria DB-003545?style=flat&logo=MariaDB&logoColor=white" alt="my skill" />,
            <img src="https://img.shields.io/badge/MYSQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="my skill" />, 
            <img src="https://img.shields.io/badge/nodedotjs-339933?style=flat&logo=nodedotjs&logoColor=white" alt="my skill" />,
            <img src="https://img.shields.io/badge/express-000000?style=flat&logo=express&logoColor=white" alt="my skill" />,
            <img src="https://img.shields.io/badge/json-000000?style=flat&logo=json&logoColor=white" alt="my skill" /> <span style={style.codear}>]</span> </p>
            <p> <span style={style.code}>const</span> Summary <span style={style.codebu}>=</span> "<span style={style.codeText}>개발에 꼭 필요한 에디터인 vs code처럼 개발에 꼭 필요한 개발자가 되기 위해 늘 새로운 기술을 익히며 코드리딩으로 이해력을 높혀가고 풀스텍이 되기 위해 끊임없이 배우고 있습니다.</span>"</p>
        </div>
        <button style={style.mainBtn}  onClick={build}>Build</button>
      </section>
      <section style={style.viewbox}>
        {
          !bd ?
          <h1 style={style.build}>Please click Build</h1>
          :
          !buding ? 
          <div>
            <h1>Building now...</h1>
            <p style={style.load}><span style={style.loading} ref={load}></span></p>
          </div>
          :
          <div style={style.profiled}>
            <section style={style.ma}>
              <h1 style={style.textcenter}>VS Code 같은 프론트엔드 & 퍼블리셔 개발자</h1>
              <figure style={style.fircent}>
                <img style={style.imgsize} src="/image/lim.jpg" alt='profile img'/>
              </figure>
              <section style={style.profile}>
                <p>😎 한은일 [ 010.7484.9304 ]</p>
                <p>개발에 꼭 필요한 에디터인 vs code처럼 개발에 꼭 필요한 개발자가 되기 위해 늘 새로운 기술을 익히며 코드리딩으로 이해력을 높혀가고 풀스텍이 되기 위해 끊임없이 배우고 있습니다.</p>
              </section>
            </section>
            <section style={style.skillbox}>
              <ul>
                {
                  myskill.map((v,k)=>(
                    <li key={k} onClick={()=>{set(k)}}>{v}</li>
                  ))
                }
              </ul>
              <div style={style.skilldetail}>
                <figure style={style.fl}>
                  <p style={style.skillradius}>{myskillD[skill].id}</p>
                  <figcaption >
                    <p>Ability [ {myskillD[skill].ab} ]</p>
                    <p style={style.skbg}><span style={{...style.skper, width:`${myskillD[skill].persent}%`}  } >{myskillD[skill].persent}%</span></p>
                  </figcaption>
                </figure>
                <h1>Project</h1>
                <ul>
                  <li></li>
                </ul>
              </div>
            </section>
          </div>
        }
      </section>
    </div>
  )
}
