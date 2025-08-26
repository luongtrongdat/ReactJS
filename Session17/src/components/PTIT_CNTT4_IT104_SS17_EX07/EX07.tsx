import React, { useState, type ChangeEvent } from "react";

const CITIES = ["Hà Nội", "Hà Nam", "Ninh Bình", "Thanh Hóa", "Nghệ An"];

export default function EX07() {
    const [city, setCity] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCity(e.target.value);
    };

    return (
        <div>
            <label>
                Thành phố:&nbsp;
                <select value={city} onChange={handleChange}>
                    <option value="">-- Chọn thành phố --</option>
                    {CITIES.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </label>

            {/* Hiển thị kết quả */}
            {city && <h3>Thành phố: {city}</h3>}
        </div>
    );
}