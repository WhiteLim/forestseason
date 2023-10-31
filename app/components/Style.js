import { Noto_Sans_KR } from '@next/font/google'
import {light,dark} from '../color_config'
const noto = Noto_Sans_KR({ weight: '400', subsets: ['latin'], })
const df = {display:'flex',justifyContent : 'center',alignItems: 'center'}
const dfb = {display:'flex',justifyContent : 'space-between',alignItems: 'center'}
const dfa = {display:'flex',justifyContent : 'space-around',alignItems: 'center'}
const dfs = {display:'flex',justifyContent : 'flex-start',alignItems: 'center'}
const dfss = {display:'flex',justifyContent : 'flex-start',alignItems: 'flex-start'}
const dfonly = {display:'flex'}
var style = a();
export function a(type=dark){
    style = {
        code : {color : "#B81DD1"},
        var : {color : "90A4B5"},
        codeother : {color : "#48B4C3"},
        codeText : {color : "#91B859"},
        codear : {color : "#0431FA"},
        codebu : {color : "#39ADB5"},
        dfs : {...dfb, flexDirection: 'column', height:'100%'},
        body : {
            background : type.background,
            color : type.font_color,
            fontFamily : noto.style.fontFamily,
            overflow:'hidden'
        },
        main : {
            marginLeft : '70px',
            marginTop:'100px',
            ...df,
            overflowY:'auto',
            height:'calc(100vh - 100px)'
        },
        mmain : {
            marginTop:'100px',
            ...dfss,
            width:'100%',
            height:'calc(100vh - 100px)'
        },
        header_box : {
            top:0,
            width:'100%',
            height:'100px',
            padding:'20px',
            position:'fixed',
            ...dfb,
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
            ...df
          },
        pro : {
            ...df,
            width:'30%',
            margin:'20px auto 0',
            gap:'20px'
        },
        git : {
            width:'80px'
        },
        notion : {
            width:'80px'
        },
        section : {
            ...dfonly,
            flexDirection: 'column', 
            minHeight:'850px',
        },
        msection : {
            ...dfonly,
            flexDirection: 'column', 
            minHeight:'850px',
            width:'100%',
            overflowY:'auto',
            height:'calc(100vh - 205px)',
            padding:'30px'
        },
        mainBtn : {
            background : type.main_btn,
            border:'0',
            width:'100%',
            height:'50px',
            color:type.main_btn_color,
            borderRadius: '10px',
            fontSize: '20px',
            fontWeight: '700',
            marginTop :'30px'
        },
        footbox : {
            position:'fixed',
            background : type.top_bar,
            borderRight : `1px solid ${type.line}`,
            top:'100px',
            width:'70px',
            height:'100vh',
            flexDirection: 'column',
            ...dfs,
            gap :'46px',
            paddingTop :'30px',
            cursor: 'pointer'
        },
        mfootbox : {
            position:'fixed',
            background : type.top_bar,
            borderRight : `1px solid ${type.line}`,
            width:'100%',
            flexDirection: 'row',
            ...dfa,
            gap :'46px',
            padding :'30px 0',
            cursor: 'pointer',
            bottom:'0'
        },
        firadius : {
            ...dfb,
            gap:'40px'
        },
        mfiradius : {
            ...dfb,
            flexDirection: 'column',
            gap:'40px'
        },
        fircent : {
            ...df,
            gap:'40px'
        },
        imgsize : {
            width:'300px',
            height:'300px',
            objectFit:'cover',
            borderRadius : '50%',
        },
        boxsize : {
            maxWidth:'400px'
        },
        textcenter : {
            textAlign : 'center',
            color:'#41C4C1'
        },
        codebox : {
            minWidth:'340px',
            width:'340px',
            height:'100%',
            background: type.top_bar,
            padding:'30px',
            borderRight :`solid 1px ${type.line}`,
            ...dfb,
            flexDirection: 'column',
            overflowY: 'auto'
        },
        viewbox : {
            width:'calc(100vw - 410px)',
            ...df,
            height:'100%'
        },
        subpage : {
            ...dfb,
            overflow:'hidden',
            height:'100%'
        },
        build : {
            textAlign: 'center',
            fontSize: '80px'
        },
        load : {
            background: type.btn_active,
            width : '100%',
            height:'30px',
            borderRadius :'30px',
            overflow:'hidden'
        },
        loading : {
            background: type.btn,
            height:'30px',
            borderRadius :'30px',
            transtion:'.5s',
            width:'0%',
            display:'block'
        },
        profile : {
            ...df,
            flexDirection: 'column',
            margin:'30px auto'

        },
        profiled : {
            ...dfa,
            flexDirection: 'column',
            height:'100%',
            width:'100%'

        },
        skillbox : {
            background: type.top_bar,
            width:'100%', height:'100%',
            borderTop :`1px solid ${type.line}`
        },
        mwidht : {
            width:'100%'
        },
        skilldetail : {
            padding:'20px'
        },
        skillradius : {
            color : type.btn,
            background:type.btn_active,
            width:'50px',
            height:'50px',
            borderRadius:'50%',
            ...df,
            fontSize:'26px'
        },
        fl : {
            ...dfs,
            gap:'20px'
        },
        skbg : {
            background: type.btn,
            width : '400px',
            height:'30px',
            borderRadius :'30px',
            overflow:'hidden'
        },
        skper : {
            background: type.btn_active,
            height:'100%',
            borderRadius :'30px',
            transtion:'.5s',
            ...dfonly,
            alignItems:'center',
            padding:'0 10px',
            textAlign:'left',
            color : "#B81DD1"
        },
        ma : {
            padding:'20px'
        }
    }
    return style;
}
export {style};