document.addEventListener('DOMContentLoaded', function() {
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const responseDiv = document.getElementById('responseDiv');
    const loadingMessage = document.getElementById('loadingMessage');

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            sendMessage();
            event.preventDefault(); // Prevent newline on enter
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return; // Ignore empty messages

        addUserMessage(message);
        userInput.value = '';
        showLoadingMessage();

        fetch('/api/main', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ input: message }),
        })
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");

            function read() {
                return reader.read().then(({ done, value }) => {
                    if (done) {
                        hideLoadingMessage();
                        return;
                    }
                    const chunk = decoder.decode(value, { stream: true });
                    addAIMessage(chunk);
                    return read(); // Continue reading
                });
            }
            return read();
        })
        .catch(error => {
            console.error('Error:', error);
            hideLoadingMessage();
            addAIMessage("An error occurred during the network request.");
        });
    }

    function addUserMessage(message) {
        const userBubble = createBubble('user-bubble', message);
        responseDiv.appendChild(userBubble);
        scrollToBottom();
    }

    function addAIMessage(message) {
        if (!message.trim()) return; // Prevent empty messages
        const htmlContent = marked.parse(DOMPurify.sanitize(message));
        const botBubble = createBubble('bot-bubble', htmlContent);
        responseDiv.appendChild(botBubble);
        scrollToBottom();
    }

    function createBubble(type, content) {
        const bubble = document.createElement('div');
        bubble.className = `response-bubble ${type}`;
        bubble.innerHTML = content.replace(/\n/g, '<br>');
        return bubble;
    }

    function scrollToBottom() {
        responseDiv.scrollTo({ top: responseDiv.scrollHeight, behavior: 'smooth' });
    }

    function showLoadingMessage() {
        loadingMessage.style.display = 'block';
    }

    function hideLoadingMessage() {
        loadingMessage.style.display = 'none';
    }
});
