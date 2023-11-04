import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase-config";

const initialState = {
  loading: true,
  error: null,
  customers: [],
  _customers: [],
};

export const getCustomers = createAsyncThunk(
  "customer/getCustomers",
  async () => {
    const usersCollectionRef = collection(db, "customers");
    const querySnapshot = await getDocs(
      query(usersCollectionRef, orderBy("createdAt", "desc"))
    );

    const users = [];
    querySnapshot.forEach((doc) => {
      // Access individual document data
      const user = doc.data();
      const docId = doc.id;
      const userWithId = { ...user, docId };

      // Convert createdAt to a Date object
      const timestamp = {
        seconds: user.createdAt.seconds,
        nanoseconds: user.createdAt.nanoseconds,
      };
      const date = new Date(
        timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
      );
      const options = {
        timeZone: "Asia/Jerusalem",
        timeZoneName: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };

      const formattedTime = date.toLocaleString(undefined, options);

      userWithId.createdAt = formattedTime;

      users.push(userWithId);
    });

    return users;
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    refilter: (state, { payload }) => {
      if (!payload) {
        state.customers = state._customers;
      } else {
        state.customers = state._customers.filter(
          (c) => c.name.toLowerCase().search(payload?.toLowerCase()) !== -1
        );
      }
    },
    updateSelectedCustomer: (state, { payload }) => {
      state.customers = payload;
    },
    sortByCategory: (state, { payload }) => {
      state.customers = payload;
    },
    addCustomer: (state, { payload }) => {
      const date = new Date(payload.createdAt);
      const dateTimeString = date.toLocaleString("en-US", {
        timeZone: "Asia/Jerusalem",
        hour12: false,
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      payload.createdAt = dateTimeString;
      state.customers.push(payload);
    },
  },
  extraReducers: {
    [getCustomers.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getCustomers.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state._customers = [];
      state.customers = [];
    },
    [getCustomers.fulfilled]: (state, { payload }) => {
      state._customers = payload || [];
      state.customers = payload || [];
      state.loading = false;
    },
  },
});

export const { refilter, updateSelectedCustomer, addCustomer, sortByCategory } =
  customerSlice.actions;

export default customerSlice.reducer;
