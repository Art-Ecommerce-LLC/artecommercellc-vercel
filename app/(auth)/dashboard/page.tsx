import AdminDashboard from '@/components/AdminDashboard';
import UserDashboard from '@/components//UserDashboard';
import { redirect } from 'next/navigation';
import { getSessionData } from '@/lib/dal';
import NavbarDashServer from '@/components/NavbarDashServer';
export default async function Dashboard() {


  const session = await getSessionData('session');

  if (!session.mfaVerified) {
    redirect('/sign-in');
  }

  if ('role' in session.user && session.user.role === 'ADMIN') {
    return <div className='bg-background'>
              <NavbarDashServer />
              <AdminDashboard />
          </div>
  } else if ('role' in session.user && session.user.role === 'USER') {
    return <div className='bg-background' >
            <NavbarDashServer />
            <UserDashboard />
           </div>
  } else {
    redirect('/sign-in');
  }
}
