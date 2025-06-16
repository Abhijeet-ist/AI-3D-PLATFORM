import { auth } from "./firebase";
import { signOut } from "firebase/auth";

/**
 * Signs out the current user from Firebase and clears local storage
 * @returns Promise that resolves when sign out is complete
 */
export const signOutUser = async (): Promise<void> => {
  try {
    // Sign out from Firebase
    await signOut(auth);
    
    // Clear local storage items
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

/**
 * Checks if a user is currently authenticated
 * @returns boolean indicating if a user is logged in
 */
export const isUserAuthenticated = (): boolean => {
  // Check both Firebase auth state and localStorage for compatibility
  const isLoggedInLocalStorage = localStorage.getItem("isLoggedIn") === "true";
  return !!auth.currentUser || isLoggedInLocalStorage;
};

/**
 * Gets the current user's display name
 * @returns string with user's name or email if name not available
 */
export const getCurrentUserName = (): string => {
  if (auth.currentUser?.displayName) {
    return auth.currentUser.displayName;
  } else if (localStorage.getItem("userName")) {
    return localStorage.getItem("userName") || "";
  } else if (auth.currentUser?.email) {
    return auth.currentUser.email;
  } else {
    return localStorage.getItem("userEmail") || "User";
  }
};
