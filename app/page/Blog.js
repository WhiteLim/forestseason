import React, { useEffect, useState } from 'react'
import {style} from '../components/Style'
import axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

export default function Blog({display,mode}) {
  const [modeName, setModeName] = useState('d_')
  const [url,setUrl] = useState();
  const [list, setList] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();
  useEffect(()=>{
    axios.post('/api/blog/l')
    .then(res=>setList(res.data))
  },[])

  const view = (item) => {
    list.filter(n=>{
      if(n.num == item){
        setTitle(n.title);
        setContents(n.contents);
      }
    })
    setUrl(item);
  }

  if(!list) return <></>
  return (
    <div style={display == 'pc' ? style.subpage : style.msubpage}>
      <section style={display == 'pc' ? style.codebox : style.mcodebox}>
          <div>
              {
                list.map((v,k)=>(
                  <div key={k}>
                    <p style={style.list} onClick={()=>{view(v.num)}}><img src={`./image/icon/${modeName}dir.png`} /> {v.title} </p>
                  </div>

                ))
              }
          </div>
      </section>
      <section style={display == 'pc' ? style.viewbox : style.mviewbox}>
      {
          !url ? <h1 style={style.build}>Please click Item</h1> : 
          <div style={style.nomal}>
            <h1 style={{padding:'10px'}}>{title}</h1>
            <MDEditor.Markdown source={contents} style={{ whiteSpace: 'pre-wrap', padding:'40px' }} />
          </div>
        }
      </section>
    </div>
  )
}
