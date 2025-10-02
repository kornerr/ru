// Сокращённая записать получения элемента по id
function deId(id) {
    return document.getElementById(id);
}

// Загрузить данные по URL
function loadURL(p, onload, onerror) {
    console.log(`ОТЛ loadURL p.url: '${p.url}'`);
    let req = new XMLHttpRequest();
    req.open(p.method, p.url);
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    req.onerror = function(event) {
        onerror({
            contents: "",
            url: p.url,
        });
        console.log("ОТЛ loadURL onerror event/req:", event, req);
    };

    req.onload = function() {
        if (
            req.readyState == 4 &&
            req.status == 200
        ) {
            onload(req);
        } else {
            onerror({
                contents: req.responseText,
                url: p.url,
            });
            console.log("ОТЛ loadURL onload error req:", req);
        }
    };
    req.send(p.body);
};

// Задать текст элементу UI
function setUIText(id, text) {
    let el = deId(id);
    if (el != null) {
        el.innerHTML = text;
    }
}
