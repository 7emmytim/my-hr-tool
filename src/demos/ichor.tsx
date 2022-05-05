import { BiBell, BiHorizontalCenter, BiSearch, BiPlus, BiChevronRight } from 'react-icons/bi'
import { SiEthereum } from 'react-icons/si'
import { MdBarChart, MdOutlineDashboard } from 'react-icons/md'
import { GrBitcoin } from 'react-icons/gr'
import { CgShoppingBag } from 'react-icons/cg'
import { IoIosTrendingDown, IoIosTrendingUp } from 'react-icons/io'
import { BsCreditCard } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { GoPrimitiveDot } from 'react-icons/go'
import { GrTransaction } from 'react-icons/gr'
import { MdAttachFile } from 'react-icons/md'
import { RiStore3Line, RiVisaLine } from 'react-icons/ri'
import { AiOutlineCalendar } from 'react-icons/ai'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const IchorDashboard = () => {

    return (
        <div className='w-full overflow-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-5'>
                <div className='lg:col-span-3'>
                    <LeftDashboard />
                </div>

                <div className='lg:col-span-1'>
                    <RightDashboard />
                </div>

            </div>
        </div>
    )
}

export default IchorDashboard

const LeftDashboard = () => {
    return (
        <div className='bg-white pt-5 px-5'>
            <div className='grid grid-cols-1 sm:grid-cols-4 gap-6 items-center py-10'>
                <div className='space-y-20 col-span-1'>
                    <div className='flex items-center gap-5'>
                        <div className='p-3 rounded-lg bg-[#9bcfa6]'>
                            <IoIosTrendingUp className='w-5 h-5 font-extralight' />
                        </div>
                        <div>
                            <h4 className='text-xs text-gray-400'>Total earnings</h4>
                            <h5 className='text-base font-medium'>$12,594.10</h5>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='p-3 rounded-lg bg-[#f0f3de]'>
                            <MdOutlineDashboard className='w-5 h-5' />
                        </div>
                        <div>
                            <h4 className='text-xs text-gray-400'>Goal for this month</h4>
                            <h5 className='text-base font-medium'>$16,196.80</h5>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 mx-auto w-4/5'>
                    <div className='bg-gradient-to-r from-[#f3ba60] to-[#f7cf6a] rounded-xl space-y-4 p-8'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h4 className='text-xs'>Name Card</h4>
                                <h5 className='text-base font-medium'>AR Shakir</h5>
                            </div>
                            <RiVisaLine className='h-12 w-12' />
                        </div>
                        <h3 className='text-lg text-black font-semibold'>**** ****  **** 1234</h3>
                        <div className='flex items-center gap-8'>
                            <div className='text-xs font-medium space-y-2'>
                                <h4 className='opacity-40'>EXP DATE</h4>
                                <h5>12/25</h5>
                            </div>
                            <div className='text-xs font-medium space-y-2'>
                                <h4 className='opacity-40'>CVV NUMBER</h4>
                                <h5>123</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='space-y-20 col-span-1'>
                    <div className='flex items-center gap-5'>
                        <div className='p-3 rounded-lg bg-[#ffc993]'>
                            <IoIosTrendingDown className='w-5 h-5' />
                        </div>
                        <div>
                            <h4 className='text-xs text-gray-400'>Total spendings</h4>
                            <h5 className='text-base font-medium'>$12,594.10</h5>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='p-3 rounded-lg bg-[#bbedff]'>
                            <CgShoppingBag className='w-5 h-5' />
                        </div>
                        <div>
                            <h4 className='text-xs text-gray-400'>Spending Goal</h4>
                            <h5 className='text-base font-medium'>$16,196.80</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <div className='border-y-[1px] py-4 flex items-center gap-10 px-5'>
                    <h5 className='text-xs font-medium'>ACTIVITY SUMMARY</h5>
                    <h5 className='text-xs text-gray-400'>SPENDING SUMMARY</h5>
                    <h5 className='text-xs text-gray-400'>INCOME SUMMARY</h5>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className='col-span-1 border-r-[1px] border-gray-300'>
                    <ActivitySummary />
                </div>
                <div className='col-span-3'>
                    <History />
                </div>
            </div>
        </div>
    )
}

const RightDashboard = () => {
    return (
        <div className='pt-5 pr-5 pl-5 lg:pl-0'>
            <div className='flex items-center justify-between'>
                <div>
                    <h4 className='text-sm font-medium'>Orizon Crypto</h4>
                    <h6 className='text-gray-500 text-xs'>Increase your profit</h6>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='rounded-full bg-white p-2'>
                        <BiSearch className='w-5 h-5' />
                    </div>
                    <div className='rounded-full bg-white p-2'>
                        <BiBell className='w-5 h-5' />
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <div className='bg-gradient-to-r from-[#2b01d3] to-[#2425da] p-5 rounded-lg space-y-4 relative'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-white font-medium text-sm'>My Portfolio</h3>
                        <div className='border-[1px] rounded-sm'>
                            <MdBarChart className='text-white h-6 w-6' />
                        </div>
                    </div>
                    <div className='flex items-end justify-between pb-10'>
                        <h3 className='text-white font-bold text-3xl'>$ 34,010.00</h3>
                        <h6 className='text-white'>+2.5%</h6>
                    </div>
                    <div className='absolute -bottom-16 sm:-bottom-5 left-0 block sm:flex items-center text-center space-y-4 sm:space-y-0 gap-4 px-10 w-full'>
                        <div className='bg-white w-full p-3 mx-auto rounded-lg'>Deposit</div>
                        <div className='bg-white w-full p-3 mx-auto rounded-lg'>Withdraw</div>
                    </div>
                </div>
            </div>

            <div className='mt-14'>
                <div className='flex items-center justify-between'>
                    <h4 className='font-semibold text-base'>Favorites</h4>
                    <h6 className='font-semibold text-xs text-blue-600'>See All</h6>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5'>
                    <div className='rounded-lg bg-white p-3'>
                        <div className='flex items-center gap-3'>
                            <div className='rounded-full p-2 bg-black'>
                                <GrBitcoin className='h-5 w-5 bg-black text-white' />
                            </div>
                            <div>
                                <h4 className='font-medium'>Binance</h4>
                                <h5 className='text-gray-500 text-xs'>BNB</h5>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-20'>
                            <h4 className='font-semibold text-xs'>$20,788</h4>
                            <h5 className='text-green-500 text-xs'>+0.25%</h5>
                        </div>
                    </div>
                    <div className='rounded-lg bg-white p-3'>
                        <div className='flex items-center gap-3'>
                            <div className='rounded-full p-2 bg-black'>
                                <SiEthereum className='h-5 w-5 text-white' />
                            </div>
                            <div>
                                <h4 className='font-medium'>Binance</h4>
                                <h5 className='text-gray-500 text-xs'>BNB</h5>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-20'>
                            <h4 className='font-semibold text-xs'>$20,788</h4>
                            <h5 className='text-green-500 text-xs'>+0.25%</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-16'>
                <h4 className='font-medium text-base'>Live Prices</h4>
                <div className='mt-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <div className='rounded-full p-2 bg-black'>
                                <BiHorizontalCenter className='h-7 w-7 text-white' />
                            </div>
                            <div>
                                <h4 className='font-medium'>Binance</h4>
                                <h5 className='text-gray-500 text-xs'>BNB</h5>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='rounded-full p-2 bg-white'>
                                <BiHorizontalCenter className='h-7 w-7' />
                            </div>
                            <div>
                                <h4 className='font-semibold'>$18,788</h4>
                                <h5 className='text-green-500 text-xs'>+0.15%</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ActivitySummary = () => {

    // const options = {
    //     scales: {
    //         x: {
    //             grid: {
    //                 display: false,
    //                 drawBorder: false,
    //                 drawOnChartArea: false,
    //                 drawTicks: false,
    //             }
    //         }
    //     },
    //     responsive: true as const,
    //     plugins: {
    //         legend: {
    //             position: 'top',
    //         },
    //         title: {
    //             display: true,
    //             text: 'Chart.js Bar Chart',
    //         },
    //     },
    // };

    const labels = ['9', '11', '13', '15', '17', '19', '21', '23', '25', '27']

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [100, 150, 200, 300, 250, 350, 500, 450, 400, 180],
                backgroundColor: '#ffb84b',
            }
        ],
    }

    return (
        <div className='p-5 space-y-8'>
            <div className='flex items-center justify-between'>
                <h4 className='opacity-50 text-xs'>Activity Graph</h4>
                <h5 className='text-sm font-semibold'>$186k</h5>
            </div>
            <div>
                <div className='text-right'>
                    <h5 className='text-gray-400 text-xs'>BETWEEN SEP 9 - 27</h5>
                </div>
                <Bar data={data} />
            </div>
            <div className='space-y-8'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <div className='bg-[#eceafd] p-2 rounded-lg'>
                            <AiOutlineCalendar className='h-5 w-5 text-[#6e52e3]' />
                        </div>
                        <h4 className='opacity-50'>Monthly Plan</h4>
                    </div>
                    <BiChevronRight className='h-5 w-5' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <div className='bg-[#eceafd] p-2 rounded-lg'>
                            <FiSettings className='h-5 w-5 text-[#6e52e3]' />
                        </div>
                        <h4 className='opacity-50'>Settings</h4>
                    </div>
                    <BiChevronRight className='h-5 w-5' />
                </div>
            </div>
        </div>
    )
}

const History = () => {

    const _history = [
        { icon: <GrTransaction className='h-5 w-5' />, name: 'Office Supplies', type: 'Supplies', color: 'text-[#eb5642]', bg: 'bg-[#fdf5f3]', price: '-$10,100.00' },
        { icon: <RiStore3Line className='text-[#6e52e3] h-5 w-5' />, name: 'Park Transfer', type: 'Marketing', color: 'text-[#2b01d3]', bg: 'bg-[#f0faf4]', price: '-$50,400.00' },
        { icon: <BsCreditCard className='h-5 w-5' />, name: 'Target', type: 'Equipment', color: 'text-[#10a7b1]', bg: 'bg-[#f0faf4]', price: '-$10,100.00' }
    ]

    return (
        <div className='p-5'>
            <div className='flex items-center justify-between gap-4'>
                <div className='flex items-center gap-10'>
                    <h4 className='text-[#6e52e3] border-b-2 border-[#6e52e3] pb-2'>History</h4>
                    <h4 className='pb-2'>Upcoming</h4>
                </div>
                <div className='flex items-center gap-3 pb-2'>
                    <div className='bg-gray-100 p-2 rounded-md'>
                        <FiSettings />
                    </div>
                    <div className='bg-[#2b01d3] p-2 rounded-md'>
                        <BiPlus className='text-white' />
                    </div>
                </div>
            </div>
            {/* <h5 className='text-gray-400 text-xs font-medium'>13 Sep, 2020</h5> */}
            <div className='overflow-auto'>
                {
                    _history.map(item => {
                        return (
                            <div className='grid grid-cols-3 items-center my-8 min-w-[40rem]'>
                                <div className='flex items-center gap-4'>
                                    {item.icon}
                                    <div>
                                        <h4 className='text-sm font-medium'>{item.name}</h4>
                                        <h5 className='opacity-50 font-medium text-[0.6rem]'>10 Sep, 2020 at 3:30 PM</h5>
                                    </div>
                                </div>

                                <div className='flex items-center gap-2 mx-auto'>
                                    <div className={`${item.bg} p-1 rounded-sm`}>
                                        <GoPrimitiveDot className={`h-3 w-3 ${item.color}`} />
                                    </div>
                                    <h5 className='opacity-70 text-xs font-medium'>{item.type}</h5>
                                </div>

                                <div className='flex items-center gap-4 ml-auto'>
                                    <div className='p-2 bg-gray-100 rounded-md'>
                                        <MdAttachFile className='text-gray-400' />
                                    </div>
                                    <h4 className='font-bold text-xs'>{item.price}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}