function Button({ type, variant, children, onClick, className }) {
	return (
		<button
			type={type ?? "button"}
			onClick={onClick}
			className={
				"flex items-center justify-center font-semibold rounded p-1 border " +
				className +
				(variant === "icon" ? " size-8 " : " min-w-8 min-h-8 ")
			}
		>
			{children}
		</button>
	);
}

export default Button;
