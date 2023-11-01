import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {style} from '../../components/Style'

export default function Skill() {
  const [ skill, setSkill] = useState();
  const [ skilldetail, setSkillDetail] = useState('none');

  const [id,setId] = useState();
  const [ab,setAb] = useState();
  const [per,setPer] = useState();
  const [text,setText] = useState();
  const [color,setColor] = useState();
  const [logo,setLogo] = useState();
  const [logocolor,setLogocolor] = useState();
  const [styled,setStyled] = useState();

  useEffect(()=>{
    axios.get('/api/skill')
    .then(res => setSkill(res.data))
  },[])

  const datacall = (k)=>{
    setSkillDetail(k)
    if(k != 'new') {
      skill.filter(n=>{
        if(n.num == k){
          setId(n.id)
          setAb(n.ab)
          setPer(n.per)
          setText(n.text)
          setColor(n.color)
          setLogo(n.logo)
          setLogocolor(n.logocolor)
          setStyled(n.style)
        }
      })
      
    } else {
      setId('')
      setAb('')
      setPer('')
      setText('')
      setColor('')
      setLogo('')
      setLogocolor('')
      setStyled('')
    }
  }

  const save = (e)=>{
    e.preventDefault();
    const formdata = new FormData(e.target);
    const insert = Object.fromEntries(formdata);
    if(skilldetail == 'new') {
      axios.post('/api/skill',insert)
      .then(res=>setSkill(res.data))
    } else {
      axios.put('/api/skill',{insert,skilldetail:skilldetail})
      .then(res=>setSkill(res.data))
    }
  }

  if(!skill) return <></>

  return (
    <div>
      <ul style={{flexWrap: 'wrap'}}>
        <li onClick={()=>{datacall('new')}}><p>New Skill</p></li>
        {
          skill.map((v,k)=>(
              <li key={k} onClick={()=>{datacall(v.num)}}><p>{v.text}</p></li>
          ))
        }
      </ul>
      {
        skilldetail == 'none' ? 
        <h1>Click My Skill</h1> 
        : 
        <form style={style.dfc} onSubmit={save}>
          <p>ID</p>
          <input type='text' name='id' value={id} onChange={(e)=>{setId(e.target.value)}} />
          <p>ability</p>
          <input type='text' name='ab' value={ab} onChange={(e)=>{setAb(e.target.value)}}  />
          <p>percent</p>
          <input type='text' name='per' value={per} onChange={(e)=>{setPer(e.target.value)}}  />
          <p>text</p>
          <input type='text' name='text' value={text} onChange={(e)=>{setText(e.target.value)}}  />
          <p>color</p>
          <input type='text' name='color' value={color} onChange={(e)=>{setColor(e.target.value)}}  />
          <p>logo</p>
          <input type='text' name='logo' value={logo} onChange={(e)=>{setLogo(e.target.value)}}  />
          <p>logocolor</p>
          <input type='text' name='logocolor' value={logocolor} onChange={(e)=>{setLogocolor(e.target.value)}}  />
          <p>style</p>
          <input type='text' name='styled' value={styled} onChange={(e)=>{setStyled(e.target.value)}}  />
          <input type='submit' value='Save' style={style.submit} />
        </form>
      }
    </div>
  )
}
