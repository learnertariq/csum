import React from "react";

const Table = ({ data, tableClasses }) => {
  return (
    <>
      {data && data.length > 0 && (
        <table className={`table ${tableClasses}`}>
          <thead>
            <tr>
              {Object.keys(data[0]).map((item) => {
                if (item === "_id") return null;
                return <th>{item}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr>
                {Object.keys(row).map((item) => {
                  if (item === "_id") return null;
                  return <td>{row[item]}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
