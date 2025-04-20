// স্ক্রিপ্ট ফাইল: script.js

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // ফর্ম সাবমিট রিলোড বন্ধ করে

    // ইনপুট ফিল্ডের ভ্যালু বের করা
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // খুব সিম্পল ভেরিফিকেশন (শুধু দেখানোর জন্য)
    if(email && password) {
        alert('Successfully Logged In!\n\nEmail/Phone: ' + email + '\nPassword: ' + password);
    } else {
        alert('Please fill out all fields.');
    }
});