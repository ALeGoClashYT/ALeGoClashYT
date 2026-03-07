import admin from "firebase-admin";

if (!admin.apps.length) {
admin.initializeApp({
credential: admin.credential.cert({
projectId: process.env.FIREBASE_PROJECT_ID,
clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
})
});
}

const db = admin.firestore();

export default async function handler(req,res){

try{

const ref = db.collection("stats").doc("global");

await ref.set({
visits: admin.firestore.FieldValue.increment(1),
lastVisit: Date.now()
},{merge:true});

const snap = await ref.get();

res.status(200).json({
success:true,
visits:snap.data().visits
});

}catch(e){

res.status(500).json({
error:e.message
});

}

}
