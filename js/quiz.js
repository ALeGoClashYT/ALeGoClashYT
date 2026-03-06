
const puzzleButtonNames = [
  "Anime questions",
  "Mathimatical problems",
  "Generl information",
  "معلومات دينية",
  "أسئلة انمي",
  "فوازير والغاز",
  "Brain test",
  "معلومات عامة",
  "Programing",
];



let maxCombo = 0; // هذا لتخزين أعلى كومبو وصل له اللاعب
let timeLeftStart = 0;
let userScore = 0;      // النقاط اللي المستخدم جابها لحد دلوقتي
let totalScore = 0;     // مجموع النقاط الممكنة للأسئلة اللي جاوبها
let answeredQuestions = 0;
let correctAnswers = 0;
let currentLevel = 1;
let historyStack = [];
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let combo = 0;
let timer;
let timeLeft = 20;
let categoryTime = 20;

/* ===== SOUNDS ===== */
const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");
const winSound = new Audio("win.mp3");

/* ===== SECTION CONTROL ===== */
function showSection(id){
  document.querySelectorAll("section").forEach(sec=>sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function openArena(){
  historyStack.push("home");
  showSection("arena");
}

function openPuzzle(){
  historyStack.push("arena");
  showSection("puzzleMenu");
  generatePuzzleButtons();
}

function goBack(){
  clearInterval(timer);
  score = 0;
  combo = 0;
  if(historyStack.length === 0) return;
  let prev = historyStack.pop();
  showSection(prev);
}

/* ===== BUTTONS ===== */

function generatePuzzleButtons(){
  const container = document.getElementById("puzzleButtons");
  container.innerHTML = "";
  for(let i=1;i<=9;i++){
    const btn = document.createElement("a");
    btn.className="btn";
    btn.innerText = puzzleButtonNames[i-1];
    btn.onclick=()=>startQuiz(i);
    container.appendChild(btn);
  }
}

/* ===== QUIZ ===== */
const DIFFICULTY_SETTINGS = {

  easy: {

    multiplier: 1, 
    // مضاعف النقاط الأساسية
    // لو السؤال 10 نقاط → يفضل 10

    timeReductionPercent: 0.00,  
    // نسبة تقليل من وقت الكاتيجوري
    // 0.00 = مفيش تقليل خالص

    earlyBonusPercent: 0.00,
    // نسبة البونص لو اللاعب جاوب بدري
    // 0.40 = ياخد 40% زيادة على النقاط

    earlyThreshold: 0.75,
    // لازم يجاوب ولسه فاضل 75% من الوقت
    // يعني لو الوقت 20 ثانية لازم يجاوب قبل ما الوقت ينزل أقل من 15

    penaltyStart: 0.50,
    // يبدأ يخصم بعد ما الوقت يوصل لـ 50%
    // يعني بعد نص الوقت

    penaltyPerSecond: 0.10,
  //يخصم 5%  كل ثانية بعد بداية الخصم
  
    maxPenalty: 0.20
//أقصى خصم 80% 

  },

  medium: {

    multiplier: 1, 
    // يزود النقاط 50%

    timeReductionPercent: 0.15,  
    // يقلل 15% من وقت الكاتيجوري
    // لو الوقت 20 ثانية → يبقى 17 ثانية تقريبًا

    earlyBonusPercent: 0.0,
    // بونص 30% لو جاوب بدري

    earlyThreshold: 0.65,
    // نفس شرط السرعة

    penaltyStart: 0.60,
    // يبدأ الخصم بعد نص الوقت

    penaltyPerSecond: 0.05,
    // يخصم 4% كل ثانية (أسرع من easy)

    maxPenalty: 0.30
    // أقصى خصم 70%
  },

  hard: {

    multiplier: 1,
    // يضاعف النقاط ×2

    timeReductionPercent: 0.30,
    // يقلل 30% من وقت الكاتيجوري

    earlyBonusPercent: 0.20,
    // بونص أقل (25%)

    earlyThreshold: 0.75,
    // لازم يجاوب ولسه فاضل 80% من الوقت (أصعب)

    penaltyStart: 0.60,
    // يبدأ الخصم بعد 60% من الوقت
    // يعني بدري شوية

    penaltyPerSecond: 0.30,
    // يخصم 6% كل ثانية (سريع)

    maxPenalty: 0.70
    // ممكن يخسر لحد 80% من النقاط
  },

  insane: {

    multiplier: 1.2,
    // يضرب النقاط ×3 (مكافأة ضخمة)

    timeReductionPercent: 0.40,
    // يقلل 45% من الوقت
    // لو الوقت 20 → يبقى حوالي 11 ثانية

    earlyBonusPercent: 0.20,
    // بونص قليل جدًا

    earlyThreshold: 0.80,
    // لازم يجاوب ولسه فاضل 85% من الوقت
    // يعني شبه فوري

    penaltyStart: 0.70,
    // يبدأ يخصم بدري جدًا

    penaltyPerSecond: 0.16666666,
    // يخصم 8% كل ثانية (عنيف جدًا)

    maxPenalty: 0.90
    // ممكن يخسر 90% من النقاط
  }

};

/* ===== SHUFFLE ===== */
function shuffle(array) {
  const arr = [...array]; // نسخة لتجنب تعديل الأصلية
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }
  return arr;
}

async function updateUserScoreOnline(points) {

  if (!window.firebaseUser) return;

  const userRef = doc(db, "users", window.firebaseUser.uid);
  const snap = await getDoc(userRef);

  let currentScore = 0;

  if (snap.exists()) {
    currentScore = snap.data().score || 0;
  }

  await updateDoc(userRef, {
    score: currentScore + points
  });
}


/* ===== START QUIZ ===== */
function startQuiz(level){
  document.getElementById("finishBtn").style.display = "inline-block";

  currentLevel = level;
  historyStack.push("puzzleMenu");
  showSection("quizSection");

  score = 0;
  combo = 0;
  currentQuestionIndex = 0;
  correctAnswers = 0;
  answeredQuestions = 0;

  // جلب الأسئلة من مصدر البيانات
  currentQuiz = quizData[level] ? [...quizData[level]] : [];

  if(currentQuiz.length === 0){
    document.getElementById("quizContainer").innerHTML =
      "<h2>No Questions Yet</h2><br><a class='btn' onclick='openPuzzle()'>Back</a>";
    return;
  }

  // رجّع كل الأسئلة بدون answered
  currentQuiz.forEach(q => q.answered = false);

  // خلط الأسئلة عشوائي
  currentQuiz = shuffle(currentQuiz);

  // خلط إجابات كل سؤال مرة واحدة
  currentQuiz.forEach(q => { if(q.answers) q.answers = shuffle(q.answers); });

  // 🔥 تحديد وقت كل كاتيجوري
  const categoryTimers = {
    1: 15,
    2: 20,
    3: 25,
    4: 20,
    5: 20,
    6: 20,
    7: 25,
    8: 20,
    9: 25
  };
  categoryTime = categoryTimers[level] || 20;

  showQuestion();
}


/* ===== SHOW QUESTION ===== */
function showQuestion() {
  const container = document.getElementById("quizContainer");
  const q = currentQuiz[currentQuestionIndex];

  // safety: لو مافيش سؤال رجع
  if (!q) {
    container.innerHTML = "<h3 style='color:#fff'>No question available</h3>";
    return;
  }

  timeLeft = categoryTime;
  timeLeftStart = categoryTime;

  const totalPointsAnswered = currentQuiz
    .filter(q2 => q2.answered)
    .reduce((sum, q2) => sum + (q2.basePoints || 0), 0);

  container.innerHTML = `
    <div style="text-align:left; font-weight:bold; font-size:16px; margin-bottom:5px; color:white;">
      Question ${currentQuestionIndex + 1} / ${currentQuiz.length}
    </div>
    <div class="combo-text">Combo x${combo}</div>
    <div class="timer-bar" id="timerBar"></div>
    <h3 class="fade-in">${q.question || ''}</h3>
    <div id="answers"></div>
    <div id="scoreCircle">
      <span id="scoreText">${score} / ${totalPointsAnswered + (q.basePoints || 0)}</span>
    </div>
    <br>
  `;

  startTimer();

  const answersDiv = document.getElementById("answers");
  const shuffledAnswers = shuffle(Array.isArray(q.answers) ? q.answers : []);
  const btns = [];

  shuffledAnswers.forEach((ans, idx) => {
    const btn = document.createElement("div");
    btn.className = "btn fade-in";
    btn.style.display = "block";
    btn.style.margin = "10px 0";
    btn.innerText = ans.text || "";

    const handler = (e) => {
      // منع الضغط المتكرر
      if (btn.classList.contains("answered")) return;

      try {
        answeredQuestions++;
        // امنع باقي الأزرار فوراً
        document.querySelectorAll("#answers .btn").forEach(b => b.classList.add("answered","locked"));
        q.answered = true;

        // علم الاختيار
        shuffledAnswers.forEach(a => a.selected = false);
        ans.selected = true;

        // أوقف المؤقت
        clearInterval(timer);

        if (ans.correct) {
          try { correctSound.play(); } catch (e) {}
          correctAnswers++;
          combo++;
          if (combo > maxCombo) maxCombo = combo;

          // حساب النقاط النهائي
          let finalPoints = calculateBonus(q);

          // حماية: لو diff أو basePoints مفقودين
          const diffKey = ((q.difficulty || 'easy') + '').toLowerCase();
          const diff = DIFFICULTY_SETTINGS[diffKey] || DIFFICULTY_SETTINGS.easy;
          let baseOnly = (q.basePoints || 0) * (diff.multiplier || 1);
          let bonusOnly = finalPoints - baseOnly;

          // أضف للنقاط
          score += finalPoints;
          try {
  showComboAnimation(btn, finalPoints);
} catch(e) {
  console.warn("combo animation error", e);
}

          const comboBonus = getComboBonus();
          if (comboBonus > 0) try {
  showComboAnimation(btn, comboBonus, true);
} catch(e) {
  console.warn("combo bonus error", e);
}

          // حدث السجل أونلاين بدون انتظار (لا يوقف الواجهة)
          try {
            updateUserScoreOnline(finalPoints).catch(e => console.warn('updateUserScoreOnline failed', e));
          } catch(err) {
            console.warn('updateUserScoreOnline call error', err);
          }

          if (bonusOnly > 0) extraPoints += Math.round(bonusOnly);

          btn.classList.add("correct");
        } else {
          try { wrongSound.play(); } catch (e) {}
          combo = 0;
          btn.classList.add("wrong");
          btn.classList.add("shake");

          // اظهر الاجابة الصحيحة
          btns.forEach((bEl, j) => {
            if (shuffledAnswers[j] && shuffledAnswers[j].correct) {
              try { bEl.style.background = "green"; } catch(e) {}
            }
          });
        }

        // تحديث نص النتيجة
        const totalPointsAnsweredNow = currentQuiz
          .filter(q2 => q2.answered)
          .reduce((sum, q2) => sum + (q2.basePoints || 0), 0);
        const scoreTextEl = document.getElementById("scoreText");
        if (scoreTextEl) scoreTextEl.innerText = `${score} / ${totalPointsAnsweredNow}`;

        // انتقل للسؤال التالى بعد تأخير بسيط
        setTimeout(() => {
          if (currentQuestionIndex < currentQuiz.length - 1) {
            currentQuestionIndex++;
            showQuestion();
          } else {
            showResult();
          }
        }, 400);

      } catch (err) {
        console.error('Answer handler error:', err);
        // ضمان الانتقال حتى لو حصل خطأ
        setTimeout(() => {
          if (currentQuestionIndex < currentQuiz.length - 1) {
            currentQuestionIndex++;
            showQuestion();
          } else {
            showResult();
          }
        }, 400);
      }
    };

    btn.addEventListener('click', handler);
    answersDiv.appendChild(btn);
    btns.push(btn);
  });

  if (shuffledAnswers.length === 0) {
    answersDiv.innerHTML = "<div style='color:#ccc;padding:10px;'>No answers available</div>";
  }
}

/* ===== TIMER ===== */
function startTimer(){

  clearInterval(timer);

  const bar = document.getElementById("timerBar");
  bar.style.width = "100%";

  // ===== 🆕 هات إعدادات الصعوبة =====
  const q = currentQuiz[currentQuestionIndex];

  const diff = DIFFICULTY_SETTINGS[q.difficulty.toLowerCase()] 
            || DIFFICULTY_SETTINGS.easy;

  // ===== 🆕 الوقت الأساسي من الكاتيجوري =====
  let baseTime = categoryTime;

  // ===== 🆕 نقلل الوقت حسب الصعوبة =====
  let reducedTime = baseTime - (baseTime * diff.timeReductionPercent);

  // ===== 🆕 نخزن الوقت الجديد =====
  timeLeft = Math.round(reducedTime);
  timeLeftStart = timeLeft; // مهم لحساب البونص بعدين

  // ===== 🆕 نستخدم الوقت الجديد بدل categoryTime في شريط التايمر =====
  timer = setInterval(() => {

    timeLeft--;

    // 👇 أهم تعديل هنا
    bar.style.width = (timeLeft / timeLeftStart * 100) + "%";

    if(timeLeft <= 0){

      clearInterval(timer);
      combo = 0;

      const q = currentQuiz[currentQuestionIndex];

      if(!q.answered){
        q.answered = true;
        answeredQuestions++;
      }

      document.querySelectorAll("#answers .btn")
        .forEach(b => b.classList.add("answered"));

      const buttons = document.querySelectorAll("#answers .btn");

      q.answers.forEach((a, index) => {
        if(a.correct && buttons[index]){
          buttons[index].style.background = "green";
        }
      });

      const totalPointsAnsweredNow = currentQuiz
        .filter(q => q.answered)
        .reduce((sum, q) => sum + q.basePoints, 0);

      const scoreText = document.getElementById("scoreText");

      if(scoreText){
        scoreText.innerText = `${score} / ${totalPointsAnsweredNow}`;
      }

      setTimeout(()=>{
        if(currentQuestionIndex < currentQuiz.length - 1){
          currentQuestionIndex++;
          showQuestion();
        } else {
          showResult();
        }
      }, 800);
    }

  }, 1000);
}



/* ===== NEXT QUESTION ===== */
function nextQuestion(){
  if(currentQuestionIndex<currentQuiz.length-1){
    currentQuestionIndex++;
    showQuestion();
  } else {
    showResult();
  }
}

/* ===== COMBO MULTIPLIER ===== */
function getComboBonus(){

  const comboRewards = {
    5: 3,
    10: 5,
    15: 8,
    20: 10,
    30: 15,
    50: 20,
    70: 30,
    100: 50
  };

  return comboRewards[combo] || 0;
}

/* ===== CALCULATE BONUS ===== */
function calculateBonus(q){

  const diff = DIFFICULTY_SETTINGS[q.difficulty.toLowerCase()] 
            || DIFFICULTY_SETTINGS.easy;

  let basePoints = q.basePoints * diff.multiplier;

  let timePercentLeft = timeLeft / timeLeftStart;

  /* ===== EARLY BONUS ===== */
  if(timePercentLeft >= diff.earlyThreshold){
    basePoints += basePoints * diff.earlyBonusPercent;
  }

  /* ===== PENALTY AFTER CERTAIN TIME ===== */
  if(timePercentLeft < diff.penaltyStart){

    let secondsAfterStart = 
      (timeLeftStart * diff.penaltyStart) - timeLeft;

    let penaltyPercent = 
      secondsAfterStart * diff.penaltyPerSecond;

    penaltyPercent = Math.min(penaltyPercent, diff.maxPenalty);

    basePoints -= basePoints * penaltyPercent;
  }

  /* ===== COMBO ===== */
basePoints += getComboBonus();

  return Math.max(0, Math.round(basePoints));
}


/* ===== RESULT & RANK ===== */
function getRank(percent){
  if(percent >= 95) return "A+ <br> &nbsp; &nbsp;  Impressive 🔥";
  if(percent >= 85) return "A <br> &nbsp; &nbsp; Excellent 🌟";
  if(percent >= 80) return "B+ <br> &nbsp; &nbsp; Great Job 👍";
  if(percent >= 75) return "B <br> &nbsp; &nbsp; Well Done 💪";
  if(percent >= 70) return "C+ <br> &nbsp; &nbsp; Good Effort 🙂";
  if(percent >= 65) return "C <br> &nbsp; &nbsp; Keep Trying 😐";
  if(percent >= 60) return "D+ <br> &nbsp; &nbsp; Needs Work 😬";
  if(percent >= 50) return "D <br> &nbsp; &nbsp; Try Harder ⚠️";
  return "F <br> &nbsp; &nbsp; Try Again ❌";
}



/* ===== RESULT & RANK ===== */
let extraPoints = 0;

function showResult() {
  document.getElementById("finishBtn").style.display = "none";

  const totalPointsAnswered = currentQuiz
    .filter(q => q.answered)
    .reduce((sum, q) => sum + q.basePoints, 0);

  let percent = totalPointsAnswered > 0 
    ? Math.round((score / totalPointsAnswered) * 100) 
    : 0;

  percent = Math.min(percent, 100);

  const answeredCount = currentQuiz.filter(q => q.answered).length;
  const wrongAnswers = answeredCount - correctAnswers;

  document.getElementById("quizContainer").innerHTML = `
  <div class="result-box">
    <div class="extra-points">
      <div class="ep-title">⚡ Extra Points</div>
      <div class="ep-value">+${extraPoints}</div>
    </div>

    <h2 class="result-heading">Quiz Finished!</h2>
    <h2 class="result-rank">${getRank(percent)}</h2>

    <div class="result-circles">
      <div class="circle wrong">
        <div class="circle-number">${wrongAnswers}</div>
        <div class="circle-label">Wrong</div>
      </div>

      <div class="circle correct">
        <div class="circle-number">${correctAnswers}</div>
        <div class="circle-label">Correct</div>
      </div>
    </div>

    <p class="score-text">You scored <span class="score-value">${score}</span> points</p>
    <p class="combo-text">Highest Combo: <span class="combo-value">${maxCombo}</span></p>
    <h3 class="accuracy-text">${percent}% Accuracy</h3>

    <div class="result-actions">
      <a class="btn restart-btn" onclick="restartQuiz()">Restart</a>
    </div>
  </div>
`;

const backWrapper = document.querySelector('.back-wrapper');
if(backWrapper){
  backWrapper.classList.add('result-fixed');
}
const resultBox = document.querySelector('#quizContainer .result-box');
const navBar = document.querySelector('header'); // أو .navbar حسب اسم عنصر الناف بار

if(resultBox){

  const navHeight = navBar ? navBar.offsetHeight : 80; // احتياطى لو مش لاقي العنصر

  requestAnimationFrame(() => {

    const rectTop = resultBox.getBoundingClientRect().top + window.pageYOffset;

    const target = rectTop - navHeight - 6; 
    // -6 علشان يبقى لازق تحت الناف بار مباشرة

    window.scrollTo({
      top: target,
      behavior: "smooth"
    });

  }, 60);

}

  winSound.play();
}
/* ===== HOME SECTION SAFE INIT ===== */
let homeSection = null;
let originalHomeHTML = "";

document.addEventListener("DOMContentLoaded", function () {
  homeSection = document.getElementById("home");

  if (homeSection) {
    originalHomeHTML = homeSection.innerHTML;
  } else {
    console.warn("Element with id='home' not found");
  }
});

/* ===== FINISH / RESTART / RESET ===== */
function finishQuiz(){
  clearInterval(timer);
  showResult();
}

function restartQuiz(){
  score = 0;
  combo = 0;
  maxCombo = 0; // 🔥 رجع أعلى كومبو للصفر
  correctAnswers = 0;
  answeredQuestions = 0;
  currentQuestionIndex = 0;
  extraPoints = 0;
  const backWrapper = document.querySelector('.back-wrapper');
if(backWrapper){
  backWrapper.classList.remove('result-fixed');
}
  currentQuiz.forEach(q => q.answered = false);
  currentQuiz = shuffle(currentQuiz);
  currentQuiz.forEach(q => { if(q.answers) q.answers = shuffle(q.answers); });

  document.getElementById("finishBtn").style.display = "inline-block";

  showQuestion();
}
function resetQuiz(){
  userScore = 0;
  totalScore = 0;
  score = 0;
  combo = 0;
  correctAnswers = 0;
  answeredQuestions = 0;
  currentQuestionIndex = 0;  
}

function showComboAnimation(btn, points, isCombo = false){
  const anim = document.createElement("div");
  anim.className = isCombo ? "combo-popup combo-left" : "combo-popup combo-center";
  anim.innerText = isCombo ? `+${points} Combo` : `+${points}`;

  anim.style.position = "absolute";
  anim.style.color = isCombo ? "#FFD873" : "#00ff90";
  anim.style.fontWeight = "900";
  anim.style.fontSize = "18px";
  anim.style.pointerEvents = "none";
  anim.style.animation = "pointsPop 0.8s ease forwards";
  anim.style.zIndex = 999999;
  anim.style.transform = "none"; // نتأكد إن مافيش transform سابق يؤثر

  // أمان لو btn ماغيرش صحيح
  const rect = (btn && btn.getBoundingClientRect) ? btn.getBoundingClientRect() : { left: window.innerWidth/2, top: window.innerHeight/2, width: 0 };
  const pageX = rect.left + window.pageXOffset;
  const pageY = rect.top + window.pageYOffset;

  // موضع مبدئي
  anim.style.left = (pageX + 30) + "px";
  anim.style.top = (pageY - 6) + "px";

  document.body.appendChild(anim);

  // بعد الإضافة نحسب عرض العنصر ونظبطه بدقة
  const gap = 8;
  if (isCombo) {
    // لو Combo => نزبطه على الشمال من الزر (أو داخل الزر على الشمال)
    anim.style.left = (pageX + gap) + "px";
  } else {
    // لو نقاط عادية => نوسطها فوق الزر
    const centerLeft = pageX + (rect.width / 2) - (anim.offsetWidth / 2);
    anim.style.left = Math.max(8, centerLeft) + "px";
  }

  // نرفع شوية فوق الزر
  anim.style.top = (pageY - 16) + "px";

  setTimeout(()=> {
    if (anim && anim.parentNode) anim.parentNode.removeChild(anim);
  }, 800);
}
