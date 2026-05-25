"use client";

import Link from "next/link";
import { useUser } from "@/app/user/provider";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const { username, email, picture } = useUser();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mx-2 items-start">
        <Link href="/user">
          <Card className="w-full">
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">New</Badge>
              </CardAction>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Manage your personal settings</CardDescription>
            </CardHeader>
          </Card>
        </Link>

        {/* <Card className="w-full">
          <CardHeader>
            <CardAction>
              <Badge variant="secondary">New</Badge>
            </CardAction>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Manage your personal settings</CardDescription>
          </CardHeader>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardAction>
              <Badge variant="secondary">New</Badge>
            </CardAction>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Manage your personal settings</CardDescription>
          </CardHeader>
        </Card> */}
      </div>
    </div>
  );
}
