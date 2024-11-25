
        const faqKeywords = [
            { keywords: ["washroom", "toilet"], response: "Washrooms are near platform 3." },
            { keywords: ["ticket", "book"], response: "Tickets are available online or at the counter." },
            { keywords: ["wifi"], response: "Free WiFi is available at 'StationWiFi'." }
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
   