import { create } from "zustand";

export const useAuth = create((set) => ({
    authUser: null,  //initial state user 
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,  //loading state, when refresh page will be check if user is aunthenthicated or not
}))