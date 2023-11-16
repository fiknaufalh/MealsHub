/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "mealshub-cream": "#FBD8AA",
                "mealshub-orange": "#F5A306",
                "mealshub-red": "#E44937",
                "mealshub-blue": "#0B828F",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
