import React, { useEffect, useState } from "react";
import { Mail, Github, Linkedin, Sun, Moon } from "lucide-react";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => setVisible(true), []);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div
      className={`min-h-screen font-[Inter] transition-opacity duration-1000 transition-colors ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <header className="p-6 bg-white dark:bg-black shadow-md text-black dark:text-white">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Taylor Sammons</h1>
          <div className="flex items-center space-x-4">
            <nav className="space-x-4">
              <a href="#about" className="hover:underline">About</a>
              <a href="#experience" className="hover:underline">Experience</a>
              <a href="#projects" className="hover:underline">Projects</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center space-x-2 text-sm px-3 py-1 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-20">
        <section id="hero" className="text-center py-20">
          <h2 className="text-4xl font-bold mb-4">Site Reliability Engineer</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Focused on observability, automation, and building resilient cloud systems across AWS, Salesforce, and more.
          </p>
          <a
            href="/TaylorSammons_Resume.pdf"
            download
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition"
          >
            Download Resume
          </a>
        </section>

        <section id="about">
          <h3 className="text-3xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-700 dark:text-gray-300">
            I'm a Senior Site Reliability Engineer with a proven track record in reducing MTTD/MTTR and building monitoring platforms using tools like New Relic, GitHub Actions, and AWS. I’m passionate about making systems observable and scalable.
          </p>
        </section>

        <section id="experience">
          <h3 className="text-3xl font-semibold mb-4">Experience</h3>
          <ul className="space-y-6">
            <li className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 shadow-md">
              <h4 className="text-xl font-bold">Sunnova Energy (2021 - Present)</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Senior Site Reliability Engineer</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Reduced MTTD by 60% across major platforms</li>
                <li>Led monitoring initiatives across AWS, Heroku, Salesforce</li>
                <li>Built custom alerting systems with New Relic and PagerDuty</li>
              </ul>
            </li>
          </ul>
        </section>

        <section id="projects">
          <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-md p-6 hover:scale-[1.01] transition-transform duration-300">
              <h4 className="font-bold text-xl mb-2">Salesforce Monitoring Suite</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Real-time integration observability across all Salesforce Event types via New Relic Logs + Dashboards.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-md p-6 hover:scale-[1.01] transition-transform duration-300">
              <h4 className="font-bold text-xl mb-2">ECS Auto Scaling Optimizer</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Reduced idle costs by 35% through intelligent metrics-based Fargate scaling.
              </p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h3 className="text-3xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Let's connect!</p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:tlsammons@gmail.com">tlsammons@gmail.com</a>
            </li>
            <li className="flex items-center space-x-2">
              <Linkedin className="w-5 h-5" />
              <a href="https://www.linkedin.com/in/taylor-sammons" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Github className="w-5 h-5" />
              <a href="https://github.com/samm-son" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="text-center py-6 text-gray-400 dark:text-gray-500">
        © {new Date().getFullYear()} Taylor Sammons. All rights reserved.
      </footer>
    </div>
  );
}
