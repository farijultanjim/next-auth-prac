"use client";

import { Button } from "../ui/button";
import { CardContent } from "../ui/card";

const RegistrationForm = () => {
  return (
    <div>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            {/* <Icons.gitHub className="mr-2 h-4 w-4" /> */}
            Github
          </Button>
          <Button variant="outline">
            {/* <Icons.google className="mr-2 h-4 w-4" /> */}
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
      </CardContent>
    </div>
  );
};

export default RegistrationForm;
