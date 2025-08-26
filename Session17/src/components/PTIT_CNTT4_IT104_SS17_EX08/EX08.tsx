import React, { useState, type ChangeEvent } from "react";

const OPTIONS = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];

export default function EX08() {
    const [hobbies, setHobbies] = useState<string[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const checked = e.target.checked;

        setHobbies((prev) =>
            checked ? [...prev, value] : prev.filter((h) => h !== value)
        );
    };

    return (
        <div>
            <h3>Sở thích: {JSON.stringify(hobbies)}</h3>

            {OPTIONS.map((opt) => (
                <div key={opt}>
                    <label>
                        <input
                            type="checkbox"
                            value={opt}
                            checked={hobbies.includes(opt)}
                            onChange={handleChange}
                        />
                        {opt}
                    </label>
                </div>
            ))}
        </div>
    );
}