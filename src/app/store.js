import { configureStore } from '@reduxjs/toolkit';
import carSlice from '../features/car/carSlice';
import jobSlice from '../features/job/jobSlice';
import electroniSlice from '../features/electronic/electronicSlice';
import apartamentSlice from '../features/apartament/apartamentSlice';
import mobileSlice from '../features/mobile/mobileSlice';
import materialSlice from '../features/material/materialSlice';
import transportSlice from '../features/transport/transportSlice';
import bookSlice from '../features/book/bookSlice';
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    jobData: jobSlice,
    carData: carSlice,
    electronicData: electroniSlice,
    apartamentData: apartamentSlice,
    mobileData: mobileSlice,
    materialData: materialSlice,
    transportData: transportSlice,
    bookData: bookSlice,
    userData: userSlice,
  },
});
