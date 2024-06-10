
# Meactive-Portfolio

This is a single-page application utilizing react. The project showcases various sections such as About Me, Portfolio, Contact, and Resume.

The directory structure of the project is as follows:
Meactive-Portfolio
│
├── portfolio
│ ├── public
│ │ └── index.html
│ ├── src
│ │ ├── assets
│ │ │ ├── weather.jpg
│ │ │ ├── github-logo.png
│ │ │ ├── linkedin-logo.png
│ │ │ ├── twitter-logo.png
│ │ │ └── your-resume.pdf
│ │ ├── components
│ │ │ ├── Header.jsx
│ │ │ ├── Footer.jsx
│ │ │ ├── Navigation.jsx
│ │ │ └── styles
│ │ │ ├── Navigation.css
│ │ │ ├── Footer.css
│ │ ├── pages
│ │ │ ├── About.jsx
│ │ │ ├── Contact.jsx
│ │ │ ├── Portfolio.jsx
│ │ │ ├── Resume.jsx
│ │ │ └── styles
│ │ │ ├── About.css
│ │ │ ├── Contact.css
│ │ │ ├── Portfolio.css
│ │ │ └── Resume.css
│ │ ├── App.jsx
│ │ ├── index.jsx
│ │ └── App.css
│ ├── package.json
│ └── README.md

## Setup and Installation

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repository:

```bash
git clone git@github.com:PCast71/Meactive-Portfolio.git

Navigate to the project directory:
bash
Copy code
cd Meactive-Portfolio/portfolio
Install the dependencies:
bash
Copy code
npm install
Running the Development Server
To start the development server, run:

bash
Copy code
npm start
The application will be available at http://localhost:3000.

Building the Project
To create a production build, run:

bash
Copy code
npm run build
The build artifacts will be stored in the build directory inside portfolio.

Features
About Me: Displays a recent photo or avatar of the developer and a short bio.
Portfolio: Showcases titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories.
Contact: Includes a contact form with fields for name, email address, and message. Validates required fields and email format.
Resume: Provides a downloadable resume link and lists the developer’s proficiencies.
Footer: Contains links to the developer’s GitHub and LinkedIn profiles.

Customization
To customize the content and styles:

Assets: Add or replace images and files in the src/assets directory.
Components: Modify the React components in the src/components directory.
Pages: Update the content of different sections in the src/pages directory.
Styles: Adjust the CSS in the respective styles directories under components and pages.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Thanks to the creators of React and all the libraries used in this project.
