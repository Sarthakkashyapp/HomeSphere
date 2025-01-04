# HomeSphere

🌐 Welcome to the **HomeSphere**! This project demonstrates a feature-rich, fully responsive real estate website built with the latest version of Next.js, Clerk for user authentication, and MongoDB for robust backend data management.

---

## Features

### 🔑 User Authentication
- Secure authentication powered by Clerk.
- Role-based access for users and admins.

### 🏘️ Real Estate Listings
- Add, edit, or delete property listings.
- Browse properties with detailed descriptions, high-quality images, and location data.
- Save favorite properties for quick access.

### 🔎 Advanced Search
- Filter properties based on location, price, and more.
- Sort listings for a personalized experience.

### 🔒 Admin Dashboard
- Manage property listings, user profiles, and perform CRUD operations.
- Protected routes ensure secure access.

### 📱 Responsive Design
- Fully responsive across devices, ensuring usability on desktops, tablets, and mobile phones.

---

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Backend**: MongoDB for data management
- **Deployment**: Hosted on [Vercel](https://vercel.com/)

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (local or hosted on a service like MongoDB Atlas)
- Clerk account for authentication

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   
2. Install dependencies:
   ```bash
   npm install

3. Set up environment variables:
   - Create a .env.local file in the root directory.
   - Add the following variables:
       MONGODB_URI=your_mongodb_connection_string
       NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
       CLERK_API_KEY=your_clerk_api_key
       SIGNING_SECRET=your_signing_secret

4. Run the development server:
   ```bash
   npm run dev

5. Open your browser and navigate to http://localhost:3000.

---

## Deployment

   - Deploy the application on Vercel:
   - Push your code to GitHub or any other Git provider.
   - Import your repository into Vercel.
   - Add environment variables in the Vercel dashboard.
   - Deploy your project.
   
## Contributions 
   Contributions are welcome! Please fork the repository and submit a pull request.

## License 
   This project is licensed under the MIT License - see the LICENSE file for details.

🎉 Thank you for exploring this project! Feel free to reach out for questions or feedback.
   
