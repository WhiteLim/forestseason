import React from 'react'

export default function Mainbtn({mode,children}) {
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
  return <button style={style}> {children} </button>
}
