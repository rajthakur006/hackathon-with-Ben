document.addEventListener('DOMContentLoaded', () => {
    // --- Get all the new elements ---
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const newChatBtn = document.getElementById('new-chat-btn');
    // ... (other elements are the same)

    // --- NEW: MENU TOGGLE LOGIC ---
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // All your other existing JavaScript functions go here
    // (startNewChat, loadHistorySidebar, sendMessage, etc.)
    // No changes are needed for them yet.

    let currentSessionId = null;

    const loadHistorySidebar = async () => { /* ... same as before ... */ };
    const loadChat = async (sessionId) => { /* ... same as before ... */ };
    const startNewChat = async () => { /* ... same as before ... */ };
    const sendMessage = async () => { /* ... same as before ... */ };
    const appendMessage = (sender, text) => { /* ... same as before ... */ };
    const speakText = (text) => { /* ... same as before ... */ };
    // ... (and the speech recognition logic)

    // Event Listeners
    newChatBtn.addEventListener('click', startNewChat);
    // ... (other listeners)

    // Initial Load
    loadHistorySidebar();
    startNewChat();
});