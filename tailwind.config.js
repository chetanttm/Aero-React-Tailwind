/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "base": "var(--font-family)",
            },
            fontSize: {
                "base": ["16px", "24px"],
            },
            boxShadow: {
                "shadow-sm": "var(--shadow-sm)",
                "shadow-normal": "var(--shadow-normal)",
                "shadow-lg": "var(--shadow-lg)",
            },
            colors: {
                "theme-indigo": "var(--theme-indigo)",
                "theme-blue": "var(--theme-blue)",
                "theme-cyan": "var(--theme-cyan)",
                "theme-green": "var(--theme-green)",
                "theme-orange": "var(--theme-orange)",
                "theme-blush": "var(--theme-blush)",
                "theme-red": "var(--theme-red)",

                "white": "var(--white)",
                "white-10": "var(--white-10)",
                "black": "var(--black)",
                "black-50": "var(--black-50)",
                "black-100": "var(--black-100)",
                "black-200": "var(--black-200)",
                "dark": "var(--dark)",
                "grey": "var(--grey)",
                "success": "var(--success)",
                "success-50": "var(--success-50)",
                "warning": "var(--warning)",
                "info": "var(--info)",
                "danger": "var(--danger)",
                "danger-50": "var(--danger-50)",
                "danger-100": "var(--danger-100)",
                "sky": "var(--sky)",
                "sky-50": "var(--sky-50)",
                "blue": "var(--blue)",
                "blue-100": "var(--blue-100)",
                "purple": "var(--purple)",
                "purple-50": "var(--purple-50)",
                "pink": "var(--pink)",
                "yellow": "var(--yellow)",

                "body-color": "var(--body-color)",
                "font-color": "var(--font-color)",
                "font-color-100": "var(--font-color-100)",
                "font-color-200": "var(--font-color-200)",
                "font-color-400": "var(--font-color-400)",
                "card-color": "var(--card-color)",
                "content-color": "var(--content-color)",
                "border-color": "var(--border-color)",
                "warning-100": "var(--warning-100)",
                "scrollbar-thumb": "var(--scrollbar-thumb)",

                "primary": "var(--primary)",
                "primary-10": "var(--primary-10)",
                "primary-80": "var(--primary-80)",
                "secondary": "var(--secondary)",
                "chart-color1": "var(--chart-color1)",
                "chart-color2": "var(--chart-color2)",
                "chart-color3": "var(--chart-color3)",
                "chart-color4": "var(--chart-color4)",
                "chart-color5": "var(--chart-color5)",
            },
            spacing: {
                5: '5px',
                10: '10px',
                15: '15px',
                20: '20px',
                30: '30px',
                40: '40px',
                50: '50px',
                60: '60px',
                80: '80px',
                100: '100px',
                150: '150px',
            },
            screens: {
                'ssm': '375px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1200px',
                'xxl': '1440px',
            },
            container: {
                center: true,
                screens: {
                    'ssm': '375px',
                    'sm': '640px',
                    'md': '768px',
                    'lg': '1024px',
                    'xl': '1200px',
                    'xxl': '1320px',
                }
            }
        },
    },
    plugins: [],
}