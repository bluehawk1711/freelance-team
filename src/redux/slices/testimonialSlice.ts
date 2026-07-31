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
      name: "Himanshu Prajapat",
      role: "Owner",
      company: "Jewellery Walla",
      content:
        "FloatTech built our complete e-commerce store for Jewellery Walla. The website looks stunning, loads fast, and our customers can easily browse and order online. Truly professional work!",
      rating: 5,
    },
    {
      id: "2",
      name: "Mayank Dadhich",
      role: "Owner",
      company: "Gurukripa Tours and Travels",
      content:
        "The website for Gurukripa Tours and Travels is exactly what we needed. It beautifully presents our tour packages and makes it easy for customers to reach us. We have received many more inquiries since launching. Highly recommended!",
      rating: 5,
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
