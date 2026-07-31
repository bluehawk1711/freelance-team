import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
}

interface PortfolioState {
  projects: Project[];
  selectedCategory: string | null;
}

const initialState: PortfolioState = {
  projects: [
    {
      id: "1",
      title: "Jewellery Walla",
      description: "E-commerce store for jewellery — product catalog, cart, and secure checkout",
      category: "e-commerce",
      image: "/jewellery-walla.webp",
      tags: ["E-commerce", "Next.js", "Payments"],
      link: "https://jewellerywalla.com",
    },
    {
      id: "2",
      title: "Gurukripa Tours and Travels",
      description: "Tours and travels service provider website with itineraries, packages, and inquiry booking",
      category: "tours & travels",
      image: "/gurukripa.webp",
      tags: ["Travel", "Next.js", "Booking"],
      link: "https://www.gurukripatourandtravels.in/",
    },
  ],
  selectedCategory: null,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = portfolioSlice.actions;
export default portfolioSlice.reducer;
