const Header = ({score, topScore}) => {
	return <header className="bg-yellow-400 rounded-lg p-4 text-slate-800 text-left md:w-5/12 w-full">
		<h1 className="text-2xl font-bold">12 Cycling Greats</h1>
		<h2 className="text-xl font-semibold">A memory game through the history of road cycling</h2>
		<div className="flex flex-row justify-evenly mt-2">
			<p>Your score: {score}</p>
			<p>Top score: {topScore}</p>
		</div>
	</header>
}

export default Header;