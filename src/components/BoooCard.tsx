import { BoooData } from "@/app/[userId]/2024/Halloween2024";
import Video from "./Video";
import Link from "next/link";

const BoooCard = ({ booo }: { booo: BoooData }) => {
	return (
		<Link className="group/booocard" href={`/${booo.userId}/${booo.year}`}>
			<div
				className="bg-gray_black p-4 rounded-lg flex flex-col gap-2 group-hover/booocard:bg-gray_dark group-hover/booocard:-translate-y-3 transition-all"
				key={booo.userId}
			>
				<h2>{booo.year}</h2>
				{booo.video && <Video url={booo.video} />}
				<p>{booo.message}</p>
			</div>
		</Link>
	);
};

export default BoooCard;
