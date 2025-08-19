import "./App.css";

import ListCourse from "../components/EX01/ListCourse";
import Calculation from "../components/EX02/Calculation";
import UserInfor from "../components/EX03/UserInfor";
import ColorBox from "../components/EX04/ColorBox";
import FormatName from "../components/EX05/FormatName";
import AdminIndex from "../components/EX06/AdminIndex";
import UserLayout from "../components/EX07/UserLayout";
import ListAccount from "../components/EX08/ListAccount";

function App() {
  return (
    <>
      {/* Bài 1 */}
      {/* <h2>Danh sách môn học</h2>
      <ListCourse></ListCourse> */}
      {/* Bài 2
      <h2>Danh sách kết quả</h2>
      <Calculation></Calculation> */}
      {/* Bài 3 */}
      {/* <UserInfor></UserInfor> */}
      {/* Bài 4 */}
      {/* <h2>Color Box</h2>
      <ColorBox></ColorBox> */}

      {/* Bài 5 */}
      {/* <h2>Format Name</h2>
      <FormatName firstName={"Lương Trọng"} lastName={"Đạt"}></FormatName> */}

      {/* Bài 6 */}
      <h2>Xây dựng khung trang quản trị</h2>
      <AdminIndex></AdminIndex>

      {/* Bài 7 */}
      {/* <h2>Xây dựng khung giao diện người dùng</h2>
      <UserLayout></UserLayout> */}

      {/* Bài 8 */}
      {/* <h2>Giao diện danh sách tài khoản</h2>
      <ListAccount></ListAccount> */}
    </>
  );
}

export default App;