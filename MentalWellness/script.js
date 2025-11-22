// Breathing exercise functionality
let breathingInterval;

function startBreathingExercise() {
    const modal = document.getElementById('breathing-modal');
    modal.classList.remove('hidden');
}

function closeBreathingModal() {
    const modal = document.getElementById('breathing-modal');
    modal.classList.add('hidden');
    clearInterval(breathingInterval);
    // Reset text
    document.getElementById('breathing-instruction').textContent = "Click start to begin";
    document.getElementById('start-breathing').style.display = 'inline-block';
}

function startBreathing() {
    const instruction = document.getElementById('breathing-instruction');
    const startBtn = document.getElementById('start-breathing');
    startBtn.style.display = 'none';

    let phase = 0; // 0: inhale, 1: hold, 2: exhale, 3: hold
    const phases = ['Breathe in...', 'Hold...', 'Breathe out...', 'Hold...'];
    const durations = [4000, 2000, 4000, 2000]; // milliseconds

    function nextPhase() {
        instruction.textContent = phases[phase];
        
        // Use a named timeout so we can clear it if needed, though mostly the interval handle logic handles stops
        setTimeout(() => {
            phase = (phase + 1) % 4;
            // Only continue if the modal is not hidden (simple check)
            if(!document.getElementById('breathing-modal').classList.contains('hidden')){
                nextPhase();
            }
        }, durations[phase]);
    }

    nextPhase();
}

// Mood selection functionality
function selectMood(mood) {
    const responses = {
        'great': "That's wonderful! Keep nurturing those positive feelings. Consider sharing your joy with others or practicing gratitude.",
        'good': "It's great that you're feeling good! This is a perfect time to engage in activities that bring you fulfillment.",
        'okay': "It's perfectly normal to feel okay. Consider doing something small that usually brings you comfort or joy.",
        'low': "Thank you for being honest about how you're feeling. Remember that difficult feelings are temporary. Consider reaching out to someone you trust.",
        'struggling': "I'm sorry you're going through a tough time. Your feelings are valid, and it's brave of you to acknowledge them. Please consider speaking with a mental health professional or calling a crisis helpline if you need immediate support."
    };

    const responseDiv = document.getElementById('mood-response');
    const responseText = responseDiv.querySelector('p');
    responseText.textContent = responses[mood];
    responseDiv.classList.remove('hidden');

    // Highlight selected mood
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add class to clicked button
    const selectedBtn = document.querySelector(`button[data-mood="${mood}"]`);
    if(selectedBtn) selectedBtn.classList.add('selected');
}

// Content modal functionality
function showMeditationTips() {
    const content = `
        <div style="display: flex; flex-direction: column; gap: 16px;">
            <h4 style="font-weight: 600; font-size: 1.125rem;">Simple Meditation Guide:</h4>
            <ol style="padding-left: 20px; line-height: 1.6;">
                <li>Find a quiet, comfortable place to sit</li>
                <li>Close your eyes or soften your gaze</li>
                <li>Focus on your natural breathing</li>
                <li>When your mind wanders, gently return to your breath</li>
                <li>Start with 5-10 minutes daily</li>
            </ol>
            <div style="background-color: #eff6ff; padding: 16px; border-radius: 8px;">
                <p style="color: #1e40af;"><strong>Tip:</strong> There's no "perfect" way to meditate. Be patient and kind with yourself as you learn.</p>
            </div>
        </div>
    `;
    showModal('Meditation Guide', content);
}

function showJournalingPrompts() {
    const content = `
        <div style="display: flex; flex-direction: column; gap: 16px;">
            <h4 style="font-weight: 600; font-size: 1.125rem;">Daily Journaling Prompts:</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px;">
                <li style="background-color: #f0fdf4; padding: 12px; border-radius: 8px;">💭 What am I grateful for today?</li>
                <li style="background-color: #f0fdf4; padding: 12px; border-radius: 8px;">🌟 What went well today, even if it was small?</li>
                <li style="background-color: #f0fdf4; padding: 12px; border-radius: 8px;">💪 What challenge did I overcome or make progress on?</li>
                <li style="background-color: #f0fdf4; padding: 12px; border-radius: 8px;">❤️ How did I show kindness to myself or others?</li>
                <li style="background-color: #f0fdf4; padding: 12px; border-radius: 8px;">🎯 What do I want to focus on tomorrow?</li>
            </ul>
            <div style="background-color: #dcfce7; padding: 16px; border-radius: 8px;">
                <p style="color: #166534;"><strong>Remember:</strong> Write freely without judgment. Your journal is a safe space for your thoughts.</p>
            </div>
        </div>
    `;
    showModal('Journaling Prompts', content);
}

function showCopingSkills() {
    const content = `
        <div style="display: flex; flex-direction: column; gap: 16px;">
            <h4 style="font-weight: 600; font-size: 1.125rem;">Healthy Coping Strategies:</h4>
            <div style="display: grid; gap: 16px;">
                <div style="background-color: #f3e8ff; padding: 16px; border-radius: 8px;">
                    <h5 style="font-weight: 600; color: #6b21a8;">🌬️ Breathing Techniques</h5>
                    <p style="color: #7e22ce;">Try the 4-7-8 technique: Inhale for 4, hold for 7, exhale for 8</p>
                </div>
                <div style="background-color: #f3e8ff; padding: 16px; border-radius: 8px;">
                    <h5 style="font-weight: 600; color: #6b21a8;">🏃‍♀️ Physical Activity</h5>
                    <p style="color: #7e22ce;">Even a 10-minute walk can help reduce stress and improve mood</p>
                </div>
                <div style="background-color: #f3e8ff; padding: 16px; border-radius: 8px;">
                    <h5 style="font-weight: 600; color: #6b21a8;">🎵 Creative Expression</h5>
                    <p style="color: #7e22ce;">Listen to music, draw, write, or engage in any creative activity</p>
                </div>
                <div style="background-color: #f3e8ff; padding: 16px; border-radius: 8px;">
                    <h5 style="font-weight: 600; color: #6b21a8;">🤝 Social Connection</h5>
                    <p style="color: #7e22ce;">Reach out to friends, family, or support groups</p>
                </div>
            </div>
        </div>
    `;
    showModal('Coping Skills', content);
}

function showModal(title, content) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-content').innerHTML = content;
    const modal = document.getElementById('content-modal');
    modal.classList.remove('hidden');
}

function closeContentModal() {
    document.getElementById('content-modal').classList.add('hidden');
}

// Smooth scrolling for navigation links
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

// Toggle chatbot window
function toggleChatbot() {
    const bot = document.getElementById('chatbot-container');
    const btn = document.querySelector('.chat-toggle-btn');
    
    if (bot.classList.contains('hidden')) {
        bot.classList.remove('hidden');
        btn.style.display = 'none';
    } else {
        bot.classList.add('hidden');
        btn.style.display = 'block';
    }
}

// Add message to chatbox
function addMessage(sender, text) {
    const msgContainer = document.getElementById("chatbot-messages");
    const msg = document.createElement("div");
    // Apply classes based on sender
    if (sender === "user") {
        msg.className = "message-bubble msg-user";
    } else {
        msg.className = "message-bubble msg-bot";
    }
    msg.textContent = text;

    msgContainer.appendChild(msg);
    msgContainer.scrollTop = msgContainer.scrollHeight;
}

// Handle user message
function sendMessage() {
    const input = document.getElementById("chatbot-input");
    const text = input.value.trim();
    if (!text) return;

    // show user message
    addMessage("user", text);
    input.value = "";

    // AI typing simulation
    const msgContainer = document.getElementById("chatbot-messages");
    const typingMsg = document.createElement("div");
    typingMsg.className = "message-bubble msg-bot";
    typingMsg.id = "typing-indicator";
    typingMsg.textContent = "Typing...";
    msgContainer.appendChild(typingMsg);
    msgContainer.scrollTop = msgContainer.scrollHeight;

    // Dummy response
    setTimeout(() => {
        const botReplies = [
            "I'm here for you. Tell me more about what you're feeling.",
            "That sounds difficult. I'm listening.",
            "You're stronger than you think. How can I support you right now?",
            "Let's take a deep breath together. What’s on your mind?",
            "It is okay to feel this way. Naming your emotions can be a good first step."
        ];
        const reply = botReplies[Math.floor(Math.random() * botReplies.length)];

        // remove "Typing..."
        const indicator = document.getElementById("typing-indicator");
        if(indicator) indicator.remove();

        addMessage("bot", reply);
    }, 800);
}

// Allow Enter key to send message
document.getElementById("chatbot-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});