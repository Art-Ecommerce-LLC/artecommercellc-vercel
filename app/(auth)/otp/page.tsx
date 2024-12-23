
import { OTPForm } from "@/components/form/OTPForm"
import { getSession } from "@/lib/dal"
import { redirect } from "next/navigation"

export default async function OTPPage() {
    // Must validate the session, and otp session

  const session = await getSession('otp')
  if (!session.isAuth) {
      redirect('/')
  }

  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center">
        <div className="w-full max-w-96 min-w-80 p-2">
          <OTPForm/>
        </div>        
    </main>
  );
}
