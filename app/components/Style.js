"use client"
import { Noto_Sans_KR } from '@next/font/google'
import {light,dark} from '../color_config'

const noto = Noto_Sans_KR({ weight: '400', subsets: ['latin'], })
var style = a();
export function a(type=light){
    style = {
        body : {
            background : type.background,
            color : type.font_color,
            fontFamily : noto.style.fontFamily
        },
        main : {
            marginLeft : '70px',
            padding:'40px',
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        header_box : {
            width:'100%',
            height:'100px',
            padding:'20px',
            display:'flex',
            justifyContent: 'space-between',
            alignItems : 'center',
            background: type.top_bar,
            borderBottom : `1px solid ${type.line}`
        },
        header_p : {
            color : type.font_color,
            fontFamily : noto.style.fontFamily,
            fontSize : '20px',
            fontWeight : '700'
        },
        modebtn : {
            background : type.mode_btn,
            color : type.mode_color,
            border : '0',
            fontFamily : noto.style.fontFamily,
            fontWeight : '700',
            minWidth : '150px',
            height : '45px',
            borderRadius :  '10px',
            cursor: 'pointer'
        },
        btnbox : {
            display:'flex',
            justifyContent: 'space-between',
          },
        pro : {
            display : 'flex',
            justifyContent : 'center',
            width:'30%',
            margin:'0 auto',
            gap:'20px'
        },
        git : {
            width:'195px'
        },
        notion : {
            width:'144px'
        },
        section : {
            display : 'flex',
            flexDirection: 'column', 
            justifyContent: 'space-between',
            minHeight:'850px'
        },
        mainBtn : {
            background : type.main_btn,
            border:'0',
            width:'250px',
            height:'50px',
            color:type.main_btn_color,
            borderRadius: '10px',
            fontSize: '20px',
            fontWeight: '700'
        },
        footbox : {
            position:'fixed',
            background : type.background,
            borderRight : `1px solid ${type.line}`,
            top:'100px',
            width:'70px',
            height:'100vh',
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap :'46px',
            paddingTop :'30px',
            cursor: 'pointer'
        }
    }
    return style;
}
export {style};