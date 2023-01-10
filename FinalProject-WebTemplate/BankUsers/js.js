
let users = []
let btn = document.getElementById("btn")
let table = document.getElementById("table")
let form = document.querySelector("form")

if (localStorage.getItem("users") != null) JSON.parse(localStorage.localStorage)
 



function addUsesrs(uId, uName, uBalance) {
    let user = {
            ID: uId,
            name: uName,
            balance: uBalance,
        }
    users.push(user);
    localStorage.setItem("usersList" , JSON.stringify(users))
    console.table(users)
}
    
    

function show() {
    table.innerText = ""
    console.log(users)
    users =JSON.parse(localStorage.getItem("usersList"))
    users.forEach((item, index, arr) => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let editBtn = document.createElement("Button")
        editBtn.innerHTML = "Edit Balance"
        editBtn.classList.add("btn" , "btn-success", "me-2")
        editBtn.addEventListener('click', function(){
            editUser(index)
        })
        let delBtn = document.createElement("Button")
        delBtn.innerHTML = "Delete User"
        delBtn.classList.add("btn" , "btn-danger")
        delBtn.addEventListener('click' , function(){
            deleteUser(index)
        })
        td4.appendChild(editBtn)
        td4.appendChild(delBtn)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        table.appendChild(tr)
    td1.innerText = item.ID
    td2.innerHTML = item.name
    td3.innerHTML = item.balance
    })
    
    // td4.innerHTML = editUser()
}
form.addEventListener('submit' , function(e){
    e.preventDefault()
    addUsesrs(e.target.elements.id.value, e.target.elements.name.value, e.target.elements.balance.value)
    show();

})

function editUser(index) {

        let newBalance = prompt("Enter new balance")
        users[index].balance = newBalance
        localStorage.setItem("usersList" , JSON.stringify(users))
        show()
        console.table(users)
        
    }
        
    


function deleteUser(index) {
    
    users.splice(index, 1)
    localStorage.setItem("usersList" , JSON.stringify(users))
    
    console.table(users)
    show()
    
}
show()