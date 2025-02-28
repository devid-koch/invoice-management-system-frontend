import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import router from "./router";
import "./utils/style.css"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import React from "react";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (_, query) => {
      console.log("query", query.meta);
      if (query.meta?.errorMessage) {
        toast.error(
          (query.meta.errorMessage as unknown as string) ??
          "Something went wrong!"
        );
      }
    },
  }),
});

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider store={ store }>
      <QueryClientProvider client={ queryClient }>
        <RouterProvider router={ router } />
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
