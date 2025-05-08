import "./newHeader.css";
import BoarnergesLogo from "../boarnergesLogo/BoarnergesLogo";

export default function NewHeader() {
  return (
    <div className="bg-gray-900 container">
      <BoarnergesLogo />
      <main className="flex flex-col justify-center items-start h-screen">
        <div className="container__name flex flex-col gap-2">
          <div className="flex gap-2">
            <span className="text-2xl animate-wiggle">👋</span>
            <p className="text-teal-400">Hi, my name is</p>
          </div>
          <h2 className="name text-5xl py-2">Segun.</h2>
        </div>

        <h2 className="text-5xl font-bold text-gray-400 mt-2 mb-2 animate-fade-in-up animation-delay-400">
          I build things for the web.
        </h2>
        <p className="text-gray-400 max-w-2xl pt-2 animation animate-fade-in-up animation-delay-600">
          I'm a software engineer specializing in building exceptional digital
          experiences.
        </p>
      </main>
    </div>
  );
}
