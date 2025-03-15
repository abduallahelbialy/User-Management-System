# User Management System

## Setup and Run Instructions

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn
- Vue CLI installed globally

### Installation
```sh
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd user-management-system

# Install dependencies
npm install  # or yarn install
```

### Running the Application
```sh
# Start the development server
npm run dev  # or yarn dev

# Build the application for production
npm run build  # or yarn build

# Run tests
npm run test  # or yarn test
```

## Architectural Decisions and Approach
- **State Management:** Using Pinia for state management to handle user data efficiently.
- **Routing:** Vue Router is used to manage navigation between pages.
- **TypeScript:** The entire project follows TypeScript for type safety and maintainability.
- **UI Framework:** Bootstrap is integrated for responsive design and UI components.
- **Data Persistence:** LocalStorage is used to persist user authentication state.
- **Exports:** jsPDF is used for exporting user data in PDF format, and CSV export is done using standard JavaScript methods.
- **Dark Mode Support:** Implemented via CSS classes and user preference storage.

## Answers to the Architecture Questions

1. **Why did you choose this architecture?**
   - The chosen architecture ensures modularity, scalability, and ease of maintenance. Pinia simplifies state management, and Vue Router provides structured navigation.

2. **How does your implementation handle scalability?**
   - The modular component structure allows easy expansion. API interactions and state management are separated for better scalability.

3. **How does the application ensure security?**
   - Role-based access control (RBAC) is implemented using Vuex state.
   - Authentication state is securely stored and checked before accessing routes.
   - Users with different roles have different permissions.

4. **How did you handle data persistence?**
   - sessionStorage is used for authentication state.
   - Data fetching is done via the `userStore` to ensure a reactive UI.

## Description of Implemented Features
- **User Management:**
  - Create, edit, and delete users.
  - Role-based permissions.
  - Search and sort users.
  
- **Exports:**
  - Export user data as CSV.
  - Export user data as PDF with proper table formatting.
  
- **Dark Mode Support:**
  - Toggle dark mode with user preference stored.
  
- **Pagination:**
  - Implemented pagination to handle large datasets.

## Test Coverage Information
- Unit tests are written using Jest.
- Run tests using:
  ```sh
  npm run test  # or yarn test
  ```
- Coverage reports are generated to ensure code quality.

## Login Credentials (For Testing)
- **Admin:**
  - ‘User: `admin`
  - Password: `admin123`
- **Manager:**
  - ‘User: `manager`
  - Password: `manager123`
- **viewer:**
  - ‘User: `viewer`
  - Password: `viewer123`

## Repository Guidelines
- Follow a clean commit history.
- Use proper TypeScript typings.
- Include documentation for each module and function.

