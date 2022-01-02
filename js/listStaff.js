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
        if(this.position != -1) {
            this.staffList[this.position] = staff
            this.position = 0
        }
    }
    this.searchStaff = function (keyWord) {
        var keyWordLower = keyWord.toLowerCase()
       var newStaffs =  this.staffList.filter(function(staff) {
           var staffLower = staff.typeOfStaff.toLowerCase()

           var indexName = staffLower.indexOf(keyWordLower)
            return indexName > -1
        })
        return newStaffs
    
    }
}