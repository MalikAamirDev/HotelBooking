function Button({ className, onClick, value }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
