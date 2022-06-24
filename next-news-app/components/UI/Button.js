import homeStyles from "../../styles/Home.module.css";

const Button = ({ title, onClick }) => {
  return (
    <button className={homeStyles.btn} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
