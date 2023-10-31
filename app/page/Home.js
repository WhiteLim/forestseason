import React, { useEffect, useState } from 'react'
import Mainbtn from '../components/btn/Mainbtn'
import {style} from '../components/Style'
import {light,dark} from '../color_config'

export default function Home({mode,setPage,display}) {
  const move = (url)=>{ window.open(url) }
  const [modeName,setName] = useState('l_');
  useEffect(()=>{setName(mode == light ? 'l_' : 'd_' )},[mode])
  return (
    <div style={display == 'pc' ? style.section : style.msection}>
      <div>
        <h1 style={style.textcenter}>VS Code 같은 프론트엔드 & 퍼블리셔 개발자</h1>
        <figure style={display == 'pc' ? style.firadius : style.mfiradius}>
          <img style={style.imgsize} src="/image/lim.jpg" alt='profile img'/>
          <figcaption style={display == 'pc' ? style.boxsize : style.mwidht}>
            <p> <span style={style.code}>const</span> <span style={style.var}>Name</span> <span style={style.codebu}>=</span> "<span style={style.codeText}>한은일</span>" </p>
            <p> <span style={style.code}>const</span> NickName <span style={style.codebu}>=</span> "<span style={style.codeText}>WhiteLim (백림)</span>" </p>
            <p> <span style={style.code}>const</span> Phone <span style={style.codebu}>=</span> "<span style={style.codeText}>010.7484.9304</span>" </p>
            <p> <span style={style.code}>let</span> Skill <span style={style.codebu}>=</span> <span style={style.codear}>[</span> <img src="https://img.shields.io/badge/Nextjs-000000?style=flat&logo=Next.js&logoColor=white" alt="my skill" />,<img src="https://img.shields.io/badge/REACT-61DAFB?style=flat&logo=REACT&logoColor=white" alt="my skill"  />,<img src="https://img.shields.io/badge/SASS-CC6699?style=flat&logo=sass&logoColor=white" alt="my skill" />,<img src="https://img.shields.io/badge/JAVASCRIPT-007396?style=flat&logo=Javascript&logoColor=white" alt="my skill" />,<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" alt="my skill" />,<img src="https://img.shields.io/badge/CSS3-1572b6?style=flat&logo=css3&logoColor=white" alt="my skill" />,<img src="https://img.shields.io/badge/PHP-777bb4?style=flat&logo=php&logoColor=white" alt="my skill" />,<img src="https://img.shields.io/badge/Maria DB-003545?style=flat&logo=MariaDB&logoColor=white" alt="my skill" />,<img src="https://img.shields.io/badge/MYSQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="my skill" />,<img src="https://img.shields.io/badge/nodedotjs-339933?style=flat&logo=nodedotjs&logoColor=white" alt="my skill" />,<img src="https://img.shields.io/badge/express-000000?style=flat&logo=express&logoColor=white" alt="my skill" />,<img src="https://img.shields.io/badge/json-000000?style=flat&logo=json&logoColor=white" alt="my skill" /> <span style={style.codear}>]</span> </p>
            <p> <span style={style.code}>const</span> Summary <span style={style.codebu}>=</span> "<span style={style.codeText}>개발에 꼭 필요한 에디터인 vs code처럼 개발에 꼭 필요한 개발자가 되기 위해 늘 새로운 기술을 익히며 코드리딩으로 이해력을 높혀가고 풀스텍이 되기 위해 끊임없이 배우고 있습니다.</span>"</p>
            <div style={style.pro}>
              <figure onClick={()=>{move('https://github.com/WhiteLim')}}><img style={style.git} src={`/image/${modeName}git.png`} alt="white lim git"  /></figure>
              <figure onClick={()=>{move('https://www.notion.so/wh-pf/White-lim-Portfolio-32cc6df132924daa9fc6a84d2c324394')}}><img style={style.notion} src={`/image/${modeName}notion.png`} alt='white lim notion' /></figure>
            </div>
            <Mainbtn setPage={setPage} children='White Lim' />
          </figcaption>
        </figure>
        <hr />
        <h1>My Portfolio</h1>
        swiper Setting
        <h1>My Blog</h1>
      </div>
    </div>
  )
}
