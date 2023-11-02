"use client"
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./page/Home";
import Lim from "./page/Lim";
import Pr from "./page/Pr";
import Blog from "./page/Blog";
import {light,dark} from './color_config'
import {style,a} from './components/Style'
import Admin from "./page/Admin";
import axios from "axios";

export default function Mode() {
    const [ cf , setCf ] = useState();
    const [mode,setMode] = useState();
    const [display,setDisplay] = useState('pc');
    const [page,setPage] = useState('home');
    const [className,setClassName] = useState('light')
    const modeChang = ()=>{ 
        let item = mode == light ? 'dark' : 'light';
        localStorage.setItem('mode',item)
        setMode(item == 'light' ? light : dark)
    }
    useEffect(()=>{a( mode == light ? light : dark ); setClassName(mode == light ? 'light' : 'dark' ) },[mode])
    async function callcf() {
        await axios.get('../api/config/')
        .then(res => setCf(res.data))
    }
    useEffect(()=>{
        callcf();
        if (typeof window !== 'undefined') {
            let item = !localStorage.mode ? 'dark' : localStorage.mode;
            setMode(item == 'light' ? light : dark)

            function redisplay(){
                if(window.innerWidth <= 900) {
                    setDisplay('mobile')
                } else {
                    setDisplay('pc')
                }
            }
            window.addEventListener('resize',()=>{
                redisplay()
            });redisplay()
        }
     },[])
    return (
        <body style={style.body} className={className}>
            <Header mode={mode} setPage={setPage} modeChang={modeChang} />
            <main style={display == 'pc' ? style.main : style.mmain} >
                {
                    page == 'home' ? <Home mode={mode} display={display} setPage={setPage} cf={cf}  />
                    : page == 'lim' ? <Lim display={display} cf={cf} />
                    : page == 'pr' ? <Pr display={display} mode={mode} />
                    : page == 'blog' ? <Blog display={display} /> : <Admin cf={cf} setCf={setCf}/>
                }
            </main>
            <Footer mode={mode} page={page} setPage={setPage} display={display} />
        </body>
    )
}
