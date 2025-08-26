import React, { useState } from 'react';


export default function EX03() {
    const [color, setColor] = useState("black");

    const handleChangeColor = () => {
        setColor(color === "black" ? "red" : "black");
    };

    return (
        <div>
            <h2 className={color === "red" ? "red-text" : "black-text"}>Tiêu đề văn bản</h2>
            <button onClick={handleChangeColor}>Thay đổi màu</button>
        </div>
    );
}