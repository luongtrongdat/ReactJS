



// Hàm hiện thị thông tin sinh viên
function printStudent():void {
    for (let i = 0; i < students.length; i++) {
        console.log(`Thông tin sinh viên thứ ${i + 1} : Name_ ${students[i].name}`);
    }
}
function updateStudent(id:number) {
    // Kiểm tra xem id có tồn tại hay không?
}
// hàm xóa sinh viên
function deleteStudent(id:number) {
    // Kiểm tra xem id có tồn tại hay không? Rồi xác nhận xóa.
}