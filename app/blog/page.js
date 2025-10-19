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
        🔍 My Journey of Exploring Tools & Features for Web Development
      </h1>

      <p>
        As a student learning web development, I didn’t just want to build a simple website.  
        I wanted to explore and find the <strong>right features and tools</strong> to bring my creative ideas to life.  
        This blog is about that journey.
      </p>

      <h2>How i get an idea</h2>
      <p>
        I wanted a website that was more than static text and images.  
        My first thought was to include interactive elements and animations inspired by apps and games I enjoy.  
        That meant I had to research which technologies could make those effects possible.
      </p>

      <h2>Defining Scope & Objectives</h2>
      <p>
        <strong>Scope:</strong> The site should include About, Projects, Blog, and Contact pages.  
        On top of that, I wanted extra features like smooth animations, document uploads, and visitor tracking.
      </p>
      <p>
        <strong>Objective:</strong> Build a platform that looks professional, tells my story, and can be easily extended in the future.
      </p>

      <h2>Searching for Features</h2>
      <ul>
        <li>For animations → I explored CSS <code>clip-path</code>, transforms, and animation libraries GSAP</li>
        <li>For blogging → I learned what a blog is and how to write one.</li>
        <li>For sharing files (CV) → I researched using Next.js API routes</li>
      </ul>

      <h2>Choosing the Right Tools</h2>
      <p>
        At this stage, I compared <strong>React</strong> and <strong>Next.js</strong>.  
        Here’s a summary of my notes:
      </p>

      {/* Comparison Table */}
      <table className="comparison-table">
        <thead>
          <tr>
            <th></th>
            <th>React</th>
            <th>Next.js</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Strengths</strong></td>
            <td>
              High freedom: you choose router, state management, bundler.<br/>
              Easier to learn because it focuses on UI components.<br/>
              Lots of documentation and community support.
            </td>
            <td>
              Supports SSR & SSG from the start.<br/>
              Simple file-based routing.<br/>
              Can write small APIs directly in the project.<br/>
              Optimizes performance, bundle size, images, fonts automatically.
            </td>
          </tr>
          <tr>
            <td><strong>Weaknesses</strong></td>
            <td>
              No server-side rendering (SSR) → poor SEO.<br/>
              No standard structure → projects can get messy.<br/>
              Need to configure routing, code splitting, and optimization manually.
            </td>
            <td>
              Higher complexity → steeper learning curve.<br/>
              A bit “heavy” for small projects like portfolios.<br/>
              Many built-in features → less flexible for full customization.
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        After this comparison, I decided on <strong>Next.js</strong> because of its built-in SSR,  
        automatic optimizations, and perfect integration with Vercel for deployment.
      </p>

      <h2>Find foundation for Deployment & Hosting</h2>
      <p>
        I explored three main hosting options: <strong>GitHub Pages</strong>, <strong>Netlify</strong>, 
        and <strong>Vercel</strong>. Each comes with its own strengths and limitations.
      </p>

      {/* Hosting Comparison Table */}
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Platform</th>
            <th>Advantages</th>
            <th>Disadvantages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>GitHub Pages</strong></td>
            <td>
              Completely free.<br/>
              Direct integration with GitHub repositories.<br/>
              Simple setup for static projects (React build).
            </td>
            <td>
              Supports only static frontend (no backend).<br/>
              No advanced CI/CD features.<br/>
              Custom domain setup requires manual configuration.
            </td>
          </tr>
          <tr>
            <td><strong>Netlify</strong></td>
            <td>
              Free tier with generous limits.<br/>
              Git integration → auto build & deploy.<br/>
              Supports Serverless Functions for small backend tasks.<br/>
              Easy custom domain + automatic HTTPS.
            </td>
            <td>
              Limited free build minutes per month.<br/>
              Build speed may be slower for large projects.<br/>
              Backend is limited (serverless only for lightweight tasks).
            </td>
            </tr>
            <tr>
              <td><strong>Vercel</strong></td>
              <td>
                Highly optimized for React/Next.js.<br/>
                Automatic CI/CD from Git push.<br/>
                More powerful Serverless Functions compared to Netlify.<br/>
                Easy custom domain + automatic HTTPS.
              </td>
              <td>
                Free plan restrictions on serverless usage (good for demo, not large scale).<br/>
                Best suited for Next.js; for plain React it may be &quot;overkill&quot;.
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          In the end, I chose <strong>Vercel</strong> because it offers the best integration with Next.js,
          has powerful serverless support, and is free to start with.  
          Since I may expand to backend features later, GitHub Pages was too limited, and Vercel felt like the right balance.
        </p>

      <h2>My mistake</h2>
        <p>
          This project was not only about building a website, but also a stepping stone for me to 
          learn how to collaborate in group projects. That meant it was important to build consensus 
          and collect feedback from everyone involved.
        </p>
        <p>
          Unfortunately, I skipped that part at first. I rushed into implementing my own version 
          without properly discussing it or adjusting based on feedback.  
          As a result, I had to start everything over: write down the idea, gather feedback, 
          draw it on the whiteboard, collect more feedback, and only then start implementing.
        </p>
        <p>
          It was a tough lesson, but it taught me that <strong>communication and alignment</strong> 
          with teammates is just as important as coding itself.
        </p>
      <h2>Lessons Learned</h2>
      <ul>
        <li>When working in a team, it is a good idea to get feedback from everyone before you start implementing something, and after you have implemented something.</li>
        <li>Always define the feature you want before choosing the tool.</li>
        <li>No tool is perfect — what matters is how well it fits your project’s goals.</li>
        <li>A website isn’t just code; it’s a story of exploration and problem-solving.</li>
      </ul>

      <p className="blog-conclusion">
        📌 <strong>Conclusion:</strong> Searching, testing, and selecting the right tools helped me not only
        build my project but also sharpen my decision-making as a developer.  
        Every feature I added was the result of a journey of exploration.
      </p>

      <a href="/whiteboard" className="whiteboard-link"
        style={{ marginTop: "20px", display: "inline-block", color:"green" }}    
      >
        <strong>Full idea on whiteboard</strong>
      </a>
    </div>
  );
}
