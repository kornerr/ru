package ru.kornerr
import kotlin.js.JsExport

//<!-- Константы -->

val APP_CBR_DATE_DELIMITER_LEFT = "Date=\""
val APP_CBR_DATE_DELIMITER_RIGHT = "\" name="
val APP_CURRENCY_CODES = arrayOf(
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
val APP_CURRENCY_FLAGS = arrayOf(
  "🇦🇪",
  "🇧🇷",
  "🇨🇳",
  "🇪🇬",
  "🇪🇹",
  "🇮🇩",
  "🇮🇳",
  "🇮🇷",
  "🇿🇦",
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

/* Разобрать дату курса валют
 *
 * Условия:
 * 1. Получили успешный ответ по валютам
 */
@JsExport
fun appShouldResetCBRDate(c: AppContext): AppContext {
    if (c.recentField == "response") {
        c.cbrDate = appParseCBRDate(c.response.contents)
        c.recentField = "cbrDate"
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

fun appParseCBRDate(raw: String): String {
    val parts = raw.split(APP_CBR_DATE_DELIMITER_LEFT)
    val subparts = parts[1].split(APP_CBR_DATE_DELIMITER_RIGHT)
    return subparts[0]
}

fun appParseCurrencies(raw: String): Array<Currency> {
    var items = arrayOf<Currency>()
    val lines = raw.split(APP_CURRENCY_DELIMITER);
    for (i in APP_CURRENCY_CODES.indices) {
        val code = APP_CURRENCY_CODES[i]
        val flag = APP_CURRENCY_FLAGS[i]
        val value = appParseCurrencyValue(lines, code)
        items += Currency(code, flag, value)
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
