package ru.kornerr
import kotlin.js.JsExport

//<!-- Константы -->

val BANK_CBR_DATE_DELIMITER_LEFT = "Date=\""
val BANK_CBR_DATE_DELIMITER_RIGHT = "\" name="
val BANK_CURRENCY_CODES = arrayOf(
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
val BANK_CURRENCY_FLAGS = arrayOf(
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
val BANK_CURRENCY_DELIMITER = "</Valute>"
val BANK_CURRENCY_URL = "https://kornerr.ru/cbr.xml"

//<!-- Шуды -->

/* Сделать сетевой запрос
 *
 * Условия:
 * 1. Запустили компоненту
 */
@JsExport
fun bankShouldLoad(c: BankContext): BankContext {
    if (c.recentField == "didLaunch") {
        c.request = NetRequest("", "GET", BANK_CURRENCY_URL)
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
fun bankShouldResetCBRDate(c: BankContext): BankContext {
    if (c.recentField == "response") {
        c.cbrDate = bankParseCBRDate(c.response.contents)
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
fun bankShouldResetCurrencies(c: BankContext): BankContext {
    if (c.recentField == "response") {
        c.currencies = bankParseCurrencies(c.response.contents)
        c.recentField = "currencies"
        return c
    }

    c.recentField = "none"
    return c
}

//<!-- Прочие функции -->

fun bankParseCBRDate(raw: String): String {
    val parts = raw.split(BANK_CBR_DATE_DELIMITER_LEFT)
    val subparts = parts[1].split(BANK_CBR_DATE_DELIMITER_RIGHT)
    return subparts[0]
}

fun bankParseCurrencies(raw: String): Array<Currency> {
    var items = arrayOf<Currency>()
    val lines = raw.split(BANK_CURRENCY_DELIMITER);
    for (i in BANK_CURRENCY_CODES.indices) {
        val code = BANK_CURRENCY_CODES[i]
        val flag = BANK_CURRENCY_FLAGS[i]
        val value = bankParseCurrencyValue(lines, code)
        items += Currency(code, flag, value)
    }
    return items
}

fun bankParseCurrencyValue(
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
