import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  budget?: string;
  timeline?: string;
}

interface ContactState {
  formData: ContactFormData;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  submissions: ContactFormData[];
}

const initialState: ContactState = {
  formData: {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  },
  isSubmitting: false,
  isSuccess: false,
  error: null,
  submissions: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateFormData: (
      state,
      action: PayloadAction<Partial<ContactFormData>>
    ) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    addSubmission: (state, action: PayloadAction<ContactFormData>) => {
      state.submissions.push(action.payload);
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.isSuccess = false;
      state.error = null;
    },
  },
});

export const {
  updateFormData,
  setSubmitting,
  setSuccess,
  setError,
  addSubmission,
  resetForm,
} = contactSlice.actions;
export default contactSlice.reducer;
