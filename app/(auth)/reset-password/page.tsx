import { ResetPasswordForm } from "@/components/form/ResetPasswordForm"
import { getSession } from "@/lib/dal"
import { redirect } from "next/navigation"

export default async function ResetPasswordPage() {

  const sessionData = await getSession('resetPassword');

  if (!sessionData.isAuth) {
    redirect('/');
  }

  // Make this page only accessable once, if the user exits the page, they will need to request a new reset password link



  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center">
        <div className="w-full max-w-96 min-w-80 p-2">
            <ResetPasswordForm/>
        </div>        
    </main>
  );
}
