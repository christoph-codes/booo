const Spider = ({ ...rest }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<ellipse cx="12" cy="12" rx="4" ry="3" fill="currentColor" />
			<ellipse cx="12" cy="10" rx="2" ry="1.5" fill="currentColor" />

			{/* Legs */}
			<path
				d="M8 10 L4 6 M8 12 L2 12 M8 14 L4 18"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M16 10 L20 6 M16 12 L22 12 M16 14 L20 18"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>

			{/* Eyes */}
			<circle cx="10.5" cy="9.5" r="0.8" fill="#FF0000" />
			<circle cx="13.5" cy="9.5" r="0.8" fill="#FF0000" />
		</svg>
	);
};

export default Spider;
