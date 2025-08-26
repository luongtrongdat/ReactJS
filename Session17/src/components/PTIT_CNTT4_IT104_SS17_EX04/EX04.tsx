import React, { useState } from 'react'

export default function EX04() {
    const [vistble, setVistble] = useState(false)
    const handlechange = (): void => {
        setVistble(!vistble)
    }
    return (
        <div>
            <h2> bài 4</h2>
            <button onClick={handlechange}> {vistble ? "ẩn" : "hiện"}</button>
            {vistble && <h2> tiên đề văn bản </h2>}

        </div>
    )
}