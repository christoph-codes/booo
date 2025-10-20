import Pumpkin from "./Pumpkin";

const FloatingPumpkins = () => {
	return (
		<div className="flex justify-center gap-x-6 my-8">
			<Pumpkin className="text-orange animate-[float_3s_ease-in-out_infinite] motion-safe:animate-[float_3s_ease-in-out_infinite_0ms]" />
			<Pumpkin className="text-orange animate-[float_3s_ease-in-out_infinite] motion-safe:animate-[float_3s_ease-in-out_infinite_1s]" />
			<Pumpkin className="text-orange animate-[float_3s_ease-in-out_infinite] motion-safe:animate-[float_3s_ease-in-out_infinite_0.5s]" />
			<Pumpkin className="text-orange animate-[float_3s_ease-in-out_infinite] motion-safe:animate-[float_3s_ease-in-out_infinite_1.5s]" />
			<Pumpkin className="text-orange animate-[float_3s_ease-in-out_infinite] motion-safe:animate-[float_3s_ease-in-out_infinite_2s]" />
		</div>
	);
};

export default FloatingPumpkins;
