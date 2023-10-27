import React from 'react'
import Mainbtn from '../components/btn/Mainbtn'


export default function Home({mode,setPage}) {
  const move = (url)=>{
    window.open(url)
  }
  const style={
    btnbox : {
      display:'flex',
      justifyContent: 'space-between',
    },
    pro : {
      display : 'flex',
      justifyContent : 'center',
      width:'30%',
      margin:'0 auto',
      gap:'20px'
    },
    git : {
      width:'195px'
    },
    notion : {
      width:'144px'
    },
    section : {
      display : 'flex',flexDirection: 'column', justifyContent: 'space-between',minHeight:'850px'
    }
  }
  return (
    <div style={style.section}>
      <div>
        <figure>
          <img src="/image/logo.png" />
        </figure>
        <div style={style.btnbox}>
          <Mainbtn mode={mode} setPage={setPage} children="White Lim" />
          <Mainbtn mode={mode} setPage={setPage} children="Protfolio" />
          <Mainbtn mode={mode} setPage={setPage} children="Blog" />
        </div>
      </div>
      <div style={style.pro}>
        <figure onClick={()=>{move('https://github.com/WhiteLim')}}><img style={style.git} src="/image/git.png" /></figure>
        <figure onClick={()=>{move('https://www.notion.so/wh-pf/White-lim-Portfolio-32cc6df132924daa9fc6a84d2c324394')}}><img style={style.notion} src="/image/notion.png" /></figure>
      </div>
    </div>
  )
}
