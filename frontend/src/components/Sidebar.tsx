import Logo from "./Logo"

export default function Sidebar() {
    return (
        <div>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
            </button>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full overflow-y-auto bg-white">
                <a href="https://flowbite.com/" className="flex items-center mb-5">
                    <Logo />
                </a>
                <div>
                    <ul className="space-y-2 font-medium text-xl text-mealshub-orange">
                        <li className="px-10 py-3.5">
                            <button type="button" className="text-white bg-mealshub-orange focus:ring-4 focus:outline-none focus:ring-mealshub-orange font-medium rounded-2xl p-4 inline-flex">
                            <div className="w-52">
                                <a href="#" className="flex items-center rounded-lg group">
                                <img src="../../public/images/HomeVectorWhite.png" alt="Home Vector" className="h-8 w-auto" />
                                <span className="flex-1 ms-7 whitespace-nowrap text-left">Dashboard</span>
                                </a>
                            </div>
                            </button>
                        </li>
                        <li className="px-10 py-3.5">
                            <button type="button" className="text-mealshub-orange bg-white hover:bg-mealshub-orange hover:text-white focus:ring-4 focus:outline-none focus:ring-mealshub-orange font-medium rounded-2xl p-4 inline-flex group">
                            <div className="w-52">
                                <a href="#" className="flex items-center rounded-lg group">
                                <div className="group">
                                    <img src="../../public/images/CartVectorOrange.png" alt="Cart Vector" className="h-8 w-auto group-hover:hidden" />
                                    <img src="../../public/images/CartVectorWhite.png" alt="Cart Vector" className="h-8 w-auto hidden group-hover:block" />
                                </div>
                                <span className="flex-1 ms-7 whitespace-nowrap text-left">Shopping Cart</span>
                                </a>
                            </div>
                            </button>
                        </li>
                        <li className="px-10 py-3.5">
                            <button type="button" className="text-mealshub-orange bg-white hover:bg-mealshub-orange hover:text-white focus:ring-4 focus:outline-none focus:ring-mealshub-orange font-medium rounded-2xl p-4 inline-flex group">
                            <div className="w-52">
                                <a href="#" className="flex items-center rounded-lg group">
                                <div className="group">
                                    <img src="../../public/images/OrderVectorOrange.png" alt="Cart Vector" className="h-8 w-auto group-hover:hidden" />
                                    <img src="../../public/images/OrderVectorWhite.png" alt="Cart Vector" className="h-8 w-auto hidden group-hover:block" />
                                </div>
                                <span className="flex-1 ms-7 whitespace-nowrap text-left">Shopping Cart</span>
                                </a>
                            </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            </aside>
        </div>
    )
}