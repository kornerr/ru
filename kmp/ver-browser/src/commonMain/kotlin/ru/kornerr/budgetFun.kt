package ru.kornerr
import kotlin.js.JsExport
import kotlin.math.abs

//<!-- Константы -->

val BUDGET_INITIAL_BUDGET = 30000f
val BUDGET_RESULT_DATE_T = "<b>%DATE%</b>"
val BUDGET_RESULT_WEEKDAY_T = "Будни: %SPENT% / %BALANCE% %PERCENT%"

//<!-- Шуды -->

/* Сформировать результат
 *
 * Условия:
 * 1. Задали дату или траты или баланс
 */
@JsExport
fun budgetShouldResetResult(c: BudgetContext): BudgetContext {
    if (
        c.recentField == "inputMorningBalance" ||
        c.recentField == "inputSpent"
    ) {
        val mbalance = budgetNumber(c.inputMorningBalance)
        val spent = budgetNumber(c.inputSpent)
        c.result = budgetResult(c.reportedDate, mbalance, spent)
        c.recentField = "result"
        return c
    }

    c.recentField = "none"
    return c
}

//<!-- Прочие функции -->

// Привести строку к Float
fun budgetNumber(s: String): Float {
    // Заменяем запятую на точку
    val dotted = s.replace(",", ".")
    // Убираем пробелы
    val nospaces = dotted.replace(" ", "")
    val almost = nospaces.toFloatOrNull()
    return almost ?: 0f
}

// Ограничить двумя цифрами после запятой
fun budgetStringNumber(
    value: Float,
    digitsCount: Int
): String {
    val str = "$value"
    val parts = str.split(".")

    // Дробное число без чисел после запятой
    if (
        parts.size == 2 &&
        parts[1]!!.length > 0 &&
        digitsCount == 0
    ) {
        val integer = parts[0]!!
        return "$integer"
    }

    // Дробное число с количеством чисел после запятой не больше digitsCount
    if (
        parts.size == 2 &&
        parts[1]!!.length > digitsCount
    ) {
        val integer = parts[0]!!
        val fraction = parts[1]!!.substring(0, digitsCount)
        return "$integer.$fraction"
    }

    return str
}

fun budgetResult(
    reportedDate: String,
    morningBalance: Float,
    spent: Float
): String {
    var lines = arrayOf<String>()

    // Отчётная дата
    lines +=
        BUDGET_RESULT_DATE_T
            .replace("%DATE%", reportedDate)

    // Потрачено / баланс процент
    val balance = morningBalance - spent
    val balanceStr = budgetStringNumber(balance, 2)
    val percent = abs(balance * 100f / BUDGET_INITIAL_BUDGET)
    val percentStr = budgetStringNumber(percent, 0)
    lines += 
        BUDGET_RESULT_WEEKDAY_T
            .replace("%SPENT%", "$spent")
            .replace("%BALANCE%", balanceStr)
            .replace("%PERCENT%", "$percentStr%")
    return lines.joinToString("<br/>")
}
