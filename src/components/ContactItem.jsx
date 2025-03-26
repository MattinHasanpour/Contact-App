import React from "react";
import styles from "./ContactItem.module.css";

function ContactItem({
  deleteHandler,
  data: { id, name, lastName, email, phone },
}) {
  return (
    <li className={styles.item}>
      <p className="text-lg font-semibold text-gray-700">
        {name} {lastName}
      </p>
      <p className="text-gray-600 flex items-center gap-2">
        <span>📪</span> {email}
      </p>
      <p className="text-gray-600 flex items-center gap-2">
        <span>📞</span> {phone}
      </p>
      <button
        onClick={() => deleteHandler(id)}
        className="mt-2 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition"
      >
        🗑️ Delete
      </button>
    </li>
  );
}

export default ContactItem;
