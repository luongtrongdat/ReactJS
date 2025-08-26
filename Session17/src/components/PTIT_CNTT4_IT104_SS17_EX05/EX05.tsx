import React, { useState, type ChangeEvent } from 'react'

export default function EX05() {
    const [value, setValue] = useState("");
    const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <div>
            <h1> bài 5</h1>
            <input type="text"
                placeholder='nhập nội dung'
                value={value}
                onChange={handlechange}
            />
            {value && <h2>{value} </h2>}
        </div>
    )
}