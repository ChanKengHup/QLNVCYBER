function Staff(account, staffName, email, password, workDay, salaryBase, positionWork, timeWork) {
    this.account = account
    this.staffName = staffName
    this.email = email
    this.password = password
    this.workDay = workDay
    this.salaryBase = salaryBase
    this.positionWork = positionWork
    this.timeWork = timeWork
    this.totalSalary = 0
    this.typeOfStaff = ""
    this.salaryManager = function () {
        this.totalSalary = this.salaryBase * 3
    }
    this.salaryTruongPhong = function () {
        this.totalSalary = this.salaryBase * 2
    }
    this.salaryStaff = function () {
        this.totalSalary = this.salaryBase * 1
    }
    this.softStaff = function () {
         if( this.timeWork >= 192) {
            return this.typeOfStaff +="Nhân viên xuất sắc"
        }
        else if(this.timeWork >= 176) {
            return this.typeOfStaff +="Nhân viên giỏi"
        }
        else if(this.timeWork >= 160) {
            return this.typeOfStaff +="Nhân viên khá"
        } 
        else if(this.timeWork < 160) {
            return this.typeOfStaff +="Nhân viên trung bình"
        }
    }
}