package ru.kornerr
import kotlin.js.JsExport

//<!-- Константы -->

val BUDGET_RESULT_DATE_T = "<b>%DATE%</b>"

//<!-- Шуды -->

/* Сформировать результат
 *
 * Условия:
 * 1. Задали дату по умолчанию
 */
@JsExport
fun budgetShouldResetResult(c: BudgetContext): BudgetContext {
    if (c.recentField == "defaultDate") {
        c.result = budgetResult(c.defaultDate)
        c.recentField = "result"
        return c
    }

    c.recentField = "none"
    return c
}

//<!-- Прочие функции -->

fun budgetResult(
    defaultDate: String
): String {
    return BUDGET_RESULT_DATE_T.replace("%DATE%", defaultDate)
}
