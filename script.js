// База данных предметов
const subjectsData = {
    math_lit: {
        id: "math_lit",
        title: "Математическая грамотность",
        count: "1200+ заданий в базе",
        questions: []
    },
    russian: {
        id: "russian",
        title: "Русский язык",
        count: "1150 заданий в базе",
        questions: []
    },
    biology: {
        id: "biology",
        title: "Биология",
        count: "1300 заданий в базе",
        questions: []
    },
    chemistry: {
        id: "chemistry",
        title: "Химия",
        count: "1100 заданий в базе",
        questions: []
    }
};

// Заполняем базу вопросами для каждого предмета
Object.keys(subjectsData).forEach(key => {
    let subj = subjectsData[key];
    let targetCount = key === 'math_lit' ? 1200 : key === 'russian' ? 1150 : key === 'biology' ? 1300 : 1100;
    
    for (let i = 1; i <= targetCount; i++) {
        subj.questions.push({
            id: `${key}_${i}`,
            text: `Задание №${i} по предмету "${subj.title}". Выберите правильный ответ из вариантов ниже:`,
            options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г"],
            correct: 0
        });
    }
});

// Сохраняем актуальную базу в глобальный объект window для других страниц (тренировки/пробника)
window.subjectsData = subjectsData;

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("subjects-grid");
    if (grid) {
        grid.innerHTML = "";
        Object.keys(subjectsData).forEach((key, index) => {
            const subj = subjectsData[key];
            const card = document.createElement("div");
            card.className = "subject-card";
            card.style.cursor = "pointer";
            card.style.background = "#1e293b";
            card.style.padding = "16px";
            card.style.borderRadius = "12px";
            card.style.marginBottom = "12px";
            card.style.border = "1px solid #334155";
            card.innerHTML = `
                <div class="subject-num" style="font-size: 12px; color: #94a3b8; font-weight: bold;">0${index + 1} / ПРЕДМЕТ</div>
                <h3 style="color: #f8fafc; margin: 6px 0; font-size: 18px;">${subj.title}</h3>
                <p style="color: #38bdf8; font-size: 14px; margin: 0;">${subj.count}</p>
            `;
            card.addEventListener("click", () => {
                localStorage.setItem("active_subject", key);
                window.location.href = "training.html";
            });
            grid.appendChild(card);
        });
    }

    // Отображение сохраненной статистики без удаления
    const answeredEl = document.getElementById("total-answered");
    const correctEl = document.getElementById("total-correct");
    if (answeredEl && correctEl) {
        answeredEl.textContent = localStorage.getItem("total_answered") || "0";
        correctEl.textContent = localStorage.getItem("total_correct") || "0";
    }
});
