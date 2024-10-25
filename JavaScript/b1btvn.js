var student = {
    name : "duy" ,
    age: 20,
    grade: 7.0,
    isGraduated: false,
    updateGrade: function(newGrade){
        this.grade = newGrade
    },
    graduate: function(){
        this.isGraduated = true
    },
    printInfo: function(){
        console.log("Tên: " + student.name )
        console.log("Tuổi: " + student.age )
        console.log("Điểm: " + student.grade )
        console.log("Trạng thái: " + student.isGraduated )

    }
    
}
// student.updateGrade(2)
// student.graduate()
// student.printInfo()

function callback(student){
    student.printInfo()
}

var StudentManager = {
    students:  [],
    addStudent: function(student){
        this.students.push(student)
    },
    findStudentFindName: function(name, callback){
        let y = 1;
        for(let x in this.students){
            if(this.students[x].name == name){
                y = 0
                callback(this.students[x])
            }
        }
        
        if(y===1){
            console.log("không tìm thấy")
        }
    },
}
StudentManager.addStudent(student)
StudentManager.findStudentFindName("duy", callback)

