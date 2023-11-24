export default function Search() {
    return (
        <form>
            <label
                htmlFor="default-search"
                className="text-lg font-medium text-mealshub-red sr-only"
            >
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-9 pointer-events-none">
                    <svg
                        className="w-5 h-5 text-mealshub-red"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="text"
                    id="simple-search"
                    className="text-mealshub-red text-lg rounded-full border-transparent focus:border-mealshub-red focus:ring-transparent block w-full ps-20 p-4 placeholder-mealshub-red"
                    placeholder="What do you want to eat?"
                    required
                ></input>
            </div>
        </form>
    );
}
