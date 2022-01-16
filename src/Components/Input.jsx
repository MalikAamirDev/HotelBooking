function Input({ className, onChange, value, type, placeholder }) {
  return (
    <input
      className={`inp ${className}`}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
