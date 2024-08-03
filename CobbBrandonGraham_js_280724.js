document.getElementById('install-button').addEventListener('click', function() {
    const extensionId = 'your_extension_id_here'; // Replace with your extension ID
    const url = `https://chrome.google.com/webstore/detail/${extensionId}`;
    window.open(url, '_blank');
});

