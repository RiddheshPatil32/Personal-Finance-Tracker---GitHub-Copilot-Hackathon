let cnt = 0;
let cnte = 0;
let total = 0;
let total_income = 0;
let total_expense = 0;
let edit_income = -1;
let edit_expense = -1;

function logout(params) {
    sessionStorage.clear();
    window.location.href = "signin.html";          
}


document.getElementById("addExpense").addEventListener("click", function () {
    document.getElementById("myPopup").classList.add("show");
});

closePopup.addEventListener("click", function () {
    let desc = document.getElementById("expense").value;
    let amount = document.getElementById("expense_value").value;
    let date = document.getElementById("date").value;
    if(desc != "" && amount != "" && date != ""){
        let div = document.createElement("div");
        div.setAttribute("id", `dive${cnte}`);
        div.setAttribute("class", "entry");
        let p1 = document.createElement("span");
        p1.setAttribute("id", `pe1${cnte}`);
        p1.setAttribute("style", "margin-right:0.5%");
        let p2 = document.createElement("span");
        p2.setAttribute("id", `pe2${cnte}`);
        p2.setAttribute("style", "color:red");
        p2.setAttribute("style", "margin-right:0.5%");
        let p3 = document.createElement("span");
        p3.setAttribute("id", `pe3${cnte}`);
        p3.setAttribute("style", "margin-right:0.5%");
        let p4 = document.createElement("button");
        p4.setAttribute('id', `${cnte}`);
        p4.setAttribute('onclick', 'deleteDive(event)');
        p4.setAttribute('style', 'background-color:red');
        p4.setAttribute("style", "margin-right:0.5%");
        let p5 = document.createElement("button");
        p5.setAttribute('id', `${cnte}`);
        p5.setAttribute('onclick', 'editExpense(event)');
        p5.setAttribute('style', 'background-color:lightblue');
        p5.setAttribute("style", "margin-right:0.5%");
        cnte++;
        p1.innerHTML = desc;
        p2.innerHTML = amount;
        p3.innerHTML = date;
        p4.innerHTML = "X";
        p5.innerHTML = "edit";
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(p4);
        div.appendChild(p5);
        document.getElementById("expense_data").appendChild(div);
       document.getElementById("myPopup").classList.remove("show");
       document.getElementById("expense").value = "";
       document.getElementById("expense_value").value = "";
       document.getElementById("date").value = "";
        totalExpense();
        totalIncome();
       document.getElementById("details").innerText = `Total Income: ${total_income} Total Expense: ${total_expense} Balance: ${total_income - total_expense}`;   
    }else{
        alert("Please fill all the fields");
    }
});

document.getElementById("close").addEventListener("click", function () {
    document.getElementById("myPopup").classList.remove("show");
});

document.getElementById("close1").addEventListener("click", function () {
    document.getElementById("myPopup1").classList.remove("show");
});

document.getElementById("close2").addEventListener("click", function () {
    document.getElementById("myPopup2").classList.remove("show");
});

document.getElementById("close3").addEventListener("click", function () {
    document.getElementById("myPopup3").classList.remove("show");
});

document.getElementById("addIncome").addEventListener("click", function () {
    document.getElementById("myPopup1").classList.add("show");
});


closePopup1.addEventListener("click", function () {
    let desc = document.getElementById("income").value;
    let amount = document.getElementById("income_value").value;
    let date = document.getElementById("date1").value;
    if(desc != "" && amount != "" && date != ""){
        let div = document.createElement("div");
        div.setAttribute("id", `div${cnt}`);
        div.setAttribute("class", "entry");
        let p1 = document.createElement("span");
        p1.setAttribute("id",`p1${cnt}`);
        let p2 = document.createElement("span");
        p2.setAttribute("id", `p2${cnt}`);
        p2.setAttribute("style", "color:green");
        let p3 = document.createElement("span");
        p3.setAttribute("id", `p3${cnt}`);
        let p4 = document.createElement("button");
        p4.setAttribute('id', `${cnt}`);
        p4.setAttribute('onclick', 'deleteDiv(event)');
        p4.setAttribute('style', 'background-color:red');
        let p5 = document.createElement("button");
        p5.setAttribute('id', `${cnt}`);
        p5.setAttribute('style', 'background-color:lightblue');
        p5.setAttribute('onclick', 'editIncome(event)');
        cnt++;
        p1.innerHTML = desc;
        p2.innerHTML = amount;
        p3.innerHTML = date;
        p4.innerHTML = "X";
        p5.innerHTML = "edit";
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(p4);
        div.appendChild(p5);
       document.getElementById("income_data").appendChild(div);
       document.getElementById("myPopup1").classList.remove("show");
       document.getElementById("income").value = "";
       document.getElementById("income_value").value = "";
       document.getElementById("date1").value = "";
        totalExpense();
        totalIncome();
       document.getElementById("details").innerText = `Total Income: ${total_income} Total Expense: ${total_expense} Balance: ${total_income - total_expense}`;
    }else{
        alert("Please fill all the fields");
    }
});

closePopup2.addEventListener("click", function () { 
    let desc = document.getElementById("income2").value;
    let amount = document.getElementById("income_value2").value;
    let date = document.getElementById("date2").value;
    if ( desc != "" && amount != "" && date != "") {
        let p1 = document.getElementById(`p1${edit_income}`);
        let p2 = document.getElementById(`p2${edit_income}`);
        let p3 = document.getElementById(`p3${edit_income}`);
        p1.innerText = desc;
        p2.innerText = amount;
        p3.innerText = date;
        document.getElementById("myPopup2").classList.remove("show");
        document.getElementById("income2").value = "";
        document.getElementById("income_value2").value = "";
        document.getElementById("date2").value = "";
        totalExpense();
        totalIncome();
        document.getElementById("details").innerText = `Total Income: ${total_income} Total Expense: ${total_expense} Balance: ${total_income - total_expense}`;
        edit_income = -1;
    }
});

closePopup3.addEventListener("click", function () {
    let desc = document.getElementById("expense2").value;
    let amount = document.getElementById("expense_value2").value;
    let date = document.getElementById("date3").value;
    if (desc != "" && amount != "" && date != "") {
        let p1 = document.getElementById(`pe1${edit_expense}`);
        let p2 = document.getElementById(`pe2${edit_expense}`);
        let p3 = document.getElementById(`pe3${edit_expense}`);
        p1.innerText = desc;
        p2.innerText = amount;
        p3.innerText = date;
        document.getElementById("myPopup3").classList.remove("show");
        document.getElementById("expense2").value = "";
        document.getElementById("expense_value2").value = "";
        document.getElementById("date3").value = "";
        totalExpense();
        totalIncome();
        document.getElementById("details").innerText = `Total Income: ${total_income} Total Expense: ${total_expense} Balance: ${total_income - total_expense}`;
        edit_expense = -1;
    }
});

function deleteDiv(event) {
    let id = event.target.id;
    let div = document.getElementById(`div${id}`);
    let amount = document.getElementById(`p2${id}`).innerText;
    div.remove();
    //iterate all divs and update id
    let divs = document.getElementById("income_data").children;         
    for(let i = 0; i < divs.length; i++){
        divs[i].setAttribute("id", `div${i}`);
        let chlds = divs[i].children;
        chlds[0].setAttribute("id", `p1${i}`);
        chlds[1].setAttribute("id", `p2${i}`);
        chlds[2].setAttribute("id", `p3${i}`);
        chlds[3].setAttribute("id", `${i}`);
    }
    cnt = divs.length;
    totalExpense();
    totalIncome();
    document.getElementById("details").innerText = `Total Income: ${total_income} Total Expense: ${total_expense} Balance: ${total_income - total_expense}`;
}

function deleteDive(event) {
    let id = event.target.id;
    let div = document.getElementById(`dive${id}`);
    let amount = document.getElementById(`pe2${id}`).innerText;
    div.remove();
    //iterate all divs and update id
    let divs = document.getElementById("expense_data").children;
    for (let i = 0; i < divs.length; i++) {
        divs[i].setAttribute("id", `dive${i}`);
        let chlds = divs[i].children;
        chlds[0].setAttribute("id", `pe1${i}`);
        chlds[1].setAttribute("id", `pe2${i}`);
        chlds[2].setAttribute("id", `pe3${i}`);
        chlds[3].setAttribute("id", `${i}`);
    }
    cnte = divs.length;
    totalExpense();
    totalIncome();
    document.getElementById("details").innerText = `Total Income: ${total_income} Total Expense: ${total_expense} Balance: ${total_income - total_expense}`;
}

function editIncome(event){
    edit_income = event.target.id;
    document.getElementById("myPopup2").classList.add("show");
    document.getElementById("income2").value = document.getElementById(`p1${event.target.id}`).innerText;
    document.getElementById("income_value2").value = document.getElementById(`p2${event.target.id}`).innerText;
    document.getElementById("date2").value = document.getElementById(`p3${event.target.id}`).innerText;
}

function editExpense(event) {
    edit_expense = event.target.id;
    console.log(event.target.id);
    document.getElementById("myPopup3").classList.add("show");
    document.getElementById("expense2").value = document.getElementById(`pe1${event.target.id}`).innerText;
    document.getElementById("expense_value2").value = document.getElementById(`pe2${event.target.id}`).innerText;
    document.getElementById("date3").value = document.getElementById(`pe3${event.target.id}`).innerText;
}

function totalIncome(){
    let divs = document.getElementById("income_data").children;
    total_income = 0;
    for(let i = 0;i<divs.length;i++){
        total_income += parseInt(divs[i].children[1].innerText);
    }
}

function totalExpense() {
    let divs = document.getElementById("expense_data").children;
    total_expense = 0;
    for (let i = 0; i < divs.length; i++) {
        total_expense += parseInt(divs[i].children[1].innerText);
    }
}

