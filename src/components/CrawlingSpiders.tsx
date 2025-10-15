import Spider from "./Spider";

const CrawlingSpiders = () => {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{/* Top crawling spider */}
			<div className="absolute top-4 left-0 animate-[crawl_15s_linear_infinite]">
				<Spider className="text-purple_dark rotate-45" />
			</div>

			{/* Bottom crawling spider */}
			<div className="absolute bottom-4 right-0 animate-[crawl-reverse_20s_linear_infinite]">
				<Spider className="text-gray_dark -rotate-45" />
			</div>

			{/* Side crawling spider */}
			<div className="absolute top-1/2 left-0 animate-[crawl-vertical_12s_linear_infinite]">
				<Spider className="text-purple_dark rotate-90" />
			</div>
		</div>
	);
};

export default CrawlingSpiders;
