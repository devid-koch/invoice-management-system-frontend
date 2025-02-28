export function StatsCardSkeleton() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            { Array.from({ length: 4 }).map((_, i) => (
                <div key={ i } className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="h-4 w-[120px] animate-pulse bg-gray-200 rounded"></div>
                        <div className="h-4 w-4 animate-pulse bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="text-2xl font-bold">
                        <div className="h-8 w-[60px] animate-pulse bg-gray-200 rounded"></div>
                    </div>
                    <div className="text-xs text-gray-500">
                        <div className="mt-1 h-3 w-[100px] animate-pulse bg-gray-200 rounded"></div>
                    </div>
                </div>
            )) }
        </div>
    )
}

export function RecentInvoicesSkeleton() {
    return (
        <div className="space-y-4">
            { Array.from({ length: 5 }).map((_, i) => (
                <div key={ i } className="flex items-center gap-4">
                    <div className="h-12 w-12 animate-pulse bg-gray-200 rounded-full"></div>
                    <div className="space-y-2">
                        <div className="h-4 w-[200px] animate-pulse bg-gray-200 rounded"></div>
                        <div className="h-3 w-[150px] animate-pulse bg-gray-200 rounded"></div>
                    </div>
                </div>
            )) }
        </div>
    )
}

export function InvoiceTableSkeleton() {
    return (
        <div className="rounded-lg border border-gray-200">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
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
                        { Array.from({ length: 5 }).map((_, i) => (
                            <tr key={ i } className="border-b bg-white">
                                <td className="px-6 py-4">
                                    <div className="h-4 w-[80px] animate-pulse bg-gray-200 rounded"></div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="h-4 w-[150px] animate-pulse bg-gray-200 rounded"></div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="h-4 w-[80px] animate-pulse bg-gray-200 rounded"></div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="h-4 w-[100px] animate-pulse bg-gray-200 rounded"></div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="h-4 w-[60px] animate-pulse bg-gray-200 rounded"></div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="ml-auto h-8 w-8 animate-pulse bg-gray-200 rounded-full"></div>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export function Loading() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 animate-pulse bg-gray-200 rounded-md"></div>
                    <div className="h-6 w-48 animate-pulse bg-gray-200 rounded-md"></div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                    <div className="p-6 space-y-6">
                        <div className="space-y-2">
                            <div className="h-5 w-[120px] animate-pulse bg-gray-200 rounded"></div>
                            <div className="h-6 w-[200px] animate-pulse bg-gray-200 rounded"></div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-5 w-[120px] animate-pulse bg-gray-200 rounded"></div>
                            <div className="h-6 w-[150px] animate-pulse bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-px w-full bg-gray-200"></div>
                        <div className="space-y-2">
                            <div className="h-5 w-[120px] animate-pulse bg-gray-200 rounded"></div>
                            <div className="h-6 w-[100px] animate-pulse bg-gray-200 rounded"></div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-5 w-[120px] animate-pulse bg-gray-200 rounded"></div>
                            <div className="h-6 w-[100px] animate-pulse bg-gray-200 rounded"></div>
                        </div>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="h-10 w-full animate-pulse bg-gray-200 rounded-md"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}