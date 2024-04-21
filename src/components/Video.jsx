export default function Video ({sourceTag}) {
	return (
		<iframe 
			className="aspect-video w-full"
			width="560"
			height="315"
			src={`https://www.youtube.com/embed/${sourceTag}`}
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerPolicy="strict-origin-when-cross-origin"
			allowFullScreen
		>

		</iframe>
	);
}