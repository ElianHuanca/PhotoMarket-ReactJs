import { createSlice } from "@reduxjs/toolkit";

export const auth2Slice = createSlice({
  name: "auth2",
  initialState: {
    status: "not-authenticated",
    id: null,
    //name: null,
    email: null,
    idRol:null
  },
  reducers: {
    login2: (state, { payload }) => {
      state.status = "authenticated";
      state.id = payload.id;
      //state.name = payload.name;
      state.email = payload.email;
      state.idRol =payload.idRol;
    },

    logout2: (state, { payload }) => {
      state.status = "not-authenticated";
      state.id = null;
      //state.name = null;
      state.email = null;
      state.idRol = null;
    },

    checkingCredentials2: (state) => {
      state.status = "not-authenticated";
    },
  },
});

// Action creators are generated for each case reducer function.
export const { login2, logout2, checkingCredentials2 } = auth2Slice.actions;
