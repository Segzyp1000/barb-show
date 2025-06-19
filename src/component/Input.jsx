function Input({ handleChange, value, title, color }) {
  return (
    <label className="sidebar-label flex gap-1">
      <input
        onChange={handleChange}
        type="radio"
        value={value}
        name="filter" // all radios share the same name
        style={{ backgroundColor: color, border: "solid 1px #000" }}
      />
      <span className="checkmark"></span>
      {title}
    </label>
  );
}

export default Input;
