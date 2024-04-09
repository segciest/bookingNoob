import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookingData: {},
  user: "",
  countedSeat: 0,
  arrSeat: [],
  pickedSeat: [],
  totalPrice: 0,
};

const seatBooking = createSlice({
  name: "seat",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getCountedSeat: (state, action) => {
      state.countedSeat = action.payload;
    },
    getArrSeat: (state, action) => {
      state.arrSeat = action.payload;
    },
    setBookingData: (state, action) => {
      state.bookingData = action.payload;
    },
    getPickedSeat: (state, action) => {
      state.pickedSeat = action.payload;
    },
    getTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const {
  getUser,
  getCountedSeat,
  getArrSeat,
  setBookingData,
  getPickedSeat,
  getTotalPrice,
} = seatBooking.actions;

export default seatBooking.reducer;
