import Link from "next/link";
import "../../styles/cv.css";

export default function CvPage() {
  return (
    <div className="cv-layout">
      {/* Back Button */}
      <div className="back-button">
        <Link href="/">← Back to Home</Link>
      </div>

      {/* Embedded CV Viewer */}
      <div className="cv-preview">
        <a href="/Rich_CV.pdf" target="_blank" rel="noopener noreferrer">
          <img src="/images/cv-preview.jpg" alt="CV Preview" className="cv-img" 
            style={{ width: "100%", height: "100%" }}
          
          />
        </a>
      </div>

      {/* Download CV Button */}
      <div className="download-button">
        <a href="/Rich_CV.pdf" target="_blank" rel="noopener noreferrer" download>
          📄 Download CV
        </a>
      </div>
    </div>
  );
}
