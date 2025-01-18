# Spotify 🎵

A full-stack Spotify Clone built with **Next.js**, **TypeScript**, and **Supabase**, offering features like song uploads, favorites, subscription management, and a fully functional music player.

[**Live Demo**](https://spotify-7s64j14zf-shivang1305s-projects.vercel.app/)

---

## Features 🚀

### **1. Authentication**

- User authentication is powered by **Supabase**.
- Users can register and log in to access personalized features like song uploads and favorites.

### **2. Songs Upload**

- Users can upload their own songs.
- Songs are stored in **Supabase Realtime Database**.

### **3. Songs Fetching List**

- Dynamically fetch and display all uploaded songs.
- Responsive and user-friendly design with **Tailwind CSS**.

### **4. Favorite Songs**

- Add and remove songs from the favorites list.
- Favorites are stored in the user's profile in **Supabase**.

### **5. Payment Gateway Integration**

- Integrated with **Stripe** for managing subscriptions.
- Users can subscribe to premium features.

### **6. Subscription Functionality**

- Premium subscribers unlock exclusive features.
- Subscription status is stored and validated through **Stripe**.

### **7. Complete Player Functionality**

- Full music player with **play**, **pause**, and **seek** functionality.
- Responsive and intuitive player controls.

---

## Tech Stack 🛠️

- **Frontend**: [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: [Supabase](https://supabase.com/), [Stripe](https://stripe.com/)
- **Database**: Supabase Realtime Database
- **Authentication**: Supabase Auth
- **Deployment**: Vercel

---

## Local Setup 🖥️

Follow these steps to set up the project locally:

### **1. Clone the Repository**

```bash
git clone https://github.com/shivang1305/spotify.git
cd spotify
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Environment Variables**

Create a .env.local file in the root of the project and add the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### **4. Run the Development Server**

```bash
npm run dev
```

Visit http://localhost:3000 to view the app in development mode.

## Deployments 🚀

The application has been deployed and is live! You can check it out here:  
[Spotify Live](https://spotify-7s64j14zf-shivang1305s-projects.vercel.app/)

---

## Screenshots 📸

### **Authentication Page**

#### Register Page

![Register Page Screenshot](https://github.com/shivang1305/spotify/blob/main/public/images/Register.png)

#### Login Page

![Login Page Screenshot](https://github.com/shivang1305/spotify/blob/main/public/images/Login.png)

### **Homepage**

![Homepage Screenshot](https://github.com/shivang1305/spotify/blob/main/public/images/Home.png)

### **Liked Songs**

![Liked Songs Screenshot](https://github.com/shivang1305/spotify/blob/main/public/images/LikedSongs.png)

### **Search Songs**

![Search Songs Screenshot](https://github.com/shivang1305/spotify/blob/main/public/images/Search.png)

### **Upload Songs**

![Upload Songs Screenshot](https://github.com/shivang1305/spotify/blob/main/public/images/UploadSong.png)

### **Profile Page**

![Profile Page Screenshot](https://github.com/shivang1305/spotify/blob/main/public/images/Profile.png)

### **Player Functionality**

![Player Functionality Screenshot](https://github.com/shivang1305/spotify/blob/main/public/images/Player.png)

### **Subscriptions Page**

![Subscriptions Page Screenshot](https://github.com/shivang1305/spotify/blob/main/public/images/Stripe.png)

---

## Acknowledgements 🙏

This project wouldn’t have been possible without the following:

- **Supabase**: For seamless authentication and real-time database management.
- **Stripe**: For integrating payment gateway and subscription functionality.
- **Tailwind CSS**: For providing utility-first CSS for designing a modern UI.
- **Next.js**: For enabling server-side rendering and optimized frontend/backend integration.
