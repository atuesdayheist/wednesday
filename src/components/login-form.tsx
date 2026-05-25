"use client";

import { GoogleLogin } from "@react-oauth/google";

import { authenticateWithGoogle } from "@/app/login/actions";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/user/provider";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const { setAuth } = useUser();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            <div>Login with your Google account.</div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <GoogleLogin
                  onSuccess={async (cred) => {
                    try {
                      const idToken = cred?.credential;
                      if (!idToken) return;
                      const resp = await authenticateWithGoogle(idToken);
                      setAuth(resp.user);
                      router.push("/home");
                    } catch (err) {
                      console.error("Google Auth Failed: ", err);
                    }
                  }}
                />
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
