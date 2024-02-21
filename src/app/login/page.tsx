import Image from "next/image";
import Link from "next/link";
import LoginButton from "../_components/loginButton";
import { getServerAuthSession } from "@/server/auth";

const LoginPage = async () => {
  const session = await getServerAuthSession();
  return (
    <div className="flex h-[calc(100vh-6rem)] items-center justify-center p-4 md:h-[calc(100vh-9rem)]">
      {/* BOX  */}
      {session ? (
        <div className="flex flex-col rounded-md shadow-2xl md:h-[70%] md:w-full md:flex-row lg:w-[60%] 2xl:w-1/2">
          {/* FORM CONTAINER  */}
          <div className="flex flex-col gap-8 p-10 md:w-1/2">
            <h1 className="text-xl font-bold xl:text-3xl">
              Welcome to QwikBite
            </h1>
            <h2 className="text-sm">Check out our delicious food!</h2>
            <div className="md:h-full md:pt-10">
              <Link
                href="/menu/pizza"
                className="my-2 flex justify-center gap-4 rounded-md p-4 ring-1 ring-red-300 md:my-4"
              >
                Pizza
              </Link>
              <Link
                href="/menu/burger"
                className="my-2 flex justify-center gap-4 rounded-md p-4 ring-1 ring-red-300 md:my-4"
              >
                Burgers
              </Link>
              <Link
                href="/menu/pasta"
                className="my-2 flex justify-center gap-4 rounded-md p-4 ring-1 ring-red-300 md:my-4"
              >
                Pasta
              </Link>
            </div>
          </div>
          {/* IMAGE CONTAINER  */}
          <div className="relative h-1/3 w-full md:h-full md:w-1/2">
            <Image src="/loginbg.png" alt="" fill className="object-cover" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col rounded-md shadow-2xl md:h-[70%] md:w-full md:flex-row lg:w-[60%] 2xl:w-1/2">
          {/* IMAGE CONTAINER  */}
          <div className="relative h-1/3 w-full md:h-full md:w-1/2">
            <Image src="/loginbg.png" alt="" fill className="object-cover" />
          </div>
          {/* FORM CONTAINER  */}
          <div className="flex flex-col gap-8 p-10 md:w-1/2">
            <h1 className="text-xl font-bold xl:text-3xl">Welcome</h1>
            <p>Login or create an account</p>
            <LoginButton color="orange" provider="google" />
            <LoginButton color="blue" provider="discord" />
            <p className="text-sm">
              Have a problem?{" "}
              <Link href="/" className="underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
