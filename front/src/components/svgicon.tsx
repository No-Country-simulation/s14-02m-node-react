export default function SVGIcon({
	icon,
}: {
	icon: "play" | "listen" | "copy" | "share";
}) {
	if (icon === "listen")
		return (
			<svg
				className="w-4 h-4"
				stroke="currentColor"
				fill="currentColor"
				strokeWidth="0"
				viewBox="0 0 512 512"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"></path>
			</svg>
		);
	else if (icon === "play")
		return (
			<svg
				className="w-4 h-4"
				stroke="currentColor"
				fill="currentColor"
				strokeWidth="0"
				viewBox="0 0 512 512"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440z"></path>
			</svg>
		);
	else if (icon === "copy")
		return (
			<svg
				className="w-4 h-4"
				stroke="currentColor"
				fill="currentColor"
				strokeWidth="0"
				viewBox="0 0 512 512"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M352 115h90c3.3 0 6-2.7 6-6 0-8.2-3.7-16-10-21.3l-77.1-64.2c-4.9-4.1-14.2-7.4-20.6-7.4-4.1 0-7.4 3.3-7.4 7.4V96c.1 10.5 8.6 19 19.1 19z"></path>
				<path d="M307 96V16H176c-17.6 0-32 14.4-32 32v336c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32V141h-96c-24.8 0-45-20.2-45-45z"></path>
				<path d="M116 412V80H96c-17.6 0-32 14.4-32 32v352c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32v-20H148c-17.6 0-32-14.4-32-32z"></path>
			</svg>
		);
	else if (icon === "share")
		return (
			<svg
				className="w-4 h-4"
				stroke="currentColor"
				fill="currentColor"
				strokeWidth="0"
				viewBox="0 0 512 512"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336z"></path>
			</svg>
		);
}
