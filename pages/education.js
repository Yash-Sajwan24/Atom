import Footer from "../components/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const Education = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        setLoggedIn(localStorage.getItem('loggedIn'));
    }, [])

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
            <div className="flex flex-col text-center mt-10">
                <h1 className="text-[40px] font-bold">STORIES</h1>
                <p className="w-[90%] mx-auto">Storytelling is a powerful tool for mental health education, as it helps to engage people in a more personal and meaningful way. It helps to illustrate different mental health issues and provide a deeper understanding of what it might be like to experience these challenges.
                    Also, helps to make the information more relatable and engaging, and can also help to reduce stigma and promote understanding.</p>
            </div>
            <div className="flex flex-col my-20 w-[80%] mx-auto">
                <div className="flex flex-row items-center justify-between py-8 px-5 my-2 text-[20px] border rounded-lg hover:cursor-pointer hover:scale-105 transition ease-in-out shadow-lg" onClick={() => router.push('/depression')}>Depression <img src="https://img.icons8.com/material-rounded/24/null/chevron-right.png" /></div>
                <div className="flex flex-row items-center justify-between py-8 px-5 my-2 text-[20px] border rounded-lg hover:cursor-pointer hover:scale-105 transition ease-in-out shadow-lg" onClick={() => router.push('/ComingSoon')}>Anxiety <img src="https://img.icons8.com/material-rounded/24/null/chevron-right.png" /></div>
                <div className="flex flex-row items-center justify-between py-8 px-5 my-2 text-[20px] border rounded-lg hover:cursor-pointer hover:scale-105 transition ease-in-out shadow-lg" onClick={() => router.push('/ComingSoon')}>Addiction <img src="https://img.icons8.com/material-rounded/24/null/chevron-right.png" /></div>
                <div className="flex flex-row items-center justify-between py-8 px-5 my-2 text-[20px] border rounded-lg hover:cursor-pointer hover:scale-105 transition ease-in-out shadow-lg" onClick={() => router.push('/ComingSoon')}>Personality Disorder <img src="https://img.icons8.com/material-rounded/24/null/chevron-right.png" /></div>
                <div className="flex flex-row items-center justify-between py-8 px-5 my-2 text-[20px] border rounded-lg hover:cursor-pointer hover:scale-105 transition ease-in-out shadow-lg" onClick={() => router.push('/ComingSoon')}>Attention Deficient Hyperactivity Disorder (ADHD) <img src="https://img.icons8.com/material-rounded/24/null/chevron-right.png" /></div>
            </div>
            <Footer />
        </>
    )
}

export default Education;
