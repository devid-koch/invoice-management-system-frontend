import { Link } from "react-router-dom"
import { InvoiceTableSkeleton } from "../../components/skeleton/skeleton"
import { Suspense } from "react"
import InvoiceTable from "../../components/invoices/invoice-table"

const Invoices = () => {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Invoices</h1>
                    <Link
                        to="/create-invoice"
                        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                        New Invoice
                    </Link>
                </div>
                <Suspense fallback={ <InvoiceTableSkeleton /> }>
                    <InvoiceTable />
                </Suspense>
            </main>
        </div>
    )
}
export default Invoices