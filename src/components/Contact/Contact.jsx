import s from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={s.wrapper}>
      <div>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
