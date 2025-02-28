import { useMutation } from "@tanstack/react-query";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth-api";
import toast from "react-hot-toast";
import { LoginvalidationSchema } from "../../schema";


const Login = () => {
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            if (data.token) {
                localStorage.setItem("token", data.token)
                toast.success("Login successful!");
                navigate("/dashboard");
            }
        },
        onError: (error: any) => {
            toast.error(error?.response?.data?.message || "Something went wrong!");
        },
    });

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login</h2>

                <Formik
                    initialValues={ { email: "", password: "" } }
                    validationSchema={ LoginvalidationSchema }
                    onSubmit={ (values, { setSubmitting }) => {
                        mutation.mutate(values);
                        setSubmitting(false);
                    } }
                >
                    { ({ isSubmitting }) => (
                        <Form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="Enter your email"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="••••••••"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <button
                                type="submit"
                                disabled={ isSubmitting || mutation.isPending }
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
                            >
                                { mutation.isPending ? "Login..." : "Login" }
                            </button>
                        </Form>
                    ) }
                </Formik>

                <div className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account? { " " }
                    <Link to="/register" className="text-indigo-600 hover:text-indigo-500 font-medium">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
