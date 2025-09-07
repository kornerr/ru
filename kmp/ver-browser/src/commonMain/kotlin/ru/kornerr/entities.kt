package ru.kornerr
import kotlin.js.JsExport


@JsExport
data class AppContext(
    var didLaunch: Boolean = false,
    var request: NetRequest = NetRequest(),
    var response: NetResponse = NetResponse(),
    override var recentField: String = "",
): CLDContext {
    override fun <T> field(name: String): T {
        if (name == "didLaunch") {
            return didLaunch as T
        } else if (name == "request") {
            return request as T
        } else if (name == "response") {
            return response as T
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
        if (name == "didLaunch") {
            didLaunch = value as Boolean
        } else if (name == "request") {
            request = value as NetRequest
        } else if (name == "response") {
            response = value as NetResponse
        }
    }
}


@JsExport
data class NetRequest(
    var method: String = "",
    var url: String = "",
) {}


@JsExport
data class NetResponse(
    var contents: String = "",
    var url: String = "",
) {}
