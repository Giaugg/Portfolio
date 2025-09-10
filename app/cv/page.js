import Image from "next/image";
import Link from "next/link";

export default function CvPage() {
  return (
    <div className="cv-layout">
      {/* Back Button */}
      <div className="back-button">
        <Link href="/">← Back to Home</Link>
      </div>
      {/* Left Column */}
      <aside className="cv-left">
        <div className="profile-photo">
          <Image src="/images/anhthe.jpg" alt="Profile Photo" width={200} height={200} />
        </div>
        <h1 className="cv-name">LÊ HỮU GIÀU</h1>
        <p className="cv-title">Aspiring Full-Stack Developer</p>
        <p className="cv-summary">
          Senior IT student at Saigon University, passionate about web development. Skilled in
          JavaScript, NestJS, databases, and teamwork.
        </p>

        <section>
          <h2>Contact</h2>
          <ul>
            <li>Email: <a href="mailto:giaule0111@gmail.com">giaule0111@gmail.com</a></li>
            <li>Phone: 0774117034</li>
            <li>Address: District 6, Ho Chi Minh City</li>
            <li><a href="https://github.com/giaugg" target="_blank">GitHub</a></li>
          </ul>
        </section>

        <section>
          <h2>Education</h2>
          <p><strong>Saigon University</strong><br />2021 – 2026<br />IT – Full-stack Development</p>
        </section>

        <section>
          <h2>Experience</h2>
          <p><strong>Internship Developer – PhuQuocDevs</strong><br />13 weeks</p>
        </section>
      </aside>

      {/* Right Column */}
      <main className="cv-right">
        <section>
          <h2>Technical Skills</h2>
          <ul>
            <li>JavaScript (ES6+), Python, C++</li>
            <li>React, Node.js, NestJS</li>
            <li>SQL (MySQL), Git, Docker</li>
            <li>CI/CD (GitHub Actions, GitLab CI)</li>
          </ul>
        </section>

        <section>
          <h2>Soft Skills</h2>
          <ul>
            <li>Teamwork & Communication</li>
            <li>Critical Thinking & Problem Solving</li>
            <li>Agile/Scrum, Jira, Trello</li>
          </ul>
        </section>

        <section>
          <h2>Projects</h2>
          <p><strong>Cafe Manager App</strong> – ReactJS + NestJS</p>
          <p><strong>Portfolio Website</strong> – ReactJS + GSAP animation</p>
        </section>

        <section>
          <h2>Achievements</h2>
          <ul>
            <li>Scholarship for Excellent Academic Results</li>
            <li>Top 5 in IT Project Contest 2024</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
