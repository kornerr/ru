//<!-- API -->

function quizCtrl() {
    return window.quizCmp.ctrl;
}

//<!-- Константы -->

let QUIZ_HEADER_BG_T = "linear-gradient(rgba(100,100,100,0.6), rgba(100,100,100,0.6)), url('%PATH%') center";
let QUIZ_HEADER_ID = "quiz-header";
let QUIZ_PHRASES_ID = "quiz-phrases";
let QUIZ_PHRASES_ITEM_ID_T = "quiz-phrases-%ID%";
let QUIZ_PHRASES_ITEM_T = `
    <div id='quiz-phrases-%ID%' class='uk-card uk-card-default uk-card-body uk-margin-small-right uk-margin-bottom uk-card-hover quiz-card-padding' onclick='quizCtrl().set("selectedPhraseId", %ID%)'>
        <h3 id='quiz-phrases-title-%ID%'>%PHRASE%</h3>
    </div>
`;
let QUIZ_PHRASES_ITEM_TITLE_ID_T = "quiz-phrases-title-%ID%";
let QUIZ_SELECTED_PHRASES_ID = "quiz-selected-phrases";
let QUIZ_SELECTED_PHRASES_ITEM_T = `
    <div id='quiz-selected-phrases-%ID%' class='uk-card uk-card-default uk-card-body uk-margin-small-right uk-margin-bottom uk-card-hover quiz-card-padding'>
        <h3>%PHRASE%</h3>
    </div>
`;
let QUIZ_SELECTED_PHRASES_TRANSPARENT_ITEM_T = `
    <div class='uk-card uk-card-body uk-margin-small-right uk-margin-bottom quiz-card-padding no-background'>
        <h3 class="transparent-color">%PHRASE%</h3>
    </div>
`;
let QUIZ_TITLE_ID = "quiz-title";
let QUIZ_VALIDATE_ID = "quiz-validate";

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
            "hasFailure", (c) => { reportFailure(KT.QUIZ_FAILURE_TITLE, KT.QUIZ_FAILURE_MESSAGE) },
            "isValidateAvailable", (c) => { setUIAvailability(QUIZ_VALIDATE_ID, c.isValidateAvailable) },
            "phrases", (c) => { quizResetPhrases(c.phrases) },
            "selectedPhraseId", (c) => { quizHidePhrase(c.selectedPhraseId) },
            "selectedPhrases", (c) => { quizResetSelectedPhrases(c.phrases, c.selectedPhrases) },
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
            KT.quizShouldResetExpectedPhrases,
            KT.quizShouldResetFailure,
            KT.quizShouldResetPhrases,
            KT.quizShouldResetSelectedPhrases,
            KT.quizShouldResetTitle,
            KT.quizShouldResetValidateAvailability,
            KT.quizShouldResetValidity,
        ].forEach((f) => {
            this.ctrl.registerFunction(f);
        });
    };
    
    this._construct();
}

//<!-- Эффекты -->

function quizHidePhrase(id) {
    let itemId = QUIZ_PHRASES_ITEM_ID_T.replaceAll("%ID%", id);
    let titleId = QUIZ_PHRASES_ITEM_TITLE_ID_T.replaceAll("%ID%", id);
    setUICardHoverPermission(itemId, false);
    setUIMuted(itemId, true);
    setUITransparent(titleId, true);
}

function quizPlaySound(path) {
    let music = new Audio(path);
    music.play();
}

function quizResetPhrases(items) {
    let ph = deId(QUIZ_PHRASES_ID);
    var html = "";
    for (let i in items) {
        let item = items[i];
        html += QUIZ_PHRASES_ITEM_T
            .replaceAll("%ID%", i)
            .replaceAll("%PHRASE%", item);
    }
    ph.innerHTML = html;
}

function quizResetSelectedPhrases(items, selectedIds) {
    let el = deId(QUIZ_SELECTED_PHRASES_ID);
    var html = "";
    for (let i in selectedIds) {
        let id = selectedIds[i];
        let item = items[id];
        html += QUIZ_SELECTED_PHRASES_ITEM_T
            .replaceAll("%ID%", id)
            .replaceAll("%PHRASE%", item);
    }

    // Разместить заглушку до выбора, чтобы размер не скакал после выбора
    if (html == "") {
        html += QUIZ_SELECTED_PHRASES_TRANSPARENT_ITEM_T
            .replaceAll("%PHRASE%", "1");
    }
    el.innerHTML = html;
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
