export default function BoarnergesLogo() {
  return (
    <div className="bg-gray-900 mt-10 flex justify-start items-center">
      <div className="flex items-center gap-2">
        <h1 className="font-sans font-bold text-5xl tracking-tight">
          <span className="text-teal-400 relative">
            B
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-teal-400 rounded-full"></span>
          </span>
          <span className="text-gray-300">oarnerges</span>
        </h1>

        <span className="text-teal-400 font-mono animate-bounce text-2xl">
          &lt;/&gt;
        </span>
      </div>
    </div>
  );
}
