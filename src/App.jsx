import React, { useState } from 'react';
import './App.css';
import ComparisonView from './components/ComparisonView';

function App() {
  const [offers] = useState([
    {
      companyName: "UW Medicine",
      jobTitle: "Clinical Research Coordinator",
      location: "Seattle, WA",
      city: "Seattle",
      state: "WA",
      salary: 82000,
      signingBonus: 8000,
      vacationDays: 22,
      sickDays: 12,
      parentalLeave: 16,
      ceuBudget: 3500,
      licenseRenewal: true,
      conferenceDays: 5,
      relocationAssistance: 5000,
      orcaCard: true, // Seattle transit benefit
      benefits: {
        healthInsurance: {
          provider: "Kaiser Permanente Washington",
          premium: 180,
          deductible: 1500,
          outOfPocketMax: 4000
        },
        dentalInsurance: {
          provider: "Delta Dental of Washington",
          premium: 25,
          deductible: 50
        },
        K401: {
          companyMatch: 5,
          nonElective: 2,
          vesting: 4
        }
      }
    },
    {
      companyName: "MultiCare Health System",
      jobTitle: "Clinical Research Specialist",
      location: "Tacoma, WA",
      city: "Tacoma",
      state: "WA",
      salary: 78000,
      signingBonus: 10000,
      vacationDays: 20,
      sickDays: 10,
      parentalLeave: 12,
      ceuBudget: 2500,
      licenseRenewal: true,
      conferenceDays: 4,
      relocationAssistance: 7500,
      parkingPass: true, // Tacoma parking benefit
      benefits: {
        healthInsurance: {
          provider: "Premera Blue Cross",
          premium: 220,
          deductible: 2000,
          outOfPocketMax: 5000
        },
        dentalInsurance: {
          provider: "Washington Dental Service",
          premium: 30,
          deductible: 75
        },
        K401: {
          companyMatch: 4,
          nonElective: 3,
          vesting: 3
        }
      }
    }
  ]);

  return (
    <div className="App">
      <header className="app-header">
        <div className="wa-header">
          <div className="wa-flag">🚩</div>
          <div className="header-text">
            <h1>WA Healthcare Job Comparison</h1>
            <p className="subtitle">Compare clinical & research positions across Washington State</p>
          </div>
          <div className="wa-flag">🌲</div>
        </div>
        
        <div className="wa-cities">
          <span className="city-tag">Seattle</span>
          <span className="city-tag">Tacoma</span>
          <span className="city-tag">Spokane</span>
          <span className="city-tag">Bellevue</span>
          <span className="city-tag">Vancouver</span>
        </div>
      </header>
      
      <main className="app-main">
        <div className="wa-intro">
          <h2>Washington State Healthcare Comparison</h2>
          <p className="wa-description">
            Compare job offers from Washington's leading healthcare providers. 
            Consider cost of living differences, commute times, and local benefits.
          </p>
        </div>
        
        <ComparisonView offer1={offers[0]} offer2={offers[1]} />
        
        <div className="wa-notes">
          <h3>🌲 Washington-Specific Considerations</h3>
          <ul>
            <li><strong>Seattle:</strong> Higher salary but higher cost of living, ORCA card benefits</li>
            <li><strong>Tacoma:</strong> Lower cost of living, easier parking, closer commute</li>
            <li><strong>WA State:</strong> No state income tax! Consider total compensation package</li>
            <li>WA Cares Fund (long-term care) deductions may apply</li>
            <li>Washington Paid Family & Medical Leave benefits included</li>
          </ul>
        </div>
      </main>
      
      <footer className="app-footer">
        <div className="wa-footer">
          <p>Washington State Healthcare Career Comparison Tool</p>
          <p className="footer-note">
            Data based on WA healthcare market • Compare offers from UW Medicine, Providence, 
            MultiCare, Virginia Mason, Swedish, and other WA providers
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;