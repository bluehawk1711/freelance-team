import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQState {
  faqs: FAQ[];
  expandedId: string | null;
  selectedCategory: string | null;
}

const initialState: FAQState = {
  faqs: [
    {
      id: "1",
      question: "What services do you offer?",
      answer:
        "We offer comprehensive digital services including strategy, design, development, and growth marketing. Our services are tailored to meet the specific needs of your business.",
      category: "services",
    },
    {
      id: "2",
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary depending on scope and complexity. Most projects take 2-6 months. We provide detailed timelines during the discovery phase.",
      category: "process",
    },
    {
      id: "3",
      question: "Do you work with startups?",
      answer:
        "Yes! We work with startups, scale-ups, and enterprises. We understand the unique challenges of early-stage companies and tailor our approach accordingly.",
      category: "general",
    },
    {
      id: "4",
      question: "What technologies do you use?",
      answer:
        "We use modern, industry-leading technologies including React, Next.js, TypeScript, and more. The tech stack is chosen based on project requirements.",
      category: "technical",
    },
  ],
  expandedId: null,
  selectedCategory: null,
};

const faqSlice = createSlice({
  name: "faqs",
  initialState,
  reducers: {
    setFAQs: (state, action: PayloadAction<FAQ[]>) => {
      state.faqs = action.payload;
    },
    addFAQ: (state, action: PayloadAction<FAQ>) => {
      state.faqs.push(action.payload);
    },
    removeFAQ: (state, action: PayloadAction<string>) => {
      state.faqs = state.faqs.filter((f) => f.id !== action.payload);
    },
    updateFAQ: (state, action: PayloadAction<FAQ>) => {
      const index = state.faqs.findIndex((f) => f.id === action.payload.id);
      if (index !== -1) {
        state.faqs[index] = action.payload;
      }
    },
    toggleExpanded: (state, action: PayloadAction<string>) => {
      state.expandedId =
        state.expandedId === action.payload ? null : action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  setFAQs,
  addFAQ,
  removeFAQ,
  updateFAQ,
  toggleExpanded,
  setSelectedCategory,
} = faqSlice.actions;
export default faqSlice.reducer;
