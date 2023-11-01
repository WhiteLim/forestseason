import axios from 'axios'
import {style} from '../../components/Style'
import React, { useState } from 'react'

export default function Conf({cf}) {
    const [ state, setState ] = useState(false);
    const [name,setName] = useState(cf[0]?.name)
    const [nickname,setNickname] = useState(cf[0]?.nickname)
    const [phone,setPhone] = useState(cf[0]?.phone)
    const [title,setTitle] = useState(cf[0]?.title)
    const [summary,setSummary] = useState(cf[0]?.summary)
    const save=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const id = cf[0]?.num;
        const sendData = {data,id}
        axios.put('/api/config',sendData)
        .then(res => setCf(res.data))
        setState(true)
        setTimeout(() => {
            setState(false)                
        }, 2000);
    }
  return (
    <div>
      <form onSubmit={save} style={style.dfc}>
        <p>Name</p>
        <input type='text' autoComplete="off" name='name' value={name} onChange={(e)=>{setName(e.target.value)}} />
        <p>Nick Name</p>
        <input type='text' autoComplete="off" name='nickname' value={nickname} onChange={(e)=>{setNickname(e.target.value)}} />
        <p>Phone</p>
        <input type='text' autoComplete="off" name='phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
        <p>Title</p>
        <input type='text' autoComplete="off" name='title' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        <p>Summary</p>
        <input type='text' autoComplete="off" name='summary' value={summary} onChange={(e)=>{setSummary(e.target.summary)}} />
        <input type='submit' value='Save' style={style.submit} />
      </form>
      
      <div style={state == false ? style.alert : style.alert_active}>
                <h1>Storage Successful</h1>
                <p>Window closes after 2 seconds</p>
      </div>
    </div>
  )
}
