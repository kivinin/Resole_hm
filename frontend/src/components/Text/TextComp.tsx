import React from 'react';

function TextComp():JSX.Element {
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"0px 0 0 0 ", backgroundColor:"#b1fbe2", height:"500px"}}>
            <div style={{margin:"50px", fontSize:"50px", fontWeight:"700"}}>ПРОФЕССИОНАЛЬНАЯ МАСТЕРСКАЯ</div>
            <div style={{fontSize:"25px", width:"950px"}}>МЫ СПЕЦИАЛИСТЫ В ВОССТАНОВЛЕНИИ КОЖАНЫХ ИЗДЕЛИЙ. ОКАЗЫВАЕМ ВЕСЬ СПЕКТР УСЛУГ ПО ХИМЧИСТКЕ, РЕМОНТУ И РЕСТАВРАЦИИ ОБУВИ, СУМОК И КУРТОК.</div>
        </div>
    );
}

export default TextComp;