chrome.runtime.onInstalled.addListener(function () {
    chrome.tabs.create(
        { url: chrome.extension.getURL("onInstalled.html") },
        function () {}
    );
});

// first we want to check local storage for type of user to send it to content
var type = localStorage.getItem("TypeOfUser");
if (type == "expert") {
    alert(type);
    chrome.runtime.onConnect.addListener(function (port) {
        port.postMessage({ type: "expert" });
    });
} else if (type == "novice") {
    alert(type);
    chrome.runtime.onConnect.addListener(function (port) {
        port.postMessage({ type: "novice" });
    });
} else {
}

let myMap = new Map();

function make_abbreviation(content) {
    var result =
        content.substring(0, 2) + content.substring(content.length - 1);
    while (checkIfExist(content, result)) {
        content += "1";
    }
    myMap.set(content, result);
    return result;
}
function checkIfExist(ke, va) {
    let exist = sessionStorage.getItem(ke);
    if (exist === null) {
        return false;
    } else {
        return true;
    }
}
function new_button(recieved_button, length) {
    if (sessionStorage.getItem(recieved_button) === null)
        return recieved_button;
    else {
        length = 2;
        var result = "";
        var characters = "0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return recieved_button + result;
    }
}

function check_length(ke) {
    if (ke.length > 40) {
        return false;
    } else {
        return true;
    }
}
var count = 1;
function storeDataSessionStorage(recieved_button) {
    let result = recieved_button.split(" ").join("-|-");
    sessionStorage.setItem(count, result);
    count++;
}

// this is string contain buttons name;
var hello = " ";
function store_in_string_var(recieved_button) {
    let result = recieved_button.split(" ").join("-|-");
    hello += result + " ";
    console.log(hello);
}

function SessionStorageToServer(sequence) {
    let token = localStorage.getItem("token");
    $.ajax({
        headers: {
            Authorization: `Token ` + token,
        },
        url: "http://127.0.0.1:8000/api/logs/",
        method: "POST",
        data: {
            logs: sequence,
        },
    });
}
chrome.runtime.onMessage.addListener((request, sender, senderResponse) => {
    switch (request.message) {
        case "save_text": {
            let recieved_button = request.docs;
            let check_recieved_button = check_length(recieved_button);
            //let abbreviation = make_abbreviation(recieved_button);
            if (check_recieved_button) {
                //let if_new_button = new_button(recieved_button, length);
                //storeDataSessionStorage(if_new_button, abbreviation);
                storeDataSessionStorage(recieved_button);
                store_in_string_var(recieved_button);
            }
            break;
        }
        case "end_seq": {
            hello += "-2";
            SessionStorageToServer(hello);
            alert(hello);
            hello = " ";
            count = 1;
            sessionStorage.clear();
            break;
        }
        default:
            alert("Unknown message recieved.");
    }
});
