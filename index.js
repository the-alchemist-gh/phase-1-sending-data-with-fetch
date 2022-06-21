// Add your code here
const submitBtn = document.querySelector("form");
let bodyNum = document.querySelector('body');
submitBtn.addEventListener('submit', (e)=>{
  e.preventDefault();
  let userName = e.target.userName.value;
  let userMail = e.target.userMail.value;

  // const formData = {
  //   name: userName,
  //   email: userMail
  // }

  submitData(userName,userMail);
})


// post form to db
function submitData(name, email){
  return  fetch("http://localhost:3000/users",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name:name,
      email:email
    })
  })
  .then(resp=>resp.json())
  .then(res=>{
    let h1 = document.createElement('h1');
    h1.textContent = res.id;
    h1.style.color = 'green';
    bodyNum.appendChild(h1);
  })
  .catch(error=>{
    alert("An Error Occured");
    let h2 = document.createElement('h3');
    h2.textContent = error.message;
    h2.style.color = 'red';
    bodyNum.appendChild(h2);
  });

}
