# Chidinma Restaurant Website with Firebase Authentication

## Introduction

Welcome to Chidinma Restaurant's official website! This web application is built using React.js and integrates Firebase Authentication for a secure sign-up, login, and reservation experience. Explore various pages, including Home, About, Contact, Menu, Lounge, Reserve, Sign In, and Sign Up.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Usage](#usage)
5. [State Management](#state-management)
6. [Pages](#pages)
7. [Secure Routes](#secure-routes)
8. [Logout Functionality](#logout-functionality)

## Features

- **Firebase Authentication:** Secure user sign-up and login using Firebase Authentication.
- **Multiple Pages:** Explore various pages such as Home, About, Contact, Menu, Lounge, Reserve, Sign In, and Sign Up.
- **Secure Reserve Page:** The reserve page is protected, allowing only authenticated users to access it.
- **State Management:** Proper state management using the Context API or Redux.
- **Logout Functionality:** Users can securely log out.

## Installation

To run the Chidinma Restaurant website locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/hotel.git
   ```

2. Navigate to the project directory:

   ```bash
   cd chidinma-restaurant
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Set up Firebase Authentication and get your Firebase config.
3. Create a `.env` file in the project root and add your Firebase config:

   ```env
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```

## Usage

After configuring Firebase, start the development server:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your web browser to explore the Chidinma Restaurant website.

## State Management

The application uses [Redux/Context API] for state management, ensuring a clean and efficient data flow throughout the components.

## Pages

1. **Home Page:**
   - Introduction to Chidinma Restaurant.

2. **About Page:**
   - Information about the restaurant.

3. **Contact Page:**
   - Details for getting in touch with the restaurant.

4. **Menu Page:**
   - Explore the restaurant's menu.

5. **Lounge Page:**
   - Information about the lounge area.

6. **Reserve Page:**
   - A secure page accessible only to authenticated users for making reservations.

7. **Sign In Page:**
   - Allows users to log in.

8. **Sign Up Page:**
   - Enables users to create a new account.

## Secure Routes

To ensure security, the reserve page is protected. Users must log in to access this page. Unauthorized users attempting to access the reserve page will be redirected to the sign-in page.

## Logout Functionality

Users can log out securely by clicking the "Logout" button. This action clears the user's authentication status, preventing unauthorized access to secure routes.

Feel free to explore, and we hope you enjoy your experience on the Chidinma Restaurant website! If you have any feedback or issues, please let us know.