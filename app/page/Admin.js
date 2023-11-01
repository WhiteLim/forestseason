import React, { useState } from 'react'
import {style} from '../components/Style'
import Adminpage from '../call/Adminpage';

export default function Admin({cf,Config}) {
    const [ acc, setAcc ] = useState(false);
    const [ state, setState ] = useState(false);
    const check = (e)=>{
        e.preventDefault();
        if(cf[0]?.adminpass == e.target.pass.value){
            setAcc(true)
        } else {
            setState(true)
            e.target.pass.value=''
            setTimeout(() => {
                setState(false)                
            }, 2000);
        }
    }
  return (
    <div style={{...style.height, ...style.dff}}>
      {
        acc == false ?
        <section>
            <p>Access rights</p>
            <form onSubmit={check}>
                <input type='password' name='pass' />
                <input type='submit' value='접속' style={style.submit} />
            </form>
            <div style={state == false ? style.alert : style.alert_active}>
                <h1 >Blocking Access</h1>
                <p>Check Password and Please try again.</p>
            </div>
        </section>
        :
        <Adminpage cf={cf} Config={Config} />
      }
    </div>
  )
}
