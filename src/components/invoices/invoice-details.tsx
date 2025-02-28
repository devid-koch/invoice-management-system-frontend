import { Link, useNavigate, useParams } from "react-router-dom"
import { Loading } from "../skeleton/skeleton";
import { useInvoice } from "../../hooks/useInvoice";
import { useDownloadInvoice } from "../../hooks/useDownloadInvoice";
import { deleteInvoice } from "../../api/dashboard-api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const InvoiceDetails = () => {
    const { id } = useParams() as { id: string };
    const navigate = useNavigate();

    const { data: invoice, isLoading } = useInvoice(id);
    const { mutate: generatePdf, isPending: isGeneratingPdf } = useDownloadInvoice();

    const mutation = useMutation({
        mutationFn: deleteInvoice,
        onSuccess: (data) => {
            if (data?.status) {
                toast.success("Invoice deleted successfully!");
                navigate(-1);
            } else {
                toast.error("Failed to delete invoice.");
            }
        },
    });

    const formatDate = (dateString: any) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    }

    const handleDeleteInvoice = (id: string) => {
        if (confirm("Are you sure you want to delete this invoice?")) {
            mutation.mutate(id);
        }
    }

    if (isLoading) {
        return <Loading />
    }

    if (!invoice) {
        return (
            <div className="flex min-h-screen w-full flex-col">
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                    <div className="flex items-center gap-4">
                        <Link
                            to="/invoices"
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
                        </Link>
                        <h1 className="text-2xl font-semibold">Invoice Details</h1>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <p className="text-center py-4">Invoice not found</p>
                    </div>
                </main>
            </div>
        )
    }

    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="flex items-center gap-4">
                    <Link
                        to="/invoices"
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
                    </Link>
                    <h1 className="text-2xl font-semibold">Invoice Details</h1>
                    <div className="ml-auto flex items-center gap-2">
                        <button
                            onClick={ () => generatePdf(id!) }
                            disabled={ isGeneratingPdf }
                            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-2 text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
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
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            <span className="sr-only">Download PDF</span>
                        </button>
                        <Link
                            to={ `/invoice/${id}/edit` }
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
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                            <span className="sr-only">Edit</span>
                        </Link>
                        <button
                            onClick={ () => handleDeleteInvoice(id) }
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
                                <path d="M3 6h18" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                            </svg>
                            <span className="sr-only">Delete</span>
                        </button>
                    </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium">Invoice # { invoice?.invoiceNumber || "" }</h3>
                            <span
                                className={ `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${invoice.status === "paid"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-gray-100 text-gray-800 border border-gray-300"
                                    }` }
                            >
                                { invoice.status === "paid" ? "Paid" : "Unpaid" }
                            </span>
                        </div>
                        <p className="text-sm text-gray-500">Created on { formatDate(invoice?.createdAt) }</p>
                    </div>
                    <div className="p-6 space-y-6">
                        <div>
                            <h4 className="text-sm font-medium text-gray-500">Customer</h4>
                            <p className="text-lg font-semibold mt-1 capitalize">{ invoice?.customerName }</p>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-500">Due Date</h4>
                            <p className="text-lg font-semibold mt-1">{ formatDate(invoice?.dueDate) }</p>
                        </div>

                        <div className="h-px w-full bg-gray-200"></div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-500">Amount</h4>
                            <p className="text-2xl font-bold mt-1">₹{ invoice?.amount?.toLocaleString() }</p>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-500">Status</h4>
                            <p className="text-lg font-semibold mt-1 capitalize">{ invoice?.status }</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default InvoiceDetails