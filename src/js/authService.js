import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   updateProfile,
   onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase';

export class AuthService {

   static async register(email, password, displayName) {
      try {
         const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
         );


         await updateProfile(userCredential.user, {
            displayName: displayName
         });

         return { success: true, user: userCredential.user };
      } catch (error) {
         return { success: false, error: error.message };
      }
   }

   static async login(email, password) {
      try {
         const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
         );
         return { success: true, user: userCredential.user };
      } catch (error) {
         return { success: false, error: error.message };
      }
   }


   static async logout() {
      try {
         await signOut(auth);
         return { success: true };
      } catch (error) {
         return { success: false, error: error.message };
      }
   }


   static onAuthChange(callback) {
      return onAuthStateChanged(auth, callback);
   }


   static getCurrentUser() {
      return auth.currentUser;
   }
}