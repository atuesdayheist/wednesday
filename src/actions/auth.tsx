export async function authenticateWithGoogle(idToken: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/google`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id_token: idToken }),
  });

  if (!res.ok) throw new Error("Auth failed");

  return res.json();
}
