package ru.kornerr
import kotlin.js.JsExport

//<!-- Константы -->
  //  exp,
  //  ph

@JsExport val QUIZ_FAILURE_MESSAGE = "Давай попробуем ещё раз!"
@JsExport val QUIZ_FAILURE_TITLE = "Чуть-чуть мимо"

@JsExport val QUIZ_NEXT_TITLE1 = "Проверить"
@JsExport val QUIZ_NEXT_TITLE2 = "Далее"
@JsExport val QUIZ_SND_CORRECT = "quiz.correct.ogg"
@JsExport val QUIZ_SND_WRONG = "quiz.wrong.ogg"

//<!-- Шуды -->

/* Запустить воспроизведение звука
 *
 * Условия:
 * 1. Нажали на кнопку громкоговорителя
 * 2. Неверно выбрали фразы
 * 3. Верно выбрали фразы
 * 4. Сменили вопрос
 */
@JsExport
fun quizShouldPlaySound(c: QuizContext): QuizContext {
    if (c.recentField == "didClickPlaySound") {
        c.activeSound = c.items[c.currentId].snd
        c.recentField = "activeSound"
        return c
    }

    if (c.recentField == "hasFailure") {
        c.activeSound = QUIZ_SND_WRONG
        c.recentField = "activeSound"
        return c
    }

    if (
        c.recentField == "isValid" &&
        c.isValid &&
        !c.phrases.isEmpty()
    ) {
        c.activeSound = QUIZ_SND_CORRECT
        c.recentField = "activeSound"
        return c
    }

    if (c.recentField == "currentId") {
        c.activeSound = c.items[c.currentId].snd
        c.recentField = "activeSound"
        return c
    }


    c.recentField = "none"
    return c
}

/* Задать фоновую картинку заголовка
 *
 * Условия:
 * 1. Сменили вопрос
 */
@JsExport
fun quizShouldResetBGImage(c: QuizContext): QuizContext {
    if (c.recentField == "currentId") {
        c.bgImage = c.items[c.currentId].img
        c.recentField = "bgImage"
        return c
    }

    c.recentField = "none"
    return c
}


/* Задать текущий номер вопроса
 *
 * Условия:
 * 1. Задали список вопросов
 * 2. Нажали кнопку для перехода далее
 */
@JsExport
fun quizShouldResetCurrentId(c: QuizContext): QuizContext {
    if (c.recentField == "items") {
        c.currentId = 0
        c.recentField = "currentId"
        return c
    }

    if (
        c.recentField == "didClickNext" &&
        c.isValid &&
        c.currentId + 1 <= c.items.size
    ) {
        c.currentId += 1
        c.recentField = "currentId"
        return c
    }

    c.recentField = "none"
    return c
}

/* Задать ожидаемую последовательность фраз
 *
 * Условия:
 * 1. Сменили вопрос
 */
@JsExport
fun quizShouldResetExpectedPhrases(c: QuizContext): QuizContext {
    if (c.recentField == "currentId") {
        c.expectedPhrases = c.items[c.currentId].expected
        c.recentField = "expectedPhrases"
        return c
    }

    c.recentField = "none"
    return c
}

/* Задать факт ошибки
 *
 * Условия:
 * 1. Проверка фраз выявила ошибку
 */
@JsExport
fun quizShouldResetFailure(c: QuizContext): QuizContext {
    if (
        c.recentField == "isValid" &&
        !c.isValid &&
        !c.isNextAdvancing
    ) {
        c.hasFailure = true
        c.recentField = "hasFailure"
        return c
    }

    c.recentField = "none"
    return c
}

/* Задать набор вопросов
 *
 * Условия:
 * 1. Загрузили компоненту
 */
@JsExport
fun quizShouldResetItems(c: QuizContext): QuizContext {
    if (c.recentField == "didLaunch") {
        c.items = quizItems()
        c.recentField = "items"
        return c
    }

    c.recentField = "none"
    return c
}

/* Задать режим кнопки: проверка или далее
 *
 * Условия:
 * 1. Верно выбрали фразы
 * 2. Сменили вопрос
 */
@JsExport
fun quizShouldResetNextAdvancing(c: QuizContext): QuizContext {
    if (
        c.recentField == "isValid" &&
        c.isValid
    ) {
        c.isNextAdvancing = true
        c.recentField = "isNextAdvancing"
        return c
    }

    if (c.recentField == "currentId") {
        c.isNextAdvancing = false
        c.recentField = "isNextAdvancing"
        return c
    }

    c.recentField = "none"
    return c
}

/* Задать доступность кнопки проверки/далее
 *
 * Условия:
 * 1. Изменились выбранные фразы
 * 2. Находимся на первом вопросе-вводной
 */
@JsExport
fun quizShouldResetNextAvailability(c: QuizContext): QuizContext {
    if (c.recentField == "selectedPhrases") {
        c.isNextAvailable = !c.selectedPhrases.isEmpty()
        c.recentField = "isNextAvailable"
        return c
    }

    if (
        c.recentField == "currentId" &&
        c.currentId == 0
    ) {
        c.isNextAvailable = true
        c.recentField = "isNextAvailable"
        return c
    }

    c.recentField = "none"
    return c
}

/* Задать набор фраз для выбора пользователем
 *
 * Условия:
 * 1. Сменили вопрос
 */
@JsExport
fun quizShouldResetPhrases(c: QuizContext): QuizContext {
    if (c.recentField == "currentId") {
        c.phrases = c.items[c.currentId].phrases
        c.recentField = "phrases"
        return c
    }

    c.recentField = "none"
    return c
}

/* Задать выбранную пользователем последовательность фраз
 *
 * Условия:
 * 1. Выбрали фразу
 * 2. Загрузили компоненту
 * 3. Вернули фразу
 * 4. Нажали кнопку для перехода далее
 */
@JsExport
fun quizShouldResetSelectedPhrases(c: QuizContext): QuizContext {
    if (
        c.recentField == "selectedPhraseId" &&
        !c.selectedPhrases.contains(c.selectedPhraseId)
    ) {
        c.selectedPhrases += c.selectedPhraseId
        c.recentField = "selectedPhrases"
        return c
    }

    if (c.recentField == "didLaunch") {
        c.recentField = "selectedPhrases"
        return c
    }

    if (c.recentField == "deselectedPhraseId") {
        c.selectedPhrases = c.selectedPhrases.filter { it != c.deselectedPhraseId }.toTypedArray()
        c.recentField = "selectedPhrases"
        return c
    }

    if (
        c.recentField == "didClickNext" &&
        c.isValid
    ) {
        c.selectedPhrases = arrayOf()
        c.recentField = "selectedPhrases"
        return c
    }

    c.recentField = "none"
    return c
}

/* Задать видимость фразы в списке-источнике
 *
 * Условия:
 * 1. Выбрали фразу
 * 2. Вернули фразу
 */
@JsExport
fun quizShouldResetPhraseVisibility(c: QuizContext): QuizContext {
    if (c.recentField == "selectedPhraseId") {
        c.phraseVisibility = QuizPhraseVisibility(c.selectedPhraseId, false)
        c.recentField = "phraseVisibility"
        return c
    }

    if (c.recentField == "deselectedPhraseId") {
        c.phraseVisibility = QuizPhraseVisibility(c.deselectedPhraseId, true)
        c.recentField = "phraseVisibility"
        return c
    }

    c.recentField = "none"
    return c
}

/* Задать видимость кнопки динамика
 *
 * Условия:
 * 1. Изменился активный звук
 */
@JsExport
fun quizShouldResetSoundVisibility(c: QuizContext): QuizContext {
    if (c.recentField == "activeSound") {
        c.isSoundVisible = !c.activeSound.isEmpty()
        c.recentField = "isSoundVisible"
        return c
    }

    c.recentField = "none"
    return c
}

/* Задать текущий заголовок
 *
 * Условия:
 * 1. Сменили вопрос
 */
@JsExport
fun quizShouldResetTitle(c: QuizContext): QuizContext {
    if (c.recentField == "currentId") {
        c.title = c.items[c.currentId].sentence
        c.recentField = "title"
        return c
    }

    c.recentField = "none"
    return c
}


/* Задать корректность выбранных фраз
 *
 * Условия:
 * 1. Нажали кнопку для проверки выбранных фраз
 * 2. Нажали кнопку для перехода далее
 * 3. Находимся на первом вопросе-вводной
 */
@JsExport
fun quizShouldResetValidity(c: QuizContext): QuizContext {
    if (
        c.recentField == "didClickNext" &&
        !c.isValid &&
        !c.isNextAdvancing
    ) {
        c.isValid = quizArePhrasesEqual(c.selectedPhrases, c.expectedPhrases)
        c.recentField = "isValid"
        return c
    }

    if (
        c.recentField == "didClickNext" &&
        c.isValid &&
        c.isNextAdvancing
    ) {
        c.isValid = false
        c.recentField = "isValid"
        return c
    }

    if (
        c.recentField == "currentId" &&
        c.currentId == 0
    ) {
        c.isValid = true
        c.recentField = "isValid"
        return c
    }

    c.recentField = "none"
    return c
}

//<!-- Прочие функции -->

fun quizArePhrasesEqual(
    arr1: Array<Int>,
    arr2: Array<Int>
): Boolean {
    if (arr1.size != arr2.size) {
        return false
    }

    for (i in arr1.indices) {
        val val1 = arr1[i]
        val val2 = arr2[i]
        if (val1 != val2) {
            return false
        }
    }

    return true
}

fun quizItems(): Array<QuizItem> {
    return arrayOf(
        QuizItem(
            arrayOf(),
            "quiz.00.jpg",
            arrayOf(),
            "Начинаем разминку",
            "",
        ),

        QuizItem(
            arrayOf(5, 2),
            "quiz.01.jpg",
            arrayOf(
                "потерял",
                "оплатили",
                "сбежала",
                "Он",
                "билет",
                "Она",
                "в",
                "автомобиле",
                "Они",
                "такси"
            ),
            "她逃了",
            "quiz.01.ogg",
        ),

        QuizItem(
            arrayOf(9, 1, 6),
            "quiz.02.jpg",
            arrayOf(
                "покажет",
                "можешь",
                "Он",
                "его",
                "справится с ней",
                "поймёшь",
                "успеть",
                "Скоро",
                "почему",
                "Ты",
            ),
            "你能赶到",
            "quiz.02.ogg",
        ),

        QuizItem(
            arrayOf(4),
            "quiz.03.jpg",
            arrayOf(
              "Нет",
              "проблем",
              "ты",
              "проблемы",
              "Неважно",
              "создал",
              "Потому что",
              "есть причины",
              "ранее",
              "Почему",
            ),
            "没关系",
            "quiz.03.ogg",
        ),

        QuizItem(
            arrayOf(9, 0, 5, 4),
            "quiz.04.jpg",
            arrayOf(
              "за",
              "чёрным",
              "комнатой",
              "машиной",
              "кроликом",
              "белым",
              "создал",
              "в",
              "Хорошо",
              "Следуй",
            ),
            "跟随白兔",
            "quiz.04.ogg",
        ),

        QuizItem(
            arrayOf(),
            "quiz.05.jpg",
            arrayOf(),
            "Конец ознакомительного фрагмента",
            "",
        ),
    )
}
