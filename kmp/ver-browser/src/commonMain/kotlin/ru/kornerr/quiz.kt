package ru.kornerr
import kotlin.js.JsExport

//<!-- Константы -->

//<!-- Шуды -->

/* Запустить воспроизведение звука
 *
 * Условия:
 * 1. Нажали на кнопку громкоговорителя
 */
@JsExport
fun quizShouldPlaySound(c: QuizContext): QuizContext {
    if (c.recentField == "didClickPlaySound") {
        c.activeSound = "snd/quiz.01.ogg"
        c.recentField = "activeSound"
        return c
    }

    c.recentField = "none"
    return c
}

/* Задать фоновую картинку заголовка
 *
 * Условия:
 * 1. Запустили компоненту
 */
@JsExport
fun quizShouldResetBGImage(c: QuizContext): QuizContext {
    if (c.recentField == "didLaunch") {
        c.bgImage = "img/quiz.01.jpg"
        c.recentField = "bgImage"
        return c
    }

    c.recentField = "none"
    return c
}


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

/* Задать набор фраз для выбора пользователем
 *
 * Условия:
 * 1. Запустили компоненту
 */
@JsExport
fun quizShouldResetPhrases(c: QuizContext): QuizContext {
    if (c.recentField == "didLaunch") {
        c.phrases = arrayOf("потерял", "перед", "нашли", "сбежала", "Он", "Она", "на", "автомобилем", "Они", "такси")
        c.recentField = "phrases"
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
