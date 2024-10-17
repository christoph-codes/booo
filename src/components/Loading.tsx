import Ghost from "./Ghost";

const Loading = () => {
  return (
    <div className="fixed inseet-0 h-screen w-screen flex justify-center items-center bg-black z-50">
      <Ghost className="animate-bounce text-purple" />
    </div>
  );
};

export default Loading;
