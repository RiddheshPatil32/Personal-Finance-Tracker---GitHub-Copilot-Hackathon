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
       document.getElementById("myPopup").classList.remove("show");
       document.getElementById("expense").value = "";
       document.getElementById("expense_value").value = "";
       document.getElementById("date").value = "";
    }else{
        alert("Please fill all the fields");
    }
});

document.getElementById("close").addEventListener("click", function () {
    document.getElementById("myPopup").classList.remove("show");
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
        let a = document.getElementById("income_data").appendChild(div);
        a.innerHTML = `${desc} ${amount} ${date}`;
       document.getElementById("myPopup1").classList.remove("show");
       document.getElementById("income").value = "";
       document.getElementById("income_value").value = "";
       document.getElementById("date1").value = "";
    }else{
        alert("Please fill all the fields");
    }
});

document.getElementById("close1").addEventListener("click", function () {
    document.getElementById("myPopup1").classList.remove("show");
});

