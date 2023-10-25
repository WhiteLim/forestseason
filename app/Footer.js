import React from 'react'

export default function Footer({mode,page,setPage}) {
  const style = {
    box : {
      position:'fixed',
      background : mode.background,
      borderRight : `1px solid ${mode.line}`,
      top:'100px',
      width:'70px',
      height:'100vh',
      display:'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap :'46px',
      paddingTop :'30px',
      cursor: 'pointer'
    }
  }
  const move = (v)=>{
    setPage(v)
  }
  return (
    <section style={style.box}>
      <figure onClick={()=>{move('home')}}><img src={`/image/icon/${page == 'home' ?  'home_active' : 'home'}.png`} /></figure>
      <figure onClick={()=>{move('lim')}}><img src={`/image/icon/${page == 'lim' ?  'lim_active' : 'lim'}.png`} /></figure>
      <figure onClick={()=>{move('pr')}}><img src={`/image/icon/${page == 'pr' ?  'pr_active' : 'pr'}.png`} /></figure>
      <figure onClick={()=>{move('blog')}}><img src={`/image/icon/${page == 'blog' ?  'blog_active' : 'blog'}.png`} /></figure>
    </section>
  )
}
