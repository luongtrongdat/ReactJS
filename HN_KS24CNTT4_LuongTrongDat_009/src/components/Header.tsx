import React, { useState } from "react";
import { Button, Input } from "antd";
import Body from "./Body";
interface Word {
  id: string;
  english: string;
  vietnamese: string;
}
export default function Header() {
  const [words, setWords] = useState<Word[]>([
    { id: "1", english: "Hello", vietnamese: "Xin chào" },
    { id: "2", english: "Goodbye", vietnamese: "Tạm biệt" },
    { id: "3", english: "Baby", vietnamese: "Em bé" },
  ]);
  const [english, setEnglish] = useState("");
  const [vietnamese, setVietnamese] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!english.trim() || !vietnamese.trim()) return;

    if (editingId) {
      setWords(
        words.map((w) =>
          w.id === editingId ? { ...w, english, vietnamese } : w
        )
      );
      setEditingId(null);
    } else {
      const newWord: Word = {
        id: Date.now().toString(),
        english,
        vietnamese,
      };
      setWords([...words, newWord]);
    }

    setEnglish("");
    setVietnamese("");
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Bạn có chắc muốn xóa từ này?")) {
      setWords(words.filter((w) => w.id !== id));
    }
  };

  return (
    <>
        <div className="rounded-t-lg w-[1275px] h-[100px] bg-green-900 flex justify-center items-center gap-2 text-[24px] font-semibold mb-6 text-white">
          📖QUẢN LÝ TỪ VỰNG
        </div>
        <div className="w-[1275px] h-[120px] pb-3 px-6">
          <div className="flex gap-1 text-[20px] font-semibold mb-6 text-green-900 items-center">
            ➕ Thêm từ mới
          </div>
          <form className="flex gap-2" onSubmit={handleAdd}>
            <Input
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
              type="text"
              placeholder="Từ tiếng Anh"
            />
            <Input
              value={vietnamese}
              onChange={(e) => setVietnamese(e.target.value)}
              type="text"
              placeholder="Nghĩa tiếng Việt"
            />
            <Button htmlType="submit" style={{ backgroundColor: '#0d452b', color: 'white' }}>
              Thêm
            </Button>
          </form>
        </div>
      
      <Body
        words={words}
        handleDelete={handleDelete}
      />
    </>
  );
}