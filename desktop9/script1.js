function createStudentList(url, name, roll_no, branch, ta, la, ed) {
    let a = `
    <div class="student-list">
        <div class="left_box">
            <div class="image">
                <img src="${url}" alt="">
            </div>
            <div class="student_info">
                <h3 id="student_name">${name}</h3>
                <p>${roll_no}</p>
                <p>${branch}</p>
            </div>
            <div class="attendence">
                <p>Total Attendance - ${ta}</p>
                <p>Late Arrivals - ${la}</p>
                <p>Early Departure - ${ed}</p>
            </div>
        </div>
        <div class="right_box">
            <div class="hostel">
                <h2>CV Raman</h2>
            </div>
            <div class="send_message">
                <p><a href="#messg">send message</a></p>
            </div>
        </div>
    </div>`;
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML+ a

}
let i=0;
while(i<20){
createStudentList("Rectangle.png","Hari Balan","230001029","sse","120/360","240/360","0/360")
i++;
}
