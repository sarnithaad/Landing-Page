Landing Page

This project is a responsive and animated landing page built with Next.js, TypeScript, and Tailwind CSS. It replicates a Figma design while adding dynamic functionality like form validation and smooth animations.

Table of Contents
• Project Overview  
• Features  
• Technologies Used  
• Project Structure  
• Setup and Installation  
• Running the Application  
• Form Functionality  
• Deployment  
• Customization  
• License  
• Contact

Project Overview
• Fully responsive landing page based on Figma layout  
• Contains sections like hero, features, contact, and quote form  
• Includes form validation, animated content, and page navigation  
• Implemented using modern frontend technologies  

Features
• Responsive design compatible with mobile, tablet, and desktop  
• Smooth animations using Framer Motion  
• Validated email subscription form  
• Sign In page navigation  
• Quote request form with multiple fields  
• Local image rendering from /public/images folder  
• Deployed live on Vercel  

Technologies Used
• Next.js  
• TypeScript  
• Tailwind CSS  
• Framer Motion  
• React Hook Form  
• Zod validation  
• Next/Image optimization  
• Vercel hosting  

Project Structure
• components/ – All page components (Hero, Features, QuoteForm, etc.)  
• pages/ – Route files like index.tsx, signin.tsx, contact.tsx  
• public/images/ – Static image assets  
• styles/ – Optional Tailwind or global CSS  
• tailwind.config.js – Tailwind customization  
• tsconfig.json – TypeScript configuration  

Setup and Installation
• Clone the repository  
  git clone https://github.com/sarnithaad/Landing-Page.git  
  cd Landing-Page  
• Install dependencies  
  npm install  
• Start the development server  
  npm run dev  
• View on http://localhost:3000  

Running the Application
• Homepage displays the hero and content sections  
• CTA button navigates to newsletter form  
• Sign In button links to /signin  
• Contact section and quote form available via page links  

Form Functionality
• Uses React Hook Form with Zod  
• Fields include name, email, phone, time frame, size, quantity, and description  
• Validation for required fields and proper email format  
• Success message shown upon valid submission  
• Form data logged to console (no backend integration)  

Deployment
• Live site: https://landing-page-sarnitha-a-ds-projects.vercel.app/  
• Hosted on Vercel  
• To redeploy, push to GitHub and link the repo in Vercel  

Customization
• Text can be updated directly in the component files  
• Images should be placed in /public/images  
• Design colors and layout can be modified in Tailwind config or classNames  

Contact
• GitHub: https://github.com/sarnithaad/Landing-Page  
• Live Demo: https://landing-page-sarnitha-a-ds-projects.vercel.app/  
