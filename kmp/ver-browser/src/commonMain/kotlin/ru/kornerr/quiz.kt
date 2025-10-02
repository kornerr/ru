package ru.kornerr
import kotlin.js.JsExport

//<!-- Константы -->

//<!-- Шуды -->

/* Задать текущий номер вопроса
 *
 * Условия:
 * 1. Запустили компоненту
 */
@JsExport
fun quizShouldResetCurrentId(c: QuizContext): QuizContext {
    if (c.recentField == "didLaunch") {
        c.currentId = 0
        c.recentField = "currentId"
        return c
    }

    c.recentField = "none"
    return c
}

/* Задать текущий заголовок
 *
 * Условия:
 * 1. Запустили компоненту
 */
@JsExport
fun quizShouldResetTitle(c: QuizContext): QuizContext {
    if (c.recentField == "didLaunch") {
        c.title = "她逃了"
        c.recentField = "title"
        return c
    }

    c.recentField = "none"
    return c
}

//<!-- Прочие функции -->
