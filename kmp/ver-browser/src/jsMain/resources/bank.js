//<!-- API -->

function bankCtrl() {
    return window.bankCmp.ctrl;
}

//<!-- Константы -->

BANK_CBR_DATE_ID = "cbr-dt";

//<!-- Компонент -->

function BankComponent() {
    this._construct = function() {
        this.ctrl = new KT.CLDController(new KT.BankContext());
        // Отладка.
        this.ctrl.registerCallback((c) => {
            console.log(`ИГР BankC._construct ctrl key/value: '${c.recentField}'/'${c.field(c.recentField)}'`);
        });
        this.setupEffects();
        this.setupEvents();
        this.setupShoulds();
    };

    this.setupEffects = function() {
        let oneliners = [ 
            "cbrDate", (c) => { bankDisplayCBRDate(c.cbrDate); },
            "currencies", (c) => { bankDisplayCurrencies(c.currencies); },
            "request", (c) => { bankLoad(c.request); },
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
            KT.bankShouldLoad,
            KT.bankShouldResetCBRDate,
            KT.bankShouldResetCurrencies,
        ].forEach((f) => {
            this.ctrl.registerFunction(f);
        });
    };
    
    this._construct();
}

//<!-- Эффекты -->

// Отобразить дату курсов валют
function bankDisplayCBRDate(value) {
    let dt = deId(BANK_CBR_DATE_ID);
    if (dt != null) {
        dt.innerHTML = value;
    }
}

// Отобразить валюты
function bankDisplayCurrencies(items) {
    for (let i in items) {
        let item = items[i];
        let keyId = bankCurrencyKeyId(item.code);
        let valId = bankCurrencyValueId(item.code);
        let key = deId(keyId);
        if (key != null) {
            key.innerHTML = `${item.flag} ${item.code}`;
        }
        let val = deId(valId);
        if (val != null) {
            val.innerHTML = item.value;
        }
    }
}

// Сетевой запрос
function bankLoad(req) {
    loadURL(
        req,
        (res) => {
            var response = new KT.NetResponse(res.responseText, res.responseURL);
            bankCtrl().set("response", response);
        },
        (res) => {
            var err = new KT.NetResponse(res.contents, res.url);
            bankCtrl().set("responseError", err);
        }
    );
}

//<!-- Прочие функции -->

function bankCurrencyKeyId(code) {
    return `${code}-key`;
}

function bankCurrencyValueId(code) {
    return `${code}-value`;
}

//<!-- Установка -->

window.bankCmp = new BankComponent();
window.components.push(window.bankCmp);
