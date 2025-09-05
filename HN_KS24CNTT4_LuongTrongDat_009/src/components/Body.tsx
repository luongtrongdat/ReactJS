import { Button } from "antd";

interface Word {
  id: string;
  english: string;
  vietnamese: string;
}

interface BodyProps {
  words: Word[];
  handleDelete: (id: string) => void;
}
export default function Body({ words, handleDelete }: BodyProps) {

  return (
      <div className="border-gray-500 rounded-lg shadow-lg">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Từ Tiếng Anh
                </th>
                <th scope="col" className="px-6 py-3">
                  Nghĩa Tiếng Việt
                </th>
                <th scope="col" className="px-6 py-3">
                  Hành Động
                </th>
              </tr>
            </thead>
            <tbody>
              {words.map((w) => (
                <tr
                  key={w.id}
                  className="bg-white border-b border-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {w.english}
                  </th>
                  <td className="px-6 py-4">{w.vietnamese}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <Button>
                      ✏ Sửa
                    </Button>
                    <Button onClick={() => handleDelete(w.id)}>
                      🗑 Xóa
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <span className="flex justify-center items-center gap-2 pt-2">
          ◀ 1 ▶
        </span>
      </div>
  );
}