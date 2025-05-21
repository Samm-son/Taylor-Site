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
      } bg-white text-black dark:bg-black dark:text-white`}
    >
      <header className="p-6 bg-white dark:bg-black shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Taylor Sammons</h1>
          <div className="flex items-center space-x-4">
            <nav className="space-x-4">
              <a href="#about" className="hover:underline">About</a>
              <a href="#experience" className="hover:underline">Experience</a>
              <a href="#education" className="hover:underline">Education</a>
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
            Proven track record of improving system reliability, observability, and operational efficiency across multi-cloud environments.
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
          <h3 className="text-3xl font-semibold mb-4">Professional Summary</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Experienced in supporting distributed systems at scale, driving proactive incident management, and automating reliability practices. Adept at partnering across teams to reduce human toil and embed SRE best practices into development lifecycles.
          </p>
        </section>

        <section id="experience">
          <h3 className="text-3xl font-semibold mb-4">Professional Experience</h3>
          <ul className="space-y-6">
            <li className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 shadow-md">
              <h4 className="text-xl font-bold">Sunnova Energy – Houston, TX</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Site Reliability Engineer (May 2021 – Present)</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Reduced MTTD by 60% and MTTR by up to 300% by architecting full-stack observability with New Relic.</li>
                <li>Led root cause analysis efforts and delivered blameless postmortems.</li>
                <li>Improved service availability to 99.99%+ with SLO/SLI instrumentation and distributed tracing.</li>
                <li>Automated 150+ hours/month of operational toil using Python.</li>
                <li>Built self-healing CI/CD pipelines with GitHub Actions for zero-downtime deployments.</li>
                <li>Created custom NRQL dashboards and New Relic Apps/APIs for executive visibility.</li>
                <li>Developed monitoring solutions for Salesforce jobs and energy telemetry microservices.</li>
                <li>Deployed infrastructure using Terraform and CloudFormation.</li>
              </ul>
            </li>

            <li className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 shadow-md">
              <h4 className="text-xl font-bold">S&S Engineering & Construction Inc. (SSECI) – Houston, TX</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Technology Specialist (Dec 2018 – May 2021)</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Developed SharePoint tools and automated MOC workflows.</li>
                <li>Conducted IT audits and improved infrastructure security.</li>
                <li>Built Power BI dashboards and automated reports with VBA.</li>
                <li>Managed SQL Server migrations and CAD support.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mt-4 mb-2">Information Technology Consultant (May 2015 – Dec 2018)</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Developed OSI PI Dashboards for real-time data visualization.</li>
                <li>Optimized Asset Framework via server reconfigurations.</li>
                <li>Performed PSM audits at chemical refining facilities.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section id="education">
          <h3 className="text-3xl font-semibold mb-4">Education</h3>
          <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 shadow-md">
            <h4 className="text-xl font-bold">Texas Lutheran University – Seguin, TX</h4>
            <p className="text-gray-600 dark:text-gray-400">Bachelor of Science (B.S.) in Management Information Systems (2015 – 2018)</p>
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
              <a href="https://www.linkedin.com/in/taylor-sammons-7b4868b7/" target="_blank" rel="noopener noreferrer">
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
