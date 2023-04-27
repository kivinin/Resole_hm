import React from 'react';

function Header({text}:{text:String}) {
    return (
        <div>
            <div style={{fontSize:"50px", fontWeight:"700"}}>{text}</div>
        </div>
    );
}

export default Header;