package ru.kornerr
import kotlin.js.JsExport

//<!-- Константы -->

val APP_URL_EXCHANGE_RATES = "https://kornerr.ru/cbr.xml";

//<!-- Шуды -->

/* Сделать сетевой запрос
 *
 * Условия:
 * 1. Запустили компоненту
 */
@JsExport
fun appShouldLoad(c: AppContext): AppContext {
    if (c.recentField == "didLaunch") {
        c.request = NetRequest(
            "",
            "GET",
            APP_URL_EXCHANGE_RATES
        )
        c.recentField = "request"
        return c
    }

    c.recentField = "none"
    return c
}

//<!-- Прочие функции -->

  /*
function appParseCurrency(raw, currency) {
    let lines = raw.split(APP_CURRENCY_RAW_DELIMITER);
    for (let i in lines) {
        let ln = lines[i];
        if (ln.includes(currency)) {
            let parts = ln.split(/Value>(.*)<\/Value/);
            let value = parts[1].replaceAll(",", ".");
            return Number(value);
        }
    }

    return -1;
}
*/

