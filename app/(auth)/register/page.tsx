import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegistrationForm from "@/components/users/RegistrationForm";
import LoginProvider from "@/components/users/LoginProvider";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RegisterPage ()  {
  const session = await getServerSession();
  if (session) {
    redirect("/login");
  }
  return (
    <div className="bg-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-2 px-7 md:px-10 mx-auto max-w-screen-2xl">
        <div>Left Side</div>
        <div className="flex flex-col min-h-screen justify-center">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Create an account</CardTitle>
              <CardDescription>
                Enter your email below to create your account
              </CardDescription>
            </CardHeader>
            <LoginProvider />
            <RegistrationForm />
          </Card>
        </div>
      </div>
    </div>
  );
};

