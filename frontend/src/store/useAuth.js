import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const useAuth = create((set) => ({
    authUser: null,  //initial state user 
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,  //loading state, when refresh page will be check if user is aunthenthicated or not

    checkAuth: async() => {
        try {
            const res = await axiosInstance.get("/auth/check");

            set({authUser:res.data});
        } catch (error) {
            console.log("Error in checkAuth:", error);
            set({authUser:null});
        } finally {
            set({isCheckingAuth:false});
        }
    },

    signup: async (data) => {

    }
}));