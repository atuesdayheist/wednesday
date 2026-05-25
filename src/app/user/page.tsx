"use client";

import { useState } from "react";

import Link from "next/link";
import { useUser } from "./provider";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquarePenIcon, Check } from "lucide-react";

export default function Profile() {
  const { username, email, picture } = useUser();
  const [nickname, setNickname] = useState(username || "");
  const [editing, setEditing] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="flex w-full max-w-100">
        <CardHeader className="flex justify-center">
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <label>Display Name: </label>
            <input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              readOnly={!editing}
              className={`w-50 px-3 py-2 border rounded ${
                editing ? "bg-white" : "bg-gray-100 text-gray-500"
              }`}
            />

            <button onClick={() => setEditing((v) => !v)}>
              {editing ? <Check /> : <SquarePenIcon />}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
