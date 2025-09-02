import React, { useEffect, useState, useRef } from 'react'

export default function EX06() {
  const [check, setCheck] = useState<boolean>(false)
  const isRef = useRef<HTMLInputElement>(null)

  const handleDisplay = () => {
    setCheck(!check)
  }

  useEffect(() => {
    if (check) {
      isRef.current?.focus()
    }
  }, [check])

  return (
    <>
      <div style={check ? { display: "none" } : { display: "block" }}>
        <h3>ung dung</h3>
        <button onClick={handleDisplay}>mo modal</button>
      </div>
      <div style={check ? { display: "block" } : { display: "none" }}>
        <h3>dang nhap </h3>
        <input type="text" placeholder='nhap ten nguoi dung' ref={isRef} /> <br />
        <button onClick={handleDisplay}>dong</button>
      </div>
    </>
  )
}