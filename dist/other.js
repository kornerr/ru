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

// Сообщить об ошибке модальным окном
function reportFailure(title, details) {
    let html = `
<h2>${title}</h2>
<p>${details}</p>
    `;
    UIkit.modal.alert(html);
}

// Задать доступность элемента
function setUIAvailability(id, isAvailable) {
    let el = deId(id);
    el.disabled = !isAvailable;
}

// Задать наличие реакции на курсор мыши, парящий над элементом
function setUICardHoverPermission(id, isPermitted) {
    let el = deId(id);
    // Permitted
    if (isPermitted) {
        el.classList.add("uk-card-hover");
    }
    // Forbidden
    if (!isPermitted) {
        el.classList.remove("uk-card-hover");
    }
}

// Задать значение полю ввода
function setUIInputValue(id, value) {
    let el = deId(id);
    if (el != null) {
        el.value = value;
    }
}

// Задать заглушённый фон элементу
function setUIMuted(id, isMuted) {
    let el = deId(id);
    // Mute
    if (isMuted) {
        el.classList.add("uk-background-muted");
    }
    // Show
    if (!isMuted) {
        el.classList.remove("uk-background-muted");
    }
}

// Задать текст элементу UI
function setUIText(id, text) {
    let el = deId(id);
    if (el != null) {
        el.innerHTML = text;
    }
}

// Задать прозрачный цвет элементу
function setUITransparent(id, isTransparent) {
    let el = deId(id);
    // Прозрачный
    if (isTransparent) {
        el.classList.add("transparentColor");
    }
    // Непроницаемый
    if (!isTransparent) {
        el.classList.remove("transparentColor");
    }
}

// Задать видимость элемента
function setUIVisibility(id, isVisible) {
    let el = deId(id);
    // Скрыть
    if (!isVisible) {
        el.setAttribute("hidden", true);
    }
    // Показать
    if (
        isVisible &&
        el.hasAttribute("hidden")
    ) {
        el.removeAttribute("hidden");
    }
}

