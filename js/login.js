const post = async (url, data) => {
  try {
    const response = await fetch(data, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("ERROR");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.defaultPrevented();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const data = {
    email: email.value,
    password: password.value,
  };
  email.value = ""
  password.value = ""
  post("http://192.168.1.2:5000/login", data)
});
