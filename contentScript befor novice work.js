// Queue implementation
class Queue {
    constructor() {
        this.items = [];
    }

    front() {
        // returns the Front element of
        // the queue without removing it.
        if (this.isEmpty()) return "No elements in Queue";
        return this.items[0];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return " Underflow";
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length == 0;
    }
}

//BFS algorthim for tracking
function BFS(node) {
    let q = new Queue();
    q.enqueue(node);
    while (!q.isEmpty()) {
        let currentChild = q.front();
        q.dequeue();
        let ChildBoy = currentChild.children;
        for (let i = 0; i < ChildBoy.length; i++) {
            q.enqueue(ChildBoy[i]);
            console.log(ChildBoy[i]);
        }
        if (
            currentChild.textContent != null &&
            currentChild.textContent != undefined &&
            currentChild.textContent != ""
        ) {
            docs = currentChild.textContent;
            chrome.runtime.sendMessage({ message: "save_text", docs });
            break;
        } else if (
            currentChild.getAttribute("aria-label") != "" &&
            currentChild.getAttribute("aria-label") != null &&
            currentChild.getAttribute("aria-label") != undefined
        ) {
            docs = currentChild.getAttribute("aria-label");
            chrome.runtime.sendMessage({ message: "save_text", docs });
        }
    }
}

//This line opens up a long-lived connection to your background page.
var port = chrome.runtime.connect({ name: "mycontentscript" });
port.onMessage.addListener(function (message, sender) {
    if (message.type === "expert") {
        //alert(message.type);
        document.body.addEventListener("click", function (e) {
            if (e.target.textContent != "" && e.target.textContent != null) {
                let docs = e.target.textContent;
                chrome.runtime.sendMessage({ message: "save_text", docs });
            } else if (
                e.target.getAttribute("aria-label") != "" &&
                e.target.getAttribute("aria-label") != null
            ) {
                let docs = e.target.getAttribute("aria-label");
                chrome.runtime.sendMessage({ message: "save_text", docs });
            } else {
                BFS(e.target);
            }
        });
        document.addEventListener(
            "click",
            function (event) {
                if (!event.target.closest(".css-1c7qnw8")) return;
                chrome.runtime.sendMessage({ message: "end_seq" });
                //alert("Clicked home!");
            },
            true
        );
    } else if (message.type == "novice") {
        alert("recommendation system well be avialble soon");
    } else {
        alert("uknown type");
    }
});

// recieve the type of user to know which code will run
// chrome.runtime.onMessage.addListener((request, sender, senderResponse) => {
//     console.log("blbkk");
//     switch (request.type) {
//         case "expert": {
//             alert(request.type);
//             TrackModel();
//             break;
//         }
//         case "novice": {
//             alert("recommendation system will be ready soon");
//             break;
//         }
//         default:
//             alert("i don't know what erroe");
//     }
// });
