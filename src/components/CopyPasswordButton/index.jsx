import "./styles.scss";

const CopyPasswordButton = ({ senha }) => {
  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(senha);
  };

  return (
    <>
      <div className="actions">
        <button
          className="copy-password-to-clipboard"
          onClick={copyPasswordToClipboard}
        >
          Copiar para a área de transferência
        </button>
      </div>
    </>
  );
};

export default CopyPasswordButton;
