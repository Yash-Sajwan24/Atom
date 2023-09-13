import Footer from "../components/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
  }, []);

  const router = useRouter();

  return (
    <>
      <div className={`navbar2`}>
        <img
          src="/logo.png"
          alt="logo"
          width={80}
          height={80}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <div className="navlink">
          <Link href="/about-us" className="nav-links">
            About
          </Link>
          <Link href="/moodtracker" className="nav-links">
            Self Assessment Tool
          </Link>
          <Link href="/education" className="nav-links">
            Education
          </Link>
          <Link href="/vent-it-out" className="nav-links">
            Vent It Out
          </Link>
          <Link
            href="http://healthcollective.in/contact/helplines/"
            className="nav-links"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Helpline
          </Link>
        </div>
        {loggedIn && (
          <>
            <button
              className="login"
              onClick={() => {
                localStorage.removeItem("loggedIn");
                router.reload();
              }}
            >
              Log Out
            </button>
          </>
        )}
        {!loggedIn && (
          <div className="button">
            <button className="login" onClick={() => router.push("/login")}>
              Log In
            </button>
            <button className="signup" onClick={() => router.push("/signup")}>
              Sign Up
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-row justify-around items-center w-full bg-[#1551b8] text-white text-[8px] md:text-[16px]">
        <img
          src="/logo.png"
          alt="logo"
          width={80}
          height={80}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
      </div>
      <div>
        <h1 className="text-center text-[40px] font-bold mt-10">OUR VISION</h1>
        <p className="text-center w-[80%] mx-auto">
          Our vision is to create a comprehensive and accessible resource for
          people seeking information and support for mental health issues. Our
          website will provide reliable and up-to-date information about
          different mental health conditions, including symptoms, causes, and
          treatment options.
          <br />
          <br />
          We will also offer a self assessment bot that allows people to assess
          their own mental health and determine if they may benefit from seeking
          professional help. The bot will provide personalized recommendations
          based on the user&apos;s responses, including information about local
          resources and how to access them.
          <br />
          <br />
          In addition to the self assessment bot, our website will also offer
          support groups for people who are looking for a safe and supportive
          community to connect with others who understand what they&apos;re
          going through. These groups will be moderated by trained professionals
          and will provide a space for people to share their experiences, offer
          support to one another, and seek guidance from mental health
          professionals.
          <br />
          <br />
          Overall, our vision is to create a website that is a trusted and
          reliable resource for anyone seeking information and support for
          mental health issues. We hope to empower people to take charge of
          their own mental health and find the support and resources they need
          to live their best lives.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
