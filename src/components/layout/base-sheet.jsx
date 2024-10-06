function BaseSheet({ children }) {
	return (
		<div
			className={
				"w-full h-80 flex flex-col gap-4 rounded-lg shadow-2xl hover:shadow-[0_20px_50px_rgba(105,_89,_75,_0.8)] hover:scale-105 duration-300 overflow-hidden" +
				" border border-theme"
			}
		>
			{children}
		</div>
	);
}

export default BaseSheet;
