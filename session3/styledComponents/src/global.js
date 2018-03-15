import {injectGlobal} from 'styled-components';
import SoberanaSans from './fonts/soberanasans-regular-webfont.ttf';

injectGlobal`
    @font-face{
        font-family: 'SoberanaSans';
        src: url('${SoberanaSans}');
    }
    body{
        margin: 0;
        background-color: #f5f5f5;
    }
    @keyframes ul {
        0% { 
       width:0;
     }
     100% { 
       width:calc(100% - 23px);
     }
   }
   .selected a
   {
        color:#0088CC;
    }
`