import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const initialState: SiteState = {
  companyName: "FloatTech",
  companyDescription:
    "We are a business digital agency dedicated to transforming businesses through innovative digital experiences and cutting-edge technology.",
  tagline: "Building Modern Digital Experiences",
  email: "hello@floattech.com",
  phone: "+1 (555) 123-4567",
  address: "123 Digital Ave, Tech City, TC 12345",
  socialLinks: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
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
