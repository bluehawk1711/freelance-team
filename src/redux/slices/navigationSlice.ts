import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  submenu?: NavItem[];
}

interface NavigationState {
  items: NavItem[];
  mobileMenuOpen: boolean;
  activeLink: string;
}

const initialState: NavigationState = {
  items: [
    { id: "1", label: "Home", href: "/" },
    { id: "2", label: "Services", href: "/#services" },
    { id: "3", label: "Portfolio", href: "/#portfolio" },
    { id: "4", label: "About", href: "/#about" },
    { id: "5", label: "Process", href: "/#process" },
    { id: "6", label: "Contact", href: "/#contact" },
  ],
  mobileMenuOpen: false,
  activeLink: "/",
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false;
    },
    openMobileMenu: (state) => {
      state.mobileMenuOpen = true;
    },
    setActiveLink: (state, action: PayloadAction<string>) => {
      state.activeLink = action.payload;
    },
    setNavItems: (state, action: PayloadAction<NavItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const {
  toggleMobileMenu,
  closeMobileMenu,
  openMobileMenu,
  setActiveLink,
  setNavItems,
} = navigationSlice.actions;
export default navigationSlice.reducer;
