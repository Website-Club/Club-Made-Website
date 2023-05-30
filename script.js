function handleSubmitEvent(event) {
  console.log("yes")
  event.preventDefault();
  alert(
    `Form submitted! \n First Name: ${event.target.fname.value} \n Last Name: ${event.target.lname.value} \n Email: ${event.target.email.value} \n Message: ${event.target.msg.value}`
  );
}