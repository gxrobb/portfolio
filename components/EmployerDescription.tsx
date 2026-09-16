import React from 'react';
import type { Employer } from '../constants/jobs';

export default function EmployerDescription({
  employer,
}: {
  employer: Employer;
}) {
  return (
    <>
      <h3>{employer.title}</h3>
      <h4>{employer.date}</h4>
      <ul>
        {employer.description.map(value => {
          return <li key={value}>{value}</li>;
        })}
      </ul>
    </>
  );
}
