import React from 'react';
import { Highlight } from './Highlight.jsx';

function ComparisonView({ offer1, offer2 }) {
  return (
    <div>
      <h2>Job Offer Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Salary</th>
            <th>{offer1.companyName}</th>
            <th>{offer2.companyName}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Base Salary</td>
            <td style={Highlight(offer1.salary, offer2.salary)}>
              {offer1.salary}
            </td>
            <td style={Highlight(offer2.salary, offer1.salary)}>
              {offer2.salary}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonView;
