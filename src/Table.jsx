import React from "react";
import "./Table.css";

const Table = ({ data }) => {
  return (
    <table>
      <tbody style={{ border: " solid 1px black" }}>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>E-mail</th>
          <th>Gender</th>
          <th>Country</th>
        </tr>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.country}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
