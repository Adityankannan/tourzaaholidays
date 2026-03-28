import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isNavScrolled: false,
    activeSection: "home",
    contactFormStatus: "idle", // 'idle' | 'submitting' | 'success' | 'error'
  },
  reducers: {
    setNavScrolled: (state, action) => {
      state.isNavScrolled = action.payload;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    setContactFormStatus: (state, action) => {
      state.contactFormStatus = action.payload;
    },
  },
});

export const { setNavScrolled, setActiveSection, setContactFormStatus } =
  uiSlice.actions;
export default uiSlice.reducer;
