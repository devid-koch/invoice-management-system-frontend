import { Link } from "react-router-dom"
import { deleteInvoice, getAllInvoices } from "../../api/dashboard-api"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Invoice } from "../../utils/types"
import toast from "react-hot-toast"
import { useState } from "react"
import { InvoiceTableSkeleton } from "../skeleton/skeleton"

const InvoiceTable = () => {
    const queryClient = useQueryClient();
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

    const toggleDropdown = (invoiceId: string) => {
        setOpenDropdownId(openDropdownId === invoiceId ? null : invoiceId);
    };

    const { data: invoices, isLoading } = useQuery({
        queryKey: ["invoices"],
        queryFn: getAllInvoices
    })


    const mutation = useMutation({
        mutationFn: deleteInvoice,
        onSuccess: (data) => {
            if (data?.status) {
                toast.success("Invoice deleted successfully!");
            } else {
                toast.error("Failed to delete invoice.");
            }
            queryClient.invalidateQueries({ queryKey: ["invoices"] });
        },
    });

    const formatDate = (dateString: any) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    }

    const handleDeleteInvoice = (id: string) => {
        if (confirm("Are you sure you want to delete this invoice?")) {
            mutation.mutate(id);
        }
    }

    if (isLoading) {
        return <InvoiceTableSkeleton />
    }

    return (
        <div className="rounded-lg border border-gray-200">
            <div className="overflow-x-auto">
                { invoices?.length === 0 ?
                    <div className="bg-gray-50 text-xl text-center uppercase text-gray-700">No invoice found</div>
                    :
                    <table className="w-full h-full text-left text-sm">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                            <tr>
                                <th className="px-6 py-3">Invoice #</th>
                                <th className="px-6 py-3">Customer</th>
                                <th className="px-6 py-3">Amount</th>
                                <th className="px-6 py-3">Due Date</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { invoices?.map((invoice: Invoice) => (
                                <tr key={ invoice._id } className="border-b bg-white hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">
                                        <Link to={ `/invoice-details/${invoice._id}` } className="hover:underline">
                                            { invoice.invoiceNumber }
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 capitalize">{ invoice.customerName }</td>
                                    <td className="px-6 py-4">₹{ invoice.amount.toLocaleString() }</td>
                                    <td className="px-6 py-4">{ formatDate(invoice.dueDate) }</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={ `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${invoice.status === "paid"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-gray-100 text-gray-800 border border-gray-300"
                                                }` }
                                        >
                                            { invoice.status === "paid" ? "Paid" : "Unpaid" }
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="inline-block text-left dropdown">
                                            <button
                                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                                                onClick={ () =>
                                                    toggleDropdown(invoice._id)
                                                }
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
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="12" cy="5" r="1" />
                                                    <circle cx="12" cy="19" r="1" />
                                                </svg>
                                                <span className="sr-only">Open menu</span>
                                            </button>
                                            { openDropdownId === invoice._id && (
                                                <div
                                                    className="absolute right-20 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                                                >
                                                    <div className="py-1">
                                                        <Link
                                                            to={ `/invoice-details/${invoice._id}` }
                                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="mr-2 h-4 w-4"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                                <circle cx="12" cy="12" r="3" />
                                                            </svg>
                                                            View
                                                        </Link>
                                                        <Link
                                                            to={ `/invoice/${invoice._id}/edit` }
                                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="mr-2 h-4 w-4"
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
                                                            Edit
                                                        </Link>
                                                        <button
                                                            className="flex w-full items-center px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
                                                            onClick={ () => { handleDeleteInvoice(invoice._id) } }
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="mr-2 h-4 w-4"
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
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            ) }
                                        </div>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}
export default InvoiceTable