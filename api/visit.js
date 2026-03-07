import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc, increment, getDoc } from "firebase/firestore";

const firebaseConfig = {
apiKey: process.env.FIREBASE_API_KEY,
authDomain: process.env.FIREBASE_AUTH_DOMAIN,
projectId: process.env.FIREBASE_PROJECT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req, res){

if(req.method !== "POST"){
return res.status(405).json({message:"Method not allowed"});
}

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

const visitorRef = doc(db,"stats","visitors");

await updateDoc(visitorRef,{
total: increment(1)
});

const snap = await getDoc(visitorRef);
const totalVisitors = snap.data().total;

const country = req.headers["x-vercel-ip-country"] || "Unknown";
const userAgent = req.headers["user-agent"] || "Unknown";

const message = `
👀 New Visitor

🌍 Country: ${country}
🧭 User Agent: ${userAgent}

📊 Total Visitors: ${totalVisitors}
⏰ Time: ${new Date().toLocaleString()}
`;

await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
chat_id:CHAT_ID,
text:message
})
});

res.status(200).json({success:true});

}
