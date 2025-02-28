import { Loading } from "../skeleton/skeleton";
import { useNavigate, useParams } from "react-router-dom";
import { useInvoice } from "../../hooks/useInvoice";
import { updateInvoice } from "../../api/dashboard-api";
import { useMutation } from "@tanstack/react-query";
import { InvoiceData } from "../../utils/types";
import toast from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CreateInvoiceValidation } from "../../schema";


const EditInvoice = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: invoice, isLoading } = useInvoice(id);

    const mutation = useMutation({
        mutationFn: (invoiceData: InvoiceData) => updateInvoice(id ?? "", invoiceData),
        onSuccess: () => {
            toast.success("Invoice updated successfully!");
            navigate(-1);
        },
    });

    if (isLoading) return <Loading />;
    if (!invoice) return <p className="text-center py-4">Invoice not found</p>;

    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="flex items-center gap-4">
                    <button
                        onClick={ () => navigate(-1) }
                        className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-2 text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        <span className="sr-only">Back</span>
                    </button>
                    <h1 className="text-2xl font-semibold">Edit Invoice</h1>
                </div>

                <Formik
                    enableReinitialize
                    initialValues={ {
                        invoiceNumber: invoice.invoiceNumber || "",
                        customerName: invoice.customerName || "",
                        amount: invoice.amount || "",
                        dueDate: invoice.dueDate ? new Date(invoice.dueDate).toISOString().split("T")[0] : "",
                        status: invoice.status || "unpaid",
                    } }
                    validationSchema={ CreateInvoiceValidation }
                    onSubmit={ async (values) => {
                        try {
                            await mutation.mutateAsync({ ...values, dueDate: new Date(values.dueDate).toISOString() });
                        } catch (error) {
                            console.error("Failed to update invoice:", error);
                        }
                    } }
                >
                    { ({ isSubmitting }) => (
                        <Form>
                            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                                <div className="p-6 space-y-4">
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="invoiceNumber"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Invoice Number
                                            </label>
                                            <Field name="invoiceNumber" placeholder="INV-001" disabled className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                            <ErrorMessage name="invoiceNumber" component="div" className="text-red-500 text-sm" />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="customerName"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Customer Name
                                            </label>
                                            <Field
                                                name="customerName"
                                                placeholder="John Doe"
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                            <ErrorMessage name="customerName" component="div" className="text-red-500 text-sm" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="amount"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Amount
                                            </label>
                                            <div className="relative">
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">₹</span>
                                                <Field
                                                    name="amount"
                                                    type="number"
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="0.00"
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent pl-7 pr-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                            <ErrorMessage name="amount" component="div" className="text-red-500 text-sm" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="space-y-2">
                                                <label htmlFor="dueDate" className="text-sm font-medium">Due Date</label>
                                                <Field name="dueDate" type="date"
                                                    min={ new Date().toISOString().split("T")[0] }
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                                <ErrorMessage name="dueDate" component="div" className="text-red-500 text-sm" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="status"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Status
                                        </label>
                                        <Field as="select" name="status" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                            <option value="paid">Paid</option>
                                            <option value="unpaid">Unpaid</option>
                                        </Field>
                                        <ErrorMessage name="status" component="div" className="text-red-500 text-sm" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-6 pt-0">
                                    <button
                                        onClick={ () => navigate(-1) }
                                        className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={ isSubmitting }
                                        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        { isSubmitting ? "Saving..." : "Save" }
                                    </button>
                                </div>
                            </div>
                        </Form>
                    ) }
                </Formik>
            </main>
        </div>
    );
};

export default EditInvoice;
