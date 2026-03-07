import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
 apiKey: process.env.FIREBASE_API_KEY,
 authDomain: process.env.FIREBASE_AUTH_DOMAIN,
 projectId: process.env.FIREBASE_PROJECT_ID
};

export default async function handler(req,res){

try{

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

await setDoc(doc(db,"test","ping"),{
time:Date.now()
});

res.status(200).json({firebase:"working"});

}catch(e){

res.status(200).json({firebase:"error",message:e.message});

}

}
