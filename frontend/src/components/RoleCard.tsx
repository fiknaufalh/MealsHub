import { Link } from "react-router-dom";

export default function RoleCard() {
    return (
        <div className="w-3/4 bg-white rounded-3xl shadow-xl py-8 px-10">
            <h1 className="text-mealshub-orange text-3xl font-bold mb-12">
                Who Are You?
            </h1>
            <Link to="/login/customer">
                <button
                    type="button"
                    className="text-white bg-mealshub-orange font-bold rounded-3xl p-4 w-full inline-flex hover:shadow-xl mb-7"
                >
                    <div className="flex flex-col w-52">
                        <a
                            href="/login/customer"
                            className="flex items-center rounded-lg group"
                        >
                            <div className="absolute group text-mealshub-orange ms-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="35"
                                    height="35"
                                    viewBox="0 0 45 45"
                                    fill="none"
                                >
                                    <mask
                                        id="mask0_60_761"
                                        maskUnits="userSpaceOnUse"
                                        x="5"
                                        y="1"
                                        width="35"
                                        height="43"
                                    >
                                        <path
                                            d="M13.125 3.75V41.25M7.5 4.6875V14.0625C7.5 18.75 13.125 18.75 13.125 18.75C13.125 18.75 18.75 18.75 18.75 14.0625V4.6875M31.875 18.75V41.25"
                                            stroke="white"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M37.5 11.25C37.5 15.3919 34.9819 18.75 31.875 18.75C28.7681 18.75 26.25 15.3919 26.25 11.25C26.25 7.10812 28.7681 3.75 31.875 3.75C34.9819 3.75 37.5 7.10812 37.5 11.25Z"
                                            fill="white"
                                            stroke="white"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </mask>
                                    <g mask="url(#mask0_60_761)">
                                        <path
                                            d="M0 0H45V45H0V0Z"
                                            fill="white"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <span className="flex ms-14 whitespace-nowrap text-2xl text-left">
                                Customer
                            </span>
                        </a>
                    </div>
                </button>
            </Link>
            <Link to="/login/tenant/">
                <button
                    type="button"
                    className="text-white bg-mealshub-orange font-bold rounded-3xl p-4 w-full inline-flex hover:shadow-xl mb-7"
                >
                    <div className="flex flex-col w-52">
                        <a
                            href="/login"
                            className="flex items-center rounded-lg group"
                        >
                            <div className="absolute group text-mealshub-orange ms-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="35"
                                    height="35"
                                    viewBox="0 0 45 45"
                                    fill="none"
                                >
                                    <path
                                        d="M39.375 28.125C39.375 19.4531 32.7994 12.2981 24.375 11.3606V7.5H20.625V11.3606C12.2006 12.2981 5.625 19.4531 5.625 28.125V31.875H39.375V28.125ZM3.75 33.75H41.25V37.5H3.75V33.75Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <span className="flex ms-14 whitespace-nowrap text-2xl text-left">
                                Tenant
                            </span>
                        </a>
                    </div>
                </button>
            </Link>
            <Link to="/login/cashier">
                <button
                    type="button"
                    className="text-white bg-mealshub-orange font-bold rounded-3xl p-4 w-full inline-flex hover:shadow-xl mb-5"
                >
                    <div className="flex flex-col w-52">
                        <a
                            href="/login"
                            className="flex items-center rounded-lg group"
                        >
                            <div className="absolute group text-mealshub-orange ms-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="35"
                                    height="35"
                                    viewBox="0 0 45 45"
                                    fill="none"
                                >
                                    <path
                                        d="M22.5 15.4688C21.1094 15.4688 19.7499 15.8811 18.5936 16.6537C17.4374 17.4263 16.5361 18.5245 16.004 19.8093C15.4718 21.0941 15.3326 22.5078 15.6039 23.8717C15.8752 25.2357 16.5448 26.4885 17.5282 27.4718C18.5115 28.4552 19.7643 29.1248 21.1283 29.3961C22.4922 29.6674 23.906 29.5282 25.1907 28.996C26.4755 28.4639 27.5737 27.5626 28.3463 26.4064C29.1189 25.2501 29.5312 23.8906 29.5312 22.5C29.5312 20.6352 28.7905 18.8468 27.4718 17.5282C26.1532 16.2095 24.3648 15.4688 22.5 15.4688ZM22.5 26.7188C21.6656 26.7188 20.85 26.4713 20.1562 26.0078C19.4624 25.5442 18.9217 24.8853 18.6024 24.1144C18.2831 23.3436 18.1995 22.4953 18.3623 21.677C18.5251 20.8586 18.9269 20.1069 19.5169 19.5169C20.1069 18.9269 20.8586 18.5251 21.677 18.3623C22.4953 18.1995 23.3436 18.2831 24.1144 18.6024C24.8853 18.9217 25.5442 19.4624 26.0078 20.1562C26.4713 20.85 26.7188 21.6656 26.7188 22.5C26.7188 23.6189 26.2743 24.6919 25.4831 25.4831C24.6919 26.2743 23.6189 26.7188 22.5 26.7188ZM42.1875 9.84375H2.8125C2.43954 9.84375 2.08185 9.99191 1.81813 10.2556C1.55441 10.5194 1.40625 10.877 1.40625 11.25V33.75C1.40625 34.123 1.55441 34.4806 1.81813 34.7444C2.08185 35.0081 2.43954 35.1562 2.8125 35.1562H42.1875C42.5605 35.1562 42.9181 35.0081 43.1819 34.7444C43.4456 34.4806 43.5938 34.123 43.5938 33.75V11.25C43.5938 10.877 43.4456 10.5194 43.1819 10.2556C42.9181 9.99191 42.5605 9.84375 42.1875 9.84375ZM34.04 32.3438H10.96C10.4878 30.747 9.62368 29.2937 8.44626 28.1162C7.26884 26.9388 5.81554 26.0747 4.21875 25.6025V19.3975C5.81554 18.9253 7.26884 18.0612 8.44626 16.8838C9.62368 15.7063 10.4878 14.253 10.96 12.6562H34.04C34.5122 14.253 35.3763 15.7063 36.5537 16.8838C37.7312 18.0612 39.1845 18.9253 40.7812 19.3975V25.6025C39.1845 26.0747 37.7312 26.9388 36.5537 28.1162C35.3763 29.2937 34.5122 30.747 34.04 32.3438ZM40.7812 16.4127C39.0945 15.6874 37.7501 14.343 37.0248 12.6562H40.7812V16.4127ZM7.97519 12.6562C7.24991 14.343 5.90548 15.6874 4.21875 16.4127V12.6562H7.97519ZM4.21875 28.5873C5.90548 29.3126 7.24991 30.657 7.97519 32.3438H4.21875V28.5873ZM37.0248 32.3438C37.7501 30.657 39.0945 29.3126 40.7812 28.5873V32.3438H37.0248Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <span className="flex ms-14 whitespace-nowrap text-2xl text-left">
                                Central Cashier
                            </span>
                        </a>
                    </div>
                </button>
            </Link>
        </div>
    );
}
