/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			  },
			animation: {
				blink: 'blink 1s infinite',
				float: 'float 3s ease-in-out infinite',
				'fade-in': 'fadeIn 0.3s ease-in',
				'slide-up': 'slideUp 0.4s ease-out',
				'spin-slower': 'spin 8s linear infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'bounce-slow': 'bounce 3s infinite',
			},
			keyframes: {
				blink: {
					'0%,100%': { opacity: '1' },
					'50%': { opacity: '0' },
				},
				float: {
					'0%,100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		  },
		},
	plugins: [],
}
