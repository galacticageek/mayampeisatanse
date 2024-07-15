import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = 'https://khlrgprxiplgsdctfvfe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtobHJncHJ4aXBsZ3NkY3RmdmZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwNzk4NzYsImV4cCI6MjAzNjY1NTg3Nn0.-7oPtYzBWkBkkris2efrr7XB3uMzP0_UVx9Xe_ljcHs'
const supabase = createClient(supabaseUrl, supabaseKey)

document.getElementById('investmentForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const fullName = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;
    const area = document.getElementById('area').value;

    // Simple validation
    if (!fullName || !amount || !area) {
        showError('All fields are required.');
        return;
    }

    // Insert data into Supabase
    const { data, error } = await supabase
        .from('your_table_name')
        .insert([
            { name: fullName, amount: parseFloat(amount), area: area }
        ])

    if (error) {
        console.error('Error:', error);
        showError('There was an unexpected error submitting your investment. Please try again later.');
    } else {
        alert('Form submitted successfully!');
    }
});

function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}