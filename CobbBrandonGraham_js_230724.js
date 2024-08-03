document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('editor');
    const fileInput = document.getElementById('fileInput');

    // Initialize CodeMirror
    const editor = CodeMirror.fromTextArea(textarea, {
        lineNumbers: true,
        mode: "stex",
        theme: "mdn-like",
    });

    // Load saved content from localStorage
    if (localStorage.getItem('nanoContent')) {
        editor.setValue(localStorage.getItem('nanoContent'));
    }

    // Save content to localStorage on change
    editor.on('change', () => {
        localStorage.setItem('nanoContent', editor.getValue());
    });

    // Keyboard shortcuts
    editor.setOption('extraKeys', {
        'Ctrl-S': () => {
            localStorage.setItem('nanoContent', editor.getValue());
            alert('Content saved!');
        },
        'Ctrl-O': () => {
            fileInput.click();
        },
        'Ctrl-N': () => {
            editor.setValue('');
        }
    });

    // File open handling
    document.getElementById('openFile').addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                editor.setValue(e.target.result);
            };
            reader.readAsText(file);
        }
    });

    // File save handling
    document.getElementById('saveFile').addEventListener('click', () => {
        const content = editor.getValue();
        if (content) {
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'file.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } else {
            alert('No content to save!');
        }
    });
});
