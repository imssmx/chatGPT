const chats = [
  {
    name: "Javier",
    distance: "450 m",
    status: "Disponible · 26 años",
    initials: "JD",
    preview: "¿Nos vemos hoy?",
    activity: "Activo ahora",
  },
  {
    name: "Marco",
    distance: "1.2 km",
    status: "En línea · 29 años",
    initials: "MR",
    preview: "Listo para un café ☕",
    activity: "Activo hace 5 min",
  },
  {
    name: "Leo",
    distance: "800 m",
    status: "Ocupado · 24 años",
    initials: "LB",
    preview: "Me gustó tu perfil",
    activity: "Activo hace 1 h",
  },
  {
    name: "Santi",
    distance: "2.5 km",
    status: "Disponible · 31 años",
    initials: "SG",
    preview: "Planes para el finde",
    activity: "Activo ayer",
  },
];

const matches = [
  { name: "Nico", initials: "NM" },
  { name: "Teo", initials: "TR" },
  { name: "Rafa", initials: "RV" },
  { name: "Pablo", initials: "PS" },
];

const messages = [
  {
    type: "incoming",
    text: "¡Hola! vi que estás cerca. ¿Cómo estás?",
    time: "12:04",
  },
  {
    type: "outgoing",
    text: "¡Hey! Todo bien, ¿y tú?",
    time: "12:05",
  },
  {
    type: "incoming",
    text: "Genial. ¿Te apetece tomar algo en el centro?",
    time: "12:06",
  },
];

const chatList = document.getElementById("chatList");
const chatMessages = document.getElementById("chatMessages");
const chatName = document.getElementById("chatName");
const chatStatus = document.getElementById("chatStatus");
const chatActivity = document.getElementById("chatActivity");
const headerAvatar = document.querySelector(".profile .avatar");
const chatForm = document.getElementById("chatForm");
const messageInput = document.getElementById("messageInput");
const matchesList = document.getElementById("matchesList");
const typingIndicator = document.getElementById("typingIndicator");
let typingTimeout;

const renderChats = () => {
  chatList.innerHTML = "";
  chats.forEach((chat, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `chat-card ${index === 0 ? "active" : ""}`;
    card.innerHTML = `
      <div class="avatar">${chat.initials}</div>
      <div class="chat-card__meta">
        <h3>${chat.name} · ${chat.distance}</h3>
        <p>${chat.preview}</p>
      </div>
    `;
    card.addEventListener("click", () => selectChat(chat, card));
    chatList.appendChild(card);
  });
};

const renderMatches = () => {
  matchesList.innerHTML = "";
  matches.forEach((match) => {
    const card = document.createElement("div");
    card.className = "match";
    card.innerHTML = `
      <div class="avatar">${match.initials}</div>
      <div>${match.name}</div>
    `;
    matchesList.appendChild(card);
  });
};

const renderMessages = () => {
  chatMessages.innerHTML = "";
  messages.forEach((message) => {
    const bubble = document.createElement("div");
    bubble.className = `message ${message.type}`;
    bubble.innerHTML = `
      <div>${message.text}</div>
      <div class="message__meta">${message.time}</div>
    `;
    chatMessages.appendChild(bubble);
  });
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

const selectChat = (chat, element) => {
  document.querySelectorAll(".chat-card").forEach((card) => {
    card.classList.remove("active");
  });
  element.classList.add("active");
  chatName.textContent = `${chat.name} • ${chat.distance}`;
  chatStatus.textContent = chat.status;
  chatActivity.textContent = chat.activity;
  headerAvatar.textContent = chat.initials;
};

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = messageInput.value.trim();
  if (!text) {
    return;
  }
  messages.push({
    type: "outgoing",
    text,
    time: new Date().toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });
  messageInput.value = "";
  renderMessages();
});

messageInput.addEventListener("input", () => {
  typingIndicator.classList.add("active");
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    typingIndicator.classList.remove("active");
  }, 1000);
});

renderChats();
renderMatches();
renderMessages();
