import { BoooData } from "@/app/[userId]/2024/Halloween2024";
import Video from "./Video";
import Link from "next/link";

const BoooCard = ({ booo }: { booo: BoooData }) => {
	return (
		<Link
			className="group/booocard h-full"
			href={`/${booo.userId}/${booo.year}`}
		>
			<div
				className="bg-gray_black p-4 rounded-lg flex flex-col gap-2 group-hover/booocard:bg-gray_dark group-hover/booocard:-translate-y-3 transition-all h-full"
				key={booo.userId}
			>
				<h2 className="flex-shrink-0">{booo.year}</h2>
				{booo.video && (
					<div className="aspect-video bg-gray_dark rounded overflow-hidden flex-shrink-0">
						<Video url={booo.video} className="w-full h-full object-cover" />
					</div>
				)}
				<p className="flex-grow text-sm line-clamp-3">{booo.message}</p>
			</div>
		</Link>
	);
};

export default BoooCard;
