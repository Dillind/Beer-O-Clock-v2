import "../components/Form.css";

export default function Form() {
  return (
    <form className="form-container">
      <input type="text" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input type="submit" />
    </form>
  );
}
