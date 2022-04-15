import React from 'react';

export default function EmployerDescription({ jobObject }) {
  return (
    <>
      <h3>{jobObject.title}</h3>
      <h4>{jobObject.date}</h4>
        <ul>
          { 
            jobObject.description.map((value) => {
              return <li key={value}>{value}</li>
            })
          }
        </ul>
    </>
  );
}
