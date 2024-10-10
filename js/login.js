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
  console.log(data);
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
  const users = [data];
  localStorage.setItem("user", JSON.stringify(users.user));
  email.value = "";
  password.value = "";
  post("http://192.168.1.3:5000/login", data);
});
