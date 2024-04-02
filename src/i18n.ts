import {getRequestConfig} from 'next-intl/server';
import { locales, redirect } from './navigation';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) return redirect("/");

  return {
    messages: (
      await (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
          import('../messages/en.json')
        : import(`../messages/${locale}.json`))
    ).default
  };
});