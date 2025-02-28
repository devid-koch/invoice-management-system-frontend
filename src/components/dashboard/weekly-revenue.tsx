import { WeeklyRevenueProps } from "../../utils/types"

const WeeklyRevenue: React.FC<WeeklyRevenueProps> = ({ weekData }) => {
    // const data = [
    //     { month: "Jan", revenue: 4500 },
    //     { month: "Feb", revenue: 5200 },
    //     { month: "Mar", revenue: 3800 },
    //     { month: "Apr", revenue: 6700 },
    //     { month: "May", revenue: 4900 },
    //     { month: "Jun", revenue: 7500 },
    //     { month: "Jul", revenue: 8200 },
    //     { month: "Aug", revenue: 7800 },
    //     { month: "Sep", revenue: 9100 },
    //     { month: "Oct", revenue: 8400 },
    //     { month: "Nov", revenue: 7600 },
    //     { month: "Dec", revenue: 9800 },
    // ]

    const maxRevenue = Math.max(...weekData?.map((item) => item.revenue))
    return (
        <div className="h-[300px] w-full">
            <div className="flex h-full items-end">
                { weekData?.map((item, index) => (
                    <div key={ index } className="flex h-full flex-1 flex-col justify-end px-1">
                        <div
                            className="w-full rounded-t-sm bg-blue-600 transition-all hover:bg-blue-700"
                            style={ { height: `${(item.revenue / maxRevenue) * 100}%` } }
                        ></div>
                        <div className="mt-2 text-center text-xs text-gray-600">{ item.day }</div>
                    </div>
                )) }
            </div>
        </div>
    )
}
export default WeeklyRevenue