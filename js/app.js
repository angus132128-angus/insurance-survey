let currentQuestion = 0;

let answers = [];


// ===============================
// คำถาม 20 ข้อ
// ===============================

const questions = [

    // หมวดที่ 1
    {
        category: "หมวดที่ 1 : สวัสดิการและความคุ้มครองปัจจุบัน",
        question: "ปัจจุบันคุณมีสวัสดิการหรือความคุ้มครองอะไรอยู่บ้าง?",
        hint: "เลือกคำตอบที่ตรงกับคุณมากที่สุด",
        options: [
            "ข้าราชการ",
            "ประกันสังคม",
            "มีประกันส่วนตัว",
            "ยังไม่มี"
        ]
    },

    {
        category: "หมวดที่ 1 : สวัสดิการและความคุ้มครองปัจจุบัน",
        question: "ปัจจุบันคุณมีประกันสุขภาพส่วนตัวหรือไม่?",
        hint: "เลือกคำตอบที่ตรงกับคุณมากที่สุด",
        options: [
            "มี",
            "ไม่มี",
            "ไม่แน่ใจ"
        ]
    },

    {
        category: "หมวดที่ 1 : สวัสดิการและความคุ้มครองปัจจุบัน",
        question: "คุณมีประกันอุบัติเหตุส่วนตัวอยู่หรือไม่?",
        hint: "เลือกคำตอบที่ตรงกับคุณมากที่สุด",
        options: [
            "มี",
            "ไม่มี",
            "ไม่แน่ใจ"
        ]
    },

    {
        category: "หมวดที่ 1 : สวัสดิการและความคุ้มครองปัจจุบัน",
        question: "คุณมีประกันชีวิตอยู่ในปัจจุบันหรือไม่?",
        hint: "เลือกคำตอบที่ตรงกับคุณมากที่สุด",
        options: [
            "มี",
            "ไม่มี",
            "ไม่แน่ใจ"
        ]
    },


    // หมวดที่ 2
    {
        category: "หมวดที่ 2 : สุขภาพและความเสี่ยง",
        question: "โดยทั่วไปคุณกังวลเรื่องค่าใช้จ่ายในการรักษาพยาบาลมากน้อยแค่ไหน?",
        hint: "เลือกคำตอบที่ใกล้เคียงกับความรู้สึกของคุณ",
        options: [
            "กังวลมาก",
            "ค่อนข้างกังวล",
            "กังวลเล็กน้อย",
            "ไม่ค่อยกังวล"
        ]
    },

    {
        category: "หมวดที่ 2 : สุขภาพและความเสี่ยง",
        question: "หากต้องเข้ารับการรักษาในโรงพยาบาล คุณคิดว่าค่าใช้จ่ายเป็นเรื่องที่ต้องเตรียมตัวหรือไม่?",
        hint: "เลือกคำตอบที่ตรงกับคุณมากที่สุด",
        options: [
            "ต้องเตรียมอย่างมาก",
            "ควรเตรียมไว้",
            "ยังไม่แน่ใจ",
            "คิดว่ายังไม่จำเป็น"
        ]
    },

    {
        category: "หมวดที่ 2 : สุขภาพและความเสี่ยง",
        question: "คุณกังวลเกี่ยวกับโรคร้ายแรง เช่น มะเร็ง หรือโรคหัวใจหรือไม่?",
        hint: "เลือกคำตอบที่ตรงกับคุณมากที่สุด",
        options: [
            "กังวลมาก",
            "ค่อนข้างกังวล",
            "กังวลเล็กน้อย",
            "ไม่กังวล"
        ]
    },

    {
        category: "หมวดที่ 2 : สุขภาพและความเสี่ยง",
        question: "หากเกิดอุบัติเหตุจนต้องหยุดงาน คุณกังวลเรื่องรายได้หรือไม่?",
        hint: "เลือกคำตอบที่ตรงกับคุณมากที่สุด",
        options: [
            "กังวลมาก",
            "ค่อนข้างกังวล",
            "กังวลเล็กน้อย",
            "ไม่กังวล"
        ]
    },


    // หมวดที่ 3
    {
        category: "หมวดที่ 3 : ครอบครัวและภาระทางการเงิน",
        question: "ปัจจุบันคุณมีคนในครอบครัวที่ต้องดูแลด้านค่าใช้จ่ายหรือไม่?",
        hint: "เลือกคำตอบที่ตรงกับสถานการณ์ของคุณ",
        options: [
            "มีหลายคน",
            "มี 1 คน",
            "มีบ้างบางส่วน",
            "ไม่มี"
        ]
    },

    {
        category: "หมวดที่ 3 : ครอบครัวและภาระทางการเงิน",
        question: "หากคุณไม่สามารถทำงานได้ชั่วคราว คุณคิดว่าครอบครัวจะได้รับผลกระทบมากน้อยแค่ไหน?",
        hint: "ลองนึกถึงค่าใช้จ่ายที่เกิดขึ้นในแต่ละเดือน",
        options: [
            "กระทบมาก",
            "ค่อนข้างกระทบ",
            "กระทบเล็กน้อย",
            "แทบไม่มีผลกระทบ"
        ]
    },

    {
        category: "หมวดที่ 3 : ครอบครัวและภาระทางการเงิน",
        question: "คุณมีภาระผ่อนบ้าน รถ หรือหนี้สินที่ต้องรับผิดชอบหรือไม่?",
        hint: "เลือกคำตอบที่ตรงกับคุณมากที่สุด",
        options: [
            "มีหลายรายการ",
            "มี 1 รายการ",
            "มีเล็กน้อย",
            "ไม่มี"
        ]
    },

    {
        category: "หมวดที่ 3 : ครอบครัวและภาระทางการเงิน",
        question: "หากเกิดเหตุไม่คาดคิด คุณกังวลว่าครอบครัวจะขาดรายได้หรือไม่?",
        hint: "เลือกคำตอบที่ตรงกับคุณมากที่สุด",
        options: [
            "กังวลมาก",
            "ค่อนข้างกังวล",
            "กังวลเล็กน้อย",
            "ไม่กังวล"
        ]
    },


    // หมวดที่ 4
    {
        category: "หมวดที่ 4 : รายได้และเงินสำรอง",
        question: "โดยทั่วไปคุณมีเงินสำรองสำหรับค่าใช้จ่ายฉุกเฉินหรือไม่?",
        hint: "เลือกคำตอบที่ใกล้เคียงกับสถานการณ์ของคุณ",
        options: [
            "มีเพียงพอ",
            "มีบ้าง",
            "มีเล็กน้อย",
            "ยังไม่มี"
        ]
    },

    {
        category: "หมวดที่ 4 : รายได้และเงินสำรอง",
        question: "หากไม่มีรายได้เป็นเวลา 3 เดือน คุณคิดว่าจะรับมือกับค่าใช้จ่ายได้หรือไม่?",
        hint: "ลองนึกถึงค่าใช้จ่ายประจำของคุณ",
        options: [
            "รับมือได้สบาย",
            "น่าจะรับมือได้",
            "ค่อนข้างลำบาก",
            "รับมือได้ยาก"
        ]
    },

    {
        category: "หมวดที่ 4 : รายได้และเงินสำรอง",
        question: "คุณสามารถแบ่งเงินบางส่วนเพื่อวางแผนความคุ้มครองหรือการออมได้หรือไม่?",
        hint: "เลือกคำตอบที่ตรงกับสถานการณ์ของคุณ",
        options: [
            "ได้สบาย",
            "ได้บ้าง",
            "ค่อนข้างจำกัด",
            "ยังไม่สะดวก"
        ]
    },

    {
        category: "หมวดที่ 4 : รายได้และเงินสำรอง",
        question: "คุณมีการวางแผนทางการเงินสำหรับอนาคตอยู่แล้วหรือไม่?",
        hint: "เช่น การออม การลงทุน หรือการเตรียมเงินสำรอง",
        options: [
            "วางแผนอย่างชัดเจน",
            "วางแผนไว้บ้าง",
            "กำลังเริ่มวางแผน",
            "ยังไม่ได้วางแผน"
        ]
    },


    // หมวดที่ 5
    {
        category: "หมวดที่ 5 : เป้าหมายและความต้องการในอนาคต",
        question: "ในอนาคตคุณอยากให้ความคุ้มครองด้านใดมีความสำคัญมากที่สุด?",
        hint: "เลือกสิ่งที่คุณอยากให้ความสำคัญเป็นอันดับแรก",
        options: [
            "สุขภาพและค่ารักษาพยาบาล",
            "ชีวิตและครอบครัว",
            "โรคร้ายแรง",
            "อุบัติเหตุและรายได้"
        ]
    },

    {
        category: "หมวดที่ 5 : เป้าหมายและความต้องการในอนาคต",
        question: "หากเกิดโรคร้ายแรง คุณอยากมีเงินสำรองสำหรับเรื่องใดมากที่สุด?",
        hint: "เลือกคำตอบที่ตรงกับความต้องการของคุณ",
        options: [
            "ค่ารักษาพยาบาล",
            "ค่าใช้จ่ายในครอบครัว",
            "ชดเชยรายได้ที่หายไป",
            "ยังไม่เคยคิดเรื่องนี้"
        ]
    },

    {
        category: "หมวดที่ 5 : เป้าหมายและความต้องการในอนาคต",
        question: "คุณอยากวางแผนความคุ้มครองสำหรับคนในครอบครัวด้วยหรือไม่?",
        hint: "เลือกคำตอบที่ตรงกับความต้องการของคุณ",
        options: [
            "อยากวางแผน",
            "อาจพิจารณา",
            "ยังไม่แน่ใจ",
            "ยังไม่สนใจ"
        ]
    },

    {
        category: "หมวดที่ 5 : เป้าหมายและความต้องการในอนาคต",
        question: "คุณอยากพูดคุยเพิ่มเติมเกี่ยวกับเรื่องใดมากที่สุด?",
        hint: "เลือกหัวข้อที่คุณสนใจมากที่สุด",
        options: [
            "สุขภาพและค่ารักษาพยาบาล",
            "ประกันชีวิต",
            "โรคร้ายแรง",
            "อุบัติเหตุและรายได้"
        ]
    }

];


// ===============================
// แสดงคำถาม
// ===============================

function showQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("currentQuestion").textContent =
        currentQuestion + 1;

    document.getElementById("progressFill").style.width =
        ((currentQuestion + 1) / questions.length * 100) + "%";

    document.querySelector(".category").textContent =
        question.category;

    document.getElementById("questionText").textContent =
        question.question;

    document.querySelector(".question-hint").textContent =
        question.hint;


    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";


    question.options.forEach(function(option, index) {

        const button = document.createElement("button");

        button.className = "option";

        button.textContent = option;


        if (answers[currentQuestion] === index) {

            button.classList.add("selected");

        }


        button.addEventListener("click", function() {

            document.querySelectorAll(".option").forEach(function(btn) {

                btn.classList.remove("selected");

            });


            button.classList.add("selected");

            answers[currentQuestion] = index;

        });


        optionsContainer.appendChild(button);

    });


    // ===============================
    // ปุ่มก่อนหน้า
    // ===============================

    const prevButton =
        document.getElementById("prevButton");

    if (currentQuestion === 0) {

        prevButton.style.visibility = "hidden";

    } else {

        prevButton.style.visibility = "visible";

    }


    // ===============================
    // ปุ่มถัดไป
    // ===============================

    const nextButton =
        document.getElementById("nextButton");

    if (currentQuestion === questions.length - 1) {

        nextButton.textContent = "ดูผลสำรวจ →";

    } else {

        nextButton.textContent = "ถัดไป →";

    }

}


// ===============================
// ปุ่มถัดไป
// ===============================

document.getElementById("nextButton").addEventListener("click", function() {

    if (answers[currentQuestion] === undefined) {

        alert("กรุณาเลือกคำตอบก่อนนะคะ");

        return;

    }


    if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
} else {
    const scores = calculateScores();

    localStorage.setItem("surveyScores", JSON.stringify(scores));

    window.location.href = "result.html";
}

});


// ===============================
// ปุ่มก่อนหน้า
// ===============================

document.getElementById("prevButton").addEventListener("click", function() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

});


// ===============================
// เริ่มต้น
// ===============================

// ===============================
// ระบบคำนวณคะแนน
// ===============================

function calculateScores() {

    let scores = {
        health: 0,
        life: 0,
        critical: 0,
        accident: 0,
        income: 0,
        family: 0
    };


    // ข้อ 1
    if (answers[0] === 3) {
        scores.health += 3;
        scores.life += 3;
        scores.accident += 2;
    }

    if (answers[0] === 1) {
        scores.health += 1;
    }

    if (answers[0] === 2) {
        scores.health += 1;
        scores.life += 1;
    }


    // ข้อ 2 : มีประกันสุขภาพหรือไม่
    if (answers[1] === 1) {
        scores.health += 3;
    }

    if (answers[1] === 2) {
        scores.health += 2;
    }


    // ข้อ 3 : ประกันอุบัติเหตุ
    if (answers[2] === 1) {
        scores.accident += 3;
    }

    if (answers[2] === 2) {
        scores.accident += 2;
    }


    // ข้อ 4 : ประกันชีวิต
    if (answers[3] === 1) {
        scores.life += 3;
    }

    if (answers[3] === 2) {
        scores.life += 2;
    }


    // ข้อ 5 : กังวลค่ารักษาพยาบาล
    scores.health += 4 - answers[4];


    // ข้อ 6 : ค่าใช้จ่ายโรงพยาบาล
    scores.health += 4 - answers[5];


    // ข้อ 7 : กังวลโรคร้ายแรง
    scores.critical += 4 - answers[6];


    // ข้อ 8 : หยุดงานแล้วกังวลรายได้
    scores.income += 4 - answers[7];


    // ข้อ 9 : มีคนในครอบครัวต้องดูแล
    scores.family += 4 - answers[8];


    // ข้อ 10 : หากทำงานไม่ได้
    scores.family += 4 - answers[9];
    scores.income += 4 - answers[9];


    // ข้อ 11 : ภาระหนี้สิน
    scores.family += 4 - answers[10];
    scores.income += 4 - answers[10];


    // ข้อ 12 : ครอบครัวขาดรายได้
    scores.family += 4 - answers[11];
    scores.income += 4 - answers[11];


    // ข้อ 13 : เงินสำรองฉุกเฉิน
    scores.income += answers[12];


    // ข้อ 14 : ไม่มีรายได้ 3 เดือน
    scores.income += 4 - answers[13];


    // ข้อ 15 : แบ่งเงินวางแผนได้หรือไม่
    scores.income += 4 - answers[14];


    // ข้อ 16 : การวางแผนการเงิน
    scores.life += 4 - answers[15];


    // ข้อ 17 : ความคุ้มครองที่สำคัญที่สุด
    if (answers[16] === 0) {
        scores.health += 5;
    }

    if (answers[16] === 1) {
        scores.life += 5;
        scores.family += 3;
    }

    if (answers[16] === 2) {
        scores.critical += 5;
    }

    if (answers[16] === 3) {
        scores.accident += 4;
        scores.income += 4;
    }


    // ข้อ 18 : หากเกิดโรคร้ายแรง
    if (answers[17] === 0) {
        scores.health += 4;
        scores.critical += 4;
    }

    if (answers[17] === 1) {
        scores.family += 4;
        scores.critical += 2;
    }

    if (answers[17] === 2) {
        scores.income += 4;
        scores.critical += 3;
    }

    if (answers[17] === 3) {
        scores.critical += 1;
    }


    // ข้อ 19 : วางแผนให้ครอบครัว
    if (answers[18] === 0) {
        scores.family += 5;
        scores.life += 3;
    }

    if (answers[18] === 1) {
        scores.family += 3;
        scores.life += 2;
    }

    if (answers[18] === 2) {
        scores.family += 2;
    }


    // ข้อ 20 : เรื่องที่อยากพูดคุย
    if (answers[19] === 0) {
        scores.health += 5;
    }

    if (answers[19] === 1) {
        scores.life += 5;
    }

    if (answers[19] === 2) {
        scores.critical += 5;
    }

    if (answers[19] === 3) {
        scores.accident += 3;
        scores.income += 3;
    }


    return scores;
}


// ===============================
// เริ่มต้น
// ===============================

showQuestion();