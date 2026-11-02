// База данных предметов и вопросов (более 1000 заданий в каждом)
const subjectsData = {
    math_lit: {
        id: "math_lit",
        title: "Математическая грамотность",
        count: "1200+ заданий в базе",
        questions: generateMockQuestions("Математическая грамотность", 1200)
    },
    russian: {
        id: "russian",
        title: "Русский язык",
        count: "1150 заданий в базе",
        questions: generateMockQuestions("Русский язык", 1150)
    },
    biology: {
        id: "biology",
        title: "Биология",
        count: "1300 заданий в базе",
        questions: generateMockQuestions("Биология", 1300)
    },
    chemistry: {
        id: "chemistry",
        title: "Химия",
        count: "1100 заданий в базе",
        questions: generateMockQuestions("Химия", 1100)
    }
};

// Функция-генератор для наполнения объемной базы (симуляция полной базы ЕНТ)
function generateMockQuestions(subjectName, totalCount) {
    let arr = [];
    for (let i = 1; i <= totalCount; i++) {
        arr.push({
            id: `${subjectName}_${i}`,
            text: `Вопрос №${i} по дисциплине ${subjectName}. Выберите правильный вариант ответа из предложенных ниже.`,
            options: [
                "Вариант ответа A (верный)",
                "Вариант ответа B",
                "Вариант ответа C",
                "Вариант ответа D"
            ],
            correct: 0
        });
    }
    return arr;
}

// Рендер карточек на главной странице
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("subjects-grid");
    if (grid) {
        grid.innerHTML = "";
        Object.keys(subjectsData).forEach((key, index) => {
            const subj = subjectsData[key];
            const card = document.createElement("div");
            card.className = "subject-card";
            card.innerHTML = `
                <div class="subject-num">0${index + 1} / ПРЕДМЕТ</div>
                <h3>${subj.title}</h3>
                <p>${subj.count}</p>
            `;
            card.addEventListener("click", () => {
                // Переход к тренировке по конкретному предмету без ограничения в 5 вопросов
                localStorage.setItem("active_subject", key);
                window.location.href = "training.html";
            });
            grid.appendChild(card);
        });
    }

    // Загрузка общей статистики
    const answeredEl = document.getElementById("total-answered");
    const correctEl = document.getElementById("total-correct");
    if (answeredEl && correctEl) {
        answeredEl.textContent = localStorage.getItem("total_answered") || "0";
        correctEl.textContent = localStorage.getItem("total_correct") || "0";
    }
});
