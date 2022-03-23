import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyAnXDeyaMmAtkxYLZDZkQ860qBxAVXLJHQ",
	authDomain: "pokemon-game-32d04.firebaseapp.com",
	databaseURL: "https://pokemon-game-32d04-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "pokemon-game-32d04",
	storageBucket: "pokemon-game-32d04.appspot.com",
	messagingSenderId: "487194853825",
	appId: "1:487194853825:web:04857ae44efee26fb2ef40"
};

export const fire = initializeApp(firebaseConfig);

export const database = getDatabase();
export const dbRef = ref(database, 'pokemons');
