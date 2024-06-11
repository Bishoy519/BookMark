var input1 = document.querySelector("#firstInput");
var input2 = document.querySelector("#secondInput");
var placeHolder = document.querySelector("#placeHolder");
var deleteBtn = document.querySelector("#deleteBtn");
var visitBtn = document.querySelector("#visitBtn");
var element = document.querySelector("#notes");
var data;

if (localStorage.getItem('bookData') !== null) {
    data = JSON.parse(localStorage.getItem("bookData"));
    displayData();
}


function addData() {
    if(valid() == true){
    var wholeData = {
        bookName: input1.value,
        urlName: input2.value,
    };

    
    // valid()
    data.push(wholeData);
    clear();
    displayData();
    localStor();
}else{
    console.log("no add");
}
}

function localStor() {
    localStorage.setItem("bookData", JSON.stringify(data));
}

function clear() {
    input1.value = null;
    input2.value = null;
}

function displayData() {
    var cartona = ``;
    for (var i = 0; i < data.length; i++) {
        cartona += `<tr>
            <th scope="row">${i + 1}</th>
            <td>${data[i].bookName}</td>
            <td><button onclick="visi(${i})" id="visitBtn" class="btn btn-success btn-md"><i class="fa-regular fa-eye me-1"></i>Visit</button>
            </td>
            <td><button onclick="deleteData(${i})" id="deleteBtn"class="btn btn-danger btn-md"> <i class="fa-solid fa-trash-can me-1"></i>Delete</button></td>
          </tr>`
    }
    placeHolder.innerHTML = cartona;
}

function visi(index) {
    window.open(data[index].urlName, "_blank");
}
function deleteData(index) {
    data.splice(index, 1);
    localStor();
    displayData();
}

function valid(){
    var regex = {
        firstInput: /^[a-z0-9_-]{3,15}$/,
        secondInput: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
    }
    if(regex.firstInput.test(input1.value) && regex.secondInput.test(input2.value)){
        element.classList.remove("d-block");
        element.classList.add("d-none");
        return true
        }else{
            element.classList.remove("d-none");
            element.classList.add("d-block");
            return false
            
}
}






