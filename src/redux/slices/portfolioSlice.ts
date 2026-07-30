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
      title: "NeoFin Dashboard",
      description: "Advanced financial analytics platform with real-time data visualization",
      category: "fintech",
      image: "/projects/neufin.jpg",
      tags: ["React", "TypeScript", "Analytics"],
      link: "https://example.com",
    },
    {
      id: "2",
      title: "EcoFlow App",
      description: "Sustainable living companion app for carbon tracking",
      category: "mobile app",
      image: "/projects/ecoflow.jpg",
      tags: ["React Native", "Node.js"],
      link: "https://example.com",
    },
    {
      id: "3",
      title: "Luxe Studio",
      description: "E-commerce platform for luxury fashion brands",
      category: "e-commerce",
      image: "/projects/luxe.jpg",
      tags: ["Shopify", "React", "Design"],
      link: "https://example.com",
    },
    {
      id: "4",
      title: "Neuralytics Pro",
      description: "AI-powered business analytics and prediction engine",
      category: "ai / saas",
      image: "/projects/neuralytics.jpg",
      tags: ["Python", "TensorFlow", "React"],
      link: "https://example.com",
    },
    {
      id: "5",
      title: "Pulse Tracker",
      description: "Health and fitness tracking platform with personalized insights",
      category: "healthtech",
      image: "/projects/pulse.jpg",
      tags: ["Next.js", "D3.js", "API"],
      link: "https://example.com",
    },
    {
      id: "6",
      title: "Vortex Build",
      description: "Architecture portfolio and project management platform",
      category: "architecture",
      image: "/projects/vortex.jpg",
      tags: ["Three.js", "React", "CMS"],
      link: "https://example.com",
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
