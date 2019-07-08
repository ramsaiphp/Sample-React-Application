import React from 'react';

const tableBody = (props) => {
  const rows = props.characterData ? props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  }) : '';

  return (
    <tbody>{rows}</tbody>
  )
}

export default tableBody;