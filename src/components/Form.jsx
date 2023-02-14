import "../components/Form.css";

export default function Form() {


function submitForm(e) {
  e.preventDefault()
  console.log("Form submitted!")
}


  return (
    <form id="form-container">
      <input type="text" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input type="submit" onClick={submitForm}/>
    </form>
  );
}
