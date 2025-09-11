import Link from "next/link";
import "../../styles/blog.css"

export default function BlogPage() {
  return (
    <div className="blog-container">
        {/* Back Button */}
      <div className="back-button">
        <Link href="/">← Back to Home</Link>
      </div>
      <h1 className="blog-title">
        🚀 Building a Personal Portfolio with Next.js: An IT Student’s Journey
      </h1>

      <p>
        For IT students, a portfolio is more than just a personal website – it is
        a <strong>“digital business card”</strong>. It helps showcase your
        identity, highlight your best projects, and demonstrate professionalism
        to potential employers.
      </p>

      <h2>0. My first idea</h2>
      <p>
         Using the animation of a game I love is Yu-Gi-Oh! To create a web portfolio with information will appear from a gate.
      </p>
      <p>
        A website with CV, blog, information about experience, contact method.
      </p>
    <p>
        Use Nextjs technology for websites and hosts by vercel.
    </p>
      <h2>1. Scope & Objectives</h2>
      
      <p>
        <strong>Scope:</strong> The website includes About, Projects, Blog, and
        Contact sections. It supports uploading a CV, related documents, and
        integrates analytics.
      </p>
      <p>
        <strong>Objective:</strong> Provide a professional platform for
        self-introduction and networking with recruiters via LinkedIn, GitHub,
        and email.
      </p>

      <h2>2. Key Features</h2>
      <ul>
        <li>About Page – Personal info, skills, and CV link</li>
        <li>Projects Page – List of projects with GitHub/demo links</li>
        <li>Blog Page – Sharing knowledge, study tips, and reflections</li>
        <li>Contact Page – Social links and direct communication</li>
        <li>Analytics – Track visitor traffic and engagement</li>
      </ul>

      <h2>3. Technology Choices</h2>
      <p>
        After comparing React, Angular, and Spring Boot, I chose{" "}
        <strong>Next.js</strong> because:
      </p>
      <ul>
        <li>Supports both SSR and SSG → Better SEO</li>
        <li>Simple file-based routing system</li>
        <li>Automatic optimization for images, fonts, and performance</li>
        <li>Ability to write small API routes directly in the project</li>
      </ul>

      <h2>4. Deployment</h2>
      <p>
        Deployment options include <strong>GitHub Pages</strong> (free),{" "}
        <strong>Netlify</strong> (fast builds), and <strong>Vercel</strong>{" "}
        (fully optimized for Next.js).
      </p>
      <p>
        I chose <strong>Vercel</strong> since it provides the best integration
        with Next.js and allows easy scaling.
      </p>

      <h2>5. Lessons Learned</h2>
      <ul>
        <li>Start with a simple MVP and improve step by step</li>
        <li>Add analytics to monitor visitor engagement</li>
        <li>
          A portfolio is not only about projects – it is also{" "}
          <strong>your personal story as a developer</strong>
        </li>
      </ul>

      <p className="blog-conclusion">
        📌 <strong>Conclusion:</strong> Building a portfolio with Next.js is an
        excellent way to practice frontend skills while creating a live product
        that showcases your abilities to future employers.
      </p>
      <a href="https://whiteboard.dev.solved.cz/#json=0199298860254414,QhpGH4SvNpGC89HI6otLmA">Full about my idea on whiteboard</a>
    </div>
  );
}
