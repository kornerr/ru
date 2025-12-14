//<!-- API -->

function budgetCtrl() {
    return window.budgetCmp.ctrl;
}

//<!-- Константы -->

BUDGET_RESULT_ID = "budgetResult";

//<!-- Компонент -->

function BudgetComponent() {
    this._construct = function() {
        this.ctrl = new KT.CLDController(new KT.BudgetContext());
        // Отладка
        this.ctrl.registerCallback((c) => {
            console.log(`ИГР BudgetC._construct ctrl k/v: '${c.recentField}'/'${c.field(c.recentField)}'`);
        });


        // Значения по умолчанию.
        this.ctrl.set("reportedDate", budgetReportedDate());
        this.ctrl.set("reportedDateWeekday", budgetReportedDateWeekday());

        this.setupEffects();
        this.setupEvents();
        this.setupShoulds();
    };

    this.setupEffects = function() {
        let oneliners = [ 
            "result", (c) => { budgetDisplayResult(c.result); },
        ];
        KT.registerOneliners(this.ctrl, oneliners);
    };

    this.setupEvents = function() {
        window.addEventListener("load", (e) => {
            this.ctrl.set("didLaunch", true);
        });
    };

    this.setupShoulds = function() {
        [
            KT.budgetShouldResetResult,
        ].forEach((f) => {
            this.ctrl.registerFunction(f);
        });
    };
    
    this._construct();
}

//<!-- Эффекты -->

function budgetDisplayResult(value) {
    let el = deId(BUDGET_RESULT_ID);
    if (el != null) {
        el.innerHTML = value;
    }
}

//<!-- Прочие функции -->

// Дата отчётного дня
function budgetReportedDate() {
    let now = luxon.DateTime.now();
    let yesterday = now.minus({ days: 1 });
    return `${yesterday.day}.${yesterday.month}`;
}

// Дент недели отчётного дня
// 1 = Пн, ..., 7 == Вс
function budgetReportedDateWeekday() {
    let now = luxon.DateTime.now();
    let yesterday = now.minus({ days: 1 });
    return yesterday.weekday;
}

//<!-- Установка -->

window.budgetCmp = new BudgetComponent();
window.components.push(window.budgetCmp);
