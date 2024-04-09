import { configureStore } from "@reduxjs/toolkit";
import seatBooking from "./slice/seatBooking";
export const store = configureStore({
  reducer: {
    seatBooking,
  },
});
