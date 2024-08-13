function checkTN() {
    var gpa = document.getElementById('gpa').value;
    if(gpa >= 3.6) {
        alert('Tốt nghiệp loại XS');
    } else if(gpa >= 3.2) {
        alert('Tốt nghiệp loại Giỏi');
    } else if(gpa >= 2.5) {
        alert('Tốt nghiệp loại Khá');
    } else if(gpa >= 2) {
        alert('Tốt nghiệp loại TB');
    } else {
        alert('Dữ liệu không hợp lệ')
    }
}

