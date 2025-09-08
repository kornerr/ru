package ru.kornerr
import kotlin.js.JsExport

//<!-- Константы -->

val APP_CURRENCY_ITEMS = arrayOf(
  "AED",
  "BRL",
  "CNY",
  "EGP",
  "ETB",
  "IDR",
  "INR",
  "IRR",
  "ZAR",
)
val APP_CURRENCY_DELIMITER = "</Valute>"
val APP_CURRENCY_URL = "https://kornerr.ru/cbr.xml"

//<!-- Шуды -->

/* Сделать сетевой запрос
 *
 * Условия:
 * 1. Запустили компоненту
 */
@JsExport
fun appShouldLoad(c: AppContext): AppContext {
    if (c.recentField == "didLaunch") {
        c.request = NetRequest("", "GET", APP_CURRENCY_URL)
        c.recentField = "request"
        return c
    }

    c.recentField = "none"
    return c
}

/* Разобрать валюты
 *
 * Условия:
 * 1. Получили успешный ответ по валютам
 */
@JsExport
fun appShouldResetCurrencies(c: AppContext): AppContext {
    if (c.recentField == "response") {
        c.currencies = appParseCurrencies(c.response.contents)
        c.recentField = "currencies"
        return c
    }

    c.recentField = "none"
    return c
}

//<!-- Прочие функции -->

fun appParseCurrencies(raw: String): Array<Currency> {
    var items = arrayOf<Currency>()
    val lines = raw.split(APP_CURRENCY_DELIMITER);
    for (code in APP_CURRENCY_ITEMS) {
        val value = appParseCurrencyValue(lines, code)
        items += Currency(code, value)
    }
    return items
}

fun appParseCurrencyValue(
    lines: List<String>,
    code: String
): String {
    for (ln in lines) {
        if (code in ln) {
            val parts = ln.split("VunitRate>")
            val subparts = parts[1].split("</")
            return subparts[0]
        }
    }
    return "N/A"
}
