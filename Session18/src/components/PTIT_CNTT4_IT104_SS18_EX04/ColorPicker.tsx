import React, { useCallback, useState } from "react";

export default function ColorPicker() {
  const [pickerValue, setPickerValue] = useState<string>("#000000");
  const [selected, setSelected] = useState<string | null>(null);
  
  const handleChangeColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setPickerValue(value);
      setSelected(value);
    },
    []
  );

  return (
    <div style={{ maxWidth: 420, margin: "24px auto", fontSize: 18 }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ marginBottom: 8, fontWeight: 600 }}>Mau nguoi dung chon:</div>
        <input
          type="color"
          value={pickerValue}
          onChange={handleChangeColor}
          style={{ width: 56, height: 32, padding: 0, border: "none" }}
          aria-label="Color picker"
        />
      </div>

      <div>
        <div style={{ marginBottom: 8, fontWeight: 600 }}>Mau hien thi:</div>
        <div
          style={{
            width: 240,
            height: 120,
            border: "1px solid #ddd",
            background: selected ?? "transparent",
          }}
        />
      </div>
    </div>
  );
}