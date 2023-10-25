"use client"
import { useState } from "react";
import {light,dark} from './color_config'
import Header from "./Header";
import Footer from "./Footer";
import { Noto_Sans_KR } from '@next/font/google'
const noto = Noto_Sans_KR({
    weight: '400',
    subsets: ['latin'],
  })
export default function Mode({children}) {
    const [mode,setMode] = useState(light);
    const style = {
        body : {
            background : mode.background,
            color : mode.font_color,
            fontFamily : noto.style.fontFamily
        },
        header_box : {
            width:'100%',
            height:'100px',
            padding:'20px',
            display:'flex',
            justifyContent: 'space-between',
            alignItems : 'center',
            background:mode.top_bar,
            borderBottom : '1px solid #E4E4E4'
        },
        header_p : {
            color : mode.font_color,
            fontFamily : noto.style.fontFamily,
            fontSize : '20px',
            fontWeight : '700'
        },
        modebtn : {
            background : mode.mode_btn,
            color : mode.mode_color,
            border : '0',
            fontFamily : noto.style.fontFamily,
            fontWeight : '700',
            minWidth : '150px',
            height : '45px',
            borderRadius :  '10px'
        }
    }
    return (
        <body style={style.body}>
            <Header style={style} mode={mode} setMode={setMode} />
            <main>
                {children}
            </main>
            <Footer />
        </body>
    )
}
