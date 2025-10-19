import Image from "next/image";
import Link from "next/link";
import "../../styles/cv.css";

export default function CvPage() {
	return (
		<div className="whiteboard-layout">
			{/* Back Button */}
			<div className="back-button">
				<Link href="/">← Back to Home</Link>
			</div>
            <div>
                <Image src="/images/whiteboard.svg" alt="whiteboard Image" className="whiteboard-image" 
                style={{ width: "100%", height: "100%" }}
                />
            </div>
		</div>
	);
}
