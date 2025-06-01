import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function PortfolioClone() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [menuOpen]);

  const sections = ["home", "about", "projects", "contact"];

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-700 via-pink-500 to-blue-400 opacity-30 blur-3xl rounded-full z-0" />
      <nav className="flex flex-col md:flex-row items-center justify-center px-6 py-4 sticky top-0 z-50">
        <div className="flex gap-4 flex-wrap justify-center border border-[#9d9e9e] rounded-full px-4 py-2 bg-[#9d9e9e]">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="text-black hover:text-teal-400 capitalize transition px-3"
            >
              {s}
            </a>
          ))}
        </div>
        <button onClick={toggleMenu} className="md:hidden absolute right-4 top-4">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0a192f] flex flex-col items-center justify-center gap-8 text-xl">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              onClick={toggleMenu}
              className="hover:text-teal-400 capitalize border border-teal-600 px-4 py-1 rounded-full transition"
            >
              {s}
            </a>
          ))}
        </div>
      )}

      <section id="home" className="relative z-10 flex flex-col justify-center items-center h-screen text-center px-4">
        <h2 className="text-teal-400 text-lg">Hi, my name is</h2>
        <h1 className="text-5xl font-bold py-2">Brahim Ben Youssef</h1>
        <h3 className="text-2xl text-gray-300">I'm a Game Developer & Designer</h3>
        <p className="max-w-xl text-gray-400 mt-6">
          I build immersive 2D and 3D experiences using Unity, blending creative design with interactive gameplay.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block border-2 border-teal-400 px-6 py-2 rounded-full hover:bg-teal-400 hover:text-[#0a192f] transition"
        >
          Contact Me
        </a>
      </section>

      <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl text-gray-400">
          I'm a Unity-focused game developer and digital designer who creates engaging 2D and 3D experiences. Whether it's gameplay systems or visual polish, I bring ideas to life with code and creativity.
        </p>
      </section>

      <section id="projects" className="min-h-screen px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-[#112240] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={`https://via.placeholder.com/400x200?text=Project+${i + 1}`}
                alt={`Project ${i + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project {i + 1}</h3>
                <p className="text-gray-400 text-sm">
                  This is a placeholder description. Replace it with info about your awesome project!
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-4">Feel free to reach out if you'd like to work together or just say hi!</p>
        <a
          href="mailto:brahim.by96@gmail.com"
          className="border-2 border-teal-400 px-6 py-2 rounded-full hover:bg-teal-400 hover:text-[#0a192f] transition"
        >
          Send Email
        </a>
      </section>

      <footer className="text-center text-gray-500 py-6 border-t border-teal-800">
        &copy; {new Date().getFullYear()}. All rights reserved.
      </footer>
    </div>
  );
}
