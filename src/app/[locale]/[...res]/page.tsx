import { redirect } from '@/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
 
export default async function CatchAllPage({params: {locale}}: {params: {locale: string}}) {
    unstable_setRequestLocale(locale);

    redirect('/')
}