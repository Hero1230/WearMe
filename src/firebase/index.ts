import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBsOKGUVCABRGgivZxZyod-LRn28l-3DQ4",
	authDomain: "wearme-4b393.firebaseapp.com",
	databaseURL:
		"https://wearme-4b393-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "wearme-4b393",
	storageBucket: "wearme-4b393.appspot.com",
	messagingSenderId: "386952272973",
	appId: "1:386952272973:web:5ff797e83a1c199ce59004",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
