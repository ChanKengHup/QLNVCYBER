function staffListManager() {
    this.staffList = []
    this.position = 0
    
    this.addStaff = function (staff) {
        this.staffList.push(staff)
    }

    this.deleteStaff = function(id) {
        this.staffList.splice(id, 1)
    }
    this.findStaff = function (id) {
        var position = id
        return this.position += position 
    }
    this.updateStaff = function (staff) {
       
        console.log(this.position);

        if(this.position != -1) {
            this.staffList[this.position] = staff
            this.position = 0
        }
    }
}