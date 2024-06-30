const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector('main');
const rest = document.querySelector(".rest")

const attendanceDate = document.getElementById('attendance-date');

// Dummy data
totalStudents =[366, 372]

const dateData = {
    '0000-00-00':{
        totalStudentsAttended: [0, 0],
        lateArrivals: [0, 0],
        earlyDepartures: [0, 0]
    },
    '2024-06-26': {
        totalStudentsAttended: [350, 360],
        lateArrivals: [10, 25],
        earlyDepartures: [5, 9]
    },
    '2024-06-27': {
        totalStudentsAttended: [360, 350],
        lateArrivals: [8, 22],
        earlyDepartures: [7, 12]
    }
    // Add more date
};

document.addEventListener('DOMContentLoaded', (e) => {
    const today = new Date().toISOString().split('T')[0];
    attendanceDate.value = today;
});

function updateCharts(date) {
    const data = dateData[date] || dateData['0000-00-00'];
    const {totalStudentsAttended, lateArrivals, earlyDepartures } = data;

    const box1 = document.querySelectorAll(".box1");
    const box2 = document.querySelectorAll(".box2");
    const box3 = document.querySelectorAll(".box3");

    for (let i = 0; i < box1.length; i++) {
        box1[i].innerHTML = `Total Attendance
            <svg width="200" height="200" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21" cy="21" r="15.91549431" fill="none" stroke="#303030" stroke-width="5" />
                <circle cx="21" cy="21" r="15.91549431" fill="none" stroke="#1ac9c9" stroke-width="4"
                    stroke-dasharray="${totalStudentsAttended[i]/totalStudents[i] * 100},100" stroke-dashoffset="0" />
                <circle cx="21" cy="21" r="12.5" fill="white" />
                <text x="21" y="20.5" text-anchor="middle" font-size="6" font-weight="bold" fill="#000">${totalStudentsAttended[i]}</text>
                <text x="21" y="21.5" text-anchor="middle" font-size="6" font-weight="bold" fill="#000">____</text>
                <text x="21" y="27.5" text-anchor="middle" font-size="6" font-weight="bold" fill="#000">${totalStudents[i]}</text>
            </svg>
            <div class="smallfont">Total Absent - ${totalStudents[i] - totalStudentsAttended[i]}</div>`;
        
        box2[i].innerHTML = `Late Arrivals
            <svg width="200" height="200" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21" cy="21" r="15.91549431" fill="none" stroke="#303030" stroke-width="5" />
                <circle cx="21" cy="21" r="15.91549431" fill="none" stroke="#1ac9c9" stroke-width="4"
                    stroke-dasharray="${lateArrivals[i]/totalStudentsAttended[i]*100},100" stroke-dashoffset="0" />
                <circle cx="21" cy="21" r="12.5" fill="white" />
                <text x="21" y="20.5" text-anchor="middle" font-size="6" font-weight="bold" fill="#000">${lateArrivals[i]}</text>
                <text x="21" y="21.5" text-anchor="middle" font-size="6" font-weight="bold" fill="#000">____</text>
                <text x="21" y="27.5" text-anchor="middle" font-size="6" font-weight="bold" fill="#000">${totalStudentsAttended[i]}</text>
            </svg>`;
        
        box3[i].innerHTML = `Early Departures
            <svg width="200" height="200" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21" cy="21" r="15.91549431" fill="none" stroke="#303030" stroke-width="5" />
                <circle cx="21" cy="21" r="15.91549431" fill="none" stroke="#1ac9c9" stroke-width="4"
                    stroke-dasharray="${earlyDepartures[i]/totalStudentsAttended[i]*100},100" stroke-dashoffset="0" />
                <circle cx="21" cy="21" r="12.5" fill="white" />
                <text x="21" y="20.5" text-anchor="middle" font-size="6" font-weight="bold" fill="#000">${earlyDepartures[i]}</text>
                <text x="21" y="21.5" text-anchor="middle" font-size="6" font-weight="bold" fill="#000">____</text>
                <text x="21" y="27.5" text-anchor="middle" font-size="6" font-weight="bold" fill="#000">${totalStudentsAttended[i]}</text>
            </svg>`;
    }
}

attendanceDate.addEventListener('change', (event) => {
    const selectedDate = event.target.value;
    updateCharts(selectedDate);
});

function hideSidebar() {
    if (sidebar) {
        sidebar.style.transition = "all 0.3s";
        sidebar.style.display = "none";
    }
    menu.style.position= "sticky";
    menu.style.top = "0"
    menu.style.height = "30px"
    rest.style.width = "95%"

    main.prepend(menu);
    menu.removeEventListener("click", hideSidebar);
    menu.addEventListener("click", showSidebar);
}

function showSidebar() {
    if (sidebar) {
        sidebar.style.display = "";
    }
    sidebar.prepend(menu);
    menu.removeEventListener("click", showSidebar);
    menu.addEventListener("click", hideSidebar);
}

menu.addEventListener("click", hideSidebar);


updateCharts(attendanceDate.value || new Date().toISOString().split('T')[0]);
