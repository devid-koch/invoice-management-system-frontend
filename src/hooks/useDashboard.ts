import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { dashboardData } from "../api/dashboard-api"; // Adjust the import path as needed

export const useDashboard = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: dashboardData,
  });

  if (isError) {
    toast.error(error.message || "Failed to fetch dashboard data");
  }

  return { data, isLoading, isError };
};
