import React from 'react';

function TextComp():JSX.Element {
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"50px 0 0 0 "}}>
            <div style={{margin:"50px", fontSize:"50px", fontWeight:"700"}}>Профессиональная мастерская</div>
            <div style={{fontSize:"30px", width:"700px"}}>Мы специалисты в восстановлении кожаных изделий. Оказываем весь спектр услуг по химчистке, ремонту и реставрации обуви, сумок и курток.</div>
        </div>
    );
}

export default TextComp;