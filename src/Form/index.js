import "./style.css";

const Form = () => (
  <form className="form">
    <input className=" form__input" placeholder="What you have to do?" autoFocus />
    <button className="form__button">Add task</button>
  </form>
); 

export default Form;