// =========================
// 곰 다마고치
// =========================

let hunger = 100;
let happy = 100;

// HTML 가져오기
const hungerText = document.getElementById("hunger");
const happyText = document.getElementById("happy");
const message = document.getElementById("message");

// 화면 업데이트
function updateStatus(){

    hungerText.textContent = `🍖 배고픔 : ${hunger}`;
    happyText.textContent = `💗 행복 : ${happy}`;

    if(hunger >= 80 && happy >= 80){
        message.textContent = "🥰 너무 행복해!";
    }

    else if(hunger >= 50 && happy >= 50){
        message.textContent = "😊 기분 좋아!";
    }

    else if(hunger >= 20 && happy >= 20){
        message.textContent = "😐 조금 심심해...";
    }

    else{
        message.textContent = "😭 살려줘...";
    }

}

// 🍰 먹이기
document.getElementById("feedBtn").addEventListener("click",()=>{

    hunger += 10;

    if(hunger>100){
        hunger=100;
    }

    showActionMessage("🍰 냠냠! 맛있게 먹었어요!");
});

// 🎾 놀아주기
document.getElementById("playBtn").addEventListener("click",()=>{

    happy += 10;

    if(happy>100){
        happy=100;
    }

    showActionMessage("🎾 신난다! 같이 놀아서 즐거워요!");
});

// 💊 치료하기
document.getElementById("medicineBtn").addEventListener("click",()=>{

    hunger += 5;
    happy += 5;

    if(hunger>100) hunger=100;
    if(happy>100) happy=100;

    showActionMessage("💊 고마워요! 이제 조금 건강해졌어요!");
});

// 자동 감소

setInterval(()=>{

    hunger--;

    if(hunger<0){
        hunger=0;
    }

    updateStatus();

},7000);

setInterval(()=>{

    happy--;

    if(happy<0){
        happy=0;
    }

    updateStatus();

},10000);

// 첫 실행

updateStatus();
// 행동 메시지
function showActionMessage(text){
    message.textContent = text;

    setTimeout(()=>{
        updateStatus();
    },2000);
}