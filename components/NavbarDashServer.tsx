import NavbarDash from '../components//NavbarDash';
import { getSession } from '@/lib/dal';

export default async function NavbarDashServer() {
  const session = await getSession('session');
  const mfaVerified = session.mfaVerified || false;

  return <NavbarDash mfaVerified={mfaVerified} />;
}