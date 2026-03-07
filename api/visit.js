export default async function handler(req, res) {

try {

const BOT_TOKEN = process.env.BOT_TOKEN
const CHAT_ID = process.env.CHAT_ID

// IP Address
const ip =
req.headers["x-forwarded-for"]?.split(",")[0] ||
req.socket?.remoteAddress ||
"Unknown"

// User Agent
const userAgent = req.headers["user-agent"] || "Unknown"

// Page
const page = req.headers["referer"] || "Direct"

// Get location from IP
const geo = await fetch(`http://ip-api.com/json/${ip}`)
const geoData = await geo.json()

const country = geoData.country || "Unknown"
const city = geoData.city || "Unknown"
const isp = geoData.isp || "Unknown"

// Detect device
let device = "Unknown"

if (userAgent.includes("Android")) device = "Android 📱"
else if (userAgent.includes("iPhone")) device = "iPhone 📱"
else if (userAgent.includes("Windows")) device = "Windows 💻"
else if (userAgent.includes("Mac")) device = "Mac 💻"

// Time
const time = new Date().toLocaleString()

// Telegram message
const message = `
🚨 NEW WEBSITE VISITOR

🌍 Country: ${country}
🏙 City: ${city}

📡 IP: ${ip}
📶 ISP: ${isp}

📱 Device: ${device}

🌐 Page: ${page}

⏰ Time: ${time}

🧠 User-Agent:
${userAgent}
`

await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
chat_id:CHAT_ID,
text:message
})
})

res.status(200).json({status:"visitor tracked"})

} catch (err) {

res.status(500).json({
error:err.message
})

}

}
