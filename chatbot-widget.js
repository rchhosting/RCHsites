/* ══════════════════════════════════════════
   RCHsites — AI Chat Widget
   Drop this script into any page.
   ══════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── CONFIG ───────────────────────────────
  var CONFIG = {
    proxyUrl: 'https://rch-chat-proxy.silky6767.workers.dev',

    greeting: "Hey there -- I am the RCHsites assistant. Ask me anything about our plans, process, pricing, or how we build websites.",

    // ────────────────────────────────────────
    // SYSTEM PROMPT
    // Edit the text below to update what the
    // chatbot knows. Keep each line inside the
    // quotes. Do not delete the opening or
    // closing backtick characters.
    // ────────────────────────────────────────
    systemPrompt: [
      "You are the AI assistant for RCHsites -- a web design studio based in Opelika, Alabama that builds custom websites and delivers them as clean HTML files. You live as a chat widget on the RCHsites website.",
      "",
      "PERSONALITY AND TONE",
      "- Be warm, approachable, and confident -- like a knowledgeable friend, not a corporate chatbot.",
      "- Keep responses short and scannable. Use 1-3 short paragraphs max. Visitors are browsing, not reading essays.",
      "- Be direct. Answer the question first, then add helpful context if needed.",
      "- Use casual but professional language. No slang, but no stiffness either.",
      "- Light enthusiasm is okay but do not overdo it.",
      "- Never use emojis in your responses -- the site has a clean, technical aesthetic.",
      "- When you do not know something, say so honestly and direct them to hello@rchsites.com.",
      "",
      "WHAT RCHSITES DOES",
      "RCHsites designs and builds custom websites from scratch, then hands off the finished product as a clean folder of HTML, CSS, JavaScript, and image files. The client owns everything -- no subscriptions, no proprietary platforms, no lock-in.",
      "",
      "Every project also includes a printed instruction pamphlet that walks the client through hosting setup, domain pointing, basic edits, and going live.",
      "",
      "During the build, clients get access to a private Client Portal where they can preview their site progress using a project-specific password.",
      "",
      "RCHsites is a small, independent studio. The focus is quality craftsmanship and personal service -- not volume.",
      "",
      "DESIGN PACKAGES (one-time payment)",
      "",
      "STARTER -- $800",
      "- Up to 3 pages",
      "- Mobile-responsive design",
      "- 1 revision round",
      "- HTML/CSS/JS file delivery",
      "- Printed instruction pamphlet",
      "- Client Portal preview access",
      "- Best for: simple personal sites, landing pages, small businesses just getting online",
      "- Timeline: approximately 1 week",
      "",
      "PROFESSIONAL -- $1,500 (most popular)",
      "- Up to 7 pages",
      "- Mobile-responsive design",
      "- 3 revision rounds",
      "- Contact form integration",
      "- Basic SEO setup",
      "- HTML/CSS/JS file delivery",
      "- Printed instruction pamphlet",
      "- Client Portal preview access",
      "- Best for: growing businesses that need a more complete web presence",
      "- Timeline: approximately 2 weeks",
      "",
      "PREMIUM -- $2,500",
      "- Unlimited pages",
      "- Mobile-responsive design",
      "- Unlimited revisions",
      "- Advanced animations and interactions",
      "- Full SEO and performance optimization",
      "- HTML/CSS/JS file delivery",
      "- Printed instruction pamphlet",
      "- Client Portal preview access",
      "- Best for: businesses that want a polished, high-end site with no compromises",
      "- Timeline: varies by scope, typically 2-4 weeks",
      "",
      "All plans are one-time payments. No recurring fees to keep your site.",
      "",
      "MONTHLY UPKEEP (optional add-on)",
      "This is completely separate and optional. The site works perfectly fine without it. Cancel anytime -- no contracts, no cancellation fees.",
      "",
      "BASIC UPKEEP -- $40/month",
      "- Monthly health check",
      "- Bug fixes and broken links",
      "- Security patches",
      "- Email support",
      "",
      "STANDARD UPKEEP -- $75/month",
      "- Everything in Basic",
      "- Text and image updates (2 per month)",
      "- Performance monitoring",
      "- Priority email support",
      "",
      "PRIORITY UPKEEP -- $100/month",
      "- Everything in Standard",
      "- Unlimited content updates",
      "- Layout and design adjustments",
      "- Monthly analytics report",
      "- Same-day response time",
      "",
      "When a client cancels upkeep, their site keeps working normally since they own all the files.",
      "",
      "THE PROCESS (4 steps)",
      "1. DISCOVERY -- A conversation about the client vision, brand, and what the site needs to do. No jargon, no upselling.",
      "2. DESIGN AND BUILD -- The site is built and the client gets a private Client Portal password to preview progress.",
      "3. REVISE -- Refinements within the plan revision rounds. Once approved, the design is locked.",
      "4. HANDOFF -- The client receives a clean HTML folder and a printed instruction pamphlet covering hosting, editing, and going live.",
      "",
      "FREQUENTLY ASKED QUESTIONS",
      "",
      "Q: What exactly do I receive?",
      "A: A complete folder of HTML, CSS, JavaScript, images, and fonts -- everything your site needs to go live. Plus a printed instruction pamphlet explaining how to host it, point your domain, and make basic edits.",
      "",
      "Q: Do I need the monthly upkeep?",
      "A: Not at all. It is completely optional. Your site works on its own -- upkeep is there if you would rather have someone else handle updates and maintenance.",
      "",
      "Q: Where do I host the site?",
      "A: Anywhere you want. Netlify, Vercel, GitHub Pages, Cloudflare Pages (all free), or a traditional host like Namecheap, SiteGround, or GoDaddy. The pamphlet walks you through it.",
      "",
      "Q: What counts as a revision round?",
      "A: One revision round equals one batch of design feedback. You review the preview in the Client Portal, send over all your changes at once, and we implement them. That counts as one round.",
      "",
      "Q: Can I cancel upkeep anytime?",
      "A: Yes -- no contracts, no cancellation fees. Just let us know and the next billing cycle will not be charged. Your site keeps working normally since you own the files.",
      "",
      "Q: How long does a project take?",
      "A: Typically 1-3 weeks depending on the plan and complexity. Starter sites usually ship within a week, Professional within two, and Premium projects vary by scope.",
      "",
      "Q: Can I edit the site myself after handoff?",
      "A: Yes -- the files are standard HTML, CSS, and JS. Anyone with basic code knowledge can make edits, and the instruction pamphlet covers the basics. If you would rather not touch code, the monthly upkeep service handles that for you.",
      "",
      "Q: Do you handle domain registration and hosting?",
      "A: RCHsites focuses on design and development. The instruction pamphlet walks you through setting up hosting and pointing your domain, and we are happy to help via email if you get stuck.",
      "",
      "CONTACT AND NEXT STEPS",
      "- Email: hello@rchsites.com",
      "- Project request form: available on the Start a Project page of the website",
      "- Response time: within 24 hours for all inquiries",
      "- Location: Opelika, Alabama",
      "",
      "When someone seems interested in starting a project, guide them toward the project request form or email. Make it feel easy and low-pressure -- submitting a request does not commit them to anything, it just starts a conversation.",
      "",
      "RULES YOU MUST FOLLOW",
      "1. Never make up information that is not provided above. If unsure, say you recommend reaching out directly at hello@rchsites.com.",
      "2. Never discuss competitors or compare RCHsites to other web design services.",
      "3. Never quote prices that are not listed above. If someone asks about custom work, direct them to email.",
      "4. Never pretend to be a human. If asked, you can say you are an AI assistant for RCHsites.",
      "5. Keep responses under 3 short paragraphs unless the question genuinely requires more detail.",
      "6. If someone asks about something completely unrelated to web design or RCHsites, politely redirect and say you are specifically here to help with questions about RCHsites and web design services.",
      "7. Do not repeat the same information in multiple paragraphs. Say it once clearly.",
      "8. When recommending a plan, briefly explain why it fits their needs rather than just naming it.",
      "9. Always be honest about what is included and what is not. Transparency builds trust.",
      "10. If someone expresses urgency about their timeline, reassure them and suggest reaching out via email for the fastest response."
    ].join("\n"),

    brandName: 'RCHsites',
    placeholderText: 'Ask about pricing, process, plans...',
    position: 'right',
  };

  // ─── INJECT STYLES ────────────────────────
  var posRight = CONFIG.position === 'right';
  var style = document.createElement('style');
  style.textContent = [
    '#rch-chat-widget, #rch-chat-widget * {',
    '  margin: 0; padding: 0; box-sizing: border-box;',
    '  font-family: "Instrument Sans", system-ui, -apple-system, sans-serif;',
    '  -webkit-font-smoothing: antialiased;',
    '}',

    '#rch-chat-fab {',
    '  position: fixed; bottom: 24px;',
    '  ' + (posRight ? 'right: 24px;' : 'left: 24px;'),
    '  z-index: 10000; width: 56px; height: 56px;',
    '  border-radius: 6px; background: #141413; color: #f4f3f0;',
    '  border: 1px solid rgba(255,255,255,0.08);',
    '  cursor: pointer; display: flex; align-items: center; justify-content: center;',
    '  box-shadow: 0 4px 20px rgba(20,20,19,0.2);',
    '  transition: background 0.2s, transform 0.15s, box-shadow 0.25s;',
    '}',
    '#rch-chat-fab:hover {',
    '  background: #e63a1e; transform: translateY(-2px);',
    '  box-shadow: 0 8px 30px rgba(230,58,30,0.3);',
    '}',
    '#rch-chat-fab svg { width: 22px; height: 22px; transition: transform 0.3s cubic-bezier(0.22,1,0.36,1); }',
    '#rch-chat-fab.open svg { transform: rotate(90deg) scale(0.9); }',

    '#rch-chat-fab .unread-dot {',
    '  position: absolute; top: -3px; right: -3px;',
    '  width: 12px; height: 12px; background: #e63a1e;',
    '  border-radius: 50%; border: 2px solid #f4f3f0;',
    '  opacity: 0; transition: opacity 0.3s;',
    '}',
    '#rch-chat-fab .unread-dot.show { opacity: 1; }',

    '#rch-chat-window {',
    '  position: fixed; bottom: 92px;',
    '  ' + (posRight ? 'right: 24px;' : 'left: 24px;'),
    '  z-index: 10001; width: 380px;',
    '  max-height: min(560px, calc(100vh - 120px));',
    '  background: #ffffff; border: 1px solid #d4d3ce;',
    '  border-radius: 6px; box-shadow: 0 16px 48px rgba(20,20,19,0.12);',
    '  display: flex; flex-direction: column; overflow: hidden;',
    '  opacity: 0; transform: translateY(12px) scale(0.96);',
    '  pointer-events: none;',
    '  transition: opacity 0.3s cubic-bezier(0.22,1,0.36,1), transform 0.3s cubic-bezier(0.22,1,0.36,1);',
    '}',
    '#rch-chat-window.open {',
    '  opacity: 1; transform: translateY(0) scale(1); pointer-events: auto;',
    '}',

    '#rch-chat-header {',
    '  padding: 14px 16px; background: #141413; color: #f4f3f0;',
    '  display: flex; align-items: center; justify-content: space-between; flex-shrink: 0;',
    '}',
    '#rch-chat-header .header-left { display: flex; align-items: center; gap: 10px; }',
    '#rch-chat-header .header-avatar {',
    '  width: 32px; height: 32px; background: rgba(230,58,30,0.15);',
    '  border: 1px solid rgba(230,58,30,0.3); border-radius: 6px;',
    '  display: flex; align-items: center; justify-content: center;',
    '  font-family: "Space Mono", "Courier New", monospace;',
    '  font-size: 0.7rem; font-weight: 700; color: #e63a1e;',
    '}',
    '#rch-chat-header .header-title {',
    '  font-family: "Space Mono", "Courier New", monospace;',
    '  font-size: 0.78rem; font-weight: 700; letter-spacing: -0.01em;',
    '}',
    '#rch-chat-header .header-title span { color: #e63a1e; }',
    '#rch-chat-header .header-status {',
    '  font-family: "Azeret Mono", "Courier New", monospace;',
    '  font-size: 0.6rem; color: rgba(244,243,240,0.45);',
    '  letter-spacing: 0.04em; display: flex; align-items: center; gap: 5px;',
    '}',
    '#rch-chat-header .status-dot { width: 5px; height: 5px; background: #4ade80; border-radius: 50%; }',
    '#rch-chat-header .close-btn {',
    '  background: none; border: none; color: rgba(244,243,240,0.4);',
    '  cursor: pointer; padding: 4px; transition: color 0.2s;',
    '  display: flex; align-items: center; justify-content: center;',
    '}',
    '#rch-chat-header .close-btn:hover { color: #f4f3f0; }',
    '#rch-chat-header .close-btn svg { width: 16px; height: 16px; }',

    '#rch-chat-messages {',
    '  flex: 1; overflow-y: auto; padding: 16px;',
    '  display: flex; flex-direction: column; gap: 12px;',
    '  background: #f4f3f0;',
    '  background-image: linear-gradient(rgba(20,20,19,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(20,20,19,0.04) 1px, transparent 1px);',
    '  background-size: 40px 40px;',
    '}',
    '#rch-chat-messages::-webkit-scrollbar { width: 4px; }',
    '#rch-chat-messages::-webkit-scrollbar-track { background: transparent; }',
    '#rch-chat-messages::-webkit-scrollbar-thumb { background: #d4d3ce; border-radius: 2px; }',

    '.rch-msg {',
    '  max-width: 85%; padding: 10px 14px; font-size: 0.88rem;',
    '  line-height: 1.6; color: #3a3a36;',
    '  animation: rchMsgIn 0.3s cubic-bezier(0.22,1,0.36,1) both;',
    '}',
    '@keyframes rchMsgIn {',
    '  from { opacity: 0; transform: translateY(8px); }',
    '  to   { opacity: 1; transform: translateY(0); }',
    '}',
    '.rch-msg.bot {',
    '  align-self: flex-start; background: #ffffff;',
    '  border: 1px solid #d4d3ce; border-radius: 2px 6px 6px 6px;',
    '}',
    '.rch-msg.user {',
    '  align-self: flex-end; background: #141413;',
    '  color: #f4f3f0; border-radius: 6px 2px 6px 6px;',
    '}',
    '.rch-msg.bot a { color: #e63a1e; text-decoration: underline; text-underline-offset: 2px; }',

    '.rch-typing {',
    '  align-self: flex-start; display: flex; align-items: center; gap: 4px;',
    '  padding: 12px 16px; background: #ffffff;',
    '  border: 1px solid #d4d3ce; border-radius: 2px 6px 6px 6px;',
    '  animation: rchMsgIn 0.3s cubic-bezier(0.22,1,0.36,1) both;',
    '}',
    '.rch-typing span {',
    '  width: 6px; height: 6px; background: #b0afaa;',
    '  border-radius: 50%; animation: rchBounce 1.4s ease-in-out infinite;',
    '}',
    '.rch-typing span:nth-child(2) { animation-delay: 0.15s; }',
    '.rch-typing span:nth-child(3) { animation-delay: 0.3s; }',
    '@keyframes rchBounce {',
    '  0%, 60%, 100% { transform: translateY(0); }',
    '  30% { transform: translateY(-5px); }',
    '}',

    '#rch-chat-input-area {',
    '  padding: 12px; border-top: 1px solid #d4d3ce;',
    '  background: #ffffff; display: flex; gap: 8px;',
    '  align-items: flex-end; flex-shrink: 0;',
    '}',
    '#rch-chat-input {',
    '  flex: 1; padding: 10px 12px; background: #f4f3f0;',
    '  border: 1.5px solid #d4d3ce; border-radius: 6px;',
    '  font-family: "Instrument Sans", system-ui, sans-serif;',
    '  font-size: 0.88rem; color: #141413; outline: none;',
    '  resize: none; max-height: 100px; line-height: 1.5;',
    '  transition: border-color 0.2s, box-shadow 0.2s;',
    '}',
    '#rch-chat-input:focus {',
    '  border-color: #e63a1e; box-shadow: 0 0 0 3px rgba(230,58,30,0.08);',
    '}',
    '#rch-chat-input::placeholder { color: #9e9e94; }',
    '#rch-chat-send {',
    '  width: 38px; height: 38px; background: #141413; color: #f4f3f0;',
    '  border: none; border-radius: 6px; cursor: pointer;',
    '  display: flex; align-items: center; justify-content: center;',
    '  flex-shrink: 0; transition: background 0.2s, transform 0.15s;',
    '}',
    '#rch-chat-send:hover { background: #e63a1e; transform: translateY(-1px); }',
    '#rch-chat-send:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }',
    '#rch-chat-send svg { width: 16px; height: 16px; }',

    '#rch-chat-footer {',
    '  padding: 6px 12px 8px; text-align: center;',
    '  font-family: "Azeret Mono", "Courier New", monospace;',
    '  font-size: 0.58rem; color: #9e9e94; letter-spacing: 0.06em;',
    '  background: #ffffff; border-top: 1px solid #e2e1dc;',
    '}',

    '.rch-quick-actions { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }',
    '.rch-quick-btn {',
    '  padding: 5px 12px; background: rgba(230,58,30,0.05);',
    '  border: 1px solid rgba(230,58,30,0.15); border-radius: 100px;',
    '  font-family: "Azeret Mono", "Courier New", monospace;',
    '  font-size: 0.68rem; font-weight: 500; color: #e63a1e;',
    '  cursor: pointer; transition: all 0.2s; letter-spacing: 0.02em;',
    '}',
    '.rch-quick-btn:hover {',
    '  background: rgba(230,58,30,0.1); border-color: #e63a1e;',
    '  transform: translateY(-1px);',
    '}',

    '@media (max-width: 480px) {',
    '  #rch-chat-window {',
    '    width: calc(100vw - 16px); max-height: calc(100vh - 100px);',
    '    bottom: 84px; ' + (posRight ? 'right: 8px;' : 'left: 8px;'),
    '    border-radius: 6px;',
    '  }',
    '  #rch-chat-fab {',
    '    bottom: 16px; ' + (posRight ? 'right: 16px;' : 'left: 16px;'),
    '  }',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  // ─── BUILD DOM ────────────────────────────
  var widget = document.createElement('div');
  widget.id = 'rch-chat-widget';
  widget.innerHTML = ''
    + '<button id="rch-chat-fab" aria-label="Open chat">'
    +   '<span class="unread-dot show"></span>'
    +   '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">'
    +     '<path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>'
    +   '</svg>'
    + '</button>'
    + '<div id="rch-chat-window">'
    +   '<div id="rch-chat-header">'
    +     '<div class="header-left">'
    +       '<div class="header-avatar">AI</div>'
    +       '<div>'
    +         '<div class="header-title">RCH<span>sites</span> Assistant</div>'
    +         '<div class="header-status"><span class="status-dot"></span>Online</div>'
    +       '</div>'
    +     '</div>'
    +     '<button class="close-btn" aria-label="Close chat">'
    +       '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">'
    +         '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>'
    +       '</svg>'
    +     '</button>'
    +   '</div>'
    +   '<div id="rch-chat-messages"></div>'
    +   '<div id="rch-chat-input-area">'
    +     '<textarea id="rch-chat-input" rows="1" placeholder="' + CONFIG.placeholderText + '"></textarea>'
    +     '<button id="rch-chat-send" aria-label="Send message">'
    +       '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">'
    +         '<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>'
    +       '</svg>'
    +     '</button>'
    +   '</div>'
    +   '<div id="rch-chat-footer">Powered by Claude AI</div>'
    + '</div>';
  document.body.appendChild(widget);

  // ─── REFERENCES ───────────────────────────
  var fab      = document.getElementById('rch-chat-fab');
  var chatWin  = document.getElementById('rch-chat-window');
  var msgArea  = document.getElementById('rch-chat-messages');
  var input    = document.getElementById('rch-chat-input');
  var sendBtn  = document.getElementById('rch-chat-send');
  var closeBtn = chatWin.querySelector('.close-btn');
  var unread   = fab.querySelector('.unread-dot');

  var isOpen = false;
  var messages = [];
  var isLoading = false;

  // ─── TOGGLE ───────────────────────────────
  function toggleChat() {
    isOpen = !isOpen;
    chatWin.classList.toggle('open', isOpen);
    fab.classList.toggle('open', isOpen);
    unread.classList.remove('show');

    if (isOpen) {
      if (msgArea.children.length === 0) {
        addMessage('bot', CONFIG.greeting);
        addQuickActions();
      }
      setTimeout(function() { input.focus(); }, 300);
    }
  }

  fab.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', toggleChat);

  // ─── MESSAGES ─────────────────────────────
  function addMessage(role, text) {
    var div = document.createElement('div');
    div.className = 'rch-msg ' + role;
    div.innerHTML = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/\n/g, '<br>');
    msgArea.appendChild(div);
    msgArea.scrollTo({ top: msgArea.scrollHeight, behavior: 'smooth' });
  }

  function addQuickActions() {
    var wrap = document.createElement('div');
    wrap.className = 'rch-quick-actions';
    var actions = ['What are the plans?', 'How does the process work?', 'How long does it take?'];
    actions.forEach(function(text) {
      var btn = document.createElement('button');
      btn.className = 'rch-quick-btn';
      btn.textContent = text;
      btn.addEventListener('click', function() {
        wrap.remove();
        sendMessage(text);
      });
      wrap.appendChild(btn);
    });
    msgArea.appendChild(wrap);
    msgArea.scrollTo({ top: msgArea.scrollHeight, behavior: 'smooth' });
  }

  function showTyping() {
    var div = document.createElement('div');
    div.className = 'rch-typing';
    div.id = 'rch-typing-indicator';
    div.innerHTML = '<span></span><span></span><span></span>';
    msgArea.appendChild(div);
    msgArea.scrollTo({ top: msgArea.scrollHeight, behavior: 'smooth' });
  }

  function hideTyping() {
    var el = document.getElementById('rch-typing-indicator');
    if (el) el.remove();
  }

  // ─── SEND MESSAGE ─────────────────────────
  async function sendMessage(text) {
    if (isLoading || !text.trim()) return;
    isLoading = true;
    sendBtn.disabled = true;

    var qa = msgArea.querySelector('.rch-quick-actions');
    if (qa) qa.remove();

    addMessage('user', text);
    input.value = '';
    input.style.height = 'auto';

    messages.push({ role: 'user', content: text });

    showTyping();

    try {
      var res = await fetch(CONFIG.proxyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: CONFIG.systemPrompt,
          messages: messages,
        }),
      });

      if (!res.ok) throw new Error('API request failed with status ' + res.status);

      var data = await res.json();
      var reply = (data.content && data.content[0] && data.content[0].text) || data.reply || "Sorry, I could not generate a response. Please try again!";

      hideTyping();
      addMessage('bot', reply);
      messages.push({ role: 'assistant', content: reply });

    } catch (err) {
      console.error('RCH Chat Error:', err);
      hideTyping();
      addMessage('bot', "Hmm, something went wrong on my end. You can always reach us directly at hello@rchsites.com -- we usually reply within 24 hours!");
    }

    isLoading = false;
    sendBtn.disabled = false;
    input.focus();
  }

  // ─── INPUT HANDLERS ───────────────────────
  sendBtn.addEventListener('click', function() { sendMessage(input.value); });

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input.value);
    }
  });

  input.addEventListener('input', function() {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 100) + 'px';
  });

})();
