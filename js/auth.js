  import { GoogleAuthProvider, signInWithPopup } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import { sendPasswordResetEmail } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import { getStorage, ref, uploadBytes, getDownloadURL } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  setDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { serverTimestamp } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import { 
  getDatabase, 
  ref as rRef, 
  get, 
  onDisconnect, 
  set,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyDHa6ehG1vQoodbxNDfJuEN0UUg2Ymv-1s",
  authDomain: "alegoclashyt.firebaseapp.com",
  projectId: "alegoclashyt"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

import { setPersistence, browserLocalPersistence } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

await setPersistence(auth, browserLocalPersistence);
const db = getFirestore(app);
const storage = getStorage(app);
const rtdb = getDatabase(app);

const profileBtn = document.getElementById("myAccountBtn");
const profileImage = document.getElementById("profileImage");
const authModal = document.getElementById("authModal");
const closeAuth = document.getElementById("closeAuth");
const authTitle = document.getElementById("authTitle");
const authContent = document.getElementById("authContent");

authModal.addEventListener("click",(e)=>{
  if(e.target === authModal){
    authModal.style.display="none";
  }
});

profileBtn.onclick = () => {
  authModal.style.display = "flex";
  if(window.firebaseUser){
    showUserPanel();
  } else {
    showLoginPanel();
  }
};

closeAuth.onclick = () => authModal.style.display="none";



function showLoginPanel(){
  authTitle.innerText = "Login";

  authContent.innerHTML = `
    <input type="email" id="authEmail" placeholder="Email">
    <div class="password-field">
  <input type="password" id="authPassword" placeholder="Password">
  <span id="togglePass">👁</span>
</div>
    <button id="loginBtn">Login</button>

<p class="forgot-pass">
  <span id="forgotPassword">Forgot Password?</span>
</p>

<button id="googleBtn">Continue with Google</button>

<p class="switchAuth">
  Don't have an account? 
  <span id="goRegister">Sign Up</span>
</p>

    <p id="authMessage"></p>
  `;

const toggle = document.getElementById("togglePass");
if(toggle){
  toggle.onclick = ()=>{
    const input = document.getElementById("authPassword");
    input.type = input.type === "password" ? "text" : "password";
  };
}

  document.getElementById("loginBtn").onclick = loginUser;
  document.getElementById("googleBtn").onclick = googleLogin;
  document.getElementById("goRegister").onclick = showRegisterPanel;
  document.getElementById("forgotPassword").onclick = resetPassword;
}

async function resetPassword(){

  const email = document.getElementById("authEmail").value.trim();
  const msg = document.getElementById("authMessage");

  if(!email){
    msg.innerText = "Please enter your email first.";
    return;
  }

  try{
    await sendPasswordResetEmail(auth, email);
    msg.innerText = "Password reset email sent. Check your inbox.";
  }catch(err){

    if(err.code === "auth/user-not-found"){
      msg.innerText = "No account found with this email.";
    }else if(err.code === "auth/invalid-email"){
      msg.innerText = "Invalid email address.";
    }else{
      msg.innerText = "Something went wrong. Try again.";
      console.error(err);
    }

  }
}


function showRegisterPanel(){

  authTitle.innerText = "Register";

  authContent.innerHTML = `
    <input type="text" id="authUsername" placeholder="Username">
    <input type="number" id="authAge" placeholder="Age">
    <input type="email" id="authEmail" placeholder="Email">

    <div class="password-field">
      <input type="password" id="authPassword" placeholder="Password">
      <span class="togglePass">👁</span>
    </div>

    <div class="password-field">
      <input type="password" id="authConfirmPassword" placeholder="Confirm Password">
      <span class="togglePass">👁</span>
    </div>

    <small id="passwordHint" style="color:#888;">
      Password must contain at least 6 characters.
    </small>

    <button id="registerBtn">Create Account</button>

    <p class="switchAuth">
      Already have an account? 
      <span id="goLogin">Login</span>
    </p>

    <p id="authMessage"></p>
  `;

  // 🔥 Toggle لكل الباسوردات
  document.querySelectorAll(".togglePass").forEach(toggle=>{
    toggle.onclick = ()=>{
      const input = toggle.previousElementSibling;
      input.type = input.type === "password" ? "text" : "password";
    };
  });

  document.getElementById("registerBtn").onclick = registerUser;
  document.getElementById("goLogin").onclick = showLoginPanel;
}


async function googleLogin(){

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt:"select_account" });

  try{

    const result = await signInWithPopup(auth,provider);
    const user = result.user;

    const userRef = doc(db,"users",user.uid);
    const snap = await getDoc(userRef);

    if(!snap.exists()){

      await setDoc(userRef,{

        uid:user.uid,
        email:user.email,
        username:user.displayName || "Google User",
        age:null,
        avatar:user.photoURL || "userpic.jpg",

        xp:0,
        extraPoints:0,
        level:1,

        role:"user",
        isBlocked:false,
        isVerified:true,

        provider:"google",
        totalLogins:1,
        streakDays:0,

        createdAt:serverTimestamp(),
        updatedAt:serverTimestamp(),
        lastLogin:serverTimestamp()

      });

    }else{

      const data = snap.data();

      if(data.isBlocked){
        await signOut(auth);
        alert("Your account has been blocked.");
        return;
      }

      await updateDoc(userRef,{
        avatar:user.photoURL || data.avatar,
        lastLogin:serverTimestamp(),
        updatedAt:serverTimestamp(),
        totalLogins:increment(1)
      });

    }

    authModal.style.display="none";

  }catch(err){
    console.error(err);
  }
}



async function showUserPanel(){

  const user = window.firebaseUser;
  if(!user) return;

  const snap = await getDoc(doc(db,"users",user.uid));
  if(!snap.exists()) return;

  const data = snap.data();

  // 🔴 لو متعمله بلوك
  if(data.isBlocked){
    await signOut(auth);
    alert("Your account has been blocked.");
    return;
  }

  authTitle.innerText = "";

  authContent.innerHTML = `
  <div class="pro-profile">

    <div class="pro-left">
      <img id="profileImage" 
           src="${data.avatar || 'userpic.jpg'}" 
           class="big-avatar">
           
      <input type="file" id="avatarUpload" 
             accept="image/*" 
             style="display:none;">

      <button class="change-photo-btn" id="changePhotoBtn">
        Change Photo
      </button>
    </div>

    <div class="pro-right">
      <h2 class="pro-name" id="liveUsername">
        ${data.username}
      </h2>

      <p class="pro-email">${data.email}</p>

      <p class="pro-role">
        Role: <strong>${data.role || "user"}</strong>
      </p>

      ${data.isBlocked ? `<p style="color:red;">Blocked</p>` : ``}

      <div class="stats-box">
        <div class="stat">
          <span>XP</span>
          <h3>${data.xp || 0}</h3>
        </div>

        <div class="stat">
          <span>Extra Points</span>
          <h3>${data.extraPoints || 0}</h3>
        </div>
      </div>

      <button id="editProfileBtn" class="edit-btn">
        Edit Profile
      </button>

      <button id="logoutBtn" class="logout-btn">
        Logout
      </button>

      ${data.role === "admin" ? `
        <button id="adminPanelBtn" class="edit-btn">
          Admin Panel
        </button>
      ` : ``}

    </div>
  </div>
  `;

  // =========================
  // Edit Profile
  // =========================
  document.getElementById("editProfileBtn").onclick = ()=>{
    showEditProfilePanel(data);
  };

  // =========================
  // Admin Panel
  // =========================
  if(data.role === "admin"){
    document.getElementById("adminPanelBtn").onclick = ()=>{
      showAdminPanel();
    };
  }

  // =========================
  // Change Photo
  // =========================
  const uploadInput = document.getElementById("avatarUpload");
  const profileImg = document.getElementById("profileImage");

  document.getElementById("changePhotoBtn").onclick = ()=>{
    uploadInput.click();
  };

  uploadInput.addEventListener("change", async (e)=>{

    const file = e.target.files[0];
    if(!file) return;

    if(!file.type.startsWith("image/")){
      alert("Please upload an image file.");
      return;
    }

    if(file.size > 2 * 1024 * 1024){
      alert("Image must be less than 2MB.");
      return;
    }

    uploadInput.disabled = true;
    profileImg.style.opacity = "0.5";

    try{

      const storageRef = ref(storage, "avatars/" + user.uid);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      await updateDoc(doc(db,"users",user.uid),{
        avatar: url,
        updatedAt: serverTimestamp()
      });

      profileImg.src = url;

      await fetch("/api/notify",{
        method:"POST",
        headers:{ "Content-Type":"application/json"},
        body: JSON.stringify({
          type:"avatar_updated",
          uid:user.uid,
          email:user.email,
          username:data.username,
          avatar:url,
          updatedAt:new Date().toISOString()
        })
      });

    }catch(err){
      console.error(err);
      alert("Upload failed.");
    }

    uploadInput.disabled = false;
    profileImg.style.opacity = "1";
  });

  // =========================
  // Logout
  // =========================
  document.getElementById("logoutBtn").onclick = async ()=>{
    await signOut(auth);
    authModal.style.display="none";
  };

}


async function showAdminPanel(){

  try{

    const currentUser = window.firebaseUser;
    if(!currentUser) return alert("Login required.");

    const snap = await getDoc(doc(db,"users",currentUser.uid));
    if(!snap.exists() || snap.data().role !== "admin"){
      return alert("Admins only.");
    }

    // Firestore users
    const usersSnap = await getDocs(collection(db,"users"));
    const users = [];
    usersSnap.forEach(d=>{
      users.push({ id:d.id, ...d.data() });
    });

    // Online users from Realtime DB
    const onlineRef = rRef(rtdb, "onlineUsers");
    const onlineSnap = await get(onlineRef);
    const onlineUsers = onlineSnap.exists() ? onlineSnap.val() : {};
    const onlineCount = Object.keys(onlineUsers).length;

    // Stats
    const totalUsers = users.length;
    const vipCount = users.filter(u=>u.role==="vip").length;
    const blockedCount = users.filter(u=>u.isBlocked).length;

    let currentPage = 1;
    const perPage = 5;

    function renderPanel(filteredUsers){

      const totalPages = Math.ceil(filteredUsers.length / perPage);
      if(currentPage > totalPages) currentPage = 1;

      const start = (currentPage - 1) * perPage;
      const pageUsers = filteredUsers.slice(start, start + perPage);

      let usersHTML = "";

      pageUsers.forEach(u=>{

        const isOnline = onlineUsers[u.id] ? true : false;

        usersHTML += `
          <div class="admin-user">
            <div class="admin-user-info">
              <strong>${u.username || "No Name"}</strong>
<span>${u.email || "No Email"}</span>

              <div class="admin-meta">
                <span class="role-tag">${u.role || "user"}</span>
                <span class="${u.isBlocked ? "blocked" : "active"}">
                  ${u.isBlocked ? "Blocked" : "Active"}
                </span>
                <span class="${isOnline ? "online-dot" : "offline-dot"}">
                  ${isOnline ? "Online" : "Offline"}
                </span>
              </div>

              <div class="extra-data">
                <span>XP: ${u.xp || 0}</span>
                <span>Points: ${u.extraPoints || 0}</span>
                <span>UID: ${u.id}</span>
              </div>
            </div>

            <div class="admin-actions">
              <button onclick="changeUserRole('${u.id}','vip')">VIP</button>
              <button onclick="changeUserRole('${u.id}','worker')">Worker</button>
              <button onclick="changeUserRole('${u.id}','user')">User</button>
              <button onclick="blockUser('${u.id}')">Block</button>
              <button onclick="unblockUser('${u.id}')">Unblock</button>
            </div>
          </div>
        `;
      });

      document.querySelector(".admin-users").innerHTML = usersHTML;

      document.querySelector(".pagination").innerHTML = `
        <button ${currentPage===1?"disabled":""} id="prevPage">◀</button>
        <span>Page ${currentPage} / ${totalPages || 1}</span>
        <button ${currentPage===totalPages?"disabled":""} id="nextPage">▶</button>
      `;

      document.getElementById("prevPage")?.addEventListener("click",()=>{
        currentPage--;
        renderPanel(filteredUsers);
      });

      document.getElementById("nextPage")?.addEventListener("click",()=>{
        currentPage++;
        renderPanel(filteredUsers);
      });
    }

    authContent.innerHTML = `
      <div class="admin-overlay">
        <div class="admin-container">

          <div class="admin-header">
            <h2>Admin Dashboard</h2>
            <div class="header-right">
              <span class="online-count">Online: ${onlineCount}</span>
              <button id="refreshAdmin">⟳</button>
              <button id="closeAdminPanel">✖</button>
            </div>
          </div>

          <div class="admin-stats">
            <div class="stat-card">Users<br><strong>${totalUsers}</strong></div>
            <div class="stat-card">VIP<br><strong>${vipCount}</strong></div>
            <div class="stat-card">Blocked<br><strong>${blockedCount}</strong></div>
            <div class="stat-card">Online<br><strong>${onlineCount}</strong></div>
          </div>

          <div class="admin-controls">
            <input type="text" id="searchUser" placeholder="Search by name or email...">
            
            <select id="filterRole">
              <option value="all">All Roles</option>
              <option value="user">User</option>
              <option value="vip">VIP</option>
              <option value="worker">Worker</option>
            </select>

            <select id="filterStatus">
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>

          <div class="admin-users"></div>
          <div class="pagination"></div>

        </div>
      </div>
    `;

    document.getElementById("closeAdminPanel").onclick = showUserPanel;
    document.getElementById("refreshAdmin").onclick = showAdminPanel;
    
    console.log(users);

    function applyFilters(){

  const search = document.getElementById("searchUser").value.toLowerCase();
  const roleFilter = document.getElementById("filterRole").value;
  const statusFilter = document.getElementById("filterStatus").value;

  let filtered = users.filter(u=>{

    const username = (u.username || "").toLowerCase();
    const email = (u.email || "").toLowerCase();

    const matchSearch =
      username.includes(search) ||
      email.includes(search);

    const matchRole =
      roleFilter === "all" || u.role === roleFilter;

    const matchStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && !u.isBlocked) ||
      (statusFilter === "blocked" && u.isBlocked);

    return matchSearch && matchRole && matchStatus;
  });

  currentPage = 1;
  renderPanel(filtered);
}


    document.getElementById("searchUser").addEventListener("input", applyFilters);
    document.getElementById("filterRole").addEventListener("change", applyFilters);
    document.getElementById("filterStatus").addEventListener("change", applyFilters);

    renderPanel(users);

  }catch(err){
  console.error("ADMIN ERROR FULL:", err);
  alert(err.message);
}
}




async function changeUserRole(uid, newRole){

  try{

    const currentUser = window.firebaseUser;
    if(!currentUser){
      alert("You must be logged in.");
      return;
    }

    const snap = await getDoc(doc(db,"users",currentUser.uid));
    if(!snap.exists() || snap.data().role !== "admin"){
      alert("Not authorized.");
      return;
    }

    // منع الأدمن يغير نفسه
    if(uid === currentUser.uid){
      alert("You cannot change your own role.");
      return;
    }

    // السماح فقط برتب معينة
    const allowedRoles = ["user","vip","worker"];
    if(!allowedRoles.includes(newRole)){
      alert("Invalid role.");
      return;
    }

    await updateDoc(doc(db,"users",uid),{
      role:newRole,
      updatedAt:serverTimestamp()
    });

    alert("Role updated successfully.");

  }catch(err){
    console.error(err);
    alert("Failed to update role.");
  }
}



async function blockUser(uid){

  try{

    const currentUser = window.firebaseUser;
    if(!currentUser){
      alert("You must be logged in.");
      return;
    }

    const snap = await getDoc(doc(db,"users",currentUser.uid));
    if(!snap.exists() || snap.data().role !== "admin"){
      alert("Not authorized.");
      return;
    }

    // منع الأدمن يعمل بلوك لنفسه
    if(uid === currentUser.uid){
      alert("You cannot block yourself.");
      return;
    }

    await updateDoc(doc(db,"users",uid),{
      isBlocked:true,
      updatedAt:serverTimestamp()
    });

    alert("User blocked successfully.");

  }catch(err){
    console.error(err);
    alert("Failed to block user.");
  }
}



async function unblockUser(uid){

  try{

    const currentUser = window.firebaseUser;
    if(!currentUser){
      alert("You must be logged in.");
      return;
    }

    const snap = await getDoc(doc(db,"users",currentUser.uid));
    if(!snap.exists() || snap.data().role !== "admin"){
      alert("Not authorized.");
      return;
    }

    await updateDoc(doc(db,"users",uid),{
      isBlocked:false,
      updatedAt:serverTimestamp()
    });

    alert("User unblocked successfully.");

  }catch(err){
    console.error(err);
    alert("Failed to unblock user.");
  }
}





function showEditProfilePanel(data){

  authTitle.innerText = "Edit Profile";

  authContent.innerHTML = `
    <input type="text" id="editUsername" 
           value="${data.username || ''}" 
           placeholder="Username">

    <input type="number" id="editAge"
value="${data.age || ''}" 
placeholder="Age">


    <button id="saveProfileBtn">Save Changes</button>
    <button id="cancelEditBtn">Cancel</button>

    <p id="authMessage"></p>
  `;

  document.getElementById("saveProfileBtn").onclick = saveProfileChanges;
  document.getElementById("cancelEditBtn").onclick = ()=>{
  showUserPanel();
};
}
async function saveProfileChanges(){

  const user = window.firebaseUser;
  const username = document.getElementById("editUsername").value.trim();
  const ageValue = document.getElementById("editAge").value.trim();
  const msg = document.getElementById("authMessage");

  msg.innerText="";

  if(!user){
    msg.innerText="User not authenticated.";
    return;
  }

  if(!username || !ageValue){
    msg.innerText="All fields are required.";
    return;
  }

  const age=parseInt(ageValue);

  if(isNaN(age) || age<13){
    msg.innerText="You must be at least 13 years old.";
    return;
  }

  try{

    await updateDoc(doc(db,"users",user.uid),{
      username:username,
      age:age,
      updatedAt:serverTimestamp()
    });

    await fetch("/api/notify",{
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body:JSON.stringify({
        type:"profile_updated",
        uid:user.uid,
        email:user.email,
        username:username,
        age:age,
        updatedAt:new Date().toISOString()
      })
    });

    msg.innerText="Profile updated successfully!";

    setTimeout(()=>{ showUserPanel(); },800);

  }catch(err){
    msg.innerText="Update failed.";
    console.error(err);
  }
}



async function registerUser(){

  const username = document.getElementById("authUsername").value.trim();
  const ageValue = document.getElementById("authAge").value.trim();
  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value;
  const confirmPassword = document.getElementById("authConfirmPassword").value;
  const msg = document.getElementById("authMessage");

  msg.innerText = "";

  if(!username || !ageValue || !email || !password || !confirmPassword){
    msg.innerText = "All fields are required.";
    return;
  }

  if(password !== confirmPassword){
    msg.innerText = "Passwords do not match.";
    return;
  }

  const age = parseInt(ageValue);
  if(isNaN(age) || age < 13){
    msg.innerText = "You must be at least 13 years old.";
    return;
  }

  try{

    const cred = await createUserWithEmailAndPassword(auth,email,password);
    const user = cred.user;

    await setDoc(doc(db,"users",user.uid),{

      uid:user.uid,
      username:username,
      email:user.email,
      age:age,
      avatar:"userpic.jpg",

      xp:0,
      extraPoints:0,
      level:1,

      role:"user",
      isBlocked:false,
      isVerified:user.emailVerified || false,

      provider:"password",
      totalLogins:1,
      streakDays:0,

      createdAt:serverTimestamp(),
      updatedAt:serverTimestamp(),
      lastLogin:serverTimestamp()

    });

    // إشعار للبوت
    await fetch("/api/notify",{
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body:JSON.stringify({
        type:"new_email_user",
        uid:user.uid,
        email:user.email,
        username:username,
        role:"user",
        provider:"password",
        createdAt:new Date().toISOString()
      })
    });

    authModal.style.display="none";

  }catch(err){
    msg.innerText="Registration failed.";
    console.error(err);
  }
}


async function loginUser(){

  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value;
  const msg = document.getElementById("authMessage");

  msg.innerText="";

  if(!email || !password){
    msg.innerText="All fields are required.";
    return;
  }

  try{

    const cred = await signInWithEmailAndPassword(auth,email,password);
    const user = cred.user;

    const userRef = doc(db,"users",user.uid);
    const snap = await getDoc(userRef);

    if(!snap.exists()){
      msg.innerText="User data missing.";
      return;
    }

    const data = snap.data();

    if(data.isBlocked){
      await signOut(auth);
      msg.innerText="Your account has been blocked.";
      return;
    }

    await updateDoc(userRef,{
      lastLogin:serverTimestamp(),
      updatedAt:serverTimestamp(),
      totalLogins:increment(1)
    });

    authModal.style.display="none";

  }catch(err){

    if(err.code==="auth/user-not-found"){
      msg.innerText="No account found.";
    }else if(err.code==="auth/wrong-password"){
      msg.innerText="Incorrect password.";
    }else{
      msg.innerText="Login failed.";
    }

    console.error(err);
  }
}

const profileCardImage = document.getElementById("profileCardImage");
const profileCardName = document.getElementById("profileCardName");
const profileCardEmail = document.getElementById("profileCardEmail");
const profileCardAge = document.getElementById("profileCardAge");
const profileCardDate = document.getElementById("profileCardDate");

onAuthStateChanged(auth, async (user)=>{

 
  if(user){

    window.firebaseUser = user;

    const snap = await getDoc(doc(db,"users",user.uid));

    if(snap.exists()){

      const data = snap.data();

     if(profileImage)
  profileImage.src = data.avatar || "userpic.jpg";

if(profileCardImage)
  profileCardImage.src = data.avatar || "userpic.jpg";

if(profileCardName)
  profileCardName.innerText = data.username;

if(profileCardEmail)
  profileCardEmail.innerText = data.email;

if(profileCardAge)
  profileCardAge.innerText = "Age: " + (data.age ?? "Not set");

if(profileCardDate && data.createdAt)
  profileCardDate.innerText = 
    "Joined: " + data.createdAt.toDate().toLocaleDateString();
    

    }

  }else{

  window.firebaseUser = null;

  if(profileImage)
    profileImage.src = "userpic.jpg";

  if(profileCardImage)
    profileCardImage.src = "userpic.jpg";

}


});

onAuthStateChanged(auth, (user) => {
  if (user) {

    const userStatusRef = rRef(rtdb, "onlineUsers/" + user.uid);
    const connectedRef = rRef(rtdb, ".info/connected");

    onValue(connectedRef, (snapshot) => {
      if (snapshot.val() === true) {

        // المستخدم Online
        set(userStatusRef, {
          email: user.email,
          lastActive: Date.now()
        });

        // لما يخرج أو يقفل التاب
        onDisconnect(userStatusRef).remove();

      }
    });

  }
});
