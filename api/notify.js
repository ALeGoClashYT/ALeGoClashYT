export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    uid,
    email,
    username,
    age,
    xp,
    role,
    avatar,
    provider,
    createdAt
  } = req.body;

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;

  const message = `
🚀 New User Registered!

👤 Username: ${username}
📧 Email: ${email}
🆔 UID: ${uid}
🎂 Age: ${age}
⭐ XP: ${xp}
🎖 Role: ${role}
🖼 Avatar: ${avatar}
🔐 Provider: ${provider}
📅 Created At: ${createdAt}
`;

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
