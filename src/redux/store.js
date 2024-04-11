import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "../redux/contacts/slice";
import { filterReducer } from "../redux/filters/slice";
import authReducer from "../redux/auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
