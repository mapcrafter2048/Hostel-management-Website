const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const rest = document.querySelector(".form")
const main = document.querySelector('main');
const dept = document.querySelector("#Department")
const prgrm = document.querySelector("#Programme")
const errorMessage = document.querySelector("#error-message");
const form = document.querySelector("form")
const fill = document.querySelectorAll(".form-group > :nth-child(2)")
console.log(fill)
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
    menu.removeEventListener("click", hideSidebar);
    menu.addEventListener("click", showSidebar);
}

// Function to show the sidebar and move the menu inside
function showSidebar() {
    if (sidebar) {
        sidebar.style.display = "";
    }
    // Move the menu button back inside the sidebar
    sidebar.prepend(menu);
    menu.removeEventListener("click", showSidebar);
    menu.addEventListener("click", hideSidebar);
}

// Initial setup
menu.addEventListener("click", hideSidebar);

department= {
    "BTech": ["Computer Science and Engineering", "Electrical Engineering", "Chemical Engineering", "Civil Engineering"],
    "MTech": ["Computer Science and Engineering", "Electrical Engineering", "Chemical Engineering", "Civil Engineering"],
    "MS" : ["Chemistry", "Physics"],
    "PHD": ["Maths", "Chemistry", "Physics"]
}

const updateDepartment = (element) => {
    dept.innerHTML = `<option value=""></option>`
    for (programme of department[element]){
        let newOption = document.createElement("option")
        newOption.innerText = programme;
        newOption.value = programme;
        dept.append(newOption)
    }
}
prgrm.addEventListener("change", () => {
    updateDepartment(prgrm.value)
})

form.addEventListener("submit", (e) =>{
    for (const options of fill) {
        options.style.border = ""
        if(options.value === ""){
            e.preventDefault()
            options.style.border = "2px solid red"
        }
    }
})