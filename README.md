# Ekta's Gatherings Website 2.0

This repository contains the complete **Ekta’s Gatherings** community platform website, designed with a modern neoPOP-inspired style. It includes separate sections for B2C members, B2B partners, and an admin panel with super admin authentication.

## Features

- **Authentication flows:**  
  Separate login/signup for B2C members and B2B venues/service providers (with embedded Youform forms for lead capture).  

- **NeoPOP UI Kit-inspired design:**  
  Bold black backgrounds with gold accents, rounded cards, Montserrat typography, and playful microinteractions for a modern, striking look.

- **B2C Community Section:**  
  - Hero area with lead form embed  
  - Clear 3-step onboarding process  
  - Unique Selling Point tiles  
  - Community statistics  
  - Events list  
  - Placeholder galleries and testimonials (uploadable via admin)  
  - FAQs placeholder  

- **B2B Partnership Section:**  
  - Separate panels for Venues and Service Providers, each with its own Youform embed  
  - Partnership benefits tiles  
  - Service modules overview  
  - Success stories placeholder  

- **Admin Panel:**  
  - Super admin login (Username: `EktaOG`, Password: `EktaOG@123`)  
  - Manage galleries, testimonials, FAQs, service modules (UI placeholders currently)  
  - Secure login state persistence  
  - Logout functionality  

- **Responsive design:**  
  Optimized for desktop and mobile devices.

## File Structure

```
└── ektas-gatherings-website/
    ├── index.html        # Main HTML file with all sections
    ├── styles.css        # NeoPOP-inspired CSS styling
    ├── script.js         # JavaScript for navigation, admin auth, and UI interactions
    └── README.md         # This file
```

## Setup & Deployment

### Prerequisites

- A GitHub repository to host the files.
- A Vercel account (or another static hosting provider).

### Deployment Steps

1. **Create a GitHub Repository:**  
   - Create a new repository (e.g., `ektas-gatherings-website`).  
   - Upload all files (`index.html`, `styles.css`, `script.js`, `README.md`).

2. **Connect to Vercel:**  
   - Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.  
   - Import your newly created repository.  
   - Deploy with the default settings.

3. **Live site:**  
   Your website will be live on a Vercel domain automatically.

## Customization

- **Youform Integration:**  
  Replace the placeholder divs with your actual Youform embed code URLs for all lead forms on the B2C and B2B pages.

- **Admin Panel:**  
  Currently contains placeholders for content management. You can extend this panel with backend integration or enhanced functionality as needed.

- **Styling:**  
  Adjust colors, fonts, or UI components by modifying `styles.css`. The color palette and design variables follow the neoPOP theme with black, white, and gold accents.

- **Add Media and Content:**  
  Use the Admin panel (future development planned) or directly update the source files to add event photos, testimonials, FAQs, and success stories.

## Admin Access

- **URL:** Navigate to the `Admin` section via the top navigation.  
- **Login Credentials:**  
  - Username: `EktaOG`  
  - Password: `EktaOG@123`  
- **Functionality:**  
  Secure login/logout to control access to the admin panel UI.  
  (Note: This is client-side authentication for a static site and should be secured appropriately for production.)

## Technologies Used

- **HTML5 & CSS3** with custom neoPOP-inspired design.  
- **JavaScript** for client-side interactions and admin authentication.  
- **Youform.com** for form management and lead capture.  
- **Google Fonts:** Montserrat for typography.

## Browser Compatibility

- Tested on modern browsers: Chrome, Firefox, Edge, Safari.  
- Fully responsive and mobile-friendly design.

## Support & Contribution

This project is tailor-made for Ekta’s Gatherings community. For feature requests or customizations, please contact the developer or modify the source code and redeploy according to your needs.

## License

This repository is created specifically for Ekta’s Gatherings. Usage or redistribution should be in line with Ekta’s Gatherings branding policies.

*Thank you for being part of the Ekta’s Gatherings journey to help people connect and build lasting friendships!*
