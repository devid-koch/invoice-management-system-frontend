import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar";

const ProtectedRoute = () => {
    const token = localStorage.getItem("token");

    return token ?
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
        : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
