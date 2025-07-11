import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    doc,
    getDoc,
    addDoc
} from "firebase/firestore";
import { app } from './config';

const db = getFirestore(app);

export const getProducts = async () => {
    const productsRef = collection(db, "products");
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductsByCategory = async (category) => {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", category));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProduct = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};
export const getCategories = async () => {
    const q = query(collection(db, "products"));
    const snapshot = await getDocs(q);
    const categories = new Set();

    snapshot.forEach(doc => {
        const category = doc.data().category;
        if (category) categories.add(category);
    });

    return Array.from(categories).map(category => ({
        id: category.toLowerCase().replace(/\s+/g, '-'),
        name: category
    }));
};