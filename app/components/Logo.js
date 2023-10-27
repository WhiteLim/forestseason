import React from 'react'

const style = {
    logo: {
        width:'100%',
        maxWidth : '120px',
        objectFit : 'cover',
        cursor: 'pointer'
    },
};

export default function Logo({setPage}) {
  const home = ()=>{
    setPage('home')
  }
  return <figure onClick={home}><img src="/image/logo-nt.png" style={style.logo} /></figure>
}
