import s from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={s.wrapper}>
      <label htmlFor="input">Find contacts by name</label>
      <input
        className={s.formInput}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
