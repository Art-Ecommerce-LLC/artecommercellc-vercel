import AdminDashboard from '@/components/AdminDashboard';
import UserDashboard from '@/components//UserDashboard';
import { redirect } from 'next/navigation';
import { getSession} from '@/lib/dal';
import NavbarDashServer from '@/components/NavbarDashServer';
export default async function Dashboard() {


  const session = await getSession('session');

  if (!session.isAuth) {
    redirect('/sign-in');
  }

  if (!session.mfaVerified) {
    redirect('/sign-in');
  }

  if (session.role == 'ADMIN') {
    return <div className='bg-background'>
              <NavbarDashServer />
              <AdminDashboard />
          </div>
  } else if (session.role === 'USER') {
    return <div className='bg-background' >
            <NavbarDashServer />
            <UserDashboard />
           </div>
  } else {
    redirect('/sign-in');
  }
}
