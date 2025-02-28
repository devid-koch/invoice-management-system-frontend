import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./layouts/root";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProtectedRoute from "./providers/ProtectedRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import Invoices from "./pages/invoices/invoices";
import NewInvoicePage from "./components/invoices/create-invoice";
import InvoiceDetails from "./components/invoices/invoice-details";
import EditInvoice from "./components/invoices/edit-invoice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Login />
        ),
      },
    ],
  },
  {
    path: "/register",
    children: [
      {
        index: true,
        element: (
          <Register />
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: (
          <Dashboard />
        ),
      },
    ],
  },
  {
    path: "/invoices",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: (
          <Invoices />
        ),
      },
    ],
  },
  {
    path: "/create-invoice",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: (
          <NewInvoicePage />
        ),
      },
    ],
  },
  {
    path: "/invoice-details/:id",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: (
          <InvoiceDetails />
        ),
      },
    ],
  },
  {
    path: "/invoice/:id/edit",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: (
          <EditInvoice />
        ),
      },
    ],
  },

]);

export default router;
