//<!-- API -->

function appCtrl() {
    return window.appCmp.ctrl;
}

//<!-- Константы -->

/*
let APP_CURRENCY_RAW_DELIMITER = "</Valute>";
let APP_RATE_EUR_ID = "rate-eur";
let APP_RATE_USD_ID = "rate-usd";
let APP_URL_EXCHANGE_RATES = "https://kornerr.ru/cbr.xml";
*/

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
        ].forEach((f) => {
            this.ctrl.registerFunction(f);
        });
    };
    
    this._construct();
}

//<!-- Эффекты -->

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
/*
function appDisplayCurrencies(values) {
    let usd = deId(APP_RATE_USD_ID);
    if (usd != null) {
        let vusd = values[0];
        usd.innerHTML = `$${vusd.toFixed(2)}`;
    }

    let eur = deId(APP_RATE_EUR_ID);
    if (eur != null) {
        let veur = values[1];
        eur.innerHTML = `€${veur.toFixed(2)}`;
    }
}
*/

//<!-- Установка -->

window.appCmp = new AppComponent();
window.components.push(window.appCmp);
