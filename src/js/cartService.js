// cartService.js
import {
   doc,
   setDoc,
   getDoc,
   arrayUnion,
   arrayRemove,
   updateDoc
} from "firebase/firestore";
import { db } from "../firebase";


export const saveCartToFirebase = async (userId, cartItems) => {
   try {
      const cartRef = doc(db, 'carts', userId);
      await setDoc(cartRef, {
         items: cartItems,
         updatedAt: new Date()
      }, { merge: true });
   } catch (error) {
      console.error("Error saving cart:", error);
      throw error;
   }
};


export const loadCartFromFirebase = async (userId) => {
   try {
      const cartRef = doc(db, 'carts', userId);
      const cartSnap = await getDoc(cartRef);

      if (cartSnap.exists()) {
         return cartSnap.data().items || [];
      }

      await setDoc(cartRef, { items: [], updatedAt: new Date() });
      return [];
   } catch (error) {
      console.error("Error loading cart:", error);
      return [];
   }
};