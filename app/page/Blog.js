import React, { useEffect, useRef, useState } from 'react'
import {style} from '../components/Style'
import axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

export default function Blog({display,setUrl,url,setTitle,title,setContents,contents,setCa,ca}) {
  const [modeName, setModeName] = useState('d_')
  const [list, setList] = useState();
  const categorys = ['Next','React','Vue','Sql','Other']
  const setction = useRef([])

  useEffect(()=>{
    axios.post('/api/blog/l').then(res=>setList(res.data))
    if(url){
      setTimeout(() => {
      setction.current.forEach((v,z)=>{
        v.id == ca ? v.style = style.lisetworkactive : v.style = 'display:none'
      })
      },500);
    }
  },[])

  const view = (item) => {
    list.filter(n=>{
      if(n.num == item){
        setTitle(n.title);
        setContents(n.contents);
        setCa(n.category)
      }
    })
    setUrl(item);
  }
  const listopen = (k)=> {
    setction.current.forEach((v,z)=>{
      z == k ? v.style = style.lisetworkactive : v.style = 'display:none'
    })
  }

  if(!list) return <></>
  return (
    <div style={display == 'pc' ? style.subpage : style.msubpage}>
      <section style={display == 'pc' ? style.codebox : style.mcodebox}>
          <div style={{width:'100%'}}>
              {
                categorys.map((d,q)=>(
                  <div key={q}>
                    <p style={style.list} onClick={()=>{listopen(q)}}><img src={`./image/icon/${modeName}dir.png`} /> {d}</p>
                    <section id={d} ref={(e)=>{setction.current[q] = e}} style={style.listwork}>
                    {
                      list.map(v=>(
                        v.category == d ?
                          <div key={v.num} style={style.bottom}>
                            <p style={style.list} onClick={()=>{view(v.num)}}> ㄴ {v.title} </p>
                          </div>
                          : ''
                        ))
                    }
                    </section>
                  </div>
                ))
              }
          </div>
      </section>
      <section style={display == 'pc' ? style.viewbox : style.mviewbox}>
      {
          !url ? <h1 style={style.build}>Please click Item</h1> : 
          <div style={style.nomal}>
            <h1 style={{padding:'10px'}}>[{ca}] {title}</h1>
            <MDEditor.Markdown source={contents} style={{...style.font, whiteSpace: 'pre-wrap', padding:'40px' }} />
          </div>
        }
      </section>
    </div>
  )
}
