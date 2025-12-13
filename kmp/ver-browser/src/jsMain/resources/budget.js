//<!-- API -->

function budgetCtrl() {
    return window.budgetCmp.ctrl;
}

//<!-- Константы -->

BUDGET_DATE_ID = "budgetDate";
BUDGET_RESULT_ID = "budgetResult";

//<!-- Компонент -->

function BudgetComponent() {
    this._construct = function() {
        this.ctrl = new KT.CLDController(new KT.BudgetContext());
        // Debug
        this.ctrl.registerCallback((c) => {
            console.log(`ИГР BudgetC._construct ctrl k/v: '${c.recentField}'/'${c.field(c.recentField)}'`);
        });
        this.setupEffects();
        this.setupEvents();
        this.setupShoulds();
    };

    this.setupEffects = function() {
        let oneliners = [ 
            "defaultDate", (c) => { setUIInputValue(BUDGET_DATE_ID, c.defaultDate); },
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
            budgetShouldResetDefaultDate,
            KT.budgetShouldResetResult,
        ].forEach((f) => {
            this.ctrl.registerFunction(f);
        });
    };
    
    this._construct();
}

//<!-- Шуды на стороне JS (исключительно для зависимостей на стороне JS) -->

function budgetShouldResetDefaultDate(c) {
    if (c.recentField == "didLaunch") {
        c.defaultDate = budgetDefaultDate();
        c.recentField = "defaultDate";
        return c;
    }

    c.recentField = "none";
    return c;
}

//<!-- Эффекты -->

function budgetDisplayResult(value) {
    let el = deId(BUDGET_RESULT_ID);
    if (el != null) {
        el.innerHTML = value;
    }
}

//<!-- Прочие функции -->

function budgetDefaultDate() {
    let now = luxon.DateTime.now();
    let yesterday = now.minus({ days: 1 });
    return `${yesterday.day}.${yesterday.month}`;
}

//<!-- Установка -->

window.budgetCmp = new BudgetComponent();
window.components.push(window.budgetCmp);
