


document.getElementById("regform").addEventListener('submit',function(e){
  e.preventDefault(); 


//Variable declaration
const fname=document.getElementById("fname").value.trim();
const email=document.getElementById("email").value.trim();
const phone=document.getElementById("phone").value.trim();
const pass=document.getElementById("pass").value;
const cpass=document.getElementById("cpass").value;
const agree=document.getElementById("agree").checked;


if(!fname || !email || !phone || !pass || !cpass)
{
    alert('Please fill in all required fields');
    return;
}
if (!/^\d{10}$/.test(phone)) {
  alert("Enter valid 10 digit phone number");
  return;
}

if(pass.length < 6)
{
    alert('Password must be at least 6 characters');
    return;
}
if(pass !== cpass)
{
    alert('Passwords do not match!');
    return;
}
if(!agree)
{
    alert('Please agree to the Terms of Service');
    return;
}

const success=document.getElementById("success");
success.classList.add('show');
setTimeout(()=>success.classList.remove('show'),3000);
this.reset();
})

