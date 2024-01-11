import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginProvider from "@/components/users/LoginProvider";
import LoginForm from "@/components/users/LoginForm";

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="bg-zinc-900 bg-[url('/auth-bg.jpg')] bg-fixed bg-cover">
      <div className="grid grid-cols-1 md:grid-cols-2 px-7 md:px-10 mx-auto max-w-screen-2xl">
        <div>Left Side</div>
        <div className="flex flex-col min-h-screen justify-center">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Login your account</CardTitle>
              <CardDescription>
                Enter your email below to login your account
              </CardDescription>
            </CardHeader>
            <LoginProvider />
            <LoginForm />
          </Card>
        </div>
      </div>
    </div>
  );
}
