# 3813ICT Chat Application - Phase 1

## Git Repository Organisation
This repository is organised into two main branches:
1. **frontend**: This branch contains the Angular front-end code.
2. **backend**: This branch contains the Node.js server-side code.

## Data Structures
### Client-Side (Angular)
- **User**: `{ username: string, email: string, roles: string[], groups: string[] }`
- **Group**: `{ id: string, name: string, channels: string[] }`
- **Channel**: `{ id: string, name: string }`

### Server-Side (Node.js)
- **User**: `{ username: string, password: string, roles: string[], groups: string[] }`
- **Group**: `{ id: string, name: string, channels: string[] }`
- **Channel**: `{ id: string, name: string, group: string }`

## Angular Architecture
- **Components**: Each page (e.g., Login, Group Management, Channel) has its own component.
- **Services**: A user authentication service manages login and logout. A group service handles group and channel management.
- **Models**: Models for `User`, `Group`, and `Channel` are defined to structure data.
- **Routes**: Angular routes direct users to different pages based on their role.

## Node Server Architecture
- **Modules**: Express is used to handle server-side routing, and we modularise routes for user authentication, group management, and channel creation.
- **Functions**: Key functions include user creation, login, and group/channel assignment.
- **Files**: `index.js` serves as the entry point. Other files are structured into controllers and services.
- **Global Variables**: None are used as we aim to avoid unnecessary global state.

## Error Handling
- **Middleware**: Added basic error handling middleware to manage and respond to errors that occur during server operations.

## Environment Variables
- **.env**: The `.env` file is used to manage environment variables. Key variables include:
  - `PORT`: Defines the port on which the server will run (default is 3000).

## Interaction Between Client and Server
- The client (Angular) interacts with the server via HTTP requests for user authentication, group, and channel management.
- Once a user is authenticated, the UI updates based on their role (Super Admin, Group Admin, or User).

## API Endpoints
- **GET /api/users**: Retrieves a list of users. Currently returns a placeholder message.

## Setup Instructions
1. **Install Dependencies**:
   ```bash
   npm install