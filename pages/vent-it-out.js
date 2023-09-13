import Footer from "../components/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const VentOut = () => {

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
            <div className="my-20">
                <h1 className="text-center text-[40px] font-bold">VENT IT OUT</h1>
                <p className="text-center w-[80%] mx-auto">
                    OVER TEA- A Virtual Support group to help share what&apos;s troubling
                    them. Through the sharing of experiences, you will be able to
                    offer support, encouragement, and comfort to the other group
                    members, and receive the same in return.
                    <br />
                    <br />
                    BLOOM- A place to confess your struggles and fears without
                    judgment or punishment. It likely feels good to get all of those
                    thoughts and feelings out of your head and down on something.Bloom
                    can be your own personal journal.
                    <br />
                    <br />
                    STILL- A voice channel that offers Music therapy by playlist
                    specially curated by professionals to provide a distraction for
                    your mind, it can slow the rhythms of the body, and it can alter
                    our mood, which in turn can influence your behavior.
                    <br />
                    <br />
                    HEADSPACE- Gathering of people over a voice channel who share
                    common ground in some way and can offer each other mental and
                    emotional support.
                </p>
                <div className="flex flex-col w-[80%] mx-auto mt-5">
                    <Link href="https://discord.com/channels/1151628203744575490/1151628204507942914" target={'_blank'} className='flex flex-row justify-between items-center text-[20px] my-3 border rounded-lg py-10 px-5 hover:cursor-pointer hover:scale-105 transition ease-in-out shadow-lg'>DISCORD <img src="https://img.icons8.com/material-rounded/24/null/chevron-right.png" /></Link>
                    <Link href="https://open.spotify.com/playlist/37i9dQZF1DXcCnTAt8CfNe?si=V7ETnyKgSM2O8Ho5QV1v8Q&utm_source=whatsapp" target={'_blank'} className='flex flex-row justify-between items-center text-[20px] my-3 border rounded-lg py-10 px-5 hover:cursor-pointer hover:scale-105 transition ease-in-out shadow-lg'>MUSICAL THERAPY <img src="https://img.icons8.com/material-rounded/24/null/chevron-right.png" /></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default VentOut;
