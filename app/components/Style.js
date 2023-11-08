import { Noto_Sans_KR } from '@next/font/google'
import {light,dark} from '../color_config'
const noto = Noto_Sans_KR({ weight: '400', subsets: ['latin'], })
const df = {display:'flex',justifyContent : 'center',alignItems: 'center'}
const dfb = {display:'flex',justifyContent : 'space-between',alignItems: 'center'}
const dfa = {display:'flex',justifyContent : 'space-around',alignItems: 'center'}
const dfs = {display:'flex',justifyContent : 'flex-start',alignItems: 'center'}
const dfss = {display:'flex',justifyContent : 'flex-start',alignItems: 'flex-start'}
const dfbs = {display:'flex',justifyContent : 'center',alignItems: 'flex-start'}
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
        dff : {...df},
        dfc : {...dfonly, flexDirection: 'column', gap:'30px'},
        font : {fontFamily : noto.style.fontFamily},
        bottom : {borderBottom : `1px solid ${type.line}`},
        body : {
            background : type.background,
            color : type.font_color,
            fontFamily : noto.style.fontFamily,
            overflow:'hidden'
        },
        nomal : {
            width: '100%',
            height: '100%',
            overflowY:'auto'
        },
        main : {
            marginLeft : '70px',
            ...dfbs,
            overflowY:'auto',
            height:'calc(100vh - 100px)'
        },
        mmain : {
            ...dfss,
            width:'100%',
            height:'calc(100vh - 200px)',
            overflowY:'auto'
        },
        header_box : {
            top:0,
            width:'100%',
            height:'100px',
            padding:'20px',
            position:'sticky',
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
        mheader_p : {
            color : type.font_color,
            fontFamily : noto.style.fontFamily,
            fontSize : '14px',
            fontWeight : '700',
            textAlign :'right'
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
        fomo : {
            background : type.mode_btn,
            color : type.mode_color,
            border : '0',
            fontFamily : noto.style.fontFamily,
            fontWeight : '700',
            width:'45px', height:'45px', borderRadius :  '50%',
            ...df
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
            zIndex:'3'
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
            bottom:'0',
            zIndex:'3'
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
        mcodebox : {
            width:'100vw',
            height:'auto',
            background: type.top_bar,
            padding:'30px',
            borderRight :`solid 1px ${type.line}`,
            ...dfb,
            flexDirection: 'column',
            overflowY: 'auto',
            order:'2'
        },
        viewbox : {
            width:'calc(100vw - 410px)',
            ...df,
            height:'100%',
            overflowY:'auto'
        },
        mviewbox : {
            width:'100vw',
            ...df,
            height:'50vh'
        },
        subpage : {
            ...dfb,
            overflow:'hidden',
            height:'100%'
        },
        msubpage : {
            ...dfb,
            overflowY:'auto',
            flexDirection: 'column',
            overflowX:'hidden'
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
            ...dfs,
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
            padding:'20px',
            overflowY:'auto',
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
        mskbg : {
            background: type.btn,
            width : '100%',
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
        },
        pointer : {
            cursor: 'pointer'
        },
        alert : {
            display:'none'
        },
        alert_active : {
            position:'fixed',
            ...df,
            flexDirection:'column',
            top:'100px', bottom:'0', marginTop:'auto', marginBottom:'auto',
            left:'70px', right:'0', marginLeft:'auto', marginRight:'auto',
            background:'rgba(26,26,26,0.9)',
            zIndex:'2'
        },
        submit : {
            display:'block',
            width:'100%',
            padding:'20px',
            marginTop:'20px',
            border:'0',
            background:type.top_bar,
            color:type.font_color,
            fontFamily : noto.style.fontFamily,
            fontSiae : '20px'
        },
        height : {
            height:'100%', width:'100%', padding:'0 30px'
        },
        adminheader : {
            background:type.top_bar,
            ...df
        },
        mfg :{
            width:'100%'
        },
        list : {
            ...dfs,
            fontSize:'16px',
            lineHeight:'1.6',
            gap:'10px',
            margin:'20px 0',
            cursor:'pointer'
        },
        listwork : {
            display:'none'
        },
        lisetworkactive : {
            display:'block'
        },
        btn : {
            background : type.btn,
            color: type.font_color,
            padding : '5px 10px',
            border : '0',
            borderRadius : '10px'
        }
    }
    return style;
}
export {style};