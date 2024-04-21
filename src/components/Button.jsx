export default function Button({children, ...props}) {
	return (
		<button
			{...props}
			className="px-4 py-2 text-xs md:text-base rounded-md bg-yellow-200 text-slate-700 hover:bg-yellow-400">
			{children}
		</button>
	);
}