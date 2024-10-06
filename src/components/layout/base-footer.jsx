function BaseFooter() {
	const currentYear = new Date().getFullYear();
	return (
		<footer
			className={
				"w-full p-6 md:p-8 font-semibold flex flex-col items-center justify-center border-t" +
				" base-theme border-theme"
			}
		>
			<p>Created with ❣️ by Emulation Team and Contributor&apos;s. </p>
			<p>&copy; {currentYear} Emulation Club. All rights reserved.</p>
		</footer>
	);
}

export default BaseFooter;
