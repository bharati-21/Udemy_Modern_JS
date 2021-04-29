// Listen for button submit
document.querySelector('#loan-form').addEventListener('submit', function (e) {
    e.preventDefault();

    document.getElementById('results').style.display = 'none';

    // Display loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateLoan, 2000);

});

// Calculate Loan
function calculateLoan() {
    // UI variables

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) /100 /12;
    const calculatedPayments = parseFloat(years.value) * 12;
    
    // Monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        document.getElementById('results').style.display = 'block';

        document.getElementById('loading').style.display = 'none';
    }
    else {
        showError('Please check your input values');
    }
}

function showError(msg) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'none';

    const card = document.querySelector('.card');
    const head = document.querySelector('.heading');

    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(msg));

    card.insertBefore(errorDiv, head);

    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
} 

