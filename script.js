let income = 0, expense = 0;

function addTransaction() {
    let name = document.getElementById('name').value;
    let category = document.getElementById('category').value;
    let amount = parseFloat(document.getElementById('amount').value);
    let type = document.querySelector('input[name="type"]:checked').value;

    if (name === "" || category === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter valid details.");
        return;
    }

    let balance = income - expense;

    if (type === "expense" && amount > balance) {
        alert("Insufficient balance for this expense.");
        return;
    }

    let table = document.getElementById('transactionTable');
    let row = table.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = category;
    row.insertCell(2).textContent = type;
    row.insertCell(3).textContent = amount.toFixed(2);

    if (type === "income") {
        income += amount;
    } else {
        expense += amount;
    }

    updateBalance();
    clearFields();
}

function updateBalance() {
    let balance = income - expense;

    document.getElementById('income').textContent = income.toFixed(2);
    document.getElementById('expense').textContent = expense.toFixed(2);
    document.getElementById('balance').textContent = balance.toFixed(2);
}

function clearFields() {
    document.getElementById('name').value = "";
    document.getElementById('category').value = "";
    document.getElementById('amount').value = "";
}
