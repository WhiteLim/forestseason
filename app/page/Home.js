import React from 'react'
import Mainbtn from '../components/btn/Mainbtn'


export default function Home({mode}) {
  const style={
    btnbox : {
      display:'flex',
      justifyContent: 'space-between',
    }
  }
  return (
    <div>
      <figure>
        <img src="/image/logo.png" />
      </figure>
      <div style={style.btnbox}>
        <Mainbtn mode={mode} children="White Lim" />
        <Mainbtn mode={mode} children="Protfolio" />
        <Mainbtn mode={mode} children="Blog" />
      </div>
    </div>
  )
}
