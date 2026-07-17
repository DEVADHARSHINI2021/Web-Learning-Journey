const title = document.getElementById("title");
const amount = document.getElementById("amount");
const category = document.getElementById("category");
const date = document.getElementById("date");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const total = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

displayExpenses();

addBtn.addEventListener("click", () => {

    if (
        title.value === "" ||
        amount.value === "" ||
        date.value === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    const expense = {
        title: title.value,
        amount: Number(amount.value),
        category: category.value,
        date: date.value
    };

    expenses.push(expense);

    saveExpenses();

    displayExpenses();

    title.value = "";
    amount.value = "";
    date.value = "";
});

function displayExpenses() {

    expenseList.innerHTML = "";

    let sum = 0;

    expenses.forEach((expense, index) => {

        sum += expense.amount;

        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${expense.title}</td>
        <td>₹${expense.amount}</td>
        <td>${expense.category}</td>
        <td>${expense.date}</td>
        <td>
            <button class="delete" onclick="deleteExpense(${index})">
                Delete
            </button>
        </td>
        `;

        expenseList.appendChild(row);

    });

    total.textContent = sum;

}

function deleteExpense(index){

    expenses.splice(index,1);

    saveExpenses();

    displayExpenses();

}

function saveExpenses(){

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

}