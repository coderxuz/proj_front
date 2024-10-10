const post = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Xato: ${response.status} - ${response.statusText}`);
        }

        const result = await response.json(); 
        return { status: response.status, data: result }; 
    } catch (error) {
        console.error('Xato:', error.message);
        return { status: 'error', error: error.message }; 
    }
};

const form = document.querySelector('form');
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const address = document.getElementById('adress');
    const categories = document.getElementById('categories');

    const data = {
        first_name: fname.value,
        last_name: lname.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        address: address.value,
        categories: categories.value,
    };
    localStorage.setItem('email', email.value); 
    localStorage.setItem('password', password.value);
    localStorage.setItem('categories', categories.value);
    const url = 'http://192.168.1.3:5000/customers'; 
    const response = await post(url, data);
    if (response.status == 201) {
        location.href = 'index.html';
    }
});
