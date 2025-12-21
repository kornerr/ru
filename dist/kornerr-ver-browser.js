(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kornerr:ver-browser'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kornerr:ver-browser'.");
    }
    globalThis['kornerr:ver-browser'] = factory(typeof globalThis['kornerr:ver-browser'] === 'undefined' ? {} : globalThis['kornerr:ver-browser'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.t;
  var initMetadataForInterface = kotlin_kotlin.$_$.r;
  var Unit_instance = kotlin_kotlin.$_$.e;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.b;
  var initMetadataForClass = kotlin_kotlin.$_$.q;
  var split = kotlin_kotlin.$_$.y;
  var contains = kotlin_kotlin.$_$.v;
  var joinToString = kotlin_kotlin.$_$.h;
  var replace = kotlin_kotlin.$_$.x;
  var println = kotlin_kotlin.$_$.i;
  var toDoubleOrNull = kotlin_kotlin.$_$.a1;
  var ensureNotNull = kotlin_kotlin.$_$.c1;
  var substring = kotlin_kotlin.$_$.z;
  var charCodeAt = kotlin_kotlin.$_$.j;
  var toString = kotlin_kotlin.$_$.d;
  var isDigit = kotlin_kotlin.$_$.w;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c;
  var VOID = kotlin_kotlin.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.b1;
  var isArray = kotlin_kotlin.$_$.s;
  var toString_0 = kotlin_kotlin.$_$.u;
  var getStringHashCode = kotlin_kotlin.$_$.o;
  var hashCode = kotlin_kotlin.$_$.p;
  var getBooleanHashCode = kotlin_kotlin.$_$.n;
  var equals = kotlin_kotlin.$_$.m;
  var defineProp = kotlin_kotlin.$_$.l;
  var contains_0 = kotlin_kotlin.$_$.f;
  var copyToArray = kotlin_kotlin.$_$.g;
  var charSequenceLength = kotlin_kotlin.$_$.k;
  //endregion
  //region block: pre-declaration
  function fieldAny(name) {
    return this.field(name);
  }
  initMetadataForInterface(CLDContext, 'CLDContext');
  initMetadataForClass(CLDController, 'CLDController');
  initMetadataForClass(BankContext, 'BankContext', BankContext, VOID, [CLDContext]);
  initMetadataForClass(BudgetContext, 'BudgetContext', BudgetContext, VOID, [CLDContext]);
  initMetadataForClass(Currency, 'Currency', Currency);
  initMetadataForClass(NetRequest, 'NetRequest', NetRequest);
  initMetadataForClass(NetResponse, 'NetResponse', NetResponse);
  initMetadataForClass(QuizContext, 'QuizContext', QuizContext, VOID, [CLDContext]);
  initMetadataForClass(QuizItem, 'QuizItem', QuizItem);
  initMetadataForClass(QuizPhraseVisibility, 'QuizPhraseVisibility', QuizPhraseVisibility);
  //endregion
  function CLDContext() {
  }
  function CLDController$registerFieldCallback$lambda($fieldName, $cb) {
    return function (c) {
      var tmp;
      if (c.recentField === $fieldName) {
        tmp = $cb(c);
      }
      return Unit_instance;
    };
  }
  function CLDController(context) {
    this.context = context;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.r3_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.s3_1 = ArrayList_init_$Create$();
    this.isProcessingQueue = false;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.t3_1 = ArrayList_init_$Create$();
  }
  protoOf(CLDController).u3 = function (_set____db54di) {
    this.context = _set____db54di;
  };
  protoOf(CLDController).v3 = function () {
    return this.context;
  };
  protoOf(CLDController).w3 = function (_set____db54di) {
    this.r3_1 = _set____db54di;
  };
  protoOf(CLDController).x3 = function () {
    return this.r3_1;
  };
  protoOf(CLDController).y3 = function (_set____db54di) {
    this.s3_1 = _set____db54di;
  };
  protoOf(CLDController).z3 = function () {
    return this.s3_1;
  };
  protoOf(CLDController).a4 = function (_set____db54di) {
    this.isProcessingQueue = _set____db54di;
  };
  protoOf(CLDController).b4 = function () {
    return this.isProcessingQueue;
  };
  protoOf(CLDController).c4 = function (_set____db54di) {
    this.t3_1 = _set____db54di;
  };
  protoOf(CLDController).d4 = function () {
    return this.t3_1;
  };
  protoOf(CLDController).executeFunctions = function () {
    var c = this.t3_1.k1(0);
    this.context.p3(c.recentField);
    this.context.setField(c.recentField, c.fieldAny(c.recentField));
    var _iterator__ex2g4s = this.s3_1.e();
    while (_iterator__ex2g4s.f()) {
      var f = _iterator__ex2g4s.g();
      var ctx = f(this.context.selfCopy());
      if (!(ctx.recentField === 'none')) {
        this.t3_1.d1(ctx);
      }
    }
    this.reportContext();
  };
  protoOf(CLDController).processQueue = function () {
    if (this.isProcessingQueue) {
      return Unit_instance;
    }
    this.isProcessingQueue = true;
    while (this.t3_1.h() > 0) {
      this.executeFunctions();
    }
    this.isProcessingQueue = false;
  };
  protoOf(CLDController).registerCallback = function (cb) {
    this.r3_1.d1(cb);
  };
  protoOf(CLDController).registerFieldCallback = function (fieldName, cb) {
    var tmp = this.r3_1;
    tmp.d1(CLDController$registerFieldCallback$lambda(fieldName, cb));
  };
  protoOf(CLDController).registerFunction = function (f) {
    this.s3_1.d1(f);
  };
  protoOf(CLDController).reportContext = function () {
    var _iterator__ex2g4s = this.r3_1.e();
    while (_iterator__ex2g4s.f()) {
      var cb = _iterator__ex2g4s.g();
      cb(this.context);
    }
  };
  protoOf(CLDController).set = function (fieldName, value) {
    var c = this.context.selfCopy();
    c.setField(fieldName, value);
    c.p3(fieldName);
    this.t3_1.d1(c);
    this.processQueue();
  };
  function get_BANK_CBR_DATE_DELIMITER_LEFT() {
    _init_properties_bankFun_kt__15q51t();
    return BANK_CBR_DATE_DELIMITER_LEFT;
  }
  var BANK_CBR_DATE_DELIMITER_LEFT;
  function get_BANK_CBR_DATE_DELIMITER_RIGHT() {
    _init_properties_bankFun_kt__15q51t();
    return BANK_CBR_DATE_DELIMITER_RIGHT;
  }
  var BANK_CBR_DATE_DELIMITER_RIGHT;
  function get_BANK_CURRENCY_CODES() {
    _init_properties_bankFun_kt__15q51t();
    return BANK_CURRENCY_CODES;
  }
  var BANK_CURRENCY_CODES;
  function get_BANK_CURRENCY_FLAGS() {
    _init_properties_bankFun_kt__15q51t();
    return BANK_CURRENCY_FLAGS;
  }
  var BANK_CURRENCY_FLAGS;
  function get_BANK_CURRENCY_DELIMITER() {
    _init_properties_bankFun_kt__15q51t();
    return BANK_CURRENCY_DELIMITER;
  }
  var BANK_CURRENCY_DELIMITER;
  function get_BANK_CURRENCY_URL() {
    _init_properties_bankFun_kt__15q51t();
    return BANK_CURRENCY_URL;
  }
  var BANK_CURRENCY_URL;
  function bankShouldLoad(c) {
    _init_properties_bankFun_kt__15q51t();
    if (c.e4_1 === 'didLaunch') {
      c.request = new NetRequest('', 'GET', get_BANK_CURRENCY_URL());
      c.e4_1 = 'request';
      return c;
    }
    c.e4_1 = 'none';
    return c;
  }
  function bankShouldResetCBRDate(c) {
    _init_properties_bankFun_kt__15q51t();
    if (c.e4_1 === 'response') {
      c.cbrDate = bankParseCBRDate(c.response.contents);
      c.e4_1 = 'cbrDate';
      return c;
    }
    c.e4_1 = 'none';
    return c;
  }
  function bankShouldResetCurrencies(c) {
    _init_properties_bankFun_kt__15q51t();
    if (c.e4_1 === 'response') {
      c.currencies = bankParseCurrencies(c.response.contents);
      c.e4_1 = 'currencies';
      return c;
    }
    c.e4_1 = 'none';
    return c;
  }
  function bankShouldResetLoading(c) {
    _init_properties_bankFun_kt__15q51t();
    if (c.e4_1 === 'response') {
      c.isLoading = false;
      c.e4_1 = 'isLoading';
      return c;
    }
    c.e4_1 = 'none';
    return c;
  }
  function bankParseCBRDate(raw) {
    _init_properties_bankFun_kt__15q51t();
    var parts = split(raw, [get_BANK_CBR_DATE_DELIMITER_LEFT()]);
    var subparts = split(parts.i(1), [get_BANK_CBR_DATE_DELIMITER_RIGHT()]);
    return subparts.i(0);
  }
  function bankParseCurrencies(raw) {
    _init_properties_bankFun_kt__15q51t();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var items = [];
    var lines = split(raw, [get_BANK_CURRENCY_DELIMITER()]);
    var inductionVariable = 0;
    var last = get_BANK_CURRENCY_CODES().length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var code = get_BANK_CURRENCY_CODES()[i];
        var flag = get_BANK_CURRENCY_FLAGS()[i];
        var value = bankParseCurrencyValue(lines, code);
        var tmp0 = items;
        // Inline function 'kotlin.collections.plus' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$6 = [new Currency(code, flag, value)];
        items = tmp0.concat(tmp$ret$6);
      }
       while (inductionVariable <= last);
    return items;
  }
  function bankParseCurrencyValue(lines, code) {
    _init_properties_bankFun_kt__15q51t();
    var _iterator__ex2g4s = lines.e();
    while (_iterator__ex2g4s.f()) {
      var ln = _iterator__ex2g4s.g();
      if (contains(ln, code)) {
        var parts = split(ln, ['VunitRate>']);
        var subparts = split(parts.i(1), ['<\/']);
        return subparts.i(0);
      }
    }
    return 'N/A';
  }
  var properties_initialized_bankFun_kt_hisfl9;
  function _init_properties_bankFun_kt__15q51t() {
    if (!properties_initialized_bankFun_kt_hisfl9) {
      properties_initialized_bankFun_kt_hisfl9 = true;
      BANK_CBR_DATE_DELIMITER_LEFT = 'Date="';
      BANK_CBR_DATE_DELIMITER_RIGHT = '" name=';
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      BANK_CURRENCY_CODES = ['AED', 'BRL', 'CNY', 'EGP', 'ETB', 'IDR', 'INR', 'IRR', 'ZAR'];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      BANK_CURRENCY_FLAGS = ['\uD83C\uDDE6\uD83C\uDDEA', '\uD83C\uDDE7\uD83C\uDDF7', '\uD83C\uDDE8\uD83C\uDDF3', '\uD83C\uDDEA\uD83C\uDDEC', '\uD83C\uDDEA\uD83C\uDDF9', '\uD83C\uDDEE\uD83C\uDDE9', '\uD83C\uDDEE\uD83C\uDDF3', '\uD83C\uDDEE\uD83C\uDDF7', '\uD83C\uDDFF\uD83C\uDDE6'];
      BANK_CURRENCY_DELIMITER = '<\/Valute>';
      BANK_CURRENCY_URL = 'https://kornerr.ru/cbr/cur.xml';
    }
  }
  var BUDGET_INITIAL_BUDGET;
  var BUDGET_RESULT_DATE_T;
  var BUDGET_RESULT_OVERRUN_T;
  var BUDGET_RESULT_WEEKDAY_T;
  var BUDGET_RESULT_WEEKEND_T;
  var BUDGET_WEEKDAY_MON;
  var BUDGET_WEEKDAY_TUE;
  var BUDGET_WEEKDAY_WED;
  var BUDGET_WEEKDAY_THU;
  var BUDGET_WEEKDAY_FRI;
  var BUDGET_WEEKDAY_SAT;
  var BUDGET_WEEKDAY_SUN;
  function budgetShouldResetResult(c) {
    if (c.f4_1 === 'didLaunch' || c.f4_1 === 'inputMorningBalance' || c.f4_1 === 'inputSpent') {
      var mbalance = budgetNumber(budgetStringOnlyNumerical(c.inputMorningBalance));
      var spent = budgetNumber(budgetStringOnlyNumerical(c.inputSpent));
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var lines = [];
      var tmp0 = lines;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$6 = [budgetResultDate(c.reportedDate)];
      lines = tmp0.concat(tmp$ret$6);
      var tmp0_0 = lines;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$11 = [budgetResultSpent(mbalance, c.reportedWeekday, spent)];
      lines = tmp0_0.concat(tmp$ret$11);
      var tmp0_1 = lines;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$16 = [budgetResultOverrun(mbalance, c.reportedWeekday, spent)];
      lines = tmp0_1.concat(tmp$ret$16);
      c.result = joinToString(lines, '<br />');
      c.f4_1 = 'result';
      return c;
    }
    c.f4_1 = 'none';
    return c;
  }
  function budgetNumber(s) {
    var dotted = replace(s, ',', '.');
    println("\u0418\u0413\u0420 budgetN-01 dotted: '" + dotted + "'");
    var nospaces = replace(dotted, ' ', '');
    println("\u0418\u0413\u0420 budgetN-02 nospaces: '" + nospaces + "'");
    // Inline function 'kotlin.text.toFloatOrNull' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var almost = toDoubleOrNull(nospaces);
    return almost == null ? 0.0 : almost;
  }
  function budgetStringNumber(value, digitsCount) {
    var str = '' + value;
    var parts = split(str, ['.']);
    if (parts.h() === 2 && ensureNotNull(parts.i(1)).length > 0 && digitsCount === 0) {
      var integer = ensureNotNull(parts.i(0));
      return integer;
    }
    if (parts.h() === 2 && ensureNotNull(parts.i(1)).length > digitsCount) {
      var integer_0 = ensureNotNull(parts.i(0));
      var fraction = substring(ensureNotNull(parts.i(1)), 0, digitsCount);
      return integer_0 + '.' + fraction;
    }
    return str;
  }
  function budgetStringOnlyNumerical(str) {
    var nums = '';
    var inductionVariable = 0;
    var last = str.length;
    while (inductionVariable < last) {
      var char = charCodeAt(str, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (isDigit(char) || char === _Char___init__impl__6a9atx(44) || char === _Char___init__impl__6a9atx(46)) {
        nums = nums + toString(char);
      }
    }
    return nums;
  }
  function budgetResultDate(reportedDate) {
    return replace(BUDGET_RESULT_DATE_T, '%DATE%', reportedDate);
  }
  function budgetResultOverrun(morningBalance, reportedWeekday, spent) {
    var todayBalance = morningBalance - spent;
    var expectedBalance = 0;
    return 'N/A';
  }
  function budgetResultSpent(morningBalance, reportedWeekday, spent) {
    var weekT = BUDGET_RESULT_WEEKDAY_T;
    if (reportedWeekday === BUDGET_WEEKDAY_SAT || reportedWeekday === BUDGET_WEEKDAY_SUN) {
      weekT = BUDGET_RESULT_WEEKEND_T;
    }
    var balance = morningBalance - spent;
    var balanceStr = budgetStringNumber(balance, 2);
    var percent = balance * 100.0 / BUDGET_INITIAL_BUDGET;
    var percentStr = budgetStringNumber(percent, 0);
    return replace(replace(replace(weekT, '%SPENT%', '' + spent), '%BALANCE%', balanceStr), '%PERCENT%', percentStr + '%');
  }
  function BankContext(cbrDate, currencies, didLaunch, isLoading, request, response, responseError, recentField) {
    cbrDate = cbrDate === VOID ? '' : cbrDate;
    var tmp;
    if (currencies === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = [];
    } else {
      tmp = currencies;
    }
    currencies = tmp;
    didLaunch = didLaunch === VOID ? false : didLaunch;
    isLoading = isLoading === VOID ? false : isLoading;
    request = request === VOID ? new NetRequest() : request;
    response = response === VOID ? new NetResponse() : response;
    responseError = responseError === VOID ? new NetResponse() : responseError;
    recentField = recentField === VOID ? '' : recentField;
    this.cbrDate = cbrDate;
    this.currencies = currencies;
    this.didLaunch = didLaunch;
    this.isLoading = isLoading;
    this.request = request;
    this.response = response;
    this.responseError = responseError;
    this.e4_1 = recentField;
  }
  protoOf(BankContext).g4 = function (_set____db54di) {
    this.cbrDate = _set____db54di;
  };
  protoOf(BankContext).h4 = function () {
    return this.cbrDate;
  };
  protoOf(BankContext).i4 = function (_set____db54di) {
    this.currencies = _set____db54di;
  };
  protoOf(BankContext).j4 = function () {
    return this.currencies;
  };
  protoOf(BankContext).k4 = function (_set____db54di) {
    this.didLaunch = _set____db54di;
  };
  protoOf(BankContext).l4 = function () {
    return this.didLaunch;
  };
  protoOf(BankContext).m4 = function (_set____db54di) {
    this.isLoading = _set____db54di;
  };
  protoOf(BankContext).n4 = function () {
    return this.isLoading;
  };
  protoOf(BankContext).o4 = function (_set____db54di) {
    this.request = _set____db54di;
  };
  protoOf(BankContext).p4 = function () {
    return this.request;
  };
  protoOf(BankContext).q4 = function (_set____db54di) {
    this.response = _set____db54di;
  };
  protoOf(BankContext).r4 = function () {
    return this.response;
  };
  protoOf(BankContext).s4 = function (_set____db54di) {
    this.responseError = _set____db54di;
  };
  protoOf(BankContext).t4 = function () {
    return this.responseError;
  };
  protoOf(BankContext).p3 = function (_set____db54di) {
    this.e4_1 = _set____db54di;
  };
  protoOf(BankContext).q3 = function () {
    return this.e4_1;
  };
  protoOf(BankContext).field = function (name) {
    switch (name) {
      case 'cbrDate':
        var tmp = this.cbrDate;
        return !(tmp == null) ? tmp : THROW_CCE();
      case 'currencies':
        var tmp_0 = this.currencies;
        return !(tmp_0 == null) ? tmp_0 : THROW_CCE();
      case 'didLaunch':
        var tmp_1 = this.didLaunch;
        return !(tmp_1 == null) ? tmp_1 : THROW_CCE();
      case 'isLoading':
        var tmp_2 = this.isLoading;
        return !(tmp_2 == null) ? tmp_2 : THROW_CCE();
      case 'request':
        var tmp_3 = this.request;
        return !(tmp_3 == null) ? tmp_3 : THROW_CCE();
      case 'response':
        var tmp_4 = this.response;
        return !(tmp_4 == null) ? tmp_4 : THROW_CCE();
      case 'responseError':
        var tmp_5 = this.responseError;
        return !(tmp_5 == null) ? tmp_5 : THROW_CCE();
    }
    return !('unknown-field-name' == null) ? 'unknown-field-name' : THROW_CCE();
  };
  protoOf(BankContext).selfCopy = function () {
    return this.copy();
  };
  protoOf(BankContext).setField = function (name, value) {
    switch (name) {
      case 'cbrDate':
        var tmp = this;
        tmp.cbrDate = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'currencies':
        var tmp_0 = this;
        tmp_0.currencies = (!(value == null) ? isArray(value) : false) ? value : THROW_CCE();
        break;
      case 'didLaunch':
        var tmp_1 = this;
        tmp_1.didLaunch = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'isLoading':
        var tmp_2 = this;
        tmp_2.isLoading = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'request':
        var tmp_3 = this;
        tmp_3.request = value instanceof NetRequest ? value : THROW_CCE();
        break;
      case 'response':
        var tmp_4 = this;
        tmp_4.response = value instanceof NetResponse ? value : THROW_CCE();
        break;
      case 'responseError':
        var tmp_5 = this;
        tmp_5.responseError = value instanceof NetResponse ? value : THROW_CCE();
        break;
    }
  };
  protoOf(BankContext).n3 = function () {
    return this.cbrDate;
  };
  protoOf(BankContext).o3 = function () {
    return this.currencies;
  };
  protoOf(BankContext).u4 = function () {
    return this.didLaunch;
  };
  protoOf(BankContext).v4 = function () {
    return this.isLoading;
  };
  protoOf(BankContext).w4 = function () {
    return this.request;
  };
  protoOf(BankContext).x4 = function () {
    return this.response;
  };
  protoOf(BankContext).y4 = function () {
    return this.responseError;
  };
  protoOf(BankContext).z4 = function () {
    return this.e4_1;
  };
  protoOf(BankContext).a5 = function (cbrDate, currencies, didLaunch, isLoading, request, response, responseError, recentField) {
    return new BankContext(cbrDate, currencies, didLaunch, isLoading, request, response, responseError, recentField);
  };
  protoOf(BankContext).copy = function (cbrDate, currencies, didLaunch, isLoading, request, response, responseError, recentField, $super) {
    cbrDate = cbrDate === VOID ? this.cbrDate : cbrDate;
    currencies = currencies === VOID ? this.currencies : currencies;
    didLaunch = didLaunch === VOID ? this.didLaunch : didLaunch;
    isLoading = isLoading === VOID ? this.isLoading : isLoading;
    request = request === VOID ? this.request : request;
    response = response === VOID ? this.response : response;
    responseError = responseError === VOID ? this.responseError : responseError;
    recentField = recentField === VOID ? this.e4_1 : recentField;
    return $super === VOID ? this.a5(cbrDate, currencies, didLaunch, isLoading, request, response, responseError, recentField) : $super.a5.call(this, cbrDate, currencies, didLaunch, isLoading, request, response, responseError, recentField);
  };
  protoOf(BankContext).toString = function () {
    return 'BankContext(cbrDate=' + this.cbrDate + ', currencies=' + toString_0(this.currencies) + ', didLaunch=' + this.didLaunch + ', isLoading=' + this.isLoading + ', request=' + this.request.toString() + ', response=' + this.response.toString() + ', responseError=' + this.responseError.toString() + ', recentField=' + this.e4_1 + ')';
  };
  protoOf(BankContext).hashCode = function () {
    var result = getStringHashCode(this.cbrDate);
    result = imul(result, 31) + hashCode(this.currencies) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.didLaunch) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isLoading) | 0;
    result = imul(result, 31) + this.request.hashCode() | 0;
    result = imul(result, 31) + this.response.hashCode() | 0;
    result = imul(result, 31) + this.responseError.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.e4_1) | 0;
    return result;
  };
  protoOf(BankContext).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BankContext))
      return false;
    var tmp0_other_with_cast = other instanceof BankContext ? other : THROW_CCE();
    if (!(this.cbrDate === tmp0_other_with_cast.cbrDate))
      return false;
    if (!equals(this.currencies, tmp0_other_with_cast.currencies))
      return false;
    if (!(this.didLaunch === tmp0_other_with_cast.didLaunch))
      return false;
    if (!(this.isLoading === tmp0_other_with_cast.isLoading))
      return false;
    if (!this.request.equals(tmp0_other_with_cast.request))
      return false;
    if (!this.response.equals(tmp0_other_with_cast.response))
      return false;
    if (!this.responseError.equals(tmp0_other_with_cast.responseError))
      return false;
    if (!(this.e4_1 === tmp0_other_with_cast.e4_1))
      return false;
    return true;
  };
  function BudgetContext(didLaunch, inputDate, inputMorningBalance, inputSpent, reportedDate, reportedWeekday, result, todayWeekday, recentField) {
    didLaunch = didLaunch === VOID ? false : didLaunch;
    inputDate = inputDate === VOID ? '' : inputDate;
    inputMorningBalance = inputMorningBalance === VOID ? '' : inputMorningBalance;
    inputSpent = inputSpent === VOID ? '' : inputSpent;
    reportedDate = reportedDate === VOID ? '' : reportedDate;
    reportedWeekday = reportedWeekday === VOID ? 0 : reportedWeekday;
    result = result === VOID ? '' : result;
    todayWeekday = todayWeekday === VOID ? 0 : todayWeekday;
    recentField = recentField === VOID ? '' : recentField;
    this.didLaunch = didLaunch;
    this.inputDate = inputDate;
    this.inputMorningBalance = inputMorningBalance;
    this.inputSpent = inputSpent;
    this.reportedDate = reportedDate;
    this.reportedWeekday = reportedWeekday;
    this.result = result;
    this.todayWeekday = todayWeekday;
    this.f4_1 = recentField;
  }
  protoOf(BudgetContext).k4 = function (_set____db54di) {
    this.didLaunch = _set____db54di;
  };
  protoOf(BudgetContext).l4 = function () {
    return this.didLaunch;
  };
  protoOf(BudgetContext).b5 = function (_set____db54di) {
    this.inputDate = _set____db54di;
  };
  protoOf(BudgetContext).c5 = function () {
    return this.inputDate;
  };
  protoOf(BudgetContext).d5 = function (_set____db54di) {
    this.inputMorningBalance = _set____db54di;
  };
  protoOf(BudgetContext).e5 = function () {
    return this.inputMorningBalance;
  };
  protoOf(BudgetContext).f5 = function (_set____db54di) {
    this.inputSpent = _set____db54di;
  };
  protoOf(BudgetContext).g5 = function () {
    return this.inputSpent;
  };
  protoOf(BudgetContext).h5 = function (_set____db54di) {
    this.reportedDate = _set____db54di;
  };
  protoOf(BudgetContext).i5 = function () {
    return this.reportedDate;
  };
  protoOf(BudgetContext).j5 = function (_set____db54di) {
    this.reportedWeekday = _set____db54di;
  };
  protoOf(BudgetContext).k5 = function () {
    return this.reportedWeekday;
  };
  protoOf(BudgetContext).l5 = function (_set____db54di) {
    this.result = _set____db54di;
  };
  protoOf(BudgetContext).m5 = function () {
    return this.result;
  };
  protoOf(BudgetContext).n5 = function (_set____db54di) {
    this.todayWeekday = _set____db54di;
  };
  protoOf(BudgetContext).o5 = function () {
    return this.todayWeekday;
  };
  protoOf(BudgetContext).p3 = function (_set____db54di) {
    this.f4_1 = _set____db54di;
  };
  protoOf(BudgetContext).q3 = function () {
    return this.f4_1;
  };
  protoOf(BudgetContext).field = function (name) {
    switch (name) {
      case 'didLaunch':
        var tmp = this.didLaunch;
        return !(tmp == null) ? tmp : THROW_CCE();
      case 'inputDate':
        var tmp_0 = this.inputDate;
        return !(tmp_0 == null) ? tmp_0 : THROW_CCE();
      case 'inputMorningBalance':
        var tmp_1 = this.inputMorningBalance;
        return !(tmp_1 == null) ? tmp_1 : THROW_CCE();
      case 'inputSpent':
        var tmp_2 = this.inputSpent;
        return !(tmp_2 == null) ? tmp_2 : THROW_CCE();
      case 'reportedDate':
        var tmp_3 = this.reportedDate;
        return !(tmp_3 == null) ? tmp_3 : THROW_CCE();
      case 'reportedWeekday':
        var tmp_4 = this.reportedWeekday;
        return !(tmp_4 == null) ? tmp_4 : THROW_CCE();
      case 'result':
        var tmp_5 = this.result;
        return !(tmp_5 == null) ? tmp_5 : THROW_CCE();
      case 'todayWeekday':
        var tmp_6 = this.todayWeekday;
        return !(tmp_6 == null) ? tmp_6 : THROW_CCE();
    }
    return !('unknown-field-name' == null) ? 'unknown-field-name' : THROW_CCE();
  };
  protoOf(BudgetContext).selfCopy = function () {
    return this.copy();
  };
  protoOf(BudgetContext).setField = function (name, value) {
    switch (name) {
      case 'didLaunch':
        var tmp = this;
        tmp.didLaunch = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'inputDate':
        var tmp_0 = this;
        tmp_0.inputDate = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'inputMorningBalance':
        var tmp_1 = this;
        tmp_1.inputMorningBalance = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'inputSpent':
        var tmp_2 = this;
        tmp_2.inputSpent = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'reportedDate':
        var tmp_3 = this;
        tmp_3.reportedDate = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'reportedWeekday':
        var tmp_4 = this;
        tmp_4.reportedWeekday = (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE();
        break;
      case 'result':
        var tmp_5 = this;
        tmp_5.result = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'todayWeekday':
        var tmp_6 = this;
        tmp_6.todayWeekday = (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE();
        break;
    }
  };
  protoOf(BudgetContext).n3 = function () {
    return this.didLaunch;
  };
  protoOf(BudgetContext).o3 = function () {
    return this.inputDate;
  };
  protoOf(BudgetContext).u4 = function () {
    return this.inputMorningBalance;
  };
  protoOf(BudgetContext).v4 = function () {
    return this.inputSpent;
  };
  protoOf(BudgetContext).w4 = function () {
    return this.reportedDate;
  };
  protoOf(BudgetContext).x4 = function () {
    return this.reportedWeekday;
  };
  protoOf(BudgetContext).y4 = function () {
    return this.result;
  };
  protoOf(BudgetContext).z4 = function () {
    return this.todayWeekday;
  };
  protoOf(BudgetContext).p5 = function () {
    return this.f4_1;
  };
  protoOf(BudgetContext).q5 = function (didLaunch, inputDate, inputMorningBalance, inputSpent, reportedDate, reportedWeekday, result, todayWeekday, recentField) {
    return new BudgetContext(didLaunch, inputDate, inputMorningBalance, inputSpent, reportedDate, reportedWeekday, result, todayWeekday, recentField);
  };
  protoOf(BudgetContext).copy = function (didLaunch, inputDate, inputMorningBalance, inputSpent, reportedDate, reportedWeekday, result, todayWeekday, recentField, $super) {
    didLaunch = didLaunch === VOID ? this.didLaunch : didLaunch;
    inputDate = inputDate === VOID ? this.inputDate : inputDate;
    inputMorningBalance = inputMorningBalance === VOID ? this.inputMorningBalance : inputMorningBalance;
    inputSpent = inputSpent === VOID ? this.inputSpent : inputSpent;
    reportedDate = reportedDate === VOID ? this.reportedDate : reportedDate;
    reportedWeekday = reportedWeekday === VOID ? this.reportedWeekday : reportedWeekday;
    result = result === VOID ? this.result : result;
    todayWeekday = todayWeekday === VOID ? this.todayWeekday : todayWeekday;
    recentField = recentField === VOID ? this.f4_1 : recentField;
    return $super === VOID ? this.q5(didLaunch, inputDate, inputMorningBalance, inputSpent, reportedDate, reportedWeekday, result, todayWeekday, recentField) : $super.q5.call(this, didLaunch, inputDate, inputMorningBalance, inputSpent, reportedDate, reportedWeekday, result, todayWeekday, recentField);
  };
  protoOf(BudgetContext).toString = function () {
    return 'BudgetContext(didLaunch=' + this.didLaunch + ', inputDate=' + this.inputDate + ', inputMorningBalance=' + this.inputMorningBalance + ', inputSpent=' + this.inputSpent + ', reportedDate=' + this.reportedDate + ', reportedWeekday=' + this.reportedWeekday + ', result=' + this.result + ', todayWeekday=' + this.todayWeekday + ', recentField=' + this.f4_1 + ')';
  };
  protoOf(BudgetContext).hashCode = function () {
    var result = getBooleanHashCode(this.didLaunch);
    result = imul(result, 31) + getStringHashCode(this.inputDate) | 0;
    result = imul(result, 31) + getStringHashCode(this.inputMorningBalance) | 0;
    result = imul(result, 31) + getStringHashCode(this.inputSpent) | 0;
    result = imul(result, 31) + getStringHashCode(this.reportedDate) | 0;
    result = imul(result, 31) + this.reportedWeekday | 0;
    result = imul(result, 31) + getStringHashCode(this.result) | 0;
    result = imul(result, 31) + this.todayWeekday | 0;
    result = imul(result, 31) + getStringHashCode(this.f4_1) | 0;
    return result;
  };
  protoOf(BudgetContext).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BudgetContext))
      return false;
    var tmp0_other_with_cast = other instanceof BudgetContext ? other : THROW_CCE();
    if (!(this.didLaunch === tmp0_other_with_cast.didLaunch))
      return false;
    if (!(this.inputDate === tmp0_other_with_cast.inputDate))
      return false;
    if (!(this.inputMorningBalance === tmp0_other_with_cast.inputMorningBalance))
      return false;
    if (!(this.inputSpent === tmp0_other_with_cast.inputSpent))
      return false;
    if (!(this.reportedDate === tmp0_other_with_cast.reportedDate))
      return false;
    if (!(this.reportedWeekday === tmp0_other_with_cast.reportedWeekday))
      return false;
    if (!(this.result === tmp0_other_with_cast.result))
      return false;
    if (!(this.todayWeekday === tmp0_other_with_cast.todayWeekday))
      return false;
    if (!(this.f4_1 === tmp0_other_with_cast.f4_1))
      return false;
    return true;
  };
  function Currency(code, flag, value) {
    code = code === VOID ? '' : code;
    flag = flag === VOID ? '' : flag;
    value = value === VOID ? '' : value;
    this.code = code;
    this.flag = flag;
    this.value = value;
  }
  protoOf(Currency).r5 = function (_set____db54di) {
    this.code = _set____db54di;
  };
  protoOf(Currency).s5 = function () {
    return this.code;
  };
  protoOf(Currency).t5 = function (_set____db54di) {
    this.flag = _set____db54di;
  };
  protoOf(Currency).u5 = function () {
    return this.flag;
  };
  protoOf(Currency).v5 = function (_set____db54di) {
    this.value = _set____db54di;
  };
  protoOf(Currency).w5 = function () {
    return this.value;
  };
  protoOf(Currency).n3 = function () {
    return this.code;
  };
  protoOf(Currency).o3 = function () {
    return this.flag;
  };
  protoOf(Currency).u4 = function () {
    return this.value;
  };
  protoOf(Currency).x5 = function (code, flag, value) {
    return new Currency(code, flag, value);
  };
  protoOf(Currency).copy = function (code, flag, value, $super) {
    code = code === VOID ? this.code : code;
    flag = flag === VOID ? this.flag : flag;
    value = value === VOID ? this.value : value;
    return $super === VOID ? this.x5(code, flag, value) : $super.x5.call(this, code, flag, value);
  };
  protoOf(Currency).toString = function () {
    return 'Currency(code=' + this.code + ', flag=' + this.flag + ', value=' + this.value + ')';
  };
  protoOf(Currency).hashCode = function () {
    var result = getStringHashCode(this.code);
    result = imul(result, 31) + getStringHashCode(this.flag) | 0;
    result = imul(result, 31) + getStringHashCode(this.value) | 0;
    return result;
  };
  protoOf(Currency).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Currency))
      return false;
    var tmp0_other_with_cast = other instanceof Currency ? other : THROW_CCE();
    if (!(this.code === tmp0_other_with_cast.code))
      return false;
    if (!(this.flag === tmp0_other_with_cast.flag))
      return false;
    if (!(this.value === tmp0_other_with_cast.value))
      return false;
    return true;
  };
  function NetRequest(body, method, url) {
    body = body === VOID ? '' : body;
    method = method === VOID ? '' : method;
    url = url === VOID ? '' : url;
    this.body = body;
    this.method = method;
    this.url = url;
  }
  protoOf(NetRequest).y5 = function (_set____db54di) {
    this.body = _set____db54di;
  };
  protoOf(NetRequest).z5 = function () {
    return this.body;
  };
  protoOf(NetRequest).a6 = function (_set____db54di) {
    this.method = _set____db54di;
  };
  protoOf(NetRequest).b6 = function () {
    return this.method;
  };
  protoOf(NetRequest).c6 = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(NetRequest).d6 = function () {
    return this.url;
  };
  protoOf(NetRequest).n3 = function () {
    return this.body;
  };
  protoOf(NetRequest).o3 = function () {
    return this.method;
  };
  protoOf(NetRequest).u4 = function () {
    return this.url;
  };
  protoOf(NetRequest).x5 = function (body, method, url) {
    return new NetRequest(body, method, url);
  };
  protoOf(NetRequest).copy = function (body, method, url, $super) {
    body = body === VOID ? this.body : body;
    method = method === VOID ? this.method : method;
    url = url === VOID ? this.url : url;
    return $super === VOID ? this.x5(body, method, url) : $super.x5.call(this, body, method, url);
  };
  protoOf(NetRequest).toString = function () {
    return 'NetRequest(body=' + this.body + ', method=' + this.method + ', url=' + this.url + ')';
  };
  protoOf(NetRequest).hashCode = function () {
    var result = getStringHashCode(this.body);
    result = imul(result, 31) + getStringHashCode(this.method) | 0;
    result = imul(result, 31) + getStringHashCode(this.url) | 0;
    return result;
  };
  protoOf(NetRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NetRequest))
      return false;
    var tmp0_other_with_cast = other instanceof NetRequest ? other : THROW_CCE();
    if (!(this.body === tmp0_other_with_cast.body))
      return false;
    if (!(this.method === tmp0_other_with_cast.method))
      return false;
    if (!(this.url === tmp0_other_with_cast.url))
      return false;
    return true;
  };
  function NetResponse(contents, url) {
    contents = contents === VOID ? '' : contents;
    url = url === VOID ? '' : url;
    this.contents = contents;
    this.url = url;
  }
  protoOf(NetResponse).e6 = function (_set____db54di) {
    this.contents = _set____db54di;
  };
  protoOf(NetResponse).f6 = function () {
    return this.contents;
  };
  protoOf(NetResponse).c6 = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(NetResponse).d6 = function () {
    return this.url;
  };
  protoOf(NetResponse).n3 = function () {
    return this.contents;
  };
  protoOf(NetResponse).o3 = function () {
    return this.url;
  };
  protoOf(NetResponse).g6 = function (contents, url) {
    return new NetResponse(contents, url);
  };
  protoOf(NetResponse).copy = function (contents, url, $super) {
    contents = contents === VOID ? this.contents : contents;
    url = url === VOID ? this.url : url;
    return $super === VOID ? this.g6(contents, url) : $super.g6.call(this, contents, url);
  };
  protoOf(NetResponse).toString = function () {
    return 'NetResponse(contents=' + this.contents + ', url=' + this.url + ')';
  };
  protoOf(NetResponse).hashCode = function () {
    var result = getStringHashCode(this.contents);
    result = imul(result, 31) + getStringHashCode(this.url) | 0;
    return result;
  };
  protoOf(NetResponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NetResponse))
      return false;
    var tmp0_other_with_cast = other instanceof NetResponse ? other : THROW_CCE();
    if (!(this.contents === tmp0_other_with_cast.contents))
      return false;
    if (!(this.url === tmp0_other_with_cast.url))
      return false;
    return true;
  };
  function QuizContext(activeSound, areDetailsVisible, arePhrasesVisible, areSelectedPhrasesVisible, bgImage, currentId, deselectedPhraseId, didClickNext, didClickPlaySound, didClickValidate, didLaunch, expectedPhrases, hasFailure, isNextAdvancing, isNextAvailable, isNextVisible, isSoundVisible, isSubtitleVisible, isValid, items, phraseVisibility, phrases, selectedPhraseId, selectedPhrases, title, recentField) {
    activeSound = activeSound === VOID ? '' : activeSound;
    areDetailsVisible = areDetailsVisible === VOID ? false : areDetailsVisible;
    arePhrasesVisible = arePhrasesVisible === VOID ? false : arePhrasesVisible;
    areSelectedPhrasesVisible = areSelectedPhrasesVisible === VOID ? false : areSelectedPhrasesVisible;
    bgImage = bgImage === VOID ? '' : bgImage;
    currentId = currentId === VOID ? 0 : currentId;
    deselectedPhraseId = deselectedPhraseId === VOID ? 0 : deselectedPhraseId;
    didClickNext = didClickNext === VOID ? false : didClickNext;
    didClickPlaySound = didClickPlaySound === VOID ? false : didClickPlaySound;
    didClickValidate = didClickValidate === VOID ? false : didClickValidate;
    didLaunch = didLaunch === VOID ? false : didLaunch;
    var tmp;
    if (expectedPhrases === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = [];
    } else {
      tmp = expectedPhrases;
    }
    expectedPhrases = tmp;
    hasFailure = hasFailure === VOID ? false : hasFailure;
    isNextAdvancing = isNextAdvancing === VOID ? false : isNextAdvancing;
    isNextAvailable = isNextAvailable === VOID ? false : isNextAvailable;
    isNextVisible = isNextVisible === VOID ? false : isNextVisible;
    isSoundVisible = isSoundVisible === VOID ? false : isSoundVisible;
    isSubtitleVisible = isSubtitleVisible === VOID ? false : isSubtitleVisible;
    isValid = isValid === VOID ? false : isValid;
    var tmp_0;
    if (items === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = [];
    } else {
      tmp_0 = items;
    }
    items = tmp_0;
    phraseVisibility = phraseVisibility === VOID ? new QuizPhraseVisibility() : phraseVisibility;
    var tmp_1;
    if (phrases === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = [];
    } else {
      tmp_1 = phrases;
    }
    phrases = tmp_1;
    selectedPhraseId = selectedPhraseId === VOID ? 0 : selectedPhraseId;
    var tmp_2;
    if (selectedPhrases === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = [];
    } else {
      tmp_2 = selectedPhrases;
    }
    selectedPhrases = tmp_2;
    title = title === VOID ? '' : title;
    recentField = recentField === VOID ? '' : recentField;
    this.activeSound = activeSound;
    this.areDetailsVisible = areDetailsVisible;
    this.arePhrasesVisible = arePhrasesVisible;
    this.areSelectedPhrasesVisible = areSelectedPhrasesVisible;
    this.bgImage = bgImage;
    this.currentId = currentId;
    this.deselectedPhraseId = deselectedPhraseId;
    this.didClickNext = didClickNext;
    this.didClickPlaySound = didClickPlaySound;
    this.didClickValidate = didClickValidate;
    this.didLaunch = didLaunch;
    this.expectedPhrases = expectedPhrases;
    this.hasFailure = hasFailure;
    this.isNextAdvancing = isNextAdvancing;
    this.isNextAvailable = isNextAvailable;
    this.isNextVisible = isNextVisible;
    this.isSoundVisible = isSoundVisible;
    this.isSubtitleVisible = isSubtitleVisible;
    this.isValid = isValid;
    this.items = items;
    this.phraseVisibility = phraseVisibility;
    this.phrases = phrases;
    this.selectedPhraseId = selectedPhraseId;
    this.selectedPhrases = selectedPhrases;
    this.title = title;
    this.h6_1 = recentField;
  }
  protoOf(QuizContext).i6 = function (_set____db54di) {
    this.activeSound = _set____db54di;
  };
  protoOf(QuizContext).j6 = function () {
    return this.activeSound;
  };
  protoOf(QuizContext).k6 = function (_set____db54di) {
    this.areDetailsVisible = _set____db54di;
  };
  protoOf(QuizContext).l6 = function () {
    return this.areDetailsVisible;
  };
  protoOf(QuizContext).m6 = function (_set____db54di) {
    this.arePhrasesVisible = _set____db54di;
  };
  protoOf(QuizContext).n6 = function () {
    return this.arePhrasesVisible;
  };
  protoOf(QuizContext).o6 = function (_set____db54di) {
    this.areSelectedPhrasesVisible = _set____db54di;
  };
  protoOf(QuizContext).p6 = function () {
    return this.areSelectedPhrasesVisible;
  };
  protoOf(QuizContext).q6 = function (_set____db54di) {
    this.bgImage = _set____db54di;
  };
  protoOf(QuizContext).r6 = function () {
    return this.bgImage;
  };
  protoOf(QuizContext).s6 = function (_set____db54di) {
    this.currentId = _set____db54di;
  };
  protoOf(QuizContext).t6 = function () {
    return this.currentId;
  };
  protoOf(QuizContext).u6 = function (_set____db54di) {
    this.deselectedPhraseId = _set____db54di;
  };
  protoOf(QuizContext).v6 = function () {
    return this.deselectedPhraseId;
  };
  protoOf(QuizContext).w6 = function (_set____db54di) {
    this.didClickNext = _set____db54di;
  };
  protoOf(QuizContext).x6 = function () {
    return this.didClickNext;
  };
  protoOf(QuizContext).y6 = function (_set____db54di) {
    this.didClickPlaySound = _set____db54di;
  };
  protoOf(QuizContext).z6 = function () {
    return this.didClickPlaySound;
  };
  protoOf(QuizContext).a7 = function (_set____db54di) {
    this.didClickValidate = _set____db54di;
  };
  protoOf(QuizContext).b7 = function () {
    return this.didClickValidate;
  };
  protoOf(QuizContext).k4 = function (_set____db54di) {
    this.didLaunch = _set____db54di;
  };
  protoOf(QuizContext).l4 = function () {
    return this.didLaunch;
  };
  protoOf(QuizContext).c7 = function (_set____db54di) {
    this.expectedPhrases = _set____db54di;
  };
  protoOf(QuizContext).d7 = function () {
    return this.expectedPhrases;
  };
  protoOf(QuizContext).e7 = function (_set____db54di) {
    this.hasFailure = _set____db54di;
  };
  protoOf(QuizContext).f7 = function () {
    return this.hasFailure;
  };
  protoOf(QuizContext).g7 = function (_set____db54di) {
    this.isNextAdvancing = _set____db54di;
  };
  protoOf(QuizContext).h7 = function () {
    return this.isNextAdvancing;
  };
  protoOf(QuizContext).i7 = function (_set____db54di) {
    this.isNextAvailable = _set____db54di;
  };
  protoOf(QuizContext).j7 = function () {
    return this.isNextAvailable;
  };
  protoOf(QuizContext).k7 = function (_set____db54di) {
    this.isNextVisible = _set____db54di;
  };
  protoOf(QuizContext).l7 = function () {
    return this.isNextVisible;
  };
  protoOf(QuizContext).m7 = function (_set____db54di) {
    this.isSoundVisible = _set____db54di;
  };
  protoOf(QuizContext).n7 = function () {
    return this.isSoundVisible;
  };
  protoOf(QuizContext).o7 = function (_set____db54di) {
    this.isSubtitleVisible = _set____db54di;
  };
  protoOf(QuizContext).p7 = function () {
    return this.isSubtitleVisible;
  };
  protoOf(QuizContext).q7 = function (_set____db54di) {
    this.isValid = _set____db54di;
  };
  protoOf(QuizContext).r7 = function () {
    return this.isValid;
  };
  protoOf(QuizContext).s7 = function (_set____db54di) {
    this.items = _set____db54di;
  };
  protoOf(QuizContext).t7 = function () {
    return this.items;
  };
  protoOf(QuizContext).u7 = function (_set____db54di) {
    this.phraseVisibility = _set____db54di;
  };
  protoOf(QuizContext).v7 = function () {
    return this.phraseVisibility;
  };
  protoOf(QuizContext).w7 = function (_set____db54di) {
    this.phrases = _set____db54di;
  };
  protoOf(QuizContext).x7 = function () {
    return this.phrases;
  };
  protoOf(QuizContext).y7 = function (_set____db54di) {
    this.selectedPhraseId = _set____db54di;
  };
  protoOf(QuizContext).z7 = function () {
    return this.selectedPhraseId;
  };
  protoOf(QuizContext).a8 = function (_set____db54di) {
    this.selectedPhrases = _set____db54di;
  };
  protoOf(QuizContext).b8 = function () {
    return this.selectedPhrases;
  };
  protoOf(QuizContext).c8 = function (_set____db54di) {
    this.title = _set____db54di;
  };
  protoOf(QuizContext).d8 = function () {
    return this.title;
  };
  protoOf(QuizContext).p3 = function (_set____db54di) {
    this.h6_1 = _set____db54di;
  };
  protoOf(QuizContext).q3 = function () {
    return this.h6_1;
  };
  protoOf(QuizContext).field = function (name) {
    switch (name) {
      case 'activeSound':
        var tmp = this.activeSound;
        return !(tmp == null) ? tmp : THROW_CCE();
      case 'areDetailsVisible':
        var tmp_0 = this.areDetailsVisible;
        return !(tmp_0 == null) ? tmp_0 : THROW_CCE();
      case 'arePhrasesVisible':
        var tmp_1 = this.arePhrasesVisible;
        return !(tmp_1 == null) ? tmp_1 : THROW_CCE();
      case 'areSelectedPhrasesVisible':
        var tmp_2 = this.areSelectedPhrasesVisible;
        return !(tmp_2 == null) ? tmp_2 : THROW_CCE();
      case 'bgImage':
        var tmp_3 = this.bgImage;
        return !(tmp_3 == null) ? tmp_3 : THROW_CCE();
      case 'currentId':
        var tmp_4 = this.currentId;
        return !(tmp_4 == null) ? tmp_4 : THROW_CCE();
      case 'deselectedPhraseId':
        var tmp_5 = this.deselectedPhraseId;
        return !(tmp_5 == null) ? tmp_5 : THROW_CCE();
      case 'didClickNext':
        var tmp_6 = this.didClickNext;
        return !(tmp_6 == null) ? tmp_6 : THROW_CCE();
      case 'didClickPlaySound':
        var tmp_7 = this.didClickPlaySound;
        return !(tmp_7 == null) ? tmp_7 : THROW_CCE();
      case 'didClickValidate':
        var tmp_8 = this.didClickValidate;
        return !(tmp_8 == null) ? tmp_8 : THROW_CCE();
      case 'didLaunch':
        var tmp_9 = this.didLaunch;
        return !(tmp_9 == null) ? tmp_9 : THROW_CCE();
      case 'expectedPhrases':
        var tmp_10 = this.expectedPhrases;
        return !(tmp_10 == null) ? tmp_10 : THROW_CCE();
      case 'hasFailure':
        var tmp_11 = this.hasFailure;
        return !(tmp_11 == null) ? tmp_11 : THROW_CCE();
      case 'isNextAdvancing':
        var tmp_12 = this.isNextAdvancing;
        return !(tmp_12 == null) ? tmp_12 : THROW_CCE();
      case 'isNextAvailable':
        var tmp_13 = this.isNextAvailable;
        return !(tmp_13 == null) ? tmp_13 : THROW_CCE();
      case 'isNextVisible':
        var tmp_14 = this.isNextVisible;
        return !(tmp_14 == null) ? tmp_14 : THROW_CCE();
      case 'isSoundVisible':
        var tmp_15 = this.isSoundVisible;
        return !(tmp_15 == null) ? tmp_15 : THROW_CCE();
      case 'isSubtitleVisible':
        var tmp_16 = this.isSubtitleVisible;
        return !(tmp_16 == null) ? tmp_16 : THROW_CCE();
      case 'isValid':
        var tmp_17 = this.isValid;
        return !(tmp_17 == null) ? tmp_17 : THROW_CCE();
      case 'items':
        var tmp_18 = this.items;
        return !(tmp_18 == null) ? tmp_18 : THROW_CCE();
      case 'phraseVisibility':
        var tmp_19 = this.phraseVisibility;
        return !(tmp_19 == null) ? tmp_19 : THROW_CCE();
      case 'phrases':
        var tmp_20 = this.phrases;
        return !(tmp_20 == null) ? tmp_20 : THROW_CCE();
      case 'selectedPhraseId':
        var tmp_21 = this.selectedPhraseId;
        return !(tmp_21 == null) ? tmp_21 : THROW_CCE();
      case 'selectedPhrases':
        var tmp_22 = this.selectedPhrases;
        return !(tmp_22 == null) ? tmp_22 : THROW_CCE();
      case 'title':
        var tmp_23 = this.title;
        return !(tmp_23 == null) ? tmp_23 : THROW_CCE();
    }
    return !('unknown-field-name' == null) ? 'unknown-field-name' : THROW_CCE();
  };
  protoOf(QuizContext).selfCopy = function () {
    return this.copy();
  };
  protoOf(QuizContext).setField = function (name, value) {
    switch (name) {
      case 'activeSound':
        var tmp = this;
        tmp.activeSound = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'areDetailsVisible':
        var tmp_0 = this;
        tmp_0.areDetailsVisible = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'arePhrasesVisible':
        var tmp_1 = this;
        tmp_1.arePhrasesVisible = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'areSelectedPhrasesVisible':
        var tmp_2 = this;
        tmp_2.areSelectedPhrasesVisible = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'bgImage':
        var tmp_3 = this;
        tmp_3.bgImage = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
      case 'currentId':
        var tmp_4 = this;
        tmp_4.currentId = (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE();
        break;
      case 'deselectedPhraseId':
        var tmp_5 = this;
        tmp_5.deselectedPhraseId = (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE();
        break;
      case 'didClickNext':
        var tmp_6 = this;
        tmp_6.didClickNext = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'didClickPlaySound':
        var tmp_7 = this;
        tmp_7.didClickPlaySound = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'didClickValidate':
        var tmp_8 = this;
        tmp_8.didClickValidate = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'didLaunch':
        var tmp_9 = this;
        tmp_9.didLaunch = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'expectedPhrases':
        var tmp_10 = this;
        tmp_10.expectedPhrases = (!(value == null) ? isArray(value) : false) ? value : THROW_CCE();
        break;
      case 'hasFailure':
        var tmp_11 = this;
        tmp_11.hasFailure = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'isNextAdvancing':
        var tmp_12 = this;
        tmp_12.isNextAdvancing = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'isNextAvailable':
        var tmp_13 = this;
        tmp_13.isNextAvailable = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'isNextVisible':
        var tmp_14 = this;
        tmp_14.isNextVisible = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'isSoundVisible':
        var tmp_15 = this;
        tmp_15.isSoundVisible = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'isSubtitleVisible':
        var tmp_16 = this;
        tmp_16.isSubtitleVisible = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'isValid':
        var tmp_17 = this;
        tmp_17.isValid = (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE();
        break;
      case 'items':
        var tmp_18 = this;
        tmp_18.items = (!(value == null) ? isArray(value) : false) ? value : THROW_CCE();
        break;
      case 'phraseVisibility':
        var tmp_19 = this;
        tmp_19.phraseVisibility = value instanceof QuizPhraseVisibility ? value : THROW_CCE();
        break;
      case 'phrases':
        var tmp_20 = this;
        tmp_20.phrases = (!(value == null) ? isArray(value) : false) ? value : THROW_CCE();
        break;
      case 'selectedPhraseId':
        var tmp_21 = this;
        tmp_21.selectedPhraseId = (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE();
        break;
      case 'selectedPhrases':
        var tmp_22 = this;
        tmp_22.selectedPhrases = (!(value == null) ? isArray(value) : false) ? value : THROW_CCE();
        break;
      case 'title':
        var tmp_23 = this;
        tmp_23.title = (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE();
        break;
    }
  };
  protoOf(QuizContext).n3 = function () {
    return this.activeSound;
  };
  protoOf(QuizContext).o3 = function () {
    return this.areDetailsVisible;
  };
  protoOf(QuizContext).u4 = function () {
    return this.arePhrasesVisible;
  };
  protoOf(QuizContext).v4 = function () {
    return this.areSelectedPhrasesVisible;
  };
  protoOf(QuizContext).w4 = function () {
    return this.bgImage;
  };
  protoOf(QuizContext).x4 = function () {
    return this.currentId;
  };
  protoOf(QuizContext).y4 = function () {
    return this.deselectedPhraseId;
  };
  protoOf(QuizContext).z4 = function () {
    return this.didClickNext;
  };
  protoOf(QuizContext).p5 = function () {
    return this.didClickPlaySound;
  };
  protoOf(QuizContext).e8 = function () {
    return this.didClickValidate;
  };
  protoOf(QuizContext).f8 = function () {
    return this.didLaunch;
  };
  protoOf(QuizContext).g8 = function () {
    return this.expectedPhrases;
  };
  protoOf(QuizContext).h8 = function () {
    return this.hasFailure;
  };
  protoOf(QuizContext).i8 = function () {
    return this.isNextAdvancing;
  };
  protoOf(QuizContext).j8 = function () {
    return this.isNextAvailable;
  };
  protoOf(QuizContext).k8 = function () {
    return this.isNextVisible;
  };
  protoOf(QuizContext).l8 = function () {
    return this.isSoundVisible;
  };
  protoOf(QuizContext).m8 = function () {
    return this.isSubtitleVisible;
  };
  protoOf(QuizContext).n8 = function () {
    return this.isValid;
  };
  protoOf(QuizContext).o8 = function () {
    return this.items;
  };
  protoOf(QuizContext).p8 = function () {
    return this.phraseVisibility;
  };
  protoOf(QuizContext).q8 = function () {
    return this.phrases;
  };
  protoOf(QuizContext).r8 = function () {
    return this.selectedPhraseId;
  };
  protoOf(QuizContext).s8 = function () {
    return this.selectedPhrases;
  };
  protoOf(QuizContext).t8 = function () {
    return this.title;
  };
  protoOf(QuizContext).u8 = function () {
    return this.h6_1;
  };
  protoOf(QuizContext).v8 = function (activeSound, areDetailsVisible, arePhrasesVisible, areSelectedPhrasesVisible, bgImage, currentId, deselectedPhraseId, didClickNext, didClickPlaySound, didClickValidate, didLaunch, expectedPhrases, hasFailure, isNextAdvancing, isNextAvailable, isNextVisible, isSoundVisible, isSubtitleVisible, isValid, items, phraseVisibility, phrases, selectedPhraseId, selectedPhrases, title, recentField) {
    return new QuizContext(activeSound, areDetailsVisible, arePhrasesVisible, areSelectedPhrasesVisible, bgImage, currentId, deselectedPhraseId, didClickNext, didClickPlaySound, didClickValidate, didLaunch, expectedPhrases, hasFailure, isNextAdvancing, isNextAvailable, isNextVisible, isSoundVisible, isSubtitleVisible, isValid, items, phraseVisibility, phrases, selectedPhraseId, selectedPhrases, title, recentField);
  };
  protoOf(QuizContext).copy = function (activeSound, areDetailsVisible, arePhrasesVisible, areSelectedPhrasesVisible, bgImage, currentId, deselectedPhraseId, didClickNext, didClickPlaySound, didClickValidate, didLaunch, expectedPhrases, hasFailure, isNextAdvancing, isNextAvailable, isNextVisible, isSoundVisible, isSubtitleVisible, isValid, items, phraseVisibility, phrases, selectedPhraseId, selectedPhrases, title, recentField, $super) {
    activeSound = activeSound === VOID ? this.activeSound : activeSound;
    areDetailsVisible = areDetailsVisible === VOID ? this.areDetailsVisible : areDetailsVisible;
    arePhrasesVisible = arePhrasesVisible === VOID ? this.arePhrasesVisible : arePhrasesVisible;
    areSelectedPhrasesVisible = areSelectedPhrasesVisible === VOID ? this.areSelectedPhrasesVisible : areSelectedPhrasesVisible;
    bgImage = bgImage === VOID ? this.bgImage : bgImage;
    currentId = currentId === VOID ? this.currentId : currentId;
    deselectedPhraseId = deselectedPhraseId === VOID ? this.deselectedPhraseId : deselectedPhraseId;
    didClickNext = didClickNext === VOID ? this.didClickNext : didClickNext;
    didClickPlaySound = didClickPlaySound === VOID ? this.didClickPlaySound : didClickPlaySound;
    didClickValidate = didClickValidate === VOID ? this.didClickValidate : didClickValidate;
    didLaunch = didLaunch === VOID ? this.didLaunch : didLaunch;
    expectedPhrases = expectedPhrases === VOID ? this.expectedPhrases : expectedPhrases;
    hasFailure = hasFailure === VOID ? this.hasFailure : hasFailure;
    isNextAdvancing = isNextAdvancing === VOID ? this.isNextAdvancing : isNextAdvancing;
    isNextAvailable = isNextAvailable === VOID ? this.isNextAvailable : isNextAvailable;
    isNextVisible = isNextVisible === VOID ? this.isNextVisible : isNextVisible;
    isSoundVisible = isSoundVisible === VOID ? this.isSoundVisible : isSoundVisible;
    isSubtitleVisible = isSubtitleVisible === VOID ? this.isSubtitleVisible : isSubtitleVisible;
    isValid = isValid === VOID ? this.isValid : isValid;
    items = items === VOID ? this.items : items;
    phraseVisibility = phraseVisibility === VOID ? this.phraseVisibility : phraseVisibility;
    phrases = phrases === VOID ? this.phrases : phrases;
    selectedPhraseId = selectedPhraseId === VOID ? this.selectedPhraseId : selectedPhraseId;
    selectedPhrases = selectedPhrases === VOID ? this.selectedPhrases : selectedPhrases;
    title = title === VOID ? this.title : title;
    recentField = recentField === VOID ? this.h6_1 : recentField;
    return $super === VOID ? this.v8(activeSound, areDetailsVisible, arePhrasesVisible, areSelectedPhrasesVisible, bgImage, currentId, deselectedPhraseId, didClickNext, didClickPlaySound, didClickValidate, didLaunch, expectedPhrases, hasFailure, isNextAdvancing, isNextAvailable, isNextVisible, isSoundVisible, isSubtitleVisible, isValid, items, phraseVisibility, phrases, selectedPhraseId, selectedPhrases, title, recentField) : $super.v8.call(this, activeSound, areDetailsVisible, arePhrasesVisible, areSelectedPhrasesVisible, bgImage, currentId, deselectedPhraseId, didClickNext, didClickPlaySound, didClickValidate, didLaunch, expectedPhrases, hasFailure, isNextAdvancing, isNextAvailable, isNextVisible, isSoundVisible, isSubtitleVisible, isValid, items, phraseVisibility, phrases, selectedPhraseId, selectedPhrases, title, recentField);
  };
  protoOf(QuizContext).toString = function () {
    return 'QuizContext(activeSound=' + this.activeSound + ', areDetailsVisible=' + this.areDetailsVisible + ', arePhrasesVisible=' + this.arePhrasesVisible + ', areSelectedPhrasesVisible=' + this.areSelectedPhrasesVisible + ', bgImage=' + this.bgImage + ', currentId=' + this.currentId + ', deselectedPhraseId=' + this.deselectedPhraseId + ', didClickNext=' + this.didClickNext + ', didClickPlaySound=' + this.didClickPlaySound + ', didClickValidate=' + this.didClickValidate + ', didLaunch=' + this.didLaunch + ', expectedPhrases=' + toString_0(this.expectedPhrases) + ', hasFailure=' + this.hasFailure + ', isNextAdvancing=' + this.isNextAdvancing + ', isNextAvailable=' + this.isNextAvailable + ', isNextVisible=' + this.isNextVisible + ', isSoundVisible=' + this.isSoundVisible + ', isSubtitleVisible=' + this.isSubtitleVisible + ', isValid=' + this.isValid + ', items=' + toString_0(this.items) + ', phraseVisibility=' + this.phraseVisibility.toString() + ', phrases=' + toString_0(this.phrases) + ', selectedPhraseId=' + this.selectedPhraseId + ', selectedPhrases=' + toString_0(this.selectedPhrases) + ', title=' + this.title + ', recentField=' + this.h6_1 + ')';
  };
  protoOf(QuizContext).hashCode = function () {
    var result = getStringHashCode(this.activeSound);
    result = imul(result, 31) + getBooleanHashCode(this.areDetailsVisible) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.arePhrasesVisible) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.areSelectedPhrasesVisible) | 0;
    result = imul(result, 31) + getStringHashCode(this.bgImage) | 0;
    result = imul(result, 31) + this.currentId | 0;
    result = imul(result, 31) + this.deselectedPhraseId | 0;
    result = imul(result, 31) + getBooleanHashCode(this.didClickNext) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.didClickPlaySound) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.didClickValidate) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.didLaunch) | 0;
    result = imul(result, 31) + hashCode(this.expectedPhrases) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.hasFailure) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isNextAdvancing) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isNextAvailable) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isNextVisible) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isSoundVisible) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isSubtitleVisible) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isValid) | 0;
    result = imul(result, 31) + hashCode(this.items) | 0;
    result = imul(result, 31) + this.phraseVisibility.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.phrases) | 0;
    result = imul(result, 31) + this.selectedPhraseId | 0;
    result = imul(result, 31) + hashCode(this.selectedPhrases) | 0;
    result = imul(result, 31) + getStringHashCode(this.title) | 0;
    result = imul(result, 31) + getStringHashCode(this.h6_1) | 0;
    return result;
  };
  protoOf(QuizContext).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuizContext))
      return false;
    var tmp0_other_with_cast = other instanceof QuizContext ? other : THROW_CCE();
    if (!(this.activeSound === tmp0_other_with_cast.activeSound))
      return false;
    if (!(this.areDetailsVisible === tmp0_other_with_cast.areDetailsVisible))
      return false;
    if (!(this.arePhrasesVisible === tmp0_other_with_cast.arePhrasesVisible))
      return false;
    if (!(this.areSelectedPhrasesVisible === tmp0_other_with_cast.areSelectedPhrasesVisible))
      return false;
    if (!(this.bgImage === tmp0_other_with_cast.bgImage))
      return false;
    if (!(this.currentId === tmp0_other_with_cast.currentId))
      return false;
    if (!(this.deselectedPhraseId === tmp0_other_with_cast.deselectedPhraseId))
      return false;
    if (!(this.didClickNext === tmp0_other_with_cast.didClickNext))
      return false;
    if (!(this.didClickPlaySound === tmp0_other_with_cast.didClickPlaySound))
      return false;
    if (!(this.didClickValidate === tmp0_other_with_cast.didClickValidate))
      return false;
    if (!(this.didLaunch === tmp0_other_with_cast.didLaunch))
      return false;
    if (!equals(this.expectedPhrases, tmp0_other_with_cast.expectedPhrases))
      return false;
    if (!(this.hasFailure === tmp0_other_with_cast.hasFailure))
      return false;
    if (!(this.isNextAdvancing === tmp0_other_with_cast.isNextAdvancing))
      return false;
    if (!(this.isNextAvailable === tmp0_other_with_cast.isNextAvailable))
      return false;
    if (!(this.isNextVisible === tmp0_other_with_cast.isNextVisible))
      return false;
    if (!(this.isSoundVisible === tmp0_other_with_cast.isSoundVisible))
      return false;
    if (!(this.isSubtitleVisible === tmp0_other_with_cast.isSubtitleVisible))
      return false;
    if (!(this.isValid === tmp0_other_with_cast.isValid))
      return false;
    if (!equals(this.items, tmp0_other_with_cast.items))
      return false;
    if (!this.phraseVisibility.equals(tmp0_other_with_cast.phraseVisibility))
      return false;
    if (!equals(this.phrases, tmp0_other_with_cast.phrases))
      return false;
    if (!(this.selectedPhraseId === tmp0_other_with_cast.selectedPhraseId))
      return false;
    if (!equals(this.selectedPhrases, tmp0_other_with_cast.selectedPhrases))
      return false;
    if (!(this.title === tmp0_other_with_cast.title))
      return false;
    if (!(this.h6_1 === tmp0_other_with_cast.h6_1))
      return false;
    return true;
  };
  function QuizItem(expected, img, phrases, sentence, snd) {
    var tmp;
    if (expected === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = [];
    } else {
      tmp = expected;
    }
    expected = tmp;
    img = img === VOID ? '' : img;
    var tmp_0;
    if (phrases === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = [];
    } else {
      tmp_0 = phrases;
    }
    phrases = tmp_0;
    sentence = sentence === VOID ? '' : sentence;
    snd = snd === VOID ? '' : snd;
    this.expected = expected;
    this.img = img;
    this.phrases = phrases;
    this.sentence = sentence;
    this.snd = snd;
  }
  protoOf(QuizItem).w8 = function (_set____db54di) {
    this.expected = _set____db54di;
  };
  protoOf(QuizItem).x8 = function () {
    return this.expected;
  };
  protoOf(QuizItem).y8 = function (_set____db54di) {
    this.img = _set____db54di;
  };
  protoOf(QuizItem).z8 = function () {
    return this.img;
  };
  protoOf(QuizItem).w7 = function (_set____db54di) {
    this.phrases = _set____db54di;
  };
  protoOf(QuizItem).x7 = function () {
    return this.phrases;
  };
  protoOf(QuizItem).a9 = function (_set____db54di) {
    this.sentence = _set____db54di;
  };
  protoOf(QuizItem).b9 = function () {
    return this.sentence;
  };
  protoOf(QuizItem).c9 = function (_set____db54di) {
    this.snd = _set____db54di;
  };
  protoOf(QuizItem).d9 = function () {
    return this.snd;
  };
  protoOf(QuizItem).n3 = function () {
    return this.expected;
  };
  protoOf(QuizItem).o3 = function () {
    return this.img;
  };
  protoOf(QuizItem).u4 = function () {
    return this.phrases;
  };
  protoOf(QuizItem).v4 = function () {
    return this.sentence;
  };
  protoOf(QuizItem).w4 = function () {
    return this.snd;
  };
  protoOf(QuizItem).e9 = function (expected, img, phrases, sentence, snd) {
    return new QuizItem(expected, img, phrases, sentence, snd);
  };
  protoOf(QuizItem).copy = function (expected, img, phrases, sentence, snd, $super) {
    expected = expected === VOID ? this.expected : expected;
    img = img === VOID ? this.img : img;
    phrases = phrases === VOID ? this.phrases : phrases;
    sentence = sentence === VOID ? this.sentence : sentence;
    snd = snd === VOID ? this.snd : snd;
    return $super === VOID ? this.e9(expected, img, phrases, sentence, snd) : $super.e9.call(this, expected, img, phrases, sentence, snd);
  };
  protoOf(QuizItem).toString = function () {
    return 'QuizItem(expected=' + toString_0(this.expected) + ', img=' + this.img + ', phrases=' + toString_0(this.phrases) + ', sentence=' + this.sentence + ', snd=' + this.snd + ')';
  };
  protoOf(QuizItem).hashCode = function () {
    var result = hashCode(this.expected);
    result = imul(result, 31) + getStringHashCode(this.img) | 0;
    result = imul(result, 31) + hashCode(this.phrases) | 0;
    result = imul(result, 31) + getStringHashCode(this.sentence) | 0;
    result = imul(result, 31) + getStringHashCode(this.snd) | 0;
    return result;
  };
  protoOf(QuizItem).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuizItem))
      return false;
    var tmp0_other_with_cast = other instanceof QuizItem ? other : THROW_CCE();
    if (!equals(this.expected, tmp0_other_with_cast.expected))
      return false;
    if (!(this.img === tmp0_other_with_cast.img))
      return false;
    if (!equals(this.phrases, tmp0_other_with_cast.phrases))
      return false;
    if (!(this.sentence === tmp0_other_with_cast.sentence))
      return false;
    if (!(this.snd === tmp0_other_with_cast.snd))
      return false;
    return true;
  };
  function QuizPhraseVisibility(id, isVisible) {
    id = id === VOID ? 0 : id;
    isVisible = isVisible === VOID ? false : isVisible;
    this.id = id;
    this.isVisible = isVisible;
  }
  protoOf(QuizPhraseVisibility).f9 = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(QuizPhraseVisibility).g9 = function () {
    return this.id;
  };
  protoOf(QuizPhraseVisibility).h9 = function (_set____db54di) {
    this.isVisible = _set____db54di;
  };
  protoOf(QuizPhraseVisibility).i9 = function () {
    return this.isVisible;
  };
  protoOf(QuizPhraseVisibility).n3 = function () {
    return this.id;
  };
  protoOf(QuizPhraseVisibility).o3 = function () {
    return this.isVisible;
  };
  protoOf(QuizPhraseVisibility).j9 = function (id, isVisible) {
    return new QuizPhraseVisibility(id, isVisible);
  };
  protoOf(QuizPhraseVisibility).copy = function (id, isVisible, $super) {
    id = id === VOID ? this.id : id;
    isVisible = isVisible === VOID ? this.isVisible : isVisible;
    return $super === VOID ? this.j9(id, isVisible) : $super.j9.call(this, id, isVisible);
  };
  protoOf(QuizPhraseVisibility).toString = function () {
    return 'QuizPhraseVisibility(id=' + this.id + ', isVisible=' + this.isVisible + ')';
  };
  protoOf(QuizPhraseVisibility).hashCode = function () {
    var result = this.id;
    result = imul(result, 31) + getBooleanHashCode(this.isVisible) | 0;
    return result;
  };
  protoOf(QuizPhraseVisibility).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuizPhraseVisibility))
      return false;
    var tmp0_other_with_cast = other instanceof QuizPhraseVisibility ? other : THROW_CCE();
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!(this.isVisible === tmp0_other_with_cast.isVisible))
      return false;
    return true;
  };
  function get_QUIZ_FAILURE_MESSAGE() {
    return QUIZ_FAILURE_MESSAGE;
  }
  var QUIZ_FAILURE_MESSAGE;
  function get_QUIZ_FAILURE_TITLE() {
    return QUIZ_FAILURE_TITLE;
  }
  var QUIZ_FAILURE_TITLE;
  function get_QUIZ_NEXT_TITLE1() {
    return QUIZ_NEXT_TITLE1;
  }
  var QUIZ_NEXT_TITLE1;
  function get_QUIZ_NEXT_TITLE2() {
    return QUIZ_NEXT_TITLE2;
  }
  var QUIZ_NEXT_TITLE2;
  function get_QUIZ_SND_CORRECT() {
    return QUIZ_SND_CORRECT;
  }
  var QUIZ_SND_CORRECT;
  function get_QUIZ_SND_WRONG() {
    return QUIZ_SND_WRONG;
  }
  var QUIZ_SND_WRONG;
  function quizShouldPlaySound(c) {
    if (c.h6_1 === 'didClickPlaySound') {
      c.activeSound = c.items[c.currentId].snd;
      c.h6_1 = 'activeSound';
      return c;
    }
    if (c.h6_1 === 'hasFailure') {
      c.activeSound = QUIZ_SND_WRONG;
      c.h6_1 = 'activeSound';
      return c;
    }
    var tmp;
    if (c.h6_1 === 'isValid' && c.isValid) {
      // Inline function 'kotlin.collections.isEmpty' call
      tmp = !(c.phrases.length === 0);
    } else {
      tmp = false;
    }
    if (tmp) {
      c.activeSound = QUIZ_SND_CORRECT;
      c.h6_1 = 'activeSound';
      return c;
    }
    if (c.h6_1 === 'currentId') {
      c.activeSound = c.items[c.currentId].snd;
      c.h6_1 = 'activeSound';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetBGImage(c) {
    if (c.h6_1 === 'currentId') {
      c.bgImage = c.items[c.currentId].img;
      c.h6_1 = 'bgImage';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetCurrentId(c) {
    if (c.h6_1 === 'items') {
      c.currentId = 0;
      c.h6_1 = 'currentId';
      return c;
    }
    if (c.h6_1 === 'didClickNext' && c.isValid && (c.currentId + 1 | 0) <= c.items.length) {
      c.currentId = c.currentId + 1 | 0;
      c.h6_1 = 'currentId';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetDetailsVisibility(c) {
    if (c.h6_1 === 'currentId' && c.currentId === 0) {
      c.areDetailsVisible = true;
      c.h6_1 = 'areDetailsVisible';
      return c;
    }
    if (c.h6_1 === 'currentId' && c.currentId === 1) {
      c.areDetailsVisible = false;
      c.h6_1 = 'areDetailsVisible';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetExpectedPhrases(c) {
    if (c.h6_1 === 'currentId') {
      c.expectedPhrases = c.items[c.currentId].expected;
      c.h6_1 = 'expectedPhrases';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetFailure(c) {
    if (c.h6_1 === 'isValid' && !c.isValid && !c.isNextAdvancing) {
      c.hasFailure = true;
      c.h6_1 = 'hasFailure';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetItems(c) {
    if (c.h6_1 === 'didLaunch') {
      c.items = quizItems();
      c.h6_1 = 'items';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetNextAdvancing(c) {
    if (c.h6_1 === 'isValid' && c.isValid) {
      c.isNextAdvancing = true;
      c.h6_1 = 'isNextAdvancing';
      return c;
    }
    if (c.h6_1 === 'currentId') {
      c.isNextAdvancing = false;
      c.h6_1 = 'isNextAdvancing';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetNextAvailability(c) {
    if (c.h6_1 === 'selectedPhrases') {
      var tmp = c;
      // Inline function 'kotlin.collections.isEmpty' call
      tmp.isNextAvailable = !(c.selectedPhrases.length === 0);
      c.h6_1 = 'isNextAvailable';
      return c;
    }
    if (c.h6_1 === 'currentId' && c.currentId === 0) {
      c.isNextAvailable = true;
      c.h6_1 = 'isNextAvailable';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetNextVisibility(c) {
    if (c.h6_1 === 'currentId') {
      c.isNextVisible = !(c.currentId === (c.items.length - 1 | 0));
      c.h6_1 = 'isNextVisible';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetPhrases(c) {
    if (c.h6_1 === 'currentId') {
      c.phrases = c.items[c.currentId].phrases;
      c.h6_1 = 'phrases';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetPhrasesVisibility(c) {
    if (c.h6_1 === 'currentId' && c.currentId === 0) {
      c.arePhrasesVisible = false;
      c.h6_1 = 'arePhrasesVisible';
      return c;
    }
    if (c.h6_1 === 'currentId' && c.currentId === 1) {
      c.arePhrasesVisible = true;
      c.h6_1 = 'arePhrasesVisible';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetSelectedPhrases(c) {
    if (c.h6_1 === 'selectedPhraseId' && !contains_0(c.selectedPhrases, c.selectedPhraseId)) {
      var tmp = c;
      var tmp0 = c.selectedPhrases;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = [c.selectedPhraseId];
      tmp.selectedPhrases = tmp0.concat(tmp$ret$3);
      c.h6_1 = 'selectedPhrases';
      return c;
    }
    if (c.h6_1 === 'didLaunch') {
      c.h6_1 = 'selectedPhrases';
      return c;
    }
    if (c.h6_1 === 'deselectedPhraseId') {
      var tmp_0 = c;
      // Inline function 'kotlin.collections.filter' call
      var tmp0_0 = c.selectedPhrases;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var inductionVariable = 0;
      var last = tmp0_0.length;
      while (inductionVariable < last) {
        var element = tmp0_0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (!(element === c.deselectedPhraseId)) {
          destination.d1(element);
        }
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0.selectedPhrases = copyToArray(destination);
      c.h6_1 = 'selectedPhrases';
      return c;
    }
    if (c.h6_1 === 'didClickNext' && c.isValid) {
      var tmp_1 = c;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1.selectedPhrases = [];
      c.h6_1 = 'selectedPhrases';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetSelectedPhrasesVisibility(c) {
    if (c.h6_1 === 'currentId' && c.currentId === 0) {
      c.areSelectedPhrasesVisible = false;
      c.h6_1 = 'areSelectedPhrasesVisible';
      return c;
    }
    if (c.h6_1 === 'currentId' && c.currentId === 1) {
      c.areSelectedPhrasesVisible = true;
      c.h6_1 = 'areSelectedPhrasesVisible';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetPhraseVisibility(c) {
    if (c.h6_1 === 'selectedPhraseId') {
      c.phraseVisibility = new QuizPhraseVisibility(c.selectedPhraseId, false);
      c.h6_1 = 'phraseVisibility';
      return c;
    }
    if (c.h6_1 === 'deselectedPhraseId') {
      c.phraseVisibility = new QuizPhraseVisibility(c.deselectedPhraseId, true);
      c.h6_1 = 'phraseVisibility';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetSoundVisibility(c) {
    if (c.h6_1 === 'activeSound') {
      var tmp = c;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = c.activeSound;
      tmp.isSoundVisible = !(charSequenceLength(this_0) === 0);
      c.h6_1 = 'isSoundVisible';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetSubtitleVisibility(c) {
    if (c.h6_1 === 'currentId' && c.currentId === 1) {
      c.isSubtitleVisible = false;
      c.h6_1 = 'isSubtitleVisible';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetTitle(c) {
    if (c.h6_1 === 'currentId') {
      c.title = c.items[c.currentId].sentence;
      c.h6_1 = 'title';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizShouldResetValidity(c) {
    if (c.h6_1 === 'didClickNext' && !c.isValid && !c.isNextAdvancing) {
      c.isValid = quizArePhrasesEqual(c.selectedPhrases, c.expectedPhrases);
      c.h6_1 = 'isValid';
      return c;
    }
    if (c.h6_1 === 'didClickNext' && c.isValid && c.isNextAdvancing) {
      c.isValid = false;
      c.h6_1 = 'isValid';
      return c;
    }
    if (c.h6_1 === 'currentId' && c.currentId === 0) {
      c.isValid = true;
      c.h6_1 = 'isValid';
      return c;
    }
    c.h6_1 = 'none';
    return c;
  }
  function quizArePhrasesEqual(arr1, arr2) {
    if (!(arr1.length === arr2.length)) {
      return false;
    }
    var inductionVariable = 0;
    var last = arr1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var val1 = arr1[i];
        var val2 = arr2[i];
        if (!(val1 === val2)) {
          return false;
        }
      }
       while (inductionVariable <= last);
    return true;
  }
  function quizItems() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = [];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [];
    var tmp_0 = new QuizItem(tmp, 'quiz.start.end.jpg', tmp$ret$5, '\u041F\u0440\u0438\u043C\u0435\u0440 \u0442\u0440\u0435\u043D\u0430\u0436\u0451\u0440\u0430', '');
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [5, 2];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = ['\u043F\u043E\u0442\u0435\u0440\u044F\u043B', '\u043E\u043F\u043B\u0430\u0442\u0438\u043B\u0438', '\u0441\u0431\u0435\u0436\u0430\u043B\u0430', '\u041E\u043D', '\u0431\u0438\u043B\u0435\u0442', '\u041E\u043D\u0430', '\u0432', '\u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435', '\u041E\u043D\u0438', '\u0442\u0430\u043A\u0441\u0438'];
    var tmp_2 = new QuizItem(tmp_1, 'quiz.01.jpg', tmp$ret$11, '\u5979\u9003\u4E86', 'quiz.01.ogg');
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = [9, 1, 6];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$17 = ['\u043F\u043E\u043A\u0430\u0436\u0435\u0442', '\u043C\u043E\u0436\u0435\u0448\u044C', '\u041E\u043D', '\u0435\u0433\u043E', '\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0441 \u043D\u0435\u0439', '\u043F\u043E\u0439\u043C\u0451\u0448\u044C', '\u0443\u0441\u043F\u0435\u0442\u044C', '\u0421\u043A\u043E\u0440\u043E', '\u043F\u043E\u0447\u0435\u043C\u0443', '\u0422\u044B'];
    var tmp_4 = new QuizItem(tmp_3, 'quiz.02.jpg', tmp$ret$17, '\u4F60\u80FD\u8D76\u5230', 'quiz.02.ogg');
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = [4];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$23 = ['\u041D\u0435\u0442', '\u043F\u0440\u043E\u0431\u043B\u0435\u043C', '\u0442\u044B', '\u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B', '\u041D\u0435\u0432\u0430\u0436\u043D\u043E', '\u0441\u043E\u0437\u0434\u0430\u043B', '\u041F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E', '\u0435\u0441\u0442\u044C \u043F\u0440\u0438\u0447\u0438\u043D\u044B', '\u0440\u0430\u043D\u0435\u0435', '\u041F\u043E\u0447\u0435\u043C\u0443'];
    var tmp_6 = new QuizItem(tmp_5, 'quiz.03.jpg', tmp$ret$23, '\u6CA1\u5173\u7CFB', 'quiz.03.ogg');
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_7 = [9, 0, 5, 4];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$29 = ['\u0437\u0430', '\u0447\u0451\u0440\u043D\u044B\u043C', '\u043A\u043E\u043C\u043D\u0430\u0442\u043E\u0439', '\u043C\u0430\u0448\u0438\u043D\u043E\u0439', '\u043A\u0440\u043E\u043B\u0438\u043A\u043E\u043C', '\u0431\u0435\u043B\u044B\u043C', '\u0441\u043E\u0437\u0434\u0430\u043B', '\u0432', '\u0425\u043E\u0440\u043E\u0448\u043E', '\u0421\u043B\u0435\u0434\u0443\u0439'];
    var tmp_8 = new QuizItem(tmp_7, 'quiz.04.jpg', tmp$ret$29, '\u8DDF\u968F\u767D\u5154', 'quiz.04.ogg');
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = [];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$35 = [];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp_0, tmp_2, tmp_4, tmp_6, tmp_8, new QuizItem(tmp_9, 'quiz.start.end.jpg', tmp$ret$35, '\u041A\u043E\u043D\u0435\u0446 \u043F\u0440\u0438\u043C\u0435\u0440\u0430', '')];
  }
  function registerOneliners(ctrl, items) {
    var halfCount = items.length / 2 | 0;
    var inductionVariable = 0;
    if (inductionVariable < halfCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = items[imul(i, 2)];
        var field = typeof tmp === 'string' ? tmp : THROW_CCE();
        var tmp_0 = items[imul(i, 2) + 1 | 0];
        var callback = typeof tmp_0 === 'function' ? tmp_0 : THROW_CCE();
        ctrl.registerFieldCallback(field, callback);
      }
       while (inductionVariable < halfCount);
  }
  //region block: post-declaration
  protoOf(BankContext).fieldAny = fieldAny;
  defineProp(protoOf(BankContext), 'recentField', function () {
    return this.q3();
  }, function (value) {
    this.p3(value);
  });
  protoOf(BudgetContext).fieldAny = fieldAny;
  defineProp(protoOf(BudgetContext), 'recentField', function () {
    return this.q3();
  }, function (value) {
    this.p3(value);
  });
  protoOf(QuizContext).fieldAny = fieldAny;
  defineProp(protoOf(QuizContext), 'recentField', function () {
    return this.q3();
  }, function (value) {
    this.p3(value);
  });
  //endregion
  //region block: init
  BUDGET_INITIAL_BUDGET = 30000.0;
  BUDGET_RESULT_DATE_T = '<b>%DATE%<\/b>';
  BUDGET_RESULT_OVERRUN_T = '\u041F\u0435\u0440\u0435\u0440\u0430\u0441\u0445\u043E\u0434: %VALUE%';
  BUDGET_RESULT_WEEKDAY_T = '\u0411\u0443\u0434\u043D\u0438: %SPENT% / %BALANCE% %PERCENT%';
  BUDGET_RESULT_WEEKEND_T = '\u0412\u044B\u0445\u043E\u0434\u043D\u044B\u0435: %SPENT% / %BALANCE% %PERCENT%';
  BUDGET_WEEKDAY_MON = 1;
  BUDGET_WEEKDAY_TUE = 2;
  BUDGET_WEEKDAY_WED = 3;
  BUDGET_WEEKDAY_THU = 4;
  BUDGET_WEEKDAY_FRI = 5;
  BUDGET_WEEKDAY_SAT = 6;
  BUDGET_WEEKDAY_SUN = 7;
  QUIZ_FAILURE_MESSAGE = '\u0414\u0430\u0432\u0430\u0439 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0435\u043C \u0435\u0449\u0451 \u0440\u0430\u0437!';
  QUIZ_FAILURE_TITLE = '\u0427\u0443\u0442\u044C-\u0447\u0443\u0442\u044C \u043C\u0438\u043C\u043E';
  QUIZ_NEXT_TITLE1 = '\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C';
  QUIZ_NEXT_TITLE2 = '\u0414\u0430\u043B\u0435\u0435';
  QUIZ_SND_CORRECT = 'quiz.correct.ogg';
  QUIZ_SND_WRONG = 'quiz.wrong.ogg';
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $ru = _.ru || (_.ru = {});
    var $ru$kornerr = $ru.kornerr || ($ru.kornerr = {});
    var $ru = _.ru || (_.ru = {});
    var $ru$kornerr = $ru.kornerr || ($ru.kornerr = {});
    $ru$kornerr.CLDController = CLDController;
    var $ru = _.ru || (_.ru = {});
    var $ru$kornerr = $ru.kornerr || ($ru.kornerr = {});
    $ru$kornerr.bankShouldLoad = bankShouldLoad;
    $ru$kornerr.bankShouldResetCBRDate = bankShouldResetCBRDate;
    $ru$kornerr.bankShouldResetCurrencies = bankShouldResetCurrencies;
    $ru$kornerr.bankShouldResetLoading = bankShouldResetLoading;
    var $ru = _.ru || (_.ru = {});
    var $ru$kornerr = $ru.kornerr || ($ru.kornerr = {});
    $ru$kornerr.budgetShouldResetResult = budgetShouldResetResult;
    var $ru = _.ru || (_.ru = {});
    var $ru$kornerr = $ru.kornerr || ($ru.kornerr = {});
    $ru$kornerr.BankContext = BankContext;
    $ru$kornerr.BudgetContext = BudgetContext;
    $ru$kornerr.Currency = Currency;
    $ru$kornerr.NetRequest = NetRequest;
    $ru$kornerr.NetResponse = NetResponse;
    $ru$kornerr.QuizContext = QuizContext;
    $ru$kornerr.QuizItem = QuizItem;
    $ru$kornerr.QuizPhraseVisibility = QuizPhraseVisibility;
    var $ru = _.ru || (_.ru = {});
    var $ru$kornerr = $ru.kornerr || ($ru.kornerr = {});
    defineProp($ru$kornerr, 'QUIZ_FAILURE_MESSAGE', get_QUIZ_FAILURE_MESSAGE);
    defineProp($ru$kornerr, 'QUIZ_FAILURE_TITLE', get_QUIZ_FAILURE_TITLE);
    defineProp($ru$kornerr, 'QUIZ_NEXT_TITLE1', get_QUIZ_NEXT_TITLE1);
    defineProp($ru$kornerr, 'QUIZ_NEXT_TITLE2', get_QUIZ_NEXT_TITLE2);
    defineProp($ru$kornerr, 'QUIZ_SND_CORRECT', get_QUIZ_SND_CORRECT);
    defineProp($ru$kornerr, 'QUIZ_SND_WRONG', get_QUIZ_SND_WRONG);
    $ru$kornerr.quizShouldPlaySound = quizShouldPlaySound;
    $ru$kornerr.quizShouldResetBGImage = quizShouldResetBGImage;
    $ru$kornerr.quizShouldResetCurrentId = quizShouldResetCurrentId;
    $ru$kornerr.quizShouldResetDetailsVisibility = quizShouldResetDetailsVisibility;
    $ru$kornerr.quizShouldResetExpectedPhrases = quizShouldResetExpectedPhrases;
    $ru$kornerr.quizShouldResetFailure = quizShouldResetFailure;
    $ru$kornerr.quizShouldResetItems = quizShouldResetItems;
    $ru$kornerr.quizShouldResetNextAdvancing = quizShouldResetNextAdvancing;
    $ru$kornerr.quizShouldResetNextAvailability = quizShouldResetNextAvailability;
    $ru$kornerr.quizShouldResetNextVisibility = quizShouldResetNextVisibility;
    $ru$kornerr.quizShouldResetPhrases = quizShouldResetPhrases;
    $ru$kornerr.quizShouldResetPhrasesVisibility = quizShouldResetPhrasesVisibility;
    $ru$kornerr.quizShouldResetSelectedPhrases = quizShouldResetSelectedPhrases;
    $ru$kornerr.quizShouldResetSelectedPhrasesVisibility = quizShouldResetSelectedPhrasesVisibility;
    $ru$kornerr.quizShouldResetPhraseVisibility = quizShouldResetPhraseVisibility;
    $ru$kornerr.quizShouldResetSoundVisibility = quizShouldResetSoundVisibility;
    $ru$kornerr.quizShouldResetSubtitleVisibility = quizShouldResetSubtitleVisibility;
    $ru$kornerr.quizShouldResetTitle = quizShouldResetTitle;
    $ru$kornerr.quizShouldResetValidity = quizShouldResetValidity;
    var $ru = _.ru || (_.ru = {});
    var $ru$kornerr = $ru.kornerr || ($ru.kornerr = {});
    $ru$kornerr.registerOneliners = registerOneliners;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=kornerr-ver-browser.js.map
