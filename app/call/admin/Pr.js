import axios from 'axios';
import {style} from '../../components/Style'
import React, { useEffect, useState } from 'react'

export default function Pr() {
  const [ state, setState ] = useState(false);
  const [ write, setWrite ] = useState();
  const [ pr, setPr ] = useState();
  const [ skill, setSkill ] = useState();
  const [check, setCheck] = useState([]);

  const [ title, setTitle ] = useState();
  const [ useskill, setUseskill ] = useState();
  const [ work, setWork ] = useState();
  const [ url, setUrl ] = useState();
  const [ workdate, setWorkdate ] = useState();
  const [ team, setTeam ] = useState();
  const [ info, setInfo ] = useState();

  const newwrite = (k)=>{
    setState(true)
    setWrite(k)
  }

  const close = ()=>{
    setState(false)
    setCheck('')
  }

  const del = (k)=>{
    axios.delete(`/api/portfolio?num=${k}`)
    .then(res=> setPr(res.data))
  }

  const save = (e)=>{
    e.preventDefault();
    let formdata = new FormData(e.target);
    formdata.append('useskill',check)
    if(write == 'new') {
      let date = new Date();
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      const day = `${y}.${m}.${d}`
      formdata.append('date',day)
    } else {
      formdata.append('num',write)
    }
    let send = Object.fromEntries(formdata);

    if(write == 'new') {
      const fr = new FileReader(); // 업로드 이미지 리드
      fr.readAsDataURL(send.upload); // url 서치

      fr.addEventListener('load',()=>{ // 로드 된 후 실행
        axios.post('/api/portfolio',{
          title:send.title,
          useskill:send.useskill,
          url:send.url,
          workdate:send.workdate,
          work:send.work,
          team:send.team,
          info:send.info,
          img:fr.result,
          date:send.date
        })
        .then(res=>setPr(res.data))
      })
    } else {
      axios.put('/api/portfolio',send)
      .then(res=>setPr(res.data))
    }
    setState(false)
  }

  useEffect(()=>{
    if(state) {
      switch(write){
        case 'new' : 
        setTitle(''); setUseskill(''); setWork(''); setUrl(''); setWorkdate(''); setTeam(''); setInfo('');
        break;
        default : 
        pr.filter(n=>{
            if(n.num == write){
              setTitle(!n.title? '' : n.title)
              setCheck( !n.useskill ? '' : n.useskill.split(','))
              setWork(!n.work ? '' : n.work)
              setUrl(!n.url ? '' : n.url)
              setWorkdate(!n.workdate ? '' : n.workdate)
              setTeam(!n.team ? '' : n.team)
              setInfo(!n.info ? '' : n.info)
            }
          });
        break;
      }
    }
  },[state])

  useEffect(()=>{
    axios.get('/api/portfolio')
    .then(res=>setPr(res.data))
    axios.get('/api/skill')
    .then(res=>setSkill(res.data))
  },[])

  if(!pr || !skill) return <></>
  return (
    <div>
      <div>
        <h1>Portfolio [ {pr.length}개 ]</h1>
        <button onClick={()=>{newwrite('new')}}>글 작성</button>
      </div>
      <ul>
        {
          pr.map((v,k)=>(
            <li key={v.num}>
              {v.title} <button onClick={()=>{newwrite(v.num)}}>수정</button> <button onClick={()=>{del(v.num)}}>삭제</button>
            </li>
          ))
        }
      </ul>

      <div style={state == false ? style.alert : style.alert_active}>
        <form onSubmit={save} encType="multipart/form-data">
          <p>title</p><input type='text' name='title' value={title} onChange={(e)=>{setTitle(e.target.value)}} style={{...style.modebtn,width:'100%'}}  />
          <p>use skill</p>
          
          {
            skill && skill?.map(v=>(
              <label key={v.num} htmlFor={v.text}>
                <input id={v.text} type="checkbox" value={v.num} checked={check && check?.some(n=>n == v.num) && true || false} name='useskill' onChange={(e)=>{ e.target.checked === true ? setCheck([...check,e.target.value]) :  setCheck(check.filter(n=>n != e.target.value)) }} /> 
                {v.text} 
              </label>
            ))
          }
          <p>work</p><input type='text' name='work' value={work} onChange={(e)=>{setWork(e.target.value)}} style={{...style.modebtn,width:'100%'}} />
          <p>url</p><input type='text' name='url' value={url} onChange={(e)=>{setUrl(e.target.value)}} style={{...style.modebtn,width:'100%'}} />
          <p>workdate</p><input type='text' name='workdate'  value={workdate} onChange={(e)=>{setWorkdate(e.target.value)}} style={{...style.modebtn,width:'100%'}} />
          <p>team</p><input type='text' name='team' value={team} onChange={(e)=>{setTeam(e.target.value)}} style={{...style.modebtn,width:'100%'}} />
          <p>info</p><input type='text' name='info' value={info} onChange={(e)=>{setInfo(e.target.value)}} style={{...style.modebtn,width:'100%'}} />
          { write == 'new' ? <input type="file" name="upload" style={{width:'100%', margin:'20px 0'}}/> : '' }
          <input type='submit' value='Save' style={{...style.modebtn,width:'50%',marginTop:'20px'}} />
          <input type='button' value='Cancle' onClick={close} style={{...style.modebtn,width:'50%',marginTop:'20px'}} />
        </form>
      </div>

    </div>
  )
}
