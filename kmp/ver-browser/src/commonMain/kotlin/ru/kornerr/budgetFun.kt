package ru.kornerr
import kotlin.js.JsExport

//<!-- Константы -->

//<!-- Шуды -->

/* Сформировать результат
 *
 * Условия:
 * 1. Запустили компоненту
 */
@JsExport
fun budgetShouldResetResult(c: BudgetContext): BudgetContext {
    if (c.recentField == "didLaunch") {
        c.result = "TODO-result"
        c.recentField = "result"
        return c
    }

    c.recentField = "none"
    return c
}

//<!-- Прочие функции -->

