import { toast } from "react-toastify";

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
var port = chrome.runtime.connect({ name: "TypeOfUser" });
//This line opens up a long-lived connection to your background page.
port.onMessage.addListener(function (message) {
    if (message.type === "expert") {
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
            },
            true
        );
    } else if (message.type == "novice") {
        document.body.addEventListener("click", function (e) {
            if (e.target.textContent != "" && e.target.textContent != null) {
                let docs = e.target.textContent;
                chrome.runtime.sendMessage({
                    message: "TrackNovice",
                    docs,
                });
            } else if (
                e.target.getAttribute("aria-label") != "" &&
                e.target.getAttribute("aria-label") != null
            ) {
                let docs = e.target.getAttribute("aria-label");
                chrome.runtime.sendMessage({
                    message: "TrackNovice",
                    docs,
                });
            } else {
                BFS(e.target);
            }
        });
    }
});

chrome.runtime.onMessage.addListener(function (request) {
    if (request.msg == "Recommend") {
        console.log(request.Recommender);
        toast.success(
            "the system is Recommend for you to click  " + request.Recommender
        );
        //alert(request.Recommender);
    }
});
