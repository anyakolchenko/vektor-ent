/*
  🚀 ВЕКТОР — ЕНТ 2026 (Официальный формат НЦТ МНВО РК)
  Включает:
  - Реальные тестовые задания с фотографий пробного ЕНТ (ТестЦентр)
  - Тесты с одним и НЕСКОЛЬКИМИ правильными ответами (контекстные и контекстно-множественные)
  - Встроенный интерактивный Калькулятор (с возможностью показа/скрытия)
  - Встроенную Таблицу Менделеева и Таблицу растворимости (модальные окна)
  - Динамический подсчет всех вопросов
*/

const questionsBank = {
    biology: [
        {
            id: "bio_real_001",
            topic: "Молекулярная биология / Трансляция",
            question: "На рисунке процесса трансляции цифровыми обозначениями 1, 2, 3 указаны:",
            imageSvg: `<svg viewBox="0 0 500 260" class="img-fluid rounded border bg-white p-2 mb-3">
                <rect width="500" height="260" fill="#f8f9fa"/>
                <!-- Рибосома -->
                <path d="M 150 70 Q 250 20 350 70 Q 380 160 350 200 Q 250 220 150 200 Q 120 120 150 70 Z" fill="#f8d7da" stroke="#dc3545" stroke-width="2"/>
                <text x="250" y="45" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc3545" text-anchor="middle">1 (Рибосома)</text>
                
                <!-- ИРНК и кодоны -->
                <line x1="40" y1="90" x2="460" y2="90" stroke="#0d6efd" stroke-width="4"/>
                <text x="50" y="80" font-family="sans-serif" font-size="12" fill="#0d6efd" font-weight="bold">5'</text>
                <text x="440" y="80" font-family="sans-serif" font-size="12" fill="#0d6efd" font-weight="bold">3'</text>
                <g fill="#0d6efd" font-size="11" font-family="monospace">
                    <text x="80" y="110">АУГ</text>
                    <text x="140" y="110">АЦЦ</text>
                    <text x="200" y="110">ЦЦУ</text>
                    <text x="260" y="110">УГУ</text>
                    <text x="320" y="110">УЦУ</text>
                </g>
                <text x="400" y="110" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0d6efd">2 (Кодоны иРНК)</text>
                
                <!-- тРНК -->
                <path d="M 210 170 L 210 130 L 230 130 L 230 170 Z" fill="#ffc107" stroke="#b58105"/>
                <text x="220" y="150" font-family="sans-serif" font-size="10" text-anchor="middle" font-weight="bold">тРНК</text>
                <text x="220" y="195" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b58105" text-anchor="middle">3 (Антикодон / тРНК)</text>
            </svg>`,
            options: [
                "кодоны р-РНК, рибосома, антикодон",
                "рибосома, кодоны иРНК, тРНК с антикодоном",
                "пептидная связь, ДНК, кодон тРНК",
                "аминокислоты, ядрышко, комплекс Гольджи"
            ],
            correctAnswer: [1],
            isMultiple: false,
            explanation: `
                <div class="analysis-section">
                    <p class="mb-2"><b>Правильный ответ:</b> <span class="badge bg-success fs-6">B) рибосома, кодоны иРНК, тРНК с антикодоном</span></p>
                    <hr>
                    <p><b>Разбор иллюстрации ЕНТ:</b></p>
                    <ul>
                        <li><b>1</b> — Малая и большая субъединицы <b>рибосомы</b>, на которой происходит синтез белковой цепи.</li>
                        <li><b>2</b> — Последовательность триплетов (<b>кодонов</b>) информационная (матричной) РНК (иРНК).</li>
                        <li><b>3</b> — Транспортная РНК (<b>тРНК</b>), несущая специфическую аминокислоту и имеющая <b>антикодон</b>, комплементарный кодону иРНК.</li>
                    </ul>
                </div>`
        },
        {
            id: "bio_real_002",
            topic: "Молекулярная генетика и Биотехнология",
            question: "Молекула, полученная в результате объединения фрагментов чужеродных ДНК:",
            options: [
                "транскрипционная ДНК",
                "полимеразная ДНК",
                "репликационная ДНК",
                "рекомбинантная ДНК"
            ],
            correctAnswer: [3],
            isMultiple: false,
            explanation: `
                <div class="analysis-section">
                    <p class="mb-2"><b>Правильный ответ:</b> <span class="badge bg-success fs-6">D) рекомбинантная ДНК</span></p>
                    <hr>
                    <p><b>Определение НЦТ:</b></p>
                    <p><b>Рекомбинантная ДНК (рДНК)</b> — это молекула ДНК, созданная искусственным путем в лаборатории с помощью объединения генетического материала из разных источников (организмов/векторов), что является основой генной инженерии.</p>
                </div>`
        },
        {
            id: "bio_real_003",
            topic: "Генетика / Эпистаз",
            question: "У кур наследование цвета оперения зависит от присутствия в генотипе гена-супрессора (I/J), который подавляет цветность генов второй пары (C и c). В отсутствии гена I/J окраска проявляется. При скрещивании двух кур белой окраски с генотипом CcIi, в потомстве гибридов наблюдается расщепление по фенотипу:",
            options: [
                "12/16 цветные, 4/16 белые",
                "13/16 цветные, 3/16 белые",
                "13/16 белые, 3/16 цветные",
                "12/16 белые, 4/16 цветные"
            ],
            correctAnswer: [2],
            isMultiple: false,
            explanation: `
                <div class="analysis-section">
                    <p class="mb-2"><b>Правильный ответ:</b> <span class="badge bg-success fs-6">C) 13/16 белые, 3/16 цветные</span> (в вариантах тестов также выставляется D как 13:3)</p>
                    <hr>
                    <p><b>Подробный генетический разбор (Доминантный эпистаз):</b></p>
                    <p>Скрещивание дигетерозигот: <code>CcIi × CcIi</code>.</p>
                    <ul>
                        <li>Ген <b>C</b> отвечает за цвет (окрашено).</li>
                        <li>Ген <b>I (или J)</b> — доминантный эпистатический ген (подавитель цветности).</li>
                        <li>Любая птица, имеющая хотя бы один ген <b>I</b> (генотипы <code>C_I_</code> и <code>ccI_</code>), будет **БЕЛОЙ** (9/16 + 3/16 = 12/16).</li>
                        <li>Генотип <code>ccii</code> также белая (нет гена окраски) = 1/16.</li>
                        <li><b>Итого белых:</b> 12/16 + 1/16 = <b>13/16</b>.</li>
                        <li><b>Цветные (C_ii):</b> <b>3/16</b>.</li>
                    </ul>
                </div>`
        },
        {
            id: "bio_real_004",
            topic: "Гистология / Анатомия мышц",
            question: "Мышечное волокно образовано сократительными элементами – саркомерами, состоящими из филаментов:",
            options: [
                "толстых актина и тонких - тропонина",
                "толстых - саркомеров и тонких - миозина",
                "толстых - актина и тонких - миозина",
                "толстых - миозина и тонких - актина"
            ],
            correctAnswer: [3],
            isMultiple: false,
            explanation: `
                <div class="analysis-section">
                    <p class="mb-2"><b>Правильный ответ:</b> <span class="badge bg-success fs-6">D) толстых - миозина и тонких - актина</span></p>
                    <hr>
                    <p><b>Строение миофибрилл и саркомера:</b></p>
                    <div class="table-responsive">
                        <table class="table table-sm table-bordered text-center align-middle">
                            <thead class="table-light">
                                <tr>
                                    <th>Белковый филамент</th>
                                    <th>Толщина</th>
                                    <th>Функция в саркомере</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-danger">
                                    <td><b>Миозин</b></td>
                                    <td><b>Толстые филаменты</b> (ок. 15 нм)</td>
                                    <td>Имеет головки, связывающиеся с актином при сокращении</td>
                                </tr>
                                <tr class="table-info">
                                    <td><b>Актин</b></td>
                                    <td><b>Тонкие филаменты</b> (ок. 7 нм)</td>
                                    <td>Обеспечивает скольжение вдоль миозиновых нитей</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`
        },
        {
            id: "bio_real_005",
            topic: "Остеология / Анатомия человека (Множественный выбор)",
            question: "Полуподвижное(-ые) соединение(-я) костей между [Выберите все верные варианты]:",
            options: [
                "черепом и позвоночником",
                "скуловой и клиновидной",
                "лобной и скуловой",
                "ребрами и ключицей",
                "ребрами и грудиной",
                "нижней и верхней челюстью"
            ],
            correctAnswer: [4],
            isMultiple: true,
            explanation: `
                <div class="analysis-section">
                    <p class="mb-2"><b>Правильные ответы:</b> <span class="badge bg-success fs-6">E) ребрами и грудиной</span> (также полуподвижны позвонки через хрящевые диски)</p>
                    <hr>
                    <p><b>Классификация соединений костей:</b></p>
                    <ul>
                        <li><b>Неподвижные (непрерывные):</b> швы черепа (лобная, скуловая, клиновидная кости).</li>
                        <li><b>Полуподвижные (полусуставы / хрящевые):</b> ребра с грудиной, межпозвоночные диски.</li>
                        <li><b>Подвижные (суставы):</b> челюстной сустав (нижняя челюсть и височная кость).</li>
                    </ul>
                </div>`
        },
        {
            id: "bio_real_006",
            topic: "Нейроанатомия / ЦНС (Множественный выбор)",
            question: "Промежуточный мозг состоит из [Выберите все верные варианты]:",
            options: [
                "зрительных бугров (таламус)",
                "подбугорной области (гипоталамус)",
                "серого вещества",
                "бледного тела",
                "мозжечка",
                "мозолистого тела"
            ],
            correctAnswer: [0, 1],
            isMultiple: true,
            explanation: `
                <div class="analysis-section">
                    <p class="mb-2"><b>Правильные ответы:</b> <span class="badge bg-success fs-6">A) зрительных бугров</span> и <span class="badge bg-success fs-6">B) подбугорной области</span></p>
                    <hr>
                    <p><b>Отделы промежуточного мозга (НЦТ):</b></p>
                    <p>Промежуточный мозг включает <b>Таламус</b> (зрительные бугры — подкорковый центр чувствительности), <b>Гипоталамус</b> (подбугорная область — центр вегетативной регуляции, гомеостаза и эндокринной системы) и Эпиталамус.</p>
                </div>`
        }
    ],
    chemistry: [
        {
            id: "chem_real_001",
            topic: "Олеум и Расчеты по химическим уравнениям (Множественный выбор)",
            question: "Массовые доли (%) серной кислоты и ангидрида в 200 г олеума, на нейтрализацию которого израсходовали 164 г гидроксида натрия, равны:",
            options: [
                "98",
                "7",
                "9",
                "2",
                "91",
                "93"
            ],
            correctAnswer: [0, 3],
            isMultiple: true,
            explanation: `
                <div class="analysis-section">
                    <p class="mb-2"><b>Правильные ответы:</b> <span class="badge bg-success fs-6">A) 98%</span> и <span class="badge bg-success fs-6">D) 2%</span> (или 98% H₂SO₄ и 2% SO₃)</p>
                    <hr>
                    <p><b>Пошаговое решение задачи из пробника ЕНТ:</b></p>
                    <ol>
                        <li><b>Олеум:</b> раствор SO₃ в безводной H₂SO₄. Общая масса m(олеума) = 200 г.</li>
                        <li>При нейтрализации щелочью NaOH:
                            <br><code>H₂SO₄ + 2NaOH ➔ Na₂SO₄ + 2H₂O</code>
                            <br><code>SO₃ + 2NaOH ➔ Na₂SO₄ + H₂O</code>
                            <br>В обоих случаях 1 моль компонента реагирует с 2 моль NaOH.
                        </li>
                        <li><b>Количество вещества NaOH:</b> n(NaOH) = 164 г / 40 г/моль = 4,1 моль.</li>
                        <li>Обозначим n(H₂SO₄) = x моль, n(SO₃) = y моль.
                            <br>Система уравнений:
                            <br>1) <code>2x + 2y = 4.1</code> ➔ <code>x + y = 2.05</code>
                            <br>2) <code>98x + 80y = 200</code>
                        </li>
                        <li>Из 1): x = 2.05 - y.
                            <br>Подставляем: 98(2.05 - y) + 80y = 200 ➔ 200.9 - 18y = 200 ➔ 18y = 0.9 ➔ <b>y = 0.05 моль SO₃</b>.
                            <br>Тогда <b>x = 2.00 моль H₂SO₄</b>.
                        </li>
                        <li><b>Массы компонентов:</b>
                            <br>m(SO₃) = 0.05 моль × 80 г/моль = 4 г. <code>w(SO₃) = (4/200)*100% = 2%</code>.
                            <br>m(H₂SO₄) = 2 моль × 98 г/моль = 196 г. <code>w(H₂SO₄) = (196/200)*100% = 98%</code>.
                        </li>
                    </ol>
                </div>`
        },
        {
            id: "chem_real_002",
            topic: "Окислительно-восстановительные реакции (ОВР)",
            question: "Укажите сильный окислитель среди приведенных соединений:",
            options: [
                "KMnO₄",
                "NaClO₂",
                "MnSO₄",
                "CrCl₂"
            ],
            correctAnswer: [0],
            isMultiple: false,
            explanation: `
                <div class="analysis-section">
                    <p class="mb-2"><b>Правильный ответ:</b> <span class="badge bg-success fs-6">A) KMnO₄</span> (Перманганат калия)</p>
                    <hr>
                    <p><b>Разбор ОВР (Степени окисления):</b></p>
                    <ul>
                        <li>В <b>KMnO₄</b> марганец находится в своей высшей степени окисления <b>Mn⁺⁷</b>. Он проявляет исключительно сильные окислительные свойства, принимая электроны.</li>
                        <li>В MnSO₄ марганец имеет степень окисления Mn⁺² (восстановитель или слабый окислитель).</li>
                        <li>CrCl₂ (хром Cr⁺²) — сильный восстановитель.</li>
                    </ul>
                </div>`
        },
        {
            id: "chem_real_003",
            topic: "Высокомолекулярные соединения / Каучуки",
            question: "Вулканизацию каучука проводят нагреванием в присутствии:",
            options: [
                "S (серы)",
                "P (фосфора)",
                "C (углерода)",
                "Si (кремния)"
            ],
            correctAnswer: [0],
            isMultiple: false,
            explanation: `
                <div class="analysis-section">
                    <p class="mb-2"><b>Правильный ответ:</b> <span class="badge bg-success fs-6">A) S (сера)</span></p>
                    <hr>
                    <p><b>Процесс вулканизации:</b></p>
                    <p>Вулканизация — это взаимодействие сырого каучука с <b>серой (S)</b> при нагревании. При этом макромолекулы каучука связываются между собой дисульфидными мостиками (<code>-S-S-</code>), превращая каучук в прочную и эластичную <b>резину</b>.</p>
                </div>`
        },
        {
            id: "chem_real_004",
            topic: "Электролитическая диссоциация и Осадки",
            question: "Какое из веществ при растворении в воде образует сильный электролит?",
            options: [
                "H₂S",
                "H₂SO₄",
                "CH₃COOH",
                "NH₄OH"
            ],
            correctAnswer: [1],
            isMultiple: false,
            explanation: `
                <div class="analysis-section">
                    <p class="mb-2"><b>Правильный ответ:</b> <span class="badge bg-success fs-6">B) H₂SO₄</span></p>
                    <hr>
                    <p>Серная кислота полностью диссоциирует в разбавленном водном растворе на ионы водорода и сульфат-ионы, являясь сильным минеральным электролитом.</p>
                </div>`
        }
    ],
    history_kz: [
        {
            id: "hist_real_001",
            topic: "Казахстан в XIX веке / Восстания",
            question: "В каких годах проходило национально-освободительное движение под руководством Кенесары Касымова?",
            options: ["1783–1797 гг.", "1836–1838 гг.", "1837–1847 гг.", "1916 г."],
            correctAnswer: [2],
            isMultiple: false,
            explanation: `
                <div class="analysis-section">
                    <p class="mb-2"><b>Правильный ответ:</b> <span class="badge bg-success fs-6">C) 1837–1847 гг.</span></p>
                    <hr>
                    <p>Восстание Кенесары Касымова — самое крупное освободительное движение XIX века, охватившее все три казахских жуза.</p>
                </div>`
        },
        {
            id: "hist_real_002",
            topic: "Древняя история / Саки",
            question: "Персидские источники называли саков, носящих остроконечные шапки:",
            options: ["саки-хаомаварга", "саки-тиграхауда", "саки-парадрайя", "саки-аримаспы"],
            correctAnswer: [1],
            isMultiple: false,
            explanation: `
                <div class="analysis-section">
                    <p class="mb-2"><b>Правильный ответ:</b> <span class="badge bg-success fs-6">B) саки-тиграхауда</span></p>
                    <hr>
                    <p>«Тигра» — острый, «хауда» — шапка. Расселялись преимущественно в Жетысу и Тянь-Шане.</p>
                </div>`
        }
    ],
    math_lit: [
        {
            id: "ml_real_001",
            topic: "Логика и текстовые задачи",
            question: "В классе 30 учеников. 18 из них посещают секцию футбола, 16 — секцию баскетбола, а 6 учеников не посещают ни одну из них. Сколько учеников посещают обе секции?",
            options: ["8", "10", "12", "14"],
            correctAnswer: [1],
            isMultiple: false,
            explanation: `
                <div class="analysis-section">
                    <p class="mb-2"><b>Правильный ответ:</b> <span class="badge bg-success fs-6">B) 10</span></p>
                    <hr>
                    <p><b>Расчет по кругам Эйлера:</b><br> Всего ходят на секции: 30 - 6 = 24. Сумма футболистов и баскетболистов: 18 + 16 = 34. Наложение (обе секции): 34 - 24 = 10.</p>
                </div>`
        }
    ],
    reading_lit: [
        {
            id: "rl_real_001",
            topic: "Анализ текста",
            question: "«Наука без морали опасна, а мораль без науки бессильна. Лишь их союз дает прогресс». Какова основная мысль текста?",
            options: [
                "Наука важнее морали",
                "Мораль не требует знаний",
                "Гармоничное сочетание науки и морали — основа развития",
                "Прогресс возможен без участия науки"
            ],
            correctAnswer: [2],
            isMultiple: false,
            explanation: `
                <div class="analysis-section">
                    <p class="mb-2"><b>Правильный ответ:</b> <span class="badge bg-success fs-6">C) Гармоничное сочетание науки и морали — основа развития</span></p>
                </div>`
        }
    ]
};

// State variables
let currentSubject = 'biology';
let currentQuestionIndex = 0;
let userAnswers = {}; // Format: { question_key: [selected_indices] }

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    setupSubjectButtons();
    loadQuestion(currentSubject, currentQuestionIndex);
    updateTotalQuestionsCount();
}

function updateTotalQuestionsCount() {
    let total = 0;
    for (let sub in questionsBank) {
        total += questionsBank[sub].length;
    }
    const countEl = document.getElementById('total-q-count');
    if (countEl) countEl.innerText = total;
}

function setupSubjectButtons() {
    const buttons = document.querySelectorAll('.subject-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSubject = btn.dataset.subject;
            currentQuestionIndex = 0;
            loadQuestion(currentSubject, currentQuestionIndex);
        });
    });
}

function loadQuestion(subject, index) {
    const list = questionsBank[subject];
    const container = document.getElementById('quiz-container');
    
    if (!list || list.length === 0) {
        container.innerHTML = '<div class="card p-4 text-center">Вопросы по данному предмету обновляются.</div>';
        return;
    }

    const q = list[index];
    const key = `${subject}_${index}`;
    const userSelected = userAnswers[key] || [];
    const isAnswered = userAnswers[key] !== undefined;

    let optionsHtml = '';
    const inputType = q.isMultiple ? 'checkbox' : 'radio';

    q.options.forEach((opt, idx) => {
        let btnClass = 'option-btn d-flex align-items-center gap-3 mb-2';
        let isChecked = userSelected.includes(idx);

        if (isAnswered) {
            if (q.correctAnswer.includes(idx)) {
                btnClass += ' correct';
            } else if (isChecked) {
                btnClass += ' incorrect';
            }
        }

        const letter = String.fromCharCode(65 + idx);
        optionsHtml += `
            <label class="${btnClass}">
                <input type="${inputType}" name="option_choice" class="form-check-input flex-shrink-0" 
                    value="${idx}" ${isChecked ? 'checked' : ''} ${isAnswered ? 'disabled' : ''} 
                    onchange="handleOptionSelect(this, ${q.isMultiple}, ${idx})">
                <span><strong class="text-primary me-2">${letter})</strong> ${opt}</span>
            </label>
        `;
    });

    let submitMultipleBtn = '';
    if (q.isMultiple && !isAnswered) {
        submitMultipleBtn = `<button class="btn btn-success mt-2 mb-3 px-4 fw-bold" onclick="confirmMultipleAnswer()">Подтвердить ответ</button>`;
    }

    let explanationHtml = '';
    if (isAnswered) {
        explanationHtml = `
            <div class="explanation-box mt-3 p-3 rounded">
                <h5 class="text-primary mb-3">🔍 Подробный разбор НЦТ:</h5>
                ${q.explanation}
            </div>
        `;
    }

    let imageBlock = q.imageSvg ? q.imageSvg : '';

    container.innerHTML = `
        <div class="card p-4 shadow-sm border-0">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="badge bg-primary fs-6">${q.topic}</span>
                <span class="text-muted fw-bold">Вопрос ${index + 1} из ${list.length}</span>
            </div>
            ${q.isMultiple ? '<div class="alert alert-warning py-1 px-3 fs-7 mb-3">📌 Тестовое задание с одним или несколькими правильными ответами</div>' : ''}
            <h4 class="mb-3 text-dark" style="font-weight: 600;">${q.question}</h4>
            ${imageBlock}
            <div class="options-grid">
                ${optionsHtml}
            </div>
            ${submitMultipleBtn}
            ${explanationHtml}
            <div class="d-flex justify-content-between mt-4">
                <button class="btn btn-outline-secondary" onclick="prevQuestion()" ${index === 0 ? 'disabled' : ''}>← Назад</button>
                <button class="btn btn-primary" onclick="nextQuestion()" ${index === list.length - 1 ? 'disabled' : ''}>Далее →</button>
            </div>
        </div>
    `;
}

function handleOptionSelect(inputEl, isMultiple, optIdx) {
    const key = `${currentSubject}_${currentQuestionIndex}`;
    if (!isMultiple) {
        userAnswers[key] = [optIdx];
        loadQuestion(currentSubject, currentQuestionIndex);
    } else {
        if (!userAnswers[key]) userAnswers[key] = [];
        if (inputEl.checked) {
            if (!userAnswers[key].includes(optIdx)) userAnswers[key].push(optIdx);
        } else {
            userAnswers[key] = userAnswers[key].filter(i => i !== optIdx);
        }
    }
}

function confirmMultipleAnswer() {
    const key = `${currentSubject}_${currentQuestionIndex}`;
    if (!userAnswers[key] || userAnswers[key].length === 0) {
        alert("Выберите хотя бы один вариант ответа!");
        return;
    }
    loadQuestion(currentSubject, currentQuestionIndex);
}

function nextQuestion() {
    if (currentQuestionIndex < questionsBank[currentSubject].length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentSubject, currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentSubject, currentQuestionIndex);
    }
}

// Interactive Calculator logic
function calcAppend(val) {
    const display = document.getElementById('calc-display');
    if (display.value === '0' || display.value === 'Error') display.value = val;
    else display.value += val;
}
function calcClear() {
    document.getElementById('calc-display').value = '';
}
function calcCalculate() {
    const display = document.getElementById('calc-display');
    try {
        display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch(e) {
        display.value = 'Error';
    }
}
