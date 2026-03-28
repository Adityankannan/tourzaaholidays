import { createSlice } from "@reduxjs/toolkit";

const packagesSlice = createSlice({
  name: "packages",
  initialState: {
    activeTab: "international", // 'international' | 'domestic'
    hoveredCard: null,
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setHoveredCard: (state, action) => {
      state.hoveredCard = action.payload;
    },
  },
});

export const { setActiveTab, setHoveredCard } = packagesSlice.actions;
export default packagesSlice.reducer;
