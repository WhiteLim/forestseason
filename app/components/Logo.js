import { useRouter } from 'next/navigation';
import React from 'react'

const style = {
    logo: {
        width:'100%',
        maxWidth : '120px',
        objectFit : 'cover',
        cursor: 'pointer'
    },
};

export default function Logo() {
  const move = useRouter();
  const home = ()=>{
    console.log('a');
    move.push('/')
  }
  return <figure onClick={home}><img src="/image/logo-nt.png" style={style.logo} /></figure>
}
