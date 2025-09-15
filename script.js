
// Particles
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let w,h, particles=[];
function resize(){ w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight }
window.addEventListener('resize', resize); resize();
function spawn(){
  particles = Array.from({length: 90}, () => ({ 
    x: Math.random()*w, y: Math.random()*h, 
    r: Math.random()*2+0.5, 
    vx: (Math.random()-0.5)*0.2, vy:(Math.random()-0.5)*0.2, 
    a: Math.random()*1 
  }));
}
spawn();
function step(){
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle='rgba(178,108,255,0.7)';
  for(const p of particles){ 
    p.x+=p.vx; p.y+=p.vy; 
    if(p.x<0||p.x>w) p.vx*=-1; 
    if(p.y<0||p.y>h) p.vy*=-1;
    ctx.globalAlpha = 0.2 + 0.8*Math.abs(Math.sin(p.a));
    p.a += 0.005;
    ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
  }
  requestAnimationFrame(step);
}
step();

// Puzzle
const slots = document.querySelectorAll('.slot');
const pieces = document.querySelectorAll('.piece');
let placed=0;

pieces.forEach(p => { 
  p.addEventListener('dragstart', e => { e.dataTransfer.setData('id', p.dataset.id); }); 
});

slots.forEach(s => { 
  s.addEventListener('dragover', e => { e.preventDefault(); s.classList.add('active'); });
  s.addEventListener('dragleave', () => s.classList.remove('active'));
  s.addEventListener('drop', e => {
    e.preventDefault();
    s.classList.remove('active');
    const id = e.dataTransfer.getData('id');
    if(s.dataset.match===id && !s.firstChild){
      const el = document.querySelector(`.piece[data-id="${id}"]`);
      el.draggable=false;
      el.style.cursor='default';
      el.style.transform='scale(1)';
      s.appendChild(el);
      placed++;
      if(placed === 6) document.getElementById('unlock').classList.remove('hidden');
    }
  });
});

// Professional AI Chatbot for Business Inquiries
class ProfessionalChatbot {
  constructor() {
    this.responses = {
      // Hiring & Employment
      'hire': "I'd be excited to discuss employment opportunities! Museeb is available for full-time, part-time, or contract positions. He specializes in Unity game development, mobile optimization, and has shipped 20+ games to major app stores. Would you like to schedule a call to discuss the role?",
      'job': "Museeb is actively seeking new opportunities in game development. He has 3+ years of experience with Unity, C#, mobile games, and has worked on both indie and client projects. His portfolio includes idle games, puzzles, runners, and arcade titles. What type of position are you looking to fill?",
      'employment': "Museeb is open to employment opportunities in game development companies. He brings expertise in Unity, mobile game optimization, UI/UX design, and has experience with live ops and game publishing. He's worked with teams and can adapt to different development methodologies.",
      'full-time': "Museeb is interested in full-time positions! He's looking for roles where he can contribute to game development, work with talented teams, and grow his skills. He's particularly interested in mobile game companies, indie studios, or tech companies with gaming divisions.",
      'contract': "Museeb is available for contract work! He has experience with both short-term and long-term projects. He can work remotely and has successfully delivered projects for various clients. What type of contract work are you looking for?",
      
      // Project Collaboration
      'project': "Museeb is always interested in new project opportunities! He can contribute to game development, prototyping, technical implementation, or consulting. He has experience with various game genres and platforms. What kind of project do you have in mind?",
      'collaborate': "I'd love to discuss collaboration opportunities! Museeb has worked with various teams and clients, from indie developers to established companies. He can contribute to game design, development, optimization, or provide technical consulting. What are you working on?",
      'partnership': "Museeb is open to partnership opportunities in game development! He can bring technical expertise, development skills, and industry experience to joint ventures. He's worked on both client projects and personal games. What type of partnership are you considering?",
      'freelance': "Museeb is available for freelance work! He has experience with various project types including game development, optimization, bug fixes, feature implementation, and consulting. He can work on both short-term and long-term projects.",
      
      // Technical Expertise
      'unity': "Museeb is highly proficient in Unity game development! He has 3+ years of experience with Unity, C# programming, mobile optimization, UI/UX implementation, and has shipped multiple games. He's worked with Unity's latest features and can handle complex game mechanics.",
      'mobile': "Museeb specializes in mobile game development! He has extensive experience optimizing games for Android and iOS, implementing touch controls, managing memory usage, and ensuring smooth performance across different devices. He's published games on both Google Play and App Store.",
      'csharp': "Museeb is skilled in C# programming for Unity! He can implement complex game logic, optimize performance, work with Unity's component system, and integrate third-party SDKs. He's experienced with object-oriented programming and design patterns.",
      'optimization': "Museeb has strong experience in game optimization! He can optimize for performance, memory usage, battery life, and loading times. He's worked on games with complex mechanics and has experience profiling and debugging performance issues.",
      
      // Game Genres & Experience
      'idle': "Museeb has extensive experience with idle games! He's developed Burger Idle Restaurant and other idle mechanics. He understands progression systems, automation, and player engagement in idle games. He can implement complex idle game features and balance gameplay.",
      'puzzle': "Museeb has worked on multiple puzzle games including Nuts & Bolts Puzzle, Emoji Puzzle Connect, and Brain Puzzle Training. He can design engaging puzzle mechanics, implement level progression, and create challenging but fair puzzle experiences.",
      'arcade': "Museeb has experience with arcade games including Attack Hole and other fast-paced titles. He can implement responsive controls, scoring systems, and create engaging arcade gameplay loops that keep players coming back.",
      'runner': "Museeb has developed runner games like Long Neck Run. He understands endless runner mechanics, procedural generation, and can implement smooth character movement and obstacle systems.",
      
      // Client Work
      'skillz': "Museeb has worked on multiple Skillz platform games including Blackout Bingo, Domino Gold, Spider Solitaire, and Cash Out Slots. He understands skill-based gaming, tournament systems, and can implement competitive gameplay mechanics.",
      'client': "Museeb has extensive client work experience! He's delivered projects for various companies, maintained clear communication, met deadlines, and provided ongoing support. He can work with different team structures and adapt to client requirements.",
      
      // Contact & Availability
      'contact': "You can reach Museeb directly at musaibahmed830@gmail.com. He's also available on LinkedIn and GitHub. He typically responds within 24 hours and is happy to schedule calls to discuss opportunities in detail.",
      'available': "Museeb is currently available for new projects and opportunities! He can start immediately for contract work and is open to discussing full-time positions. He's flexible with time zones and can work remotely or relocate for the right opportunity.",
      'schedule': "Museeb is flexible with scheduling! He can accommodate different time zones and is available for calls, video meetings, or in-person meetings depending on location. He's happy to work around your schedule to discuss opportunities.",
      
      // Pricing & Rates
      'rate': "Museeb's rates vary depending on project scope, timeline, and complexity. He offers competitive rates for quality work and can provide detailed quotes for specific projects. He's happy to discuss budget and find solutions that work for both parties.",
      'cost': "Museeb provides transparent pricing based on project requirements. He can work within various budgets and offers different engagement models (hourly, project-based, or retainer). Let's discuss your specific needs to provide an accurate estimate.",
      
      // Portfolio & Work
      'portfolio': "Museeb's portfolio includes 20+ published games across various genres. You can see his work on Google Play Store, App Store, and the Skillz platform. His games have been downloaded by thousands of players and showcase his versatility in game development.",
      'experience': "Museeb has 3+ years of professional game development experience. He's worked on projects from concept to launch, including prototyping, development, testing, and publishing. He has experience with both indie and commercial game development.",
      
      // Default responses
      'default': "I'd be happy to help you learn more about Museeb's game development services! He specializes in Unity development, mobile games, and has experience with various game genres. What specific aspect of his work would you like to know more about?",
      'greeting': "Hello! I'm here to help you connect with Museeb Ahmad, a Unity game developer. Whether you're looking to hire, collaborate, or discuss a project, I can provide information about his skills, experience, and availability. How can I assist you today?"
    };
    
    this.initializeChat();
  }

  initializeChat() {
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatSend = document.getElementById('chat-send');
    const chatInput = document.getElementById('chat-input-field');
    const chatNotification = document.getElementById('chat-notification');

    // Show notification initially
    this.showNotification();

    // Toggle chat window
    chatToggle.addEventListener('click', () => {
      chatWindow.classList.toggle('hidden');
      if (!chatWindow.classList.contains('hidden')) {
        this.hideNotification();
        chatInput.focus();
      }
    });

    // Close chat window
    chatClose.addEventListener('click', () => {
      chatWindow.classList.add('hidden');
    });

    // Send message
    const sendMessage = () => {
      const message = chatInput.value.trim();
      if (message) {
        this.addMessage(message, 'user');
        chatInput.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Generate response after delay
        setTimeout(() => {
          this.hideTypingIndicator();
          const response = this.generateResponse(message);
          this.addMessage(response, 'bot');
        }, 1000 + Math.random() * 1000); // Random delay 1-2 seconds
      }
    };

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });

    // Auto-hide notification after 10 seconds
    setTimeout(() => {
      this.hideNotification();
    }, 10000);
  }

  showNotification() {
    const notification = document.getElementById('chat-notification');
    notification.style.display = 'flex';
  }

  hideNotification() {
    const notification = document.getElementById('chat-notification');
    notification.style.display = 'none';
  }

  showTypingIndicator() {
    const messagesContainer = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.innerHTML = `
      <div class="message-avatar">MA</div>
      <div class="message-content">
        <div class="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  hideTypingIndicator() {
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  addMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatar = sender === 'bot' ? 'MA' : 'U';
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    messageDiv.innerHTML = `
      <div class="message-avatar">${avatar}</div>
      <div class="message-content">
        <div class="message-text">${text}</div>
        <div class="message-time">${time}</div>
      </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  generateResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check for greeting patterns
    if (this.isGreeting(lowerMessage)) {
      return this.responses.greeting;
    }
    
    // Check for specific keywords and return appropriate response
    for (const [key, response] of Object.entries(this.responses)) {
      if (key !== 'default' && key !== 'greeting' && lowerMessage.includes(key)) {
        return response;
      }
    }
    
    // Check for specific game mentions
    if (lowerMessage.includes('burger') || lowerMessage.includes('restaurant')) {
      return "Burger Idle Restaurant is one of Museeb's successful idle games with engaging restaurant management mechanics. He can develop similar idle games or improve existing ones. Are you interested in idle game development?";
    }
    
    if (lowerMessage.includes('puzzle') && (lowerMessage.includes('nuts') || lowerMessage.includes('bolts'))) {
      return "Nuts & Bolts Puzzle showcases Museeb's puzzle game expertise. He can create challenging puzzle mechanics, level progression systems, and engaging puzzle experiences. What type of puzzle game are you considering?";
    }
    
    // Check for business-related terms
    if (lowerMessage.includes('budget') || lowerMessage.includes('price') || lowerMessage.includes('expensive')) {
      return "Museeb offers competitive rates and flexible pricing options. He can work within various budgets and provides value through quality work and efficient development. Would you like to discuss your project requirements and budget?";
    }
    
    if (lowerMessage.includes('timeline') || lowerMessage.includes('deadline') || lowerMessage.includes('when')) {
      return "Museeb can work with various timelines and is experienced in meeting deadlines. He can provide realistic estimates based on project scope and requirements. What's your target timeline for the project?";
    }
    
    // Default response
    return this.responses.default;
  }

  isGreeting(message) {
    const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'];
    return greetings.some(greeting => message.includes(greeting));
  }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ProfessionalChatbot();
});