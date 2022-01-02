function Validation () {
    this.checkEmpty = function(value, spanId, message) {
        if(value.trim() == '') {
            document.getElementById(spanId).innerHTML = message
            document.getElementById(spanId).style.display = "block"
            return false
        }
        else {
            document.getElementById(spanId).innerHTML = ''
            document.getElementById(spanId).style.display = "none"
            return true
        }
     
    }
    this.checkName = function (value, spanId, message) {
        var pattern = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ"
        + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ"
        + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$"

        var regex = new RegExp(pattern)
        if(regex.test(value)) {
            document.getElementById(spanId).innerHTML = ''
            document.getElementById(spanId).style.display = "none"
            return true

        }
        else {

            document.getElementById(spanId).innerHTML = message
            document.getElementById(spanId).style.display = "block"
            return false
        }

    }
    this.checkEmail = function (value, spanId, message) {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(regex.test(value)) {
            document.getElementById(spanId).innerHTML = ''
            document.getElementById(spanId).style.display = "none"
            return true

        }
        else {

            document.getElementById(spanId).innerHTML = message
            document.getElementById(spanId).style.display = "block"
            return false
        }
    }
    this.checkPassWord = function (value, spanId, message) {
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/
        if(regex.test(value)) {
            document.getElementById(spanId).innerHTML = ''
            document.getElementById(spanId).style.display = "none"
            return true

        }
        else {

            document.getElementById(spanId).innerHTML = message
            document.getElementById(spanId).style.display = "block"
            return false
        }
    }
    this.checkDayWork = function (value, spanId, message) {
        var presentDay = new Date()
        var valueDay = new Date(value)
        var day = valueDay.getDate()
        var year = valueDay.getFullYear()
        var month = valueDay.getMonth()
        var trueDay = `${day}-${month+1}-${year}`
        var presentday = presentDay.getDate()
        var presentyear = presentDay.getFullYear()
        var presentmonth = presentDay.getMonth()
        var timeDay = `${presentday}-${presentmonth+1}-${presentyear}`
        
        if(timeDay == trueDay) {
           
                document.getElementById(spanId).innerHTML = message
                document.getElementById(spanId).style.display = "block"
                return false

          
        }
        else if(value == '') {
            document.getElementById(spanId).innerHTML = message
                document.getElementById(spanId).style.display = "block"
                return false

        }
        else {
            document.getElementById(spanId).innerHTML = ''
            document.getElementById(spanId).style.display = "none"
            return true

        }
    }
    this.checkSalary = function (value, spanId, message) {
        var regex = /^[0-9]+$/
        if(regex.test(Number(value))) {
            document.getElementById(spanId).innerHTML = ''
            document.getElementById(spanId).style.display = "none"
            return true

        }
        else {

            document.getElementById(spanId).innerHTML = message
            document.getElementById(spanId).style.display = "block"
            return false
        }
    }
    this.checkSelect = function(seclecId, spanId, message) {
        if(document.getElementById(seclecId).selectedIndex != 0) {
            document.getElementById(spanId).innerHTML = ''
            document.getElementById(spanId).style.display = "none"
            return true

        }
        else {

            document.getElementById(spanId).innerHTML = message
            document.getElementById(spanId).style.display = "block"
            return false
        }
    }
    this.checkAccount = function (value, spanId, message, staffs) {
        var isExist = false
         isExist = staffs.some(function(staff) {
             return value === staff.account
         })
        
            if(isExist) {
                document.getElementById(spanId).innerHTML = message
                document.getElementById(spanId).style.display = "block"
                return false
            }
            else {
                
                document.getElementById(spanId).innerHTML = ''
                 document.getElementById(spanId).style.display = "none"
                return true
        }
        
    }
}