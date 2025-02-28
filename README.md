# Invoice Management System (Frontend)

## Project Overview
This frontend is built using React.js to manage invoices. It provides a user-friendly interface for authentication, invoice management, PDF generation, and a dashboard with data visualization.

## Technologies Used
- React.js (with Vite for fast development)
- React Router (for navigation)
- Axios (for API calls)
- Redux Toolkit (for state management)
- MUI (for UI components)
- Chart.js (for data visualization)
- React-PDF (for PDF viewing)

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/devid-koch/invoice-management-system-frontend.git
   cd invoice-management-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the backend API URL:
   ```env
   VITE_API_BASE_URL= "backend url"
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Features
- **User Authentication** (Login, Signup with JWT)
- **Invoice Management** (Create, View, Update, Delete Invoices)
- **Dashboard with Charts** (Total invoices, Paid/Unpaid status, Monthly trends)
- **PDF Invoice Viewing** (Downloadable invoices)
- **Responsive Design** (Mobile-friendly UI)

## Folder Structure
```
src/
│── components/        # Reusable components (Navbar, InvoiceForm, Chart)
│── pages/             # Main pages (Login, Dashboard, Invoices, Settings)
│── api/               # API services using Axios
│── styles/            # Global styles
│── App.tsx             # Main App entry
│── main.tsx           # React app entry
```

## API Integration
The frontend interacts with the backend using Axios. Example API call:
```js
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

export const fetchInvoices = async () => {
  const response = await axios.get(`${API}/invoices`);
  return response.data;
};
```

## Deployment
1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy to Vercel, Netlify, or any static hosting service.
3. Ensure the backend API URL is updated in `.env` for production.

## Future Enhancements
- Add dark mode
- Implement role-based access control (RBAC)
- Improve animations and UI/UX

## License
This project is licensed under the MIT License.

