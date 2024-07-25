"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import { SigninForm, SignupForm } from "./LoginForm";

export function AnimatedTabs() {
  const credentialsTabs = [
    {
      title: "Sign In",
      value: "Sign In",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Sign In</p>
          <SigninForm />
        </div>
      ),
    },
    {
      title: "Sign Up",
      value: "Sign Up",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Sign Up</p>
          <SignupForm />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={credentialsTabs} />
    </div>
  );
}

// const DummyContent = () => {
//   return (
//     <Image
//       src="/linear.webp"
//       alt="dummy image"
//       width="1000"
//       height="1000"
//       className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//     />
//   );
// };
