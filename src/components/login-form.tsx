import { GoogleLogin } from "@react-oauth/google";

import { authenticateWithGoogle } from "@/actions/auth";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

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

                      localStorage.setItem("token", resp.access_token);
                      localStorage.setItem("username", resp.user.name);
                      localStorage.setItem("picture", resp.user.picture);
                      localStorage.setItem("email", resp.user.email);

                      router.push("/");
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
