"use client"
import axios from 'axios';
import {style} from '../../components/Style'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import("../Ck"), { ssr: false });
export default function Bl() {
  const [ pr, setPr ] = useState();
  const [ state, setState ] = useState(false);
  const [ title, setTitle ] = useState();
  const [ contents, setContents ] = useState();
  const [ write, setWrite ] = useState();

  useEffect(()=>{ axios.get('/api/blog/l').then(res=>setPr(res.data));},[])

  const newwrite = (k)=>{ setState(true); setWrite(k); }
  const del = (k)=> {
    axios.delete(`/api/blog/w?num=${k}`)
    .then(res=> setPr(res.data))
  }

  const save = (e)=>{
    e.preventDefault();
    let formdata = new FormData(e.target);
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    const day = `${y}.${m}.${d}`
    if(write == 'new') {
      formdata.append('date',day)
      formdata.append('contents',contents)
      let send = Object.fromEntries(formdata);
      axios.post('/api/blog/w',send)
      .then(res=>setPr(res.data))
    } else {
      formdata.append('num',write)
      formdata.append('contents',contents)
      let send = Object.fromEntries(formdata);
      axios.put('/api/blog/w',send)
      .then(res=>setPr(res.data))

    }
    setState(false)
  }

  useEffect(()=>{
    if(state){
      switch(write){
        case 'new' :
          setTitle(''); setContents(''); break;

        default :
          pr.filter(n=>{
            if(n.num == write){
              setTitle(!n.title? '' : n.title)
              setContents(!n.contents? '' : n.contents)
            }
          })
        break;
      }
    }
  },[state])
  if(!pr) return <></>
  return (
    <div>
       <div style={{...style.dff, justifyContent : 'flex-start', alignItems: 'center', gap:'10px'}}>
        <h1>Blog [ {pr.length}개 ]</h1>
        <button style={style.btn} onClick={()=>{newwrite('new')}}>글 작성</button>
      </div>
      <ul style={{...style.dfc, alignItems : 'flex-start'}}>
        {
          pr.map((v,k)=>(
            <li key={v.num}>
              ㄴ Title : {v.title} <button onClick={()=>{newwrite(v.num)}} style={style.btn}>수정</button> <button style={style.btn} onClick={()=>{del(v.num)}}>삭제</button>
            </li>
          ))
        }
      </ul>
      {
        state ?
        <div style={state == false ? style.alert : style.alert_active}>
        <form onSubmit={save}>
          <select name='category'>
            <option value='next'>Next</option>
            <option value='react'>React</option>
            <option value='Vue'>Vue</option>
            <option value='sql'>Sql</option>
            <option value='other'>HTML & Script & CSS</option>
          </select>
          <input type='text' name='title' value={title} onChange={(e)=>{setTitle(e.target.value)}} style={{...style.modebtn,width:'100%'}}  />
          <Editor value={contents}  setContents ={setContents} />
          <input type='submit' value='Save' style={{...style.modebtn,width:'50%',marginTop:'20px'}} />
          <input type='button' value='Cancle' onClick={()=>{setState(false); }} style={{...style.modebtn,width:'50%',marginTop:'20px'}} />
        </form>
      </div>
      : ''
      }
      


    </div>
  )
}
