import React from "react";

const GroupItem = ({ lists, index }) => {
  const getNames = lists.map((name) => {
    return (
      <tbody key={name}>
        <tr>
          <td data-label="Name">{name}</td>
        </tr>
      </tbody>
    );
  });

  return (
    <div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Group {index + 1}</th>
          </tr>
        </thead>
        {getNames}
      </table>
    </div>
  );
};

export default GroupItem;
