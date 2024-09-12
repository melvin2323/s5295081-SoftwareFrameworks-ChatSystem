# 3813ICT Chat Application - Phase 1 - s5295081

## Git Repository Organisation
This repository is organised into two main branches:
1. **frontend**: This branch contains the Angular frontend code.
2. **backend**: This branch contains the Node.js server side code.

### Repository Layout:

**`frontend/`**: Contains the Angular frontend application.
- **`.angular/`**: Angular cache files.
- **`.vscode/`**: Visual Studio Code config files.
- **`node_modules/`**: Node.js dependencies for the frontend.
- **`public/`**: Public assets such as images and static files.
- **`src/`**: Source code for the Angular application, including:
  - **`app/`**: Angular components, services, and modules.
  - **`assets/`**: Static assets like images and styles.
  - **`environments/`**: Environment-specific configurations.
  - **`index.html`**: Main HTML file.
  - **`styles.css`**: Global styles for the application.
- **`angular.json`**: Angular CLI configuration file.
- **`package.json`**: Project metadata and dependencies.
- **`tsconfig.*.json`**: TypeScript configuration files.

**`tests/`**: Contains unit and integration tests.
- **`integration/`**: Integration test cases.
- **`unit/`**: Unit test cases.

**`root/`**: Contains project-wide configuration files and the backend application.
- **`.env`**: Environment variables for the project.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`README.md`**: Project overview and setup instructions.
- **`package.json`**: Dependencies and scripts for the backend.
- **`index.js`**: Main entry point for the backend application.
- **`node_modules/`**: Node.js dependencies for the backend.

### Key Files:

- **`README.md`**: Provides an overview of the project, setup instructions, and usage guidelines.
- **`.gitignore`**: Defines which files and directories Git should ignore.

### Version Control Approach

**1. Branching Strategy**

- **`main`**: The primary branch containing the production-ready code.
- **`backend`**: The primary branch containing the backend code. 
- **`frontend`**: The primary branch containing the frontend code. 

**2. Commit Messages**

- Used descriptive commit messages to explain the purpose of each commit.

**3. Merging and Pull Requests**

- Pull requests were used to merge changes from feature or hotfix branches into `backend` or `frontend`  or `main` and each pull request is reviewed and tested before merging to ensure code quality and prevent issues.

**4. Version Tags**

- Sometimes I used version tags to mark specific releases in the repository.
  - `v1.0.0` for the initial release.
  - `v1.1.0` for a minor update with new features.

---




## Data Structures

This section describes the main data structures used in the application. These structures represent how different entities like users, groups, channels, and authentication data are organized and stored.

### 1. Users

The `User` object represents an individual user in the system.

**User Object:**

- **`id`**: `string` - A unique identifier for the user, usually a UUID or a unique string.
- **`username`**: `string` - The user's chosen username, used for login and display purposes.
- **`password`**: `string` - The hashed password for authentication. Always store passwords securely using hashing and salting techniques.
- **`email`**: `string` - The user's email address, used for notifications and communication.
- **`role`**: `string` - The role of the user within the system. Possible values include:
  - `superadmin`: Full access to all system features.
  - `groupadmin`: Access to manage groups and their members.
  - `user`: Regular access with limited permissions.

**Example:**

```json
{
  "id": "ABC123",
  "username": "jamesmacalister23",
  "password": "testdrive",
  "email": "jamesmacalister23@gmail.com",
  "role": "user"
}
```


### 2. Groups

The `Group` object represents a collection of users within the system.

**Group Object:**

- **`id`**: `string` - A unique identifier for the group, typically a UUID or a unique string.
- **`name`**: `string` - The name of the group, used for identification and display purposes.
- **`description`**: `string` - A brief description of the group's purpose or function.
- **`members`**: `array of strings` - A list of user IDs representing the members of the group.
- **`admin`**: `string` - The user ID of the group admin who has special management privileges.

```json
{
  "id": "groupA",
  "name": "Developers",
  "description": "Group for development team members",
  "members": ["user1", "user2"],
}
```

### 3. Channels

The `Channel` object represents a specific communication channel within the system.

**Channel Object:**

- **`id`**: `string` - A unique identifier for the channel, usually a UUID or a unique string.
- **`name`**: `string` - The name of the channel, used for identification and display.
- **`type`**: `string` - The type of channel. Possible values include:
  - `public`: Accessible by all users.
  - `private`: Accessible only by invited users.
- **`members`**: `array of strings` - A list of user IDs who have access to the channel.
- **`messages`**: `array of message objects` - A list of messages exchanged in the channel.

```json
{
  "id": "channel1",
  "name": "General Chat",
  "description": "General discussion channel",
  "groupId": "groupA",
  "members": ["user1", "user2"],
  "messages": [
    {
      "id": "msg1",
      "senderId": "user1",
      "content": "Hello everyone!",
    }
  ]
}
```

### 4. Authentication Data

The `Authentication Data` object is used to manage user login and registration.

**Authentication Data Object:**

- **`username`**: `string` - The username provided by the user during login or registration.
- **`password`**: `string` - The password provided by the user, which should be hashed before storage.
- **`email`**: `string` - The email address provided by the user, used for account recovery and notifications.

--- 



## REST API Documentation

The Angular front end communicates with the Node.js server using a REST API. Below is a description of each route provided by the server, including parameters, return values, and functionality.

### 1. User Routes

#### `GET /api/users`

**Description**: Retrieve a list of all users.

**Parameters**: None

**Return Values**:
- **200 OK**: Returns a JSON array of user objects.
- **Example Response**:
  ```json
  [
    {
      "id": "uuid123",
      "username": "john_doe",
      "email": "john@example.com",
      "role": "user"
    },
    {
      "id": "uuid124",
      "username": "jane_doe",
      "email": "jane@example.com",
      "role": "admin"
    }
  ]
  ```

### `POST /api/users`

**Description**: Create a new user.

**Parameters**:
- **Body**: A JSON object containing the username, password, and email.

  ```json
  [
    {
  "username": "new_user",
  "password": "securepassword",
  "email": "newuser@example.com"
  }
  ]
  ```

---


## Angular Architecture

The Angular architecture for this project is structured to facilitate reusability, and maintainability which in thus the architecture includes components, services, and models, each playing a crucial role in the application's overall design.

### 1. Components

Components are the building blocks of the Angular application. Each component is responsible for a specific part of the user interface and includes a template, styles, and logic.

#### Key Components:

- **AppComponent**
  - **Description**: The root component that serves as the entry point for the application. It typically includes the main layout and routing.
  - **Template**: Defines the overall structure of the application, including header, footer, and router outlet.
  
- **UserListComponent**
  - **Description**: Displays a list of users.
  - **Template**: Contains a table or list view to present user information.
  - **Logic**: Handles user data retrieval and presentation.

- **UserDetailComponent**
  - **Description**: Shows detailed information about a selected user.
  - **Template**: Displays user-specific details such as username, email, and role.
  - **Logic**: Manages data fetching and interaction for a specific user.

- **GroupListComponent**
  - **Description**: Lists all groups available in the system.
  - **Template**: Displays group names and descriptions.
  - **Logic**: Handles the retrieval and presentation of group data.

- **ChannelListComponent**
  - **Description**: Lists all channels within the application.
  - **Template**: Shows channel names and other relevant information.
  - **Logic**: Manages data fetching and display of channels.

### 2. Services

Services provided the way to share data and functionality across different components. They are used for business logic, data retrieval, and communication with external APIs.

#### Key Services:

- **AuthService**
  - **Description**: Manages user authentication, registration, and session management.
  - **Functions**:
    - `login(credentials)`: Authenticates a user with the given credentials.
    - `register(user)`: Registers a new user.
    - `logout()`: Ends the user session.
    - `getCurrentUser()`: Retrieves information about the currently logged-in user.

- **UserService**
  - **Description**: Handles operations related to user data.
  - **Functions**:
    - `getUsers()`: Fetches a list of all users.
    - `getUserById(id)`: Retrieves details of a specific user.
    - `updateUser(id, user)`: Updates user information.
    - `deleteUser(id)`: Deletes a user by ID.

- **GroupService**
  - **Description**: Manages group-related data and operations.
  - **Functions**:
    - `getGroups()`: Retrieves a list of all groups.
    - `getGroupById(id)`: Fetches details of a specific group.
    - `createGroup(group)`: Creates a new group.
    - `updateGroup(id, group)`: Updates group details.
    - `deleteGroup(id)`: Deletes a group by ID.

- **ChannelService**
  - **Description**: Handles operations related to channels.
  - **Functions**:
    - `getChannels()`: Fetches a list of all channels.
    - `getChannelById(id)`: Retrieves details of a specific channel.
    - `createChannel(channel)`: Creates a new channel.
    - `updateChannel(id, channel)`: Updates channel information.
    - `deleteChannel(id)`: Deletes a channel by ID.

### 3. Models

Models defined the data structures used throughout the application. They represented the shape of data and ensure consistency across components and services.

#### Key Models:

- **User**
  - **Fields**:
    - `id: string` - Unique identifier for the user.
    - `username: string` - User's chosen username.
    - `password: string` - Hashed password for authentication.
    - `email: string` - User's email address.
    - `role: string` - User's role within the system.

- **Group**
  - **Fields**:
    - `id: string` - Unique identifier for the group.
    - `name: string` - Name of the group.
    - `description: string` - Description of the group.
    - `members: string[]` - Array of user IDs representing group members.
    - `admin: string` - User ID of the group admin.

- **Channel**
  - **Fields**:
    - `id: string` - Unique identifier for the channel.
    - `name: string` - Name of the channel.
    - `type: string` - Type of channel (e.g., public, private).
    - `members: string[]` - Array of user IDs representing channel members.
    - `messages: any[]` - Array of messages in the channel.

This architecture supports a clean separation of concerns, making it easier to manage and extend the application as needed.

## Environment Variables
- **.env**: The `.env` file is used to manage environment variables. Key variables include:
  - `PORT`: Defines the port on which the server will run (default is 3000).
