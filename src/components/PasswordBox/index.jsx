import "./styles.scss";

const PasswordBox = ({ senha }) => {
  const charClass = (char) => {
    if (char.match(/[a-zA-Z]/)) return "letter";
    if (char.match(/[0-9]/)) return "digit";
    return "symbol";
  };

  return (
    <div className="password-box">
      <p>
        {Array.from(senha).map((char, index) => (
          <span key={index} className={charClass(char)}>
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default PasswordBox;
