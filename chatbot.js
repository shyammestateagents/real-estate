// Simple AI Chatbot Integration
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = document.createElement('div');
    chatbot.id = 'chatbot';
    chatbot.style.position = 'fixed';
    chatbot.style.bottom = '20px';
    chatbot.style.right = '20px';
    chatbot.style.width = '300px';
    chatbot.style.height = '400px';
    chatbot.style.background = '#fff';
    chatbot.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    chatbot.style.borderRadius = '10px';
    chatbot.style.display = 'none';
    chatbot.innerHTML = `
        <div style="background: #333; color: #fff; padding: 1em; border-radius: 10px 10px 0 0;">
            Chat with us
        </div>
        <div style="padding: 1em; height: 300px; overflow-y: auto;">
            <p>Hi, how can we assist you today?</p>
        </div>
        <input type="text" placeholder="Type your message..." style="width: 100%; padding: 0.5em; border: none; border-top: 1px solid #ccc;">
    `;
    document.body.appendChild(chatbot);

    const chatbotToggle = document.createElement('button');
    chatbotToggle.textContent = 'Chat';
    chatbotToggle.style.position = 'fixed';
    chatbotToggle.style.bottom = '20px';
    chatbotToggle.style.right = '20px';
    chatbotToggle.style.background = '#333';
    chatbotToggle.style.color = '#fff';
    chatbotToggle.style.border = 'none';
    chatbotToggle.style.padding = '0.5em 1em';
    chatbotToggle.style.borderRadius = '5px';

    chatbotToggle.addEventListener('click', () => {
        chatbot.style.display = chatbot.style.display === 'none' ? 'block' : 'none';
    });

    document.body.appendChild(chatbotToggle);
});