//<!-- API -->

function quizCtrl() {
    return window.quizCmp.ctrl;
}

//<!-- Константы -->

let QUIZ_HEADER_BG_T = "linear-gradient(rgba(100,100,100,0.6), rgba(100,100,100,0.6)), url('%PATH%') center";
let QUIZ_HEADER_ID = "quiz-header";
let QUIZ_PHRASES_ID = "quiz-phrases";
let QUIZ_PHRASES_ITEM_T = "<div class='uk-card uk-card-default uk-card-body uk-margin-right uk-margin-bottom uk-card-hover'><h2>%PHRASE%</h2></div>";
let QUIZ_TITLE_ID = "quiz-title";

//<!-- Компонент -->

function QuizComponent() {
    this._construct = function() {
        this.ctrl = new KT.CLDController(new KT.QuizContext());
        // Отладка.
        this.ctrl.registerCallback((c) => {
            console.log(`ИГР QuizC._construct ctrl key/value: '${c.recentField}'/'${c.field(c.recentField)}'`);
        });
        this.setupEffects();
        this.setupEvents();
        this.setupShoulds();
    };

    this.setupEffects = function() {
        let oneliners = [ 
            "activeSound", (c) => { quizPlaySound(c.activeSound) },
            "bgImage", (c) => { quizSetBGImage(c.bgImage) },
            "phrases", (c) => { quizResetPhrases(c.phrases) },
            "title", (c) => { setUIText(QUIZ_TITLE_ID, c.title) },
        ];
        let halfCount = oneliners.length / 2;
        for (let i = 0; i < halfCount; ++i) {
            let field = oneliners[i * 2];
            let cb = oneliners[i * 2 + 1];
            this.ctrl.registerFieldCallback(field, cb);
        }
    };

    this.setupEvents = function() {
        window.addEventListener("load", (e) => {
            this.ctrl.set("didLaunch", true);
        });
    };

    this.setupShoulds = function() {
        [
            KT.quizShouldPlaySound,
            KT.quizShouldResetBGImage,
            KT.quizShouldResetCurrentId,
            KT.quizShouldResetPhrases,
            KT.quizShouldResetTitle,
        ].forEach((f) => {
            this.ctrl.registerFunction(f);
        });
    };
    
    this._construct();
}

//<!-- Эффекты -->

function quizPlaySound(path) {
    let music = new Audio(path);
    music.play();
}

function quizResetPhrases(items) {
    let ph = deId(QUIZ_PHRASES_ID);
    var html = "";
    for (let i in items) {
        let item = items[i];
        html += QUIZ_PHRASES_ITEM_T.replaceAll("%PHRASE%", item);
    }
    ph.innerHTML = html;
}

function quizSetBGImage(path) {
    let header = deId(QUIZ_HEADER_ID);
    if (header != null) {
        let bg = QUIZ_HEADER_BG_T.replaceAll("%PATH%", path);
        header.style.background = bg;
        header.style.backgroundSize = "cover";
    }
}

//<!-- Прочие функции -->

//<!-- Установка -->

window.quizCmp = new QuizComponent();
window.components.push(window.quizCmp);
