import React from 'react'
import {style} from '../Style'

export default function Mainbtn({children,setPage}) {
    const change = ()=>{
      switch(children) {
        case 'White Lim' : setPage('lim'); break;
        case 'Protfolio' : setPage('pr'); break;
        case 'Blog' : setPage('blog'); break;
      }
    }
  return <button onClick={change} style={style.mainBtn}> {children} </button>
}
