import React from 'react';

export default function EmployerDescription({ employer }) {
  return (
    <>
      <h3>{employer.title}</h3>
      <h4>{employer.date}</h4>
        <ul>
          { 
            employer.description.map((value) => {
              return <li key={value}>{value}</li>
            })
          }
        </ul>
    </>
  );
}
