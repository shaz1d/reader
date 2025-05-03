import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SignInGithub from "@/components/sign-in-github";
import SignInGoogle from "@/components/sign-in-google";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

const page = async () => {
  const session = await auth();
  if (session?.user) {
    return redirect("/");
  }
  return (
    <section className="">
      <div className="min-h-[80vh] flex items-center justify-center">
        <Card className="max-w-xl w-full">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2 mb-6">
              <Image
                src="/Reader-logo-dark.svg"
                height={20}
                width={100}
                alt="Reader-logo"
              />
            </CardTitle>
            <CardTitle className="text-2xl">Welcome Back!</CardTitle>
            <CardDescription>
              Sign in to the app using github or google
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-2">
              <SignInGithub />
              <SignInGoogle />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default page;
