import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";

function TableHeader({ columnsNames, setSelectedHeader, selectedHeader }) {
  return (
    <thead>
      <tr>
        {columnsNames.map((c, index) => (
          <th
            key={c}
            style={{
              backgroundColor: index === selectedHeader ? "yellow" : "white",
            }}
            onClick={() => setSelectedHeader(index)}
          >
            {c}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;

TableHeader.propTypes = {
  columnsNames: PropTypes.string.isRequired,
  setSelectedHeader: PropTypes.func.isRequired,
  selectedHeader: PropTypes.number.isRequired,
};
