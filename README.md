# Eigo Shopping Web

An advanced and responsive e-commerce web application built with React.js, providing users with a seamless shopping experience. This project integrates dynamic product listings, user authentication, and an efficient shopping cart system, showcasing best practices in modern web development.
-------------------------------------------------------------------------------------------------------------------------
Features
User Authentication: Register and login functionality using auth context.
Dynamic Product Listing: Displays products fetched from products.json with filtering and search functionality.
Responsive Design: Designed for mobile, tablet, and desktop views using CSS modular styles.
Scroll Category Navigation: Quick category navigation using the ScrollCategory component.
Reusable Components: Modular and reusable components for buttons, modals, forms, and grids.
Shopping Cart: Add, remove, and preview items in the cart.
Checkout Flow: Smooth checkout process with support for various payment options.
--------------------------------------------------------------------------------------------------------------------------
Technologies Used
Frontend: React.js,MUI, JSX, CSS Modules, Context API
Styling: Custom CSS with a modular approach (Assets/css)
Backend (mocked): JSON-based APIs (products.json, Login.json, Register.json)
Fonts & Icons: Custom fonts (rsc) and icon sets.
--------------------------------------------------------------------------------------------------------------------------
Directory Structure
Main Directories
public/: Contains static assets like product data, login and registration mock JSON, and the main index.html.
src/: The main source code, including components, contexts, layouts, pages, constants, and hooks.
Key Subdirectories
Components/: Houses all reusable and core UI components like Header, Footer, Product, and ScrollCategory.
Contexts/: Provides state management for authentication, products, cart, and common states using Context API.
Layouts/: Includes layout wrappers for different views, such as AuthLayout and CommonLayout.
Pages/: Contains the main page views, such as home.jsx, auth.jsx, and checkout.jsx.
Assets/: Contains global CSS styles, fonts, and resources for consistent styling across the app.
constants/: Holds constant variables for shared use.
hooks/: Custom React hooks, such as useLocalStorage, for enhanced functionality.
------------------------------------------------------------------------------------------------------------------------


## Getting Started

Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)
npm or yarn

1)Installation
Clone the repository:

`git clone https://github.com/salahaKA/eigo_shoppingweb.git  `
`cd eigo_shoppingweb `

2)Install dependences
`npm install ` 

3)Start development server:
`npm start`

4)Open your browser and visit:
"http://localhost:3000"
-----------------------------------------------------------------------------------------------------------

##Usage
User Authentication
Navigate to /login to log in.
Navigate to /register to create a new account.
Home Page
Displays products dynamically fetched from products.json.
Includes category navigation using the ScrollCategory component.
Shopping Cart
View items in the cart and proceed to checkout.
Checkout
Navigate through the checkout flow and complete payment
------------------------------------------------------------------------------------------------------------------

##Project Highlights
Modular Architecture: Separation of concerns with well-structured directories and reusable components.
Dynamic Product Display: Products filtered dynamically based on user input (searchKeyword).
Context API Integration: Centralized state management for smooth user experience.
Custom Styling: CSS modularity with hierarchical styling for better maintainability.

##Future Enhancements
Integrate a backend API for dynamic product and user data.
Add payment gateway integration.
Implement advanced product filtering and sorting.
Enhance category navigation with animations.

## Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a feature branch:

`git checkout -b feature-name `
Commit your changes and push to the branch:

`git push origin feature-name ` 
Submit a pull request.
----------------------------------------------------------------------------------------------------------
License
This project is licensed under the MIT License.
--------------------------------------------------------------------------------------------------------
Author
Kadeejath Salaha
https://github.com/salahaKA

