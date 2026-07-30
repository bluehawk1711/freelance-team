import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  details?: string;
  features?: string[];
  image?: string;
}

interface ServicesState {
  services: Service[];
  selectedCategory: string | null;
  searchQuery: string;
}

const initialState: ServicesState = {
  services: [
    {
      id: "1",
      title: "Strategy",
      description:
        "We develop comprehensive digital strategies aligned with your business goals.",
      icon: "Lightbulb",
      category: "strategy",
      details:
        "Our strategic approach combines market research, competitive analysis, and user insights to create a roadmap for digital transformation.",
      features: [
        "Market Research",
        "Competitive Analysis",
        "User Research",
        "Roadmap Planning",
      ],
    },
    {
      id: "2",
      title: "Design",
      description:
        "Beautiful, intuitive designs that engage users and drive conversions.",
      icon: "Palette",
      category: "design",
      details:
        "We craft visually stunning and highly functional interfaces that provide exceptional user experiences across all devices.",
      features: [
        "UI/UX Design",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      id: "3",
      title: "Development",
      description:
        "Robust, scalable solutions built with the latest technologies.",
      icon: "Code",
      category: "development",
      details:
        "Our development team builds performant, secure, and scalable applications that power your digital presence.",
      features: [
        "Frontend Development",
        "Backend Development",
        "Full Stack",
        "API Development",
      ],
    },
    {
      id: "4",
      title: "Growth",
      description:
        "Data-driven strategies to scale your digital presence and revenue.",
      icon: "TrendingUp",
      category: "growth",
      details:
        "We implement proven growth tactics including SEO, analytics, and conversion optimization to accelerate your business.",
      features: [
        "SEO Optimization",
        "Analytics",
        "Conversion Rate Optimization",
        "Growth Marketing",
      ],
    },
    {
      id: "5",
      title: "UI/UX Design",
      description:
        "User-centered design that solves real problems and delights users.",
      icon: "Layout",
      category: "design",
    },
    {
      id: "6",
      title: "Website Design",
      description:
        "Custom website designs that reflect your brand and engage audiences.",
      icon: "Globe",
      category: "design",
    },
  ],
  selectedCategory: null,
  searchQuery: "",
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<Service[]>) => {
      state.services = action.payload;
    },
    addService: (state, action: PayloadAction<Service>) => {
      state.services.push(action.payload);
    },
    removeService: (state, action: PayloadAction<string>) => {
      state.services = state.services.filter((s) => s.id !== action.payload);
    },
    updateService: (state, action: PayloadAction<Service>) => {
      const index = state.services.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) {
        state.services[index] = action.payload;
      }
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  setServices,
  addService,
  removeService,
  updateService,
  setSelectedCategory,
  setSearchQuery,
} = servicesSlice.actions;
export default servicesSlice.reducer;
