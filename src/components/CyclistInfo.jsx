import Video from "./Video";

export default function CyclistInfo ({ cyclist }) {
	return (
		<div className="bg-yellow-200 p-8 flex flex-col gap-8 rounded-md">
			<h1 className="text-4xl">{cyclist.name}</h1>
			<p>{cyclist.message}</p>
			<Video sourceTag={cyclist.videoSlug} />
		</div>
	);
};
