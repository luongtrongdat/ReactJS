import React, { useState, type ChangeEvent } from 'react'

export default function EX06() {
    const [test, setTest] = useState("")
    const handlelechange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTest(e.target.value)

    }
    const sokytu = test.length;
    const xoakytu = test.trim();
    const word = xoakytu ? xoakytu.split(/\s+/) : [];
    const words = word.length;
    const gapsBetweenWords = words > 0 ? words - 1 : 0


    return (
        <div>
            <textarea name="" id=""
                rows={5}
                cols={70}
                placeholder="Nhập nội dung"
                value={test}
                onChange={handlelechange}
            >

            </textarea>
            <div>Số ký tự: {sokytu}</div>
            <div>Số từ: {words}</div>
            <div>Khoảng cách giữa các từ: {gapsBetweenWords}</div>

        </div>
    )
}