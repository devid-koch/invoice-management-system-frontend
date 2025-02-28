import { Chart, registerables } from "chart.js";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { RecentInvoicesSkeleton, StatsCardSkeleton } from "../../components/skeleton/skeleton";
import InvoiceStats from "../../components/dashboard/invoice-stats";
import RecentInvoices from "../../components/dashboard/recent-invoices";
import { useDashboard } from "../../hooks/useDashboard";
import WeeklyRevenue from "../../components/dashboard/weekly-revenue";

Chart.register(...registerables);

const Dashboard = () => {

    const { data, isLoading, isError } = useDashboard();

    if (isLoading) return (
        <div className="m-20">
            <StatsCardSkeleton />
        </div>
    );
    if (isError) return <p>Failed to load data, please refresh</p>;

    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
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

                <Suspense fallback={ <StatsCardSkeleton /> }>
                    <InvoiceStats data={ data } />
                </Suspense>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <div className="rounded-lg border border-gray-200 bg-white shadow-sm lg:col-span-4">
                        <div className="p-6">
                            <h3 className="text-lg font-medium">Weekly Revenue</h3>
                            <p className="text-sm text-gray-500">Revenue trends for the last 7 days</p>
                        </div>
                        <div className="p-6 pt-0">
                            <Suspense
                                fallback={
                                    <div className="h-[300px] flex items-center justify-center">
                                        <div className="h-[300px] w-full animate-pulse bg-gray-200 rounded-md"></div>
                                    </div>
                                }
                            >
                                <WeeklyRevenue weekData={ data?.weekRevenueTrends } />
                            </Suspense>
                        </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-white shadow-sm lg:col-span-3">
                        <div className="flex flex-row items-center justify-between p-6 pb-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-medium">Recent Invoices</h3>
                                <p className="text-sm text-gray-500">Latest invoice activity</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <Suspense fallback={ <RecentInvoicesSkeleton /> }>
                                <RecentInvoices />
                            </Suspense>
                        </div>
                        <div className="p-6 pt-0">
                            <Link
                                to="/invoices"
                                className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            >
                                View all invoices
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-2 h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
