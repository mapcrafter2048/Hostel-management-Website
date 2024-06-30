// Sidebar
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const rest = document.querySelector(".rest");
const main = document.querySelector('main');
function hideSidebar() {
    if (sidebar) {
        sidebar.style.display = "none";
    }
    // Move the menu button outside the sidebar
    menu.style.position= "sticky";
    menu.style.top = "0"
    menu.style.height = "30px"
    rest.style.width = "95%"
    main.prepend(menu);
}

// Function to show the sidebar and move the menu inside
function showSidebar() {
    if (sidebar) {
        sidebar.style.display = "";
    }
    // Move the menu button back inside the sidebar
    sidebar.prepend(menu);
}

// Initial setup
menu.addEventListener("click", () => {
    if(sidebar.style.display === "none")
        showSidebar()
    else
    hideSidebar()
});

// Atendance Boxes
totalDays = 366
totalDaysAttended = 350
lateArrivals = 10
earlyDepartures = 5

const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")

box1.innerHTML = `Total Days Attended
                    <svg width="200" height="200" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="21" cy="21" r="15.91549431" fill="none" stroke="#4D4D4D" stroke-width="5" />
                        <circle cx="21" cy="21" r="15.91549431" fill="none" stroke="#29ABE2" stroke-width="4"
                            stroke-dasharray="${totalDaysAttended/totalDays * 100},100" stroke-dashoffset="0" />
                        <circle cx="21" cy="21" r="12.5" fill="white" />
                        <text x="21" y="20.5" text-anchor="middle" font-size="6" font-weight="bold" fill="#000">${totalDaysAttended}</text>
                        <text x="21" y="21.5" text-anchor="middle" font-size="6" font-weight="bold"
                            fill="#000">____</text>
                        <text x="21" y="27.5" text-anchor="middle" font-size="6" font-weight="bold"
                            fill="#000">${totalDays}</text>
                    </svg>
                    <div class="smallfont">Total Absent - ${totalDays - totalDaysAttended}</div>`

box2.innerHTML = `Late Arrivals
                    <svg width="200" height="200" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="21" cy="21" r="15.91549431" fill="none" stroke="#4D4D4D" stroke-width="5" />
                        <circle cx="21" cy="21" r="15.91549431" fill="none" stroke="#29ABE2" stroke-width="4"
                            stroke-dasharray="${lateArrivals/totalDaysAttended*100},100" stroke-dashoffset="0" />
                        <circle cx="21" cy="21" r="12.5" fill="white" />
                        <text x="21" y="20.5" text-anchor="middle" font-size="6" font-weight="bold" fill="#000">${lateArrivals}</text>
                        <text x="21" y="21.5" text-anchor="middle" font-size="6" font-weight="bold"
                            fill="#000">____</text>

                        <text x="21" y="27.5" text-anchor="middle" font-size="6" font-weight="bold"
                            fill="#000">${totalDaysAttended}</text>
                    </svg>`

box3.innerHTML = `Early Departures
                    <svg width="200" height="200" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="21" cy="21" r="15.91549431" fill="none" stroke="#4D4D4D" stroke-width="5" />
                        <circle cx="21" cy="21" r="15.91549431" fill="none" stroke="#29ABE2" stroke-width="4"
                            stroke-dasharray="${earlyDepartures/totalDaysAttended*100},100" stroke-dashoffset="0" />
                        <circle cx="21" cy="21" r="12.5" fill="white" />
                        <text x="21" y="20.5" text-anchor="middle" font-size="6" font-weight="bold" fill="#000">${earlyDepartures}</text>
                        <text x="21" y="21.5" text-anchor="middle" font-size="6" font-weight="bold"
                            fill="#000">____</text>

                        <text x="21" y="27.5" text-anchor="middle" font-size="6" font-weight="bold"
                            fill="#000">${totalDaysAttended}</text>
                    </svg>
                </div>`


// Calendar
const calendarEl = document.getElementById('calendar');
const yearSelect = document.getElementById('year-select');
const monthSelect = document.getElementById('month-select');
const startYear = 2024
const endYear = 2028
const AcademicStartMonth = 5
const AcademicEndMonth = 5
const colors = ['color1', 'color2', 'color3', 'color4', 'color5'];
const months = [
    { value: 0, name: "January" }, 
    { value: 1, name: "February" }, 
    { value: 2, name: "March" }, 
    { value: 3, name: "April" }, 
    { value: 4, name: "May" },
    { value: 5, name: "June" },
    { value: 6, name: "July" },
    { value: 7, name: "August" }, 
    { value: 8, name: "September" }, 
    { value: 9, name: "October" }, 
    { value: 10, name: "November" }, 
    { value: 11, name: "December" }, 
    
];
// Populate year dropdown
function populateYearDropdown(startYear, endYear) {
    for (let year = startYear; year <= endYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
    yearSelect.value =new Date().toISOString().split('T')[0].split("-")[0]
}

// Populate month dropdown based on selected year
function populateMonthDropdown(year) {
    monthSelect.innerHTML = '';
    if (year == startYear) {
        for (let i = AcademicStartMonth-1; i < months.length; i++) {
                const option = document.createElement('option');
                option.value = months[i].value;
                option.textContent = months[i].name;
                monthSelect.appendChild(option);
        }
    } else if (year == endYear) {
        for (let i = 0; i < AcademicEndMonth; i++) {
                const option = document.createElement('option');
                option.value = months[i].value;
                option.textContent = months[i].name;
                monthSelect.appendChild(option);
        }
    } else {
        for (let i = 0; i < months.length; i++) {
            const option = document.createElement('option');
            option.value = months[i].value;
            option.textContent = months[i].name;
            monthSelect.appendChild(option);
        }
    }
    if(year == new Date().toISOString().split('T')[0].split("-")[0])
    monthSelect.value = months[parseInt(new Date().toISOString().split('T')[0].split("-")[1])].value - 1
}

// Create calendar for a specific month and year
function createCalendar(year, monthIndex) {
    calendarEl.innerHTML = '';
    const monthNames = ["January", "February", "March", "April", "May", 
                        "June", "July", "August", "September", "October", 
                        "November", "December"];
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    const days = (monthIndex === 1 && isLeapYear(year)) ? 29 : daysInMonth[monthIndex];
    
    const monthEl = document.createElement('div');
    monthEl.classList.add('month');
    monthEl.innerHTML = `<h2>${monthNames[monthIndex]} ${year}</h2><div class="weekdays">
        <div>Sun</div><div>Mon</div><div>Tue</div>
        <div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div></div>`;
    
    const daysEl = document.createElement('div');
    daysEl.classList.add('days');
    
    // Fill empty days for alignment
    const firstDay = new Date(year, monthIndex, 1).getDay();
    for (let j = 0; j < firstDay; j++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day', 'empty');
        daysEl.appendChild(emptyDay);
    }
    
    // Fill actual days
    for (let day = 1; day <= days; day++) {
        const dayEl = document.createElement('div');
        dayEl.classList.add('day');
        dayEl.textContent = day;
        dayEl.classList.add(colors[(day - 1) % colors.length]);
        daysEl.appendChild(dayEl);
    }
    
    monthEl.appendChild(daysEl);
    calendarEl.appendChild(monthEl);    
}

// Check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Update calendar and month dropdown when year changes
yearSelect.addEventListener('change', () => {
    const year = parseInt(yearSelect.value);
    populateMonthDropdown(year);
    createCalendar(year, parseInt(monthSelect.value));
});

// Update calendar when month changes
monthSelect.addEventListener('change', () => {
    createCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
    // alert(typeof(monthSelect.value))
});

// Initialize
populateYearDropdown(startYear, endYear);
populateMonthDropdown(startYear);
createCalendar(startYear, AcademicStartMonth-1);
