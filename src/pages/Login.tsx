import { LoginForm } from "@/components/login-form";
import { useUser } from "@/context/user";
import { HomeIcon } from "lucide-react";
import { useNavigate } from "react-router";

// import { LoginForm } from "../components/login-form"

export default function LoginPage() {
  const { user } = useUser();

  const navigate = useNavigate();

  if (user) navigate("/");

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <HomeIcon className="size-4" />
          </div>
          homesbnb
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
