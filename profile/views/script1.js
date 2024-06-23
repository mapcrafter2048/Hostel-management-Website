//Creating a function toggleEdit for shoowing form
function toggleEdit() {
    var form = document.getElementById('edit-form');
    form.style.display = form.style.display === 'none' || form.style.display === '' ? 'block' : 'none';
}
function loadFile(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.style.display = 'block';

}
//changes need to be saved 
function saveChanges() {
    var name = document.getElementById('edit-name').value;
    var date = document.getElementById('Date').value;
    var email = document.getElementById('edit-email').value;
    var hostel = document.getElementById('hostel').value;
    var mobile_no=document.getElementById('mobile_no').value;
    
    var output=document.getElementById('output').src

    
    document.getElementById('profilepic').src=output;
    document.getElementById('name').innerText = name;
    document.getElementById('name').innerText = name;
    document.getElementById('dob').innerText = date;
    document.getElementById('hostel').innerText = hostel;
    document.getElementById('email').innerText=  email;
    document.getElementById('mobile').innerText = mobile_no;
    
    

    toggleEdit();
}