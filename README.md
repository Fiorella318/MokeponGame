# 💡 Mokepon Game: A Full-Stack JavaScript Experience

## 🎮 Introduction: The Mokepon Ecosystem
**Mokepon** is a strategic RPG (Role-Playing Game) developed as a high-performance web application. The game immerses users in an interactive world where exploration and tactics meet through a fluid interface and dynamic combat logic.

This is a **Full-Stack** project, integrating a **Client-side (Front-End)** for user interaction and a **Server-side (Back-End)** for data persistence and real-time multiplayer synchronization. It demonstrates the ability to manage complex asynchronous data flows and a custom game engine built from scratch.



---

## 🚀 Technical Architecture

The system is decoupled into two main layers, ensuring a clean separation of concerns and professional scalability:

### 🎨 Front-End (Vanilla JavaScript)
* **Rendering Engine:** Utilizes the `HTML5 Canvas API` for dynamic map rendering, sprite management, and real-time collision detection (AABB Algorithm).
* **State Management:** Managed through global state variables and DOM event listeners to control game flow transitions (**Selection → Map Exploration → Combat**).
* **Networking:** Implementation of the `Fetch API` to handle data exchange via RESTful protocols.

### ⚙️ Back-End (Node.js & Express)
* **RESTful API:** Custom endpoints designed for player persistence, real-time position tracking, and attack synchronization.
* **Middleware:** Implementation of `CORS` to allow seamless interoperability between the distributed server and the client-side.
* **Data Modeling:** ES6 Classes used to model business logic and player entity behavior on the server side.



---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Client / Front-End** | HTML5, CSS3, JavaScript (ES6+) |
| **Server / Back-End** | Node.js, Express.js |
| **Data Protocol** | HTTP / JSON |
| **Graphics** | Canvas API 2D |

---

## 🧩 Key Features & Challenges

### 🤖 Hybrid Gameplay Logic
The engine intelligently detects if the opponent is a **Local NPC** (with randomized AI attack logic based on the specific creature's move-set) or a **Remote Human Player**, adapting the data flow automatically without interrupting the user experience.

### ⚔️ Advanced Collision Engine
Implements precise coordinate mapping to trigger combat transitions upon character intersection. This required solving complex issues regarding **asynchronous sprite loading** and **coordinate synchronization**.

### 📱 Responsive Game UI
Adaptive interface focused on User Experience (UX) using Flexbox, CSS Grid, and dynamic state updates to ensure the game is playable across different screen sizes.

---

## 🔧 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/mokepon.git](https://github.com/your-username/mokepon.git)
    ```
2.  **Install server dependencies:**
    ```bash
    npm install
    ```
3.  **Launch the Node.js server:**
    ```bash
    node index.js
    ```
4.  **Run the Client:**
    Open `index.html` in your browser (Live Server extension recommended).

---

## 📈 Roadmap (Senior Perspective)

* [ ] **WebSockets Migration:** Transitioning from HTTP Polling to `Socket.io` for ultra-low latency bi-directional communication.
* [ ] **Database Integration:** Implementing MongoDB to persist player statistics and global leaderboards.
* [ ] **Modular Refactoring:** Using a bundler like Vite or Webpack to enhance maintainability and code splitting.

---

> **Technical Note:** Developed as a comprehensive demonstration of full-stack integration, asynchronous logic, and advanced Canvas manipulation.