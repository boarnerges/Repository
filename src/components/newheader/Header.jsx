import "./newHeader.css";
import BoarnergesLogo from "../boarnergesLogo/BoarnergesLogo";

export default function Header() {
  return (
    <div className="bg-gray-900 container">
      <BoarnergesLogo />
      <main className="flex flex-col max-w-5xl mx-auto mt-25 justify-center items-start ">
        <div className="container__name flex flex-col gap-2">
          <div className="flex gap-2">
            <span className="text-2xl animate-wiggle">👋</span>
            <p className="text-teal-400">Hi, my name is</p>
          </div>
          <h2 className="name text-5xl md:my-4 md:py-4">Segun.</h2>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold text-gray-400 py-4 animate-fade-in-up ">
          I build things for the web.
        </h2>
        <p className="text-gray-400 max-w-2xl md:max-w-xl pt-2 mt-2 fadeInUp-animation mb-8">
          I'm a software engineer, architect, technical manager who loves to
          code. I specialize in building exceptional digital experiences.
        </p>

        <a href="mailto:olujawo1996@gmail.com">
          <p className="border border-teal-400 px-6 py-3 cursor-pointer fadeInUp-animation hover:bg-teal-400/10 transition-colors">
            Get In Touch
          </p>
        </a>
      </main>
    </div>
  );
}
