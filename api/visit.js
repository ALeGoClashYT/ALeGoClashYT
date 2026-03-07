import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc, increment, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req, res) {

const ref = doc(db,"stats","global");

await updateDoc(ref,{
totalVisitors: increment(1),
liveUsers: increment(1),
lastUpdate: Date.now()
});

const snap = await getDoc(ref);
const data = snap.data();

const country = req.headers["x-vercel-ip-country"] || "Unknown";

const message = `
👀 New Visitor

🌍 Country: ${country}

📊 Total Visitors: ${data.totalVisitors}
🟢 Live Users: ${data.liveUsers}

⏰ ${new Date().toLocaleString()}
`;

await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({
chat_id:process.env.CHAT_ID,
text:message
})
});

res.status(200).json({success:true});

}
