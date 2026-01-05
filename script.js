// Copy to clipboard functionality
function copyToClipboard(elementId, urlBox) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    const button = urlBox.querySelector('.copy-btn');

    // Use modern clipboard API
    navigator.clipboard.writeText(text).then(() => {
        // Visual feedback
        const originalText = button.textContent;
        button.textContent = '✓ Copied!';
        button.classList.add('copied');

        // Reset after 2 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
            button.textContent = '✓ Copied!';
            button.classList.add('copied');

            setTimeout(() => {
                button.textContent = 'Copy';
                button.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            button.textContent = '✗ Failed';
        }

        document.body.removeChild(textArea);
    });
}

// Optional: Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
