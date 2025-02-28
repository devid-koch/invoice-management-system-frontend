import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { getAllInvoices } from "../../api/dashboard-api"
import { Invoice } from "../../utils/types"

const RecentInvoices = () => {

    const { data: invoices } = useQuery({
        queryKey: ["invoices"],
        queryFn: getAllInvoices
    })


    // Function to get initials from name
    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
    }

    const formatRelativeTime = (dateString: string) => {
        const date = new Date(dateString)
        const now = new Date()
        //@ts-ignore
        const diffInSeconds = Math.floor((now - date) / 1000)

        if (diffInSeconds < 60) return "just now"

        const diffInMinutes = Math.floor(diffInSeconds / 60)
        if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`

        const diffInHours = Math.floor(diffInMinutes / 60)
        if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`

        const diffInDays = Math.floor(diffInHours / 24)
        if (diffInDays < 30) return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`

        const diffInMonths = Math.floor(diffInDays / 30)
        return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`
    }
    return (
        <div className="space-y-8">
            { invoices?.map((invoice: Invoice) => (
                <div key={ invoice._id } className="flex items-center">
                    <div className="flex h-9 w-9 items-center justify-center capitalize rounded-full bg-gray-200 text-sm font-medium">
                        { getInitials(invoice.customerName) }
                    </div>
                    <div className="ml-4 space-y-1">
                        <Link to={ `/invoices/${invoice._id}` } className="text-sm font-medium capitalize leading-none hover:underline">
                            { invoice.customerName }
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>₹{ invoice.amount.toLocaleString() }</span>
                            <span>•</span>
                            <span>{ formatRelativeTime(invoice.dueDate) }</span>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <span
                            className={ `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${invoice.status === "paid"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800 border border-gray-300"
                                }` }
                        >
                            { invoice.status === "paid" ? "Paid" : "Unpaid" }
                        </span>
                    </div>
                </div>
            )) }
        </div>
    )
}
export default RecentInvoices