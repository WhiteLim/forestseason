import React from 'react'

export default function Mainbtn({mode,children,setPage}) {
    const style= {
        background : mode.main_btn,
        border:'0',
        width:'250px',
        height:'50px',
        color:mode.main_btn_color,
        borderRadius: '10px',
        fontSize: '20px',
        fontWeight: '700'
    }

    const change = ()=>{
      switch(children) {
        case 'White Lim' : setPage('lim'); break;
        case 'Protfolio' : setPage('pr'); break;
        case 'Blog' : setPage('blog'); break;
      }
    }
  return <button onClick={change} style={style}> {children} </button>
}
