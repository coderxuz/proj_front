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
            throw new error("ERROR");
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};
const form = document.querySelector('form');
form.addEventListener("submit" , e => {
    e.preventDefault();
    const fname = document.getElementById('fname')
    const lname = document.getElementById('lname')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    const data = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        phone: phone.value,

    }
    post("http://localhost:3000/users" , data)
})