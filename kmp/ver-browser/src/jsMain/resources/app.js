//<!-- API -->

function appCtrl() {
    return window.appCmp.ctrl;
}

//<!-- Константы -->

APP_CBR_DATE_ID = "cbr-dt";

//<!-- Компонент -->

function AppComponent() {
    this._construct = function() {
        this.ctrl = new KT.CLDController(new KT.AppContext());
        // Отладка.
        this.ctrl.registerCallback((c) => {
            console.log(`ИГР AppC._construct ctrl key/value: '${c.recentField}'/'${c.field(c.recentField)}'`);
        });
        this.setupEffects();
        this.setupEvents();
        this.setupShoulds();
    };

    this.setupEffects = function() {
        let oneliners = [ 
            "cbrDate", (c) => { appDisplayCBRDate(c.cbrDate); },
            "currencies", (c) => { appDisplayCurrencies(c.currencies); },
            "request", (c) => { appLoad(c.request); },
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
            KT.appShouldLoad,
            KT.appShouldResetCBRDate,
            KT.appShouldResetCurrencies,
        ].forEach((f) => {
            this.ctrl.registerFunction(f);
        });
    };
    
    this._construct();
}

//<!-- Эффекты -->

// Отобразить дату курсов валют
function appDisplayCBRDate(value) {
    let dt = deId(APP_CBR_DATE_ID);
    if (dt != null) {
        dt.innerHTML = value;
    }
}

// Отобразить валюты
function appDisplayCurrencies(items) {
    for (let i in items) {
        let item = items[i];
        let keyId = appCurrencyKeyId(item.code);
        let valId = appCurrencyValueId(item.code);
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
function appLoad(req) {
    loadURL(
        req,
        (res) => {
            var response = new KT.NetResponse(res.responseText, res.responseURL);
            appCtrl().set("response", response);
        },
        (res) => {
            var err = new KT.NetResponse(res.contents, res.url);
            appCtrl().set("responseError", err);
        }
    );
}

//<!-- Прочие функции -->

function appCurrencyKeyId(code) {
    return `${code}-key`;
}

function appCurrencyValueId(code) {
    return `${code}-value`;
}

//<!-- Установка -->

window.appCmp = new AppComponent();
window.components.push(window.appCmp);
