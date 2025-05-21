
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <header className="p-6 bg-gray-900 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Taylor Sammons</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-20">
        <section id="hero" className="text-center py-20">
          <h2 className="text-4xl font-bold mb-4">Site Reliability Engineer</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Focused on observability, automation, and building resilient cloud systems across AWS, Salesforce, and more.
          </p>
        </section>

        <section id="about">
          <h3 className="text-3xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-300">
            I'm a Senior Site Reliability Engineer with a proven track record in reducing MTTD/MTTR and building monitoring platforms using tools like New Relic, GitHub Actions, and AWS. I’m passionate about making systems observable and scalable.
          </p>
        </section>

        <section id="experience">
          <h3 className="text-3xl font-semibold mb-4">Experience</h3>
          <ul className="space-y-6">
            <li>
              <h4 className="text-xl font-bold">Sunnova Energy (2021 - Present)</h4>
              <p className="text-gray-400">Senior Site Reliability Engineer</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Reduced MTTD by 60% across major platforms</li>
                <li>Led monitoring initiatives across AWS, Heroku, Salesforce</li>
                <li>Built custom alerting systems with New Relic and PagerDuty</li>
              </ul>
            </li>
          </ul>
        </section>

        <section id="projects">
          <h3 className="text-3xl font-semibold mb-4">Projects</h3>
          <ul className="space-y-4 text-gray-300">
            <li>
              <h4 className="font-bold">Salesforce Monitoring Suite</h4>
              <p>Real-time integration observability across all Salesforce Event types via New Relic Logs + Dashboards.</p>
            </li>
            <li>
              <h4 className="font-bold">ECS Auto Scaling Optimizer</h4>
              <p>Reduced idle costs by 35% through intelligent metrics-based Fargate scaling.</p>
            </li>
          </ul>
        </section>

        <section id="contact">
          <h3 className="text-3xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-300 mb-2">Let's connect!</p>
          <ul className="text-blue-400 space-y-1">
            <li><a href="mailto:taylor@example.com">tlsammons@gmail.com</a></li>
            <li><a href="https://www.linkedin.com/in/taylor-sammons">LinkedIn</a></li>
            <li><a href="https://github.com/samm-son">GitHub</a></li>
          </ul>
        </section>
      </main>

      <footer className="text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Taylor Sammons. All rights reserved.
      </footer>
    </div>
  );
}
