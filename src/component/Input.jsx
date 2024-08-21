function Input({ handleChange, value, title, name, color }) {
  return (
    <label className="sidebar-label flex gap-1">
      <input
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
        style={{ backgroundColor: color, border: "solid 1px #000" }}
      />
      <span className="checkmark"></span>
      {title}
    </label>
  );
}

export default Input;
