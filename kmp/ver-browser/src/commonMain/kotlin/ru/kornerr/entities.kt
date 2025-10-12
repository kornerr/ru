package ru.kornerr
import kotlin.js.JsExport


@JsExport
data class AppContext(
    var cbrDate: String = "",
    var currencies: Array<Currency> = arrayOf(),
    var didLaunch: Boolean = false,
    var request: NetRequest = NetRequest(),
    var response: NetResponse = NetResponse(),
    var responseError: NetResponse = NetResponse(),
    override var recentField: String = "",
): CLDContext {
    override fun <T> field(name: String): T {
        if (name == "cbrDate") {
            return cbrDate as T
        } else if (name == "currencies") {
            return currencies as T
        } else if (name == "didLaunch") {
            return didLaunch as T
        } else if (name == "request") {
            return request as T
        } else if (name == "response") {
            return response as T
        } else if (name == "responseError") {
            return responseError as T
        }
        return "unknown-field-name" as T
    }

    override fun selfCopy(): CLDContext {
        return this.copy()
    }

    override fun setField(
        name: String,
        value: Any?
    ) {
        if (name == "cbrDate") {
            cbrDate = value as String
        } else if (name == "currencies") {
            currencies = value as Array<Currency>
        } else if (name == "didLaunch") {
            didLaunch = value as Boolean
        } else if (name == "request") {
            request = value as NetRequest
        } else if (name == "response") {
            response = value as NetResponse
        } else if (name == "responseError") {
            responseError = value as NetResponse
        }
    }
}


@JsExport
data class Currency(
    var code: String = "",
    var flag: String = "",
    var value: String = "",
) {}


@JsExport
data class NetRequest(
    var body: String = "",
    var method: String = "",
    var url: String = "",
) {}


@JsExport
data class NetResponse(
    var contents: String = "",
    var url: String = "",
) {}


@JsExport
data class QuizContext(
    var activeSound: String = "",
    var bgImage: String = "",
    var currentId: Int = 0,
    var deselectedPhraseId: Int = 0,
    var didClickNext: Boolean = false,
    var didClickPlaySound: Boolean = false,
    var didClickValidate: Boolean = false,
    var didLaunch: Boolean = false,
    var expectedPhrases: Array<Int> = arrayOf(),
    var hasFailure: Boolean = false,
    var isNextAdvancing: Boolean = false,
    var isNextAvailable: Boolean = false,
    var isValid: Boolean = false,
    var items: Array<QuizItem> = arrayOf(),
    var phraseVisibility: QuizPhraseVisibility = QuizPhraseVisibility(),
    var phrases: Array<String> = arrayOf(),
    var selectedPhraseId: Int = 0,
    var selectedPhrases: Array<Int> = arrayOf(),
    var title: String = "",
    override var recentField: String = "",
): CLDContext {
    override fun <T> field(name: String): T {
        if (name == "activeSound") {
            return activeSound as T
        } else if (name == "bgImage") {
            return bgImage as T
        } else if (name == "currentId") {
            return currentId as T
        } else if (name == "deselectedPhraseId") {
            return deselectedPhraseId as T
        } else if (name == "didClickNext") {
            return didClickNext as T
        } else if (name == "didClickPlaySound") {
            return didClickPlaySound as T
        } else if (name == "didClickValidate") {
            return didClickValidate as T
        } else if (name == "didLaunch") {
            return didLaunch as T
        } else if (name == "expectedPhrases") {
            return expectedPhrases as T
        } else if (name == "hasFailure") {
            return hasFailure as T
        } else if (name == "isNextAdvancing") {
            return isNextAdvancing as T
        } else if (name == "isNextAvailable") {
            return isNextAvailable as T
        } else if (name == "isValid") {
            return isValid as T
        } else if (name == "items") {
            return items as T
        } else if (name == "phraseVisibility") {
            return phraseVisibility as T
        } else if (name == "phrases") {
            return phrases as T
        } else if (name == "selectedPhraseId") {
            return selectedPhraseId as T
        } else if (name == "selectedPhrases") {
            return selectedPhrases as T
        } else if (name == "title") {
            return title as T
        }
        return "unknown-field-name" as T
    }

    override fun selfCopy(): CLDContext {
        return this.copy()
    }

    override fun setField(
        name: String,
        value: Any?
    ) {
        if (name == "activeSound") {
            activeSound = value as String
        } else if (name == "bgImage") {
            bgImage = value as String
        } else if (name == "currentId") {
            currentId = value as Int
        } else if (name == "deselectedPhraseId") {
            deselectedPhraseId = value as Int
        } else if (name == "didClickNext") {
            didClickNext = value as Boolean
        } else if (name == "didClickPlaySound") {
            didClickPlaySound = value as Boolean
        } else if (name == "didClickValidate") {
            didClickValidate = value as Boolean
        } else if (name == "didLaunch") {
            didLaunch = value as Boolean
        } else if (name == "expectedPhrases") {
            expectedPhrases = value as Array<Int>
        } else if (name == "hasFailure") {
            hasFailure = value as Boolean
        } else if (name == "isNextAdvancing") {
            isNextAdvancing = value as Boolean
        } else if (name == "isNextAvailable") {
            isNextAvailable = value as Boolean
        } else if (name == "isValid") {
            isValid = value as Boolean
        } else if (name == "items") {
            items = value as Array<QuizItem>
        } else if (name == "phraseVisibility") {
            phraseVisibility = value as QuizPhraseVisibility
        } else if (name == "phrases") {
            phrases = value as Array<String>
        } else if (name == "selectedPhraseId") {
            selectedPhraseId = value as Int
        } else if (name == "selectedPhrases") {
            selectedPhrases = value as Array<Int>
        } else if (name == "title") {
            title = value as String
        }
    }
}


@JsExport
data class QuizItem(
    var expected: Array<Int> = arrayOf(),
    var phrases: Array<String> = arrayOf(),
    var sentence: String = "",
) {}


@JsExport
data class QuizPhraseVisibility(
    var id: Int = 0,
    var isVisible: Boolean = false,
) {}
