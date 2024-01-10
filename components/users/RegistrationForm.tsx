"use client";

import { useForm } from "react-hook-form";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import axios from "axios";

interface IuserRegister {
  name: string;
  email: string;
  password: string;
}

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IuserRegister>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  register("name", { required: "Name is required" });
  register("password", {
    required: "Password is required",
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[^ ]+[A-Za-z\d@$!%*?&]*$/,
      message:
        "Password must contain at least one letter, one number, and one special character and should not contain spaces",
    },
  });

  register("email", {
    required: "Email address is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address format",
    },
  });

  const handleSubmitForm = async (data: IuserRegister) => {
    try {

      // toast loading
      



      const response = await axios.post("/api/users/register", data);
      console.log("response:", response);
      // toast success
    } catch (error: any) {
      // toast error
    } finally {
      // toast close
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Name</Label>
            <Input
              id="text"
              type="name"
              placeholder="Farijul Tanjim"
              {...register("name")}
            />
            {errors?.name && (
              <span className="text-red-500 text-sm">
                {" "}
                {errors?.name?.message}{" "}
              </span>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="tanjim@example.com"
              {...register("email")}
            />
            {errors?.email && (
              <span className="text-red-500 text-sm">
                {" "}
                {errors?.email?.message}{" "}
              </span>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register("password")} />
            {errors?.password && (
              <span className="text-red-500 text-sm">
                {" "}
                {errors?.password?.message}{" "}
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full" type="submit">
            Create account
          </Button>
        </CardFooter>
      </form>
    </>
  );
}
