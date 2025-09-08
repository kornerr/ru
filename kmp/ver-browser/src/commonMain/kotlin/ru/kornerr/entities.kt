package ru.kornerr
import kotlin.js.JsExport


@JsExport
data class AppContext(
    var currencies: Array<Currency> = arrayOf(),
    var didLaunch: Boolean = false,
    var request: NetRequest = NetRequest(),
    var response: NetResponse = NetResponse(),
    var responseError: NetResponse = NetResponse(),
    override var recentField: String = "",
): CLDContext {
    override fun <T> field(name: String): T {
        if (name == "currencies") {
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
        if (name == "currencies") {
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
