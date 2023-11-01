import React, { useState } from 'react'
import Conf from './admin/Conf'
import Pr from './admin/Pr'
import Bl from './admin/Bl'
import Skill from './admin/Skill'
import {style} from '../components/Style'

export default function Adminpage({cf,setCf}) {
  const [ pages, setpages ] = useState('config')
  return (
    <div style={style.height}>
      <ul className='admin' style={style.adminheader}>
        <li onClick={()=>{setpages('config')}}>Config Setting</li>
        <li onClick={()=>{setpages('skill')}}>Skill</li>
        <li onClick={()=>{setpages('portfolio')}}>Portfolio</li>
        <li onClick={()=>{setpages('blog')}}>Blog</li>
      </ul>
      <section>
        {
          pages == 'config' ? <Conf cf={cf} setCf={setCf} /> : pages == 'skill' ? <Skill /> : pages == 'portfolio' ? <Pr /> : <Bl />
        }
      </section>
    </div>
  )
}
