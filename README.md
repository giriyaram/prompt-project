
# Prompt Advisor

![Next.js](https://img.shields.io/badge/Next.js-v14.2.5-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-v6.8.0-green)
![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)

**Prompt Advisor** is a community-driven platform built using **Next.js** and **MongoDB** where users can share, discover, and discuss effective prompts for various applications like AI tools, content creation, and productivity.

---

## Table of Contents
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

---

## About

**Prompt Advisor** allows users to share creative and effective prompts, which can be upvoted and commented on by the community. Whether you're a prompt enthusiast looking to share or a user seeking inspiration, Prompt Advisor connects you with a library of valuable prompts.

---

## Features

- 📝 **Share Prompts**: Users can contribute prompts, complete with descriptions and categories.
- 🔍 **Search**: Easily search for prompts based on categories or keywords.
- 👤 **User Profiles**: View prompts shared by specific users and track your contributions.
- 🔒 **Authentication**: Secure login via third-party providers Google using OAuth.

---

## Installation

Follow these steps to set up the project locally.

### Prerequisites
- **Node.js** (v14.x or higher)
- **MongoDB** (local instance or cloud, e.g., MongoDB Atlas)
- **Git**

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/giriyaram/prompt-project.git
   cd prompt-adviser
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory with the following keys:

   ```bash
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mydatabase
   NEXTAUTH_URL=http://localhost:3000
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Visit `http://localhost:3000` to view the application.

---

## Usage

- After launching the app, users can:
  - Sign in using a third-party authentication provider.
  - Browse the community's collection of prompts.
  - Share their own prompts.
  - Search for prompts based on specific categories or tags.

---

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: Next.js API Routes
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: [Google OAuth](https://developers.google.com/identity/protocols/oauth2)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
