
import VerifyEmailComponent from "@/components/VerifyEmailComponent"
import { getSession } from "@/lib/dal"
import { redirect } from "next/navigation"; // Import the redirect function

export default async function VerifyEmailPage() {
  const session = await getSession('verifyEmail');
  console.log(session);
  if (!session.isAuth) {
    redirect('/'); // Redirect to the home page if the user is not authenticated
  }

  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center">
      <div className="w-full max-w-96 min-w-80 p-2">
        <VerifyEmailComponent/>
      </div>        
    </main>
  );
}
