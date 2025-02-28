interface AmountTrend {
    _id: number;
    totalAmount: number;
}
interface Data {
    totalInvoices: number;
    paidInvoices: number;
    unpaidInvoices: number;
    totalInvoiceAmount: number;
    amountTrends: AmountTrend[]
}
const InvoiceStats = ({ data }: { data: Data }) => {
    console.log(data);

    const stats = {
        totalInvoices: data?.totalInvoices,
        totalAmount: data?.totalInvoiceAmount || 0,
        paidInvoices: data?.paidInvoices,
        unpaidInvoices: data?.unpaidInvoices,
    }
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <h3 className="text-sm font-medium text-gray-700">Total Invoices</h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                    </svg>
                </div>
                <div className="text-2xl font-bold">{ stats.totalInvoices }</div>
                <p className="text-xs text-gray-500">All invoices in the system</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <h3 className="text-sm font-medium text-gray-700">Total Amount</h3>
                    <div className="h-5 w-4 text-gray-500">
                        ₹
                    </div>
                </div>
                <div className="text-2xl font-bold">₹{ stats.totalAmount }</div>
                <p className="text-xs text-gray-500">Sum of all invoice amounts</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <h3 className="text-sm font-medium text-gray-700">Paid Invoices</h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                </div>
                <div className="text-2xl font-bold">{ stats.paidInvoices }</div>
                <p className="text-xs text-gray-500">Invoices marked as paid</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <h3 className="text-sm font-medium text-gray-700">Unpaid Invoices</h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                    </svg>
                </div>
                <div className="text-2xl font-bold">{ stats.unpaidInvoices }</div>
                <p className="text-xs text-gray-500">Invoices pending payment</p>
            </div>
        </div>
    )
}
export default InvoiceStats