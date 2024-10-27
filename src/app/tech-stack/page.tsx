export default function TechStack() {
  return (
    <div className="w-full min-h-[calc(100dvh-10dvh)]">
      <div className="w-full max-w-screen-md mx-auto h-full border border-black">
        <div className="w-full h-full grid grid-cols-[auto,1fr]">
          <TechCards />
        </div>
      </div>
    </div>
  );
}

const TechCards = () => {
  return <div></div>;
};
