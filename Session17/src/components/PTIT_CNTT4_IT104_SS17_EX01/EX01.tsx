import React, { useState } from 'react'

export default function EX01() {
    const [name] = useState("luong trong dat ")
    return (
        <div>
            <h1>bài 1</h1>
            <p> họ và tên:{name} </p>

        </div>
    )
}