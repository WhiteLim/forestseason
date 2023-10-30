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

export default function Mode() {
    const [mode,setMode] = useState(light);
    const [page,setPage] = useState('home');
    const [className,setClassName] = useState('light')
    const modeChang = ()=>{ setMode(mode == light ? dark : light)}
    useEffect(()=>{a( mode == light ? light : dark ); setClassName(mode == light ? 'light' : 'dark' ) },[mode])
    return (
        <body style={style.body} className={className}>
            <Header mode={mode} setPage={setPage} modeChang={modeChang} />
            <main style={style.main}>
                {
                    page == 'home' ? <Home mode={mode} setPage={setPage}  />
                    : page == 'lim' ? <Lim  />
                    : page == 'pr' ? <Pr  />
                    : <Blog />
                }
            </main>
            <Footer mode={mode} page={page} setPage={setPage} />
        </body>
    )
}
