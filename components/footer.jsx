import { useRouter } from "next/router";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <div className="footer">
        <img
          style={{margin: '2rem'}}
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          onClick={() => router.push("/")}
        />
        <div className="footlink">
          <div className="footer-links">
            <Link href="/education" className="foot-links">
              EDUCATION
            </Link>
            <Link href="/moodtracker" className="foot-links">
              Self Assement Tool
            </Link>
            <Link href="/vent-it-out" className="foot-links">
              VENT IT OUT
            </Link>
          </div>
          <div className="footer-links">
            <Link href="/about-us" className="foot-links">
              ABOUT
            </Link>
            <Link href="#" className="foot-links">
              PRIVACY POLICY
            </Link>
            <Link href="#" className="foot-links">
              NEED TO TALK?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
