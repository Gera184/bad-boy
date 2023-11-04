import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../firebase-config";

const initialState = {
  email: "",
  uid: "",
  loading: false,
  error: "",
  isSignedIn: false,
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        authentication,
        email,
        password
      );

      const user = userCredential.user; // Extract the user object from the userCredential
      // Return the user object as the fulfilled value

      localStorage.setItem("user", JSON.stringify(user));
      window.location.reload(true);

      return { email: user.email, uid: user.uid };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.isSignedIn = false;
    },
    [getUser.rejected]: (state, payload) => {
      return { ...initialState, error: payload };
    },
    [getUser.fulfilled]: (state, payload) => {
      const { email, uid } = payload.payload;
      if (email && uid) {
        state.email = email;
        state.uid = uid;
        state.isSignedIn = true;
        state.loading = false;
        state.error = null;
      }
    },
  },
});

export const { isAdminPanelHandler } = userSlice.actions;

export default userSlice.reducer;
