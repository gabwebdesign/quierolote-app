import { AuthForm } from '@/components/composites/AuthForm/AuthForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Auth() {
  const session = await getServerSession();

  if (session) {
    redirect('/admin/lots')
  } 

  return <AuthForm />;
}
