const Url ="http://localhost:5678/api/users/login/";
const flog = document.querySelector("#contact");
flog.addEventListener('submit' , function(e) { 
  e.preventDefault();
  const user = {
      email: e.target.querySelector("#email").value,
      password: e.target.querySelector("#name").value
  }
  const stringuser=JSON.stringify('user')
  window.localStorage.setItem('user',stringuser)
  const emailOfuser = e.target.querySelector("#email").value;
  const passwordOfUser = e.target.querySelector("#name").value;
  
  const firstIdentifier = "sophie.bluel@test.tld";
  const lastIdentifier = "S0phie";
  const userIdentifier = { 
      email: "sophie.bluel@test.tld",
      password: "S0phie"
  }
  const payload = JSON.stringify(user)
  window.localStorage.setItem("user", JSON.stringify(user))
  fetch(Url, { 
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: payload
  }).then((res) => {
  if (JSON.stringify(user) === JSON.stringify(userIdentifier)) {
      window.location = "../Backend/index.html";
    //   document.querySelector('.hidden').style.display = "bl";
    //   document.querySelector('.modifier').style.display = "block";

  } else if (emailOfuser !== firstIdentifier) {
      document.querySelector("#no_result_1").classList.add('warning')

  } else if (passwordOfUser !== lastIdentifier) {
      document.querySelector("#no_result_2").classList.add('warning')
  } else {
      document.querySelector('#contact').innerHTML = "Accés Refusé !!!"
  }
  return res.json();
  }).then((donnees) => window.localStorage.setItem("token",donnees.token))
  });