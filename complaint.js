
const faqKeywords = [
    
    { keywords: ["washroom", "toilet", "restroom"], response: "Washrooms are located near platforms  Follow the signs." },
    { keywords: ["ticket", "book", "reservation"], response: "You can book tickets at the reservation counter. It is near office at first right turn from entrance" },
    { keywords: ["platform ", "platform one", "first platform"], response: "Platform  is straighht to main entrance of the station." },
    { keywords: ["operating hours", "open", "close", "timing"], response: "The station operates 24/7." },
    { keywords: ["customer support", "help", "contact"], response: "Call our helpline at +911234567890 for assistance." },
    { keywords: ["food stall", "food court", "eating"], response: "Yes, food stalls are available near platform and the main concourse." },
    { keywords: ["schedule", "train timings", "train schedule"], response: "You can check the schedule on the digital boards or our official app." },
    { keywords: ["inquiry desk", "office"], response: "The office is located next to the main entrance." },
    { keywords: ["wifi", "internet"], response: "Yes, free Wi-Fi is available. Connect to 'StationFreeWiFi'." },
    { keywords: ["lost item", "lost and found", "missing"], response: "Visit the lost and found desk near platform  or call +911234567890." },
    { keywords: ["parking", "car park"], response: "Parking is available near the west entrance of the station." },
    { keywords: ["waiting room", "lounge"], response: "Yes, waiting rooms are on platforms ." },
    { keywords: ["cancel ticket", "refund"], response: "Tickets can be canceled online or at the ticket counter." },
    { keywords: ["medical", "hospital", "doctor"], response: "A medical room is available near entrance." },
    { keywords: ["disabled assistance", "wheelchair", "handicapped"], response: "Contact the help desk or call +911234567890 for assistance." }
];


const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");

function findResponse(message) {
    const lowercase = message.toLowerCase();
    for (const faq of faqKeywords) {
        if (faq.keywords.some(kw => lowercase.includes(kw))) return faq.response;
    }
    return "Sorry, I don't have an answer for that.";
}

function addMessage(sender, text) {
    const messageEl = document.createElement("div");
    messageEl.className = `chat-message ${sender}-message`;
    messageEl.textContent = text;
    chatMessages.appendChild(messageEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleSend() {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        addMessage("user", userMessage);
        setTimeout(() => addMessage("support", findResponse(userMessage)), 500);
        chatInput.value = "";
    }
}

chatInput.addEventListener("keydown", e => e.key === "Enter" && handleSend());
sendButton.addEventListener("click", handleSend);
