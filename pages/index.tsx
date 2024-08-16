import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => [
    router.push('/employees')
  ];

  return (
    <div
  className="hero min-h-screen">
    <Image
            src="/images/Office-layoit-with-planters-700x467.jpg"
            alt="Office Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-2xl"
          />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center glass rounded-3xl text-black">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
      <p className="mb-5">
      At Chels Office, we believe in fostering a collaborative environment where innovation meets dedication. Our team is committed to delivering exceptional service, ensuring that every interaction is meaningful and productive. We strive to create a space where ideas flourish, and every individual feels valued. Whether you are a client seeking unparalleled expertise or an employee ready to make an impact, Chels Office is the place where your journey begins.

      </p>
      <button onClick={handleNavigation} className="btn">Get Started</button>
    </div>
  </div>
</div>
  );
}


{/* <main className="max-w-6xl mx-auto mt-4 w-full">
      <div className="relative text-center my-5 flex flex-col gap-4">
        <div className="relative h-screen w-full">
          <Image
            src="/images/Office-layoit-with-planters-700x467.jpg"
            alt="Office Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-green-950 font-mono font-bold">
            <h1 className="text-5xl font-bold">Chels Office!</h1>
            <p className="py-6 text-lg max-w-2xl mx-auto">
              From the CEO desk, I welcome you all to our Office. Here at Chels, we bring together employees and employers to find their perfect customer search. Feel free to walk up to our employee desk and task them.
            </p>
            <button onClick={handleNavigation} className="btn btn-accent">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* <EmployeeList /> */}
      {/* <EmployeeDetail /> */}
   // </main> */}