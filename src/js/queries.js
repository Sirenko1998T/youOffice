
import { collection, query, where } from "firebase/firestore";
import { db } from "../firebase";


export const featuredProduct = query(
   collection(db, "products"),
   where("featured_products", "==", true)
);

export const newIn = query(
   collection(db, "products"),
   where("new_in", "==", true)
);

export const bestDeals = query(
   collection(db, "products"),
   where("best_deals", "==", true)
);
