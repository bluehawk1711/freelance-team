import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  image?: string;
  video?: string;
}

interface TestimonialState {
  testimonials: Testimonial[];
  currentIndex: number;
  autoplay: boolean;
}

const initialState: TestimonialState = {
  testimonials: [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechVision",
      content:
        "FloatTech transformed our digital presence. Their strategic approach and execution were flawless.",
      rating: 5,
      avatar: "/testimonials/sarah.jpg",
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateLabs",
      content:
        "The quality of their work and performance of our new platform exceeded all expectations.",
      rating: 5,
      avatar: "/testimonials/michael.jpg",
    },
    {
      id: "3",
      name: "Emma Davis",
      role: "Marketing Director",
      company: "GrowthCo",
      content:
        "Working with FloatTech was a game-changer for our business. Highly recommended!",
      rating: 5,
      avatar: "/testimonials/emma.jpg",
    },
  ],
  currentIndex: 0,
  autoplay: true,
};

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    setTestimonials: (state, action: PayloadAction<Testimonial[]>) => {
      state.testimonials = action.payload;
    },
    addTestimonial: (state, action: PayloadAction<Testimonial>) => {
      state.testimonials.push(action.payload);
    },
    removeTestimonial: (state, action: PayloadAction<string>) => {
      state.testimonials = state.testimonials.filter(
        (t) => t.id !== action.payload
      );
    },
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
    nextTestimonial: (state) => {
      state.currentIndex =
        (state.currentIndex + 1) % state.testimonials.length;
    },
    previousTestimonial: (state) => {
      state.currentIndex =
        (state.currentIndex - 1 + state.testimonials.length) %
        state.testimonials.length;
    },
    setAutoplay: (state, action: PayloadAction<boolean>) => {
      state.autoplay = action.payload;
    },
  },
});

export const {
  setTestimonials,
  addTestimonial,
  removeTestimonial,
  setCurrentIndex,
  nextTestimonial,
  previousTestimonial,
  setAutoplay,
} = testimonialSlice.actions;
export default testimonialSlice.reducer;
