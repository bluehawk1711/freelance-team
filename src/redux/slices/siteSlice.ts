import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { env } from "@/config/site";

interface SiteState {
  companyName: string;
  companyDescription: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
    facebook?: string;
  };
  businessHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

const stringOr = (key: string) => env(key) ?? "";

const address = [
  env("NEXT_PUBLIC_ADDRESS_STREET"),
  env("NEXT_PUBLIC_ADDRESS_CITY"),
  env("NEXT_PUBLIC_ADDRESS_REGION"),
  env("NEXT_PUBLIC_ADDRESS_POSTAL_CODE"),
  env("NEXT_PUBLIC_ADDRESS_COUNTRY"),
]
  .filter(Boolean)
  .join(", ");

const initialState: SiteState = {
  companyName: stringOr("NEXT_PUBLIC_COMPANY_NAME"),
  companyDescription: stringOr("NEXT_PUBLIC_SITE_DESCRIPTION"),
  tagline: stringOr("NEXT_PUBLIC_SITE_TAGLINE"),
  email: stringOr("NEXT_PUBLIC_CONTACT_EMAIL"),
  phone: stringOr("NEXT_PUBLIC_CONTACT_PHONE"),
  address,
  socialLinks: {
    twitter: env("NEXT_PUBLIC_SOCIAL_TWITTER"),
    linkedin: env("NEXT_PUBLIC_SOCIAL_LINKEDIN"),
    github: env("NEXT_PUBLIC_SOCIAL_GITHUB"),
    instagram: env("NEXT_PUBLIC_INSTAGRAM_URL"),
    facebook: env("NEXT_PUBLIC_SOCIAL_FACEBOOK"),
  },
  businessHours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed",
  },
};

const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    updateSiteInfo: (state, action: PayloadAction<Partial<SiteState>>) => {
      return { ...state, ...action.payload };
    },
    updateSocialLinks: (
      state,
      action: PayloadAction<Partial<SiteState["socialLinks"]>>
    ) => {
      state.socialLinks = { ...state.socialLinks, ...action.payload };
    },
    updateBusinessHours: (
      state,
      action: PayloadAction<Partial<SiteState["businessHours"]>>
    ) => {
      state.businessHours = { ...state.businessHours, ...action.payload };
    },
  },
});

export const { updateSiteInfo, updateSocialLinks, updateBusinessHours } =
  siteSlice.actions;
export default siteSlice.reducer;
