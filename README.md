# Job Offer Comparison Tool - Washington State Healthcare Edition

## Authors:
Psy\
Zoe\
Mihaly\
Turan

A professional web application built with React for comparing healthcare and clinical research job offers across Washington State and beyond. This tool enables side-by-side comparison of compensation packages, benefits, retirement plans, and other critical employment factors for medical professionals.

## Purpose & Audience

This tool is specifically designed for healthcare professionals with bachelor's, master's, and doctorate degrees who are evaluating job offers in Washington State healthcare organizations. Primary users include:

- **Clinical Research Coordinators & Specialists**
- **Healthcare Administrators**
- **Medical Scientists & Researchers**
- **Clinical Laboratory Professionals**
- **Biotechnology Researchers**
- **Academic Medical Professionals**

## Features

### Core Comparison Capabilities
- **Side-by-Side Offer Analysis**: Compare up to 3 job offers simultaneously
- **Comprehensive Compensation Breakdown**: Base salary, signing bonuses, relocation assistance
- **Benefits Comparison**: Health, dental, and vision insurance with detailed plan information
- **Retirement Planning**: 401(k) plan analysis with company match, vesting schedules, and contribution details
- **Time Off Tracking**: Vacation, sick leave, parental leave, and professional development days

### Washington State Specific Features
- **WA Location Comparison**: Seattle, Tacoma, Spokane, and other WA cities
- **WA-Specific Benefits**: Analysis of Washington Paid Family & Medical Leave (PFML), WA Cares Fund, and transportation benefits
- **Cost of Living Adjustments**: Comparative salary adjustments based on WA city cost of living
- **Local Provider Data**: Real WA healthcare providers (UW Medicine, MultiCare, Providence, etc.)

### Professional Development Focus
- **CEU/CME Budgets**: Continuing education allowances for clinical professionals
- **License & Certification Support**: Coverage for state license renewals and board certifications
- **Research Support**: Publication assistance, conference budgets, and mentorship programs
- **Tuition Reimbursement**: Advanced degree and certification support

## Project Structure

```
job_offer_form/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── ComparisonView.jsx     # Main comparison interface
│   │   ├── _401k.jsx              # 401(k) retirement comparison
│   │   └── Highlight.jsx          # Benefit highlighting utility
│   ├── App.jsx                    # Main application component
│   ├── App.css                    # Main styles
│   ├── index.js                   # Application entry point
│   └── index.css                  # Global styles
├── offer.json                     # Job offer data templates
├── package.json                   # Project dependencies and scripts
└── README.md                      # This file
```

## Getting Started

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/psyminsays/job_offer_form.git
   cd job_offer_form
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Data Structure

The application uses a structured JSON format for job offer data. See `offer.json` for the complete template with example offers from:

- **UW Medicine** (Seattle, WA)
- **MultiCare Health System** (Tacoma, WA)  
- **Providence Health & Services** (Spokane, WA)

### Key Data Categories
- **Compensation**: Salary, bonuses, relocation assistance
- **Benefits**: Health insurance, retirement plans, additional coverage
- **Professional Development**: Education budgets, certification support
- **Schedule & Work Arrangements**: Hours, remote work options, flexibility
- **Washington-Specific Factors**: Location-based considerations, state benefits

## Design & Theme

The application features a professional color scheme:
- **Primary Colors**: Royal Purple (#8a2be2) and Vibrant Orange (#ff8c00)
- **Neutral Backgrounds**: White, light gray, silver, and beige
- **Professional Typography**: Clean, readable fonts with proper hierarchy
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Key Components

### ComparisonView.jsx
The main comparison interface that displays job offers side-by-side with detailed breakdowns across multiple categories.

### _401k.jsx
Specialized component for comparing retirement benefits, including company match percentages, non-elective contributions, and vesting schedules.

### Highlight.jsx
Utility component that visually highlights superior benefits in comparison tables to aid decision-making.

## 🔧 Technical Details

- **Framework**: React 18+
- **Styling**: CSS with custom properties (CSS variables)
- **Data Management**: Local JSON with potential for API integration
- **Build Tool**: Create React App configuration
- **Deployment**: Compatible with static hosting services

## 📈 Future Enhancements

Planned features and improvements:

1. **User Accounts**: Save and manage multiple offer comparisons
2. **Custom Offer Creation**: Interactive forms to input new job offers
3. **Export Functionality**: Generate PDF comparison reports
4. **Salary Benchmarking**: Integration with industry salary data
5. **Negotiation Guidance**: Tips and strategies for offer negotiation
6. **Mobile Application**: React Native version for iOS and Android

## 🏛️ Washington State Considerations

This tool specifically addresses factors unique to Washington State healthcare employment:

- **No State Income Tax**: Impact on take-home pay calculations
- **WA Paid Family & Medical Leave**: State-mandated benefits
- **WA Cares Fund**: Long-term care insurance program
- **Regional Cost Variations**: Significant differences between Western and Eastern WA
- **Healthcare Provider Networks**: Regional variations in insurance coverage

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request


**Last Updated**: December 2025  
**Version**: 1.0.0  
**Status**: Active Development

*Designed with healthcare professionals in mind – because your career decisions deserve careful consideration.*