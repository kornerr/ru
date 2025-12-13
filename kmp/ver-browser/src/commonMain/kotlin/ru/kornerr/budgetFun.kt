package ru.kornerr
import kotlin.js.JsExport

//<!-- Константы -->

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
        c.recentField == "defaultDate" ||
        c.recentField == "inputMorningBalance" ||
        c.recentField == "inputSpent"
    ) {
        val mbalance = budgetNumber(c.inputMorningBalance)
        val spent = budgetNumber(c.inputSpent)
        c.result = budgetResult(c.defaultDate, mbalance, spent)
        c.recentField = "result"
        return c
    }

    c.recentField = "none"
    return c
}

//<!-- Прочие функции -->

fun budgetNumber(s: String): Float {
    val dotted = s.replace(",", ".")
    val almost = dotted.toFloatOrNull()
    return almost ?: 0f
}

fun budgetResult(
    defaultDate: String,
    morningBalance: Float,
    spent: Float
): String {
    var lines = arrayOf<String>()
    lines +=
        BUDGET_RESULT_DATE_T
            .replace("%DATE%", defaultDate)
    lines += 
        BUDGET_RESULT_WEEKDAY_T
            .replace("%SPENT%", "${spent}")
            .replace("%BALANCE%", "${morningBalance - spent}")
    return lines.joinToString("<br/>")
}
