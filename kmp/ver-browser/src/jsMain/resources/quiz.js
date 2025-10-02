//<!-- API -->

function quizCtrl() {
    return window.quizCmp.ctrl;
}

//<!-- Константы -->

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
            KT.quizShouldResetBGImage,
            KT.quizShouldResetCurrentId,
            KT.quizShouldResetTitle,
        ].forEach((f) => {
            this.ctrl.registerFunction(f);
        });
    };
    
    this._construct();
}

//<!-- Эффекты -->

//<!-- Прочие функции -->

//<!-- Установка -->

window.quizCmp = new QuizComponent();
window.components.push(window.quizCmp);
