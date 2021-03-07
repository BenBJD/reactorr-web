/* eslint-disable no-undef */
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "mine-shaft": {
                    DEFAULT: "#292929",
                    50: "#E0E0E0",
                    100: "#CCCCCC",
                    200: "#A3A3A3",
                    300: "#7A7A7A",
                    400: "#525252",
                    500: "#292929",
                    600: "#212121",
                    700: "#1A1A1A",
                    800: "#121212",
                    900: "#0A0A0A",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
