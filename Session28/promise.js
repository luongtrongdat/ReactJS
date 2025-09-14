function getDataFromAPI1() {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("lấy dữ liệu từ API1 tải lên giao diện thành công");
            res();
        }, 2000);
    })
}
function getDataFromAPI2() {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("lấy dữ liệu từ API2 tải lên giao diện thành công");
            res();
        }, 2000);
    })
}
function getDataFromAPI3() {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("lấy dữ liệu từ API3 tải lên giao diện thành công");
            res();
        }, 2000);
    })
}
function runAllTask() {
    getDataFromAPI1
    .then(() => getDataFromAPI2())
    .then(() => getDataFromAPI3())
    .then(() => console.log("Tất cả tác vụ đã được hoàn thành"))
    .catch((err) => {
        console.log("Lỗi", err)
    });
}
runAllTask();