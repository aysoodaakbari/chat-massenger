This project is a simple messenger application built using React, TypeScript, Vite, Yarn, Tailwind CSS, and Material-UI. It utilizes the Mock Service Worker (MSW) library for mocking API requests  just for user login.

Features:

User authentication and login
Send massage from openAi bot
User profile management
I tried to be Responsive as much as I had time

Technologies:

Frontend: React, TypeScript
UI: Tailwind CSS, Material-UI
Data Management: Mock Service Worker (MSW) for user login
State MAnagment :Redux tooolkit
Icons: Svgr to generate svg into component

Implementation:

The application is structured using React components and TypeScript to ensure type safety. Vite is used for rapid development and bundling, while Yarn manages dependencies and package management. Tailwind CSS provides a consistent and responsive UI, and Material-UI provides UI components and styling.
For user authentication and login, MSW is employed to mock API requests and provide a controlled user experience. MSW allows for simulating login success and failure scenarios, making it easier to test the application's authentication flow.
For Chat data I try to use openAi Library to generate Text to answer.

Project Setup:

Clone the repository: git clone https://github.com/aysoodaakbari/chat-massenger.git
Install dependencies: yarn
Start the development server: yarn dev
Running the Application
Open your web browser and navigate to http://localhost:5173
fake login to account
Start chatting openAi connected users
You can Change your profile photo in top of Chatlist

I like to Development this feature in future:

Implement features such as group chats, file sharing, and push notifications
Enhance the UI with more customization options and interactive elements
Integrate with real data sources for user profiles and messaging history
Deploy the application to a production environment for public use

I hope it will be accepted.
