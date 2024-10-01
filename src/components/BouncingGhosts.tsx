import Ghost from "./Ghost";

const BouncingGhosts = () => {
	return (
		<div className="flex justify-center gap-x-4">
			<Ghost className="text-purple animate-[bounce_1s_infinite_0ms]" />
			<Ghost className="text-orange motion-safe:animate-[bounce_1s_infinite_500ms]" />
			<Ghost className="text-purple animate-[bounce_1s_infinite_50ms]" />
			<Ghost className="text-orange motion-safe:animate-[bounce_1s_infinite_650ms]" />
			<Ghost className="text-purple animate-[bounce_1s_infinite_150ms]" />
			<Ghost className="text-orange motion-safe:animate-[bounce_1s_infinite_800ms]" />
		</div>
	);
};

export default BouncingGhosts;
