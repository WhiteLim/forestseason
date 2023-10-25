"use client"
import { useState } from "react";
import {light,dark} from './color_config'
import Header from "./Header";
import Footer from "./Footer";
import { Noto_Sans_KR } from '@next/font/google'
import Home from "./page/Home";
import Lim from "./page/Lim";
import Pr from "./page/Pr";
import Blog from "./page/Blog";
const noto = Noto_Sans_KR({
    weight: '400',
    subsets: ['latin'],
  })
export default function Mode() {
    const [mode,setMode] = useState(light);
    const [page,setPage] = useState('home');
    const style = {
        body : {
            background : mode.background,
            color : mode.font_color,
            fontFamily : noto.style.fontFamily
        },
        main : {
            marginLeft : '70px',
            padding:'40px',
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }       
    }
    return (
        <body style={style.body}>
            <Header mode={mode} noto={noto} setMode={setMode} />
            <main style={style.main}>
                {
                    page == 'home' ? <Home mode={mode} />
                    : page == 'lim' ? <Lim mode={mode} />
                    : page == 'pr' ? <Pr mode={mode} />
                    : <Blog />
                }
            </main>
            <Footer mode={mode} page={page} setPage={setPage} />
        </body>
    )
}
