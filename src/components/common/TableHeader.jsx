import React from "react";

const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((item) => (
          <th key={item.path || item.key}>{item.label}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
