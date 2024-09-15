document.addEventListener('DOMContentLoaded', function() {
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const responseDiv = document.getElementById('responseDiv');
    const loadingMessage = document.getElementById('loadingMessage');
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);
    });

    // Check if the elements are being accessed correctly
    console.log(sendBtn, userInput, responseDiv, loadingMessage); // Debug log

    // Send message on button click
    sendBtn.addEventListener('click', sendMessage);

    // Send message on Enter key press
    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        console.log('sendMessage function called'); // Debug log
        const message = userInput.value.trim();
        
        if (message === '') {
            console.log('No message input'); // Log if no input is entered
            return;
        }

        addUserMessage(message);
        userInput.value = ''; // Clear input box
        showLoadingMessage();

        // Send a POST request to the server
    fetch('/api/gpt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: message }), // Send the user's message
    })
    .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text(); // Read response as text
    })
    .then((aiResponse) => {
        hideLoadingMessage();
        addAIMessage(aiResponse); // Add full response to chat
    })
    .catch((error) => {
        console.error('Error:', error);
        hideLoadingMessage();
        addAIMessage("An error occurred during the network request.");
    });
}
    function addUserMessage(message) {
        console.log('Adding user message to responseDiv:', message); // Debug log
        const userBubble = document.createElement('div');
        userBubble.className = 'response-bubble user-bubble';
        userBubble.textContent = message;
        responseDiv.appendChild(userBubble);
        responseDiv.scrollTop = responseDiv.scrollHeight; // Auto-scroll to the bottom
    }

function addAIMessage(message) {
   console.log('Adding AI message to responseDiv:', message);

   const botBubble = document.createElement('div');
   botBubble.className = 'response-bubble bot-bubble';

   // Convert Markdown to HTML
   const htmlContent = marked.parse(message);

   // Sanitize the HTML
   botBubble.innerHTML = DOMPurify.sanitize(htmlContent);

   // Append the message to the chat
   responseDiv.appendChild(botBubble);
   responseDiv.scrollTop = responseDiv.scrollHeight; // Auto-scroll to the bottom
}

    function showLoadingMessage() {
        console.log('Showing loading message'); // Debug log
        loadingMessage.style.display = 'block';
    }

    function hideLoadingMessage() {
        console.log('Hiding loading message'); // Debug log
        loadingMessage.style.display = 'none';
    }
});

// Saving user preference
darkModeToggle.checked = localStorage.getItem('darkMode') === 'true';
document.body.classList.toggle('dark-mode', darkModeToggle.checked);

// Event listener
darkModeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
    localStorage.setItem('darkMode', this.checked);
});

