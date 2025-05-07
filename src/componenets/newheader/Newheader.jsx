export default function NewHeader() {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col">
      {/* Navigation */}

      {/* Main Content */}
      <main className="flex-grow flex items-center">
        <div className="container mx-auto px-8 md:px-16">
          <p className="text-teal-400 text-xl mb-10">Hi, my name is</p>
          <h2 className="text-6xl font-bold text-gray-200 mb-6">Segun.</h2>
          <h2 className="text-6xl font-bold text-gray-400 mb-6">
            I build things for the web.
          </h2>
          <p className="text-gray-400 max-w-2xl pt-8">
            I'm a software engineer specializing in building exceptional digital
            experiences.
          </p>
        </div>
      </main>
    </div>
  );
}
