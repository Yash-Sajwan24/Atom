import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FaSpinner } from "react-icons/fa";
import Footer from "../components/footer";
import { toast } from "react-toastify";
import Link from "next/link";

const Login = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        setLoggedIn(localStorage.getItem('loggedIn'));
    }, [])

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            email,
            password
        }

        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        fetch('https://talking-minds-backend-part.vercel.app/api/user/login', requestOptions)
            .then((response) => {
                console.log("response", response.json())
                if (response.status === 400) {
                    toast.error(
                        "Email or Password is incorrect",
                        {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 2000,
                        }
                    );
                    setLoading(false)
                } else if (response.status === 200) {
                    toast.success(
                        "Logged in successfully",
                        {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 2000,
                        }
                    );
                    router.push('/')
                    localStorage.setItem("loggedIn", true);
                    setLoading(false)
                }
            })
            .catch((error) => console.error(error));
    }

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
            <div className='my-10 text-center border mx-auto md:w-1/2 flex flex-col items-center'>
                <h1 className='text-[30px]'>LogIn</h1>
                <form
                    className="flex flex-col justify-center space-y-5 md:w-[80%] w-full rounded-lg p-7"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col">
                        <label>
                            Email:
                            <span className="text-red-500 font-bold">
                                *
                            </span>
                        </label>
                        <input
                            type="email"
                            className="border rounded px-4 py-2"
                            placeholder="Enter your email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>
                            Password:
                            <span className="text-red-500 font-bold">
                                *
                            </span>
                        </label>
                        <input
                            type="password"
                            className="border rounded px-4 py-2"
                            placeholder="Enter your password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span className="text-sm my-2 text-blue-800 cursor-pointer"
                        // onClick={() => router.push('/forgot_password')}
                        >
                            Forgot password?
                        </span>
                    </div>
                    <div className="flex flex-col">

                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="py-1 px-7 text-white font-bold bg-[#1551b8] border rounded hover:text-[#1551b8] hover:bg-white"
                        >
                            {loading ? (
                                <FaSpinner className="animate-spin" />
                            ) : (
                                <span>Login</span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Login;
