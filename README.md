# OC_P12_SportSee

## Project Overview

SportSee is a web application designed to track and display user fitness data. This project primarily focuses on the frontend, built using React, while the backend, which is necessary for the application to function, was provided.

## Features

- User activity tracking
- Data visualization with charts
- User-specific dashboard

## Technologies Used

- **Frontend**: React, JavaScript, TypeScript, SCSS
- **Backend**: Provided (ensure to set it up as described below)

## Setup Instructions

### Prerequisites

- Node.js
- npm or yarn

### Backend Setup

1. Navigate to the backend directory.
2. Follow the backend setup instructions provided in its own README.
3. Start the backend server:
   ```bash
   cd Backend
   npm install
   npm start
   ```

### Frontend Setup

1. Clone this repository :

```bash
git clone https://github.com/flafonso/OC_P12_SportSee.git
```

2. Navigate to the frontend directory :

```bash
cd OC_P12_SportSee/Frontend
```

3. Install dependencies :

```bash
npm install
```

4. Start the frontend development server :

```bash
npm start
```

5. Open http://localhost:5173 in your browser to view the application.

### Usage

Once both the backend and frontend servers are running, you can interact with the SportSee application through the browser. Ensure the backend server is running to fetch and display user data correctly. To access user profiles, add /{userID} to the end of the URL. There are two user profiles available: /12 and /18.

### Project Structure

- `Frontend/`: Contains all frontend-related code and assets.
- `Backend/`: Contains the backend code provided for the project.
