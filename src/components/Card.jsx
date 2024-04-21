const Card = ({id, name, image, onClick}) => (
	<div className="h-32 w-32 lg:h-48 lg:w-48 flex justify-center items-center bg-yellow-400 rounded-md">
		<div
			onClick={() => onClick(id)}
			style={{ backgroundImage: `url(${process.env.PUBLIC_URL + image}` }}
			className="h-28 w-28 lg:w-44 lg:h-44 hover:contrast-125 hover:scale-90 transition-all bg-cover rounded-md"
		>
			<span role="img" aria-label={name}></span>
		</div>
	</div>
)

export default Card;