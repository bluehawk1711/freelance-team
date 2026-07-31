const env = (key: string) => {
  const value = process.env[key];
  return value && value.trim() !== '' ? value : undefined;
};

export const siteConfig = {
  contact: {
    email: env('NEXT_PUBLIC_CONTACT_EMAIL'),
    phone: env('NEXT_PUBLIC_CONTACT_PHONE'),
  },
  social: {
    twitter: env('NEXT_PUBLIC_SOCIAL_TWITTER'),
    linkedin: env('NEXT_PUBLIC_SOCIAL_LINKEDIN'),
    github: env('NEXT_PUBLIC_SOCIAL_GITHUB'),
    facebook: env('NEXT_PUBLIC_SOCIAL_FACEBOOK'),
    instagram: env('NEXT_PUBLIC_INSTAGRAM_URL'),
  },
};
