"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import { SigninForm, SignupForm } from "./LoginForm";

export function AnimatedTabs() {
  const credentialsTabs = [
    {
      title: "Sign In",
      value: "Sign In",
      content: <SigninForm />,
    },
    {
      title: "Sign Up",
      value: "Sign Up",
      content: <SignupForm />,
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
