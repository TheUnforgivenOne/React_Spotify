import { createSlice } from '@reduxjs/toolkit';


const contentTypePickerSlice = createSlice({
  name: 'contentTypePicker',
  initialState: {
    selectedContentType: 'Artists'
  },
  reducers: {
    setContentType(state, action) {
      state.selectedContentType = action.payload.type
    }
  }
});

export const { setContentType } = contentTypePickerSlice.actions;

export default contentTypePickerSlice.reducer;
