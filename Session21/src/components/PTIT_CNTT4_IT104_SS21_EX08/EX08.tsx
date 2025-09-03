import React from "react";

export default function EX08() {
  return (
    <div className="flex flex-col gap-8 p-4">

       Hình 1.1 - Căn trái 
      <div className="flex justify-start gap-2">
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">01</button>
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">02</button>
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">03</button>
      </div>

       Hình 1.2 - Căn phải 
      <div className="flex justify-end gap-2">
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">01</button>
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">02</button>
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">03</button>
      </div>

       Hình 1.3 - Căn giữa 
      <div className="flex justify-center gap-2">
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">01</button>
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">02</button>
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">03</button>
      </div>

      Hình 1.4 - Nằm 2 bên 
      <div className="flex justify-between">
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">01</button>
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">02</button>
      </div>

       Hình 1.5 - Giãn đều 2 bên 
      <div className="flex justify-around">
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">01</button>
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">02</button>
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">03</button>
      </div>

       Hình 1.6 - Giữa đều 
      <div className="flex justify-evenly">
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">01</button>
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">02</button>
        <button className="bg-[#D946EF] text-white px-4 py-2 rounded">03</button>
      </div>
    </div>
  );
}