var staffs = new staffListManager()
var validation = new Validation()
getLocalStorage()
function getStaff() {
    var account = document.getElementById("tknv").value;
    var staffName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var workDay = document.getElementById("datepicker").value;
    var salaryBase = document.getElementById("luongCB").value;
    var positionWork = document.getElementById("chucvu").value;
    var timeWork = document.getElementById("gioLam").value

    var staff = new Staff(account, staffName, email, password, workDay, salaryBase, positionWork, timeWork)
    staff.softStaff()
    if(staff.positionWork === "Sếp") {
        staff.salaryManager()
    }
    else if(staff.positionWork === "Trưởng phòng") {
        staff.salaryTruongPhong()

    }
    else if(staff.positionWork === "Nhân viên") {
        staff.salaryStaff()

    }
    var isValid = true
    // account
    isValid &= validation.checkEmpty(account, "tbTKNV", "Trường này không được để trống") && validation.checkAccount(account, "tbTKNV", "Tài khoản này đã tồn tại", staffs.staffList)
    // name
    isValid &= validation.checkEmpty(staffName, "tbTen", "Trường này không được để trống") && validation.checkName(staffName, "tbTen", "Tên chỉ được chưa kí tự chữ")
    // email
    isValid &= validation.checkEmpty(email, "tbEmail", "Trường này không được để trống") && validation.checkEmail(email, "tbEmail", "Vui lòng nhập đúng email")
    // password
    isValid &= validation.checkEmpty(password, "tbMatKhau", "Trường này không được để trống") && validation.checkPassWord(password, "tbMatKhau", "Mật khẩu có độ dài kí tư 6 - 10 kí tự, phải chứa kí tự số, kí tự đặc biệt")
    // day 
    
    isValid &= validation.checkDayWork(workDay, "tbNgay", "Vui lòng chọn ngày làm việc")
    // salary
    isValid &= validation.checkEmpty(salaryBase, "tbLuongCB", "Trường này không được để trống") && validation.checkSalary(salaryBase, "tbLuongCB", "Lương bằng số và không có dấu chấm ngăn cách giữa các chữ số")
    // Chọn chức vụ
    isValid &= validation.checkSelect("chucvu", "tbChucVu", "Vui lòng chọn chức vụ của bạn")
    // timeWork
    isValid &= validation.checkEmpty(timeWork, "tbGiolam", "Trường này không được để trống") && validation.checkSalary(timeWork, "tbGiolam", "Giờ bằng số và không có dấu chấm ngăn cách giữa các chữ số")

    if(isValid) {
        staffs.staffList.push(staff)
        showStaff(staffs.staffList)
        setLocalStorage(staffs.staffList) 
        document.getElementById("tknv").value = '';
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
        document.getElementById("datepicker").value = '';
        document.getElementById("luongCB").value = '';
       document.getElementById("chucvu").value = '';
        document.getElementById("gioLam").value = '';
    }
}


function showStaff(staffs) {
  var html = staffs.map(function(staff, index) {
        var htmls = `<tr>
        <td>${staff.account}</td>
        <td>${staff.staffName}</td>
        <td>${staff.email}</td>
        <td>${staff.workDay}</td>
        <td>${staff.positionWork}</td>
        <td>${staff.totalSalary}</td>
        <td>${staff.typeOfStaff}</td>
        <td >
        <button onclick={deleteStaffs(${index})} class="btn btn-danger">Xóa</button>
        </td>
        <td>
        <button  onclick={watchStaffs(${index})} class="btn btn-info" >Xem</button>
        </td>
        </tr>`
        
        return htmls
   })
   document.getElementById("tableDanhSach").innerHTML = html.join('')
}

function setLocalStorage(staffs) {
    localStorage.setItem("listStaff", JSON.stringify(staffs))
}

function getLocalStorage() {
    if(localStorage.getItem("listStaff") != null) {
        staffs.staffList = JSON.parse(localStorage.getItem("listStaff"))
        showStaff(staffs.staffList)

    }
}
function deleteStaffs(index) {
    staffs.deleteStaff(index)
    setLocalStorage(staffs.staffList)
    showStaff(staffs.staffList)
}
function watchStaffs(id) {
    var staff = staffs.staffList[id]
    staffs.findStaff(id)
      document.getElementById("tknv").value = staff.account;
     document.getElementById("name").value = staff.staffName;
     document.getElementById("email").value = staff.email;
     document.getElementById("password").value = staff.password;
     document.getElementById("datepicker").value = staff.workDay;
     document.getElementById("luongCB").value = staff.salaryBase;
    document.getElementById("chucvu").value = staff.positionWork;
     document.getElementById("gioLam").value = staff.timeWork;

}

function updateStaffs() {
    var account = document.getElementById("tknv").value;
    var staffName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var workDay = document.getElementById("datepicker").value;
    var salaryBase = document.getElementById("luongCB").value;
    var positionWork = document.getElementById("chucvu").value;
    var timeWork = document.getElementById("gioLam").value
    var staff = new Staff(account, staffName, email, password, workDay, salaryBase, positionWork, timeWork)
    staff.softStaff()

    if(staff.positionWork === "Sếp") {
        staff.salaryManager()
        
    }
    else if(staff.positionWork === "Trưởng phòng") {
        staff.salaryTruongPhong()
        

    }
    else if(staff.positionWork === "Nhân viên") {
        staff.salaryStaff()
        

    }

    var isValid = true
    // account
    isValid &= validation.checkEmpty(account, "tbTKNV", "Trường này không được để trống")
    // name
    isValid &= validation.checkEmpty(staffName, "tbTen", "Trường này không được để trống") && validation.checkName(staffName, "tbTen", "Tên chỉ được chưa kí tự chữ")
    // email
    isValid &= validation.checkEmpty(email, "tbEmail", "Trường này không được để trống") && validation.checkEmail(email, "tbEmail", "Vui lòng nhập đúng email")
    // password
    isValid &= validation.checkEmpty(password, "tbMatKhau", "Trường này không được để trống") && validation.checkPassWord(password, "tbMatKhau", "Mật khẩu có độ dài kí tư 6 - 10 kí tự, phải chứa kí tự số, kí tự đặc biệt")
    // day 
    isValid &= validation.checkDayWork(workDay, "tbNgay", "Vui lòng chọn ngày làm việc")
    // salary
    isValid &= validation.checkEmpty(salaryBase, "tbLuongCB", "Trường này không được để trống") && validation.checkSalary(salaryBase, "tbLuongCB", "Lương bằng số và không có dấu chấm ngăn cách giữa các chữ số")
    // Chọn chức vụ
    isValid &= validation.checkSelect("chucvu", "tbChucVu", "Vui lòng chọn chức vụ của bạn")
    // timeWork
    isValid &= validation.checkEmpty(timeWork, "tbGiolam", "Trường này không được để trống") && validation.checkSalary(timeWork, "tbGiolam", "Giờ bằng số và không có dấu chấm ngăn cách giữa các chữ số")

    if(isValid) {
        
        staffs.updateStaff(staff)
        setLocalStorage(staffs.staffList)
        showStaff(staffs.staffList)
        
    }
    

}

document.getElementById("btnDong").onclick = function () {
    document.getElementById("tknv").value = '';
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
    document.getElementById("datepicker").value = '';
    document.getElementById("luongCB").value = '';
   document.getElementById("chucvu").value = '';
    document.getElementById("gioLam").value = '';
}

document.getElementById('btnTimNV').onclick = function () {
    var keyWord = document.getElementById("searchName").value.trim()

    
    var newStaffs = staffs.searchStaff(keyWord)
    showStaff(newStaffs)

}
document.getElementById("searchName").addEventListener("keyup", function () {
    var keyWord = document.getElementById("searchName").value.trim()

    
    var newStaffs = staffs.searchStaff(keyWord)
    showStaff(newStaffs)
})
