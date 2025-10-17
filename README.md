# Hello World Typography App - Python Version

A minimalist web application that displays "Hello World" in beautiful, oversized typography with customization options.

## Features

- 🎨 Beautiful typography with responsive design
- 🌓 Dark/Light theme toggle
- 🌍 Multiple language greetings (rotating messages)
- 🎨 Customizable text color, font, and background
- ✨ Smooth fade-in animations

## Tech Stack for Python Version

- **Backend**: Flask or FastAPI
- **Frontend**: HTML, CSS (Tailwind), JavaScript
- **Deployment**: Python 3.9+

## Setup Instructions (Python)

### 1. Install Python Dependencies

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install Flask
pip install flask
```

### 2. Create Project Structure

```
hello-world-python/
├── app.py                 # Flask server
├── static/
│   ├── css/
│   │   └── styles.css    # Custom styles
│   └── js/
│       └── main.js       # Frontend logic
└── templates/
    └── index.html        # Main page
```

### 3. Create Flask Server (app.py)

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
```

### 4. Create HTML Template (templates/index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World - Beautiful Typography</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Playfair+Display:wght@700&family=Poppins:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ url_for('static', filename='css/styles.css') }}">
</head>
<body class="bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
    <!-- Theme Toggle Button -->
    <button id="theme-toggle" class="fixed top-4 right-4 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
    </button>

    <!-- Settings Button -->
    <button id="settings-toggle" class="fixed top-4 left-4 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
    </button>

    <!-- Customization Panel -->
    <div id="settings-panel" class="hidden fixed top-20 left-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-72">
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium mb-2">Text Color</label>
                <select id="color-select" class="w-full p-2 border rounded-lg dark:bg-gray-700">
                    <option value="#000000">Black</option>
                    <option value="#06b6d4">Cyan</option>
                    <option value="#a855f7">Purple</option>
                    <option value="#ec4899">Pink</option>
                    <option value="#f97316">Orange</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium mb-2">Font</label>
                <select id="font-select" class="w-full p-2 border rounded-lg dark:bg-gray-700">
                    <option value="Inter, sans-serif">Inter</option>
                    <option value="'Playfair Display', serif">Playfair</option>
                    <option value="Poppins, sans-serif">Poppins</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium mb-2">Background</label>
                <select id="bg-select" class="w-full p-2 border rounded-lg dark:bg-gray-700">
                    <option value="solid">Solid</option>
                    <option value="gradient">Gradient</option>
                </select>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div id="main-container" class="flex min-h-screen flex-col items-center justify-center gap-8 px-4 md:px-8">
        <h1 id="greeting" class="animate-fade-in text-center text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-9xl text-gray-900 dark:text-white">
            Hello World
        </h1>

        <button id="change-message" class="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Change Message
        </button>
    </div>

    <script src="{{ url_for('static', filename='js/main.js') }}"></script>
</body>
</html>
```

### 5. Create CSS (static/css/styles.css)

```css
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(1rem);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 0.8s ease-out 0.1s both;
}
```

### 6. Create JavaScript (static/js/main.js)

```javascript
const messages = [
    "Hello World",
    "Bonjour Monde",
    "Hola Mundo",
    "Ciao Mondo"
];

let currentIndex = 0;
let currentColor = "#000000";
let currentFont = "Inter, sans-serif";
let isGradient = false;

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});

// Settings Panel Toggle
const settingsToggle = document.getElementById('settings-toggle');
const settingsPanel = document.getElementById('settings-panel');
settingsToggle.addEventListener('click', () => {
    settingsPanel.classList.toggle('hidden');
});

// Change Message
const changeBtn = document.getElementById('change-message');
const greeting = document.getElementById('greeting');
changeBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % messages.length;
    greeting.textContent = messages[currentIndex];
    greeting.classList.remove('animate-fade-in');
    void greeting.offsetWidth; // Trigger reflow
    greeting.classList.add('animate-fade-in');
});

// Color Change
const colorSelect = document.getElementById('color-select');
colorSelect.addEventListener('change', (e) => {
    currentColor = e.target.value;
    greeting.style.color = currentColor;
});

// Font Change
const fontSelect = document.getElementById('font-select');
fontSelect.addEventListener('change', (e) => {
    currentFont = e.target.value;
    greeting.style.fontFamily = currentFont;
});

// Background Change
const bgSelect = document.getElementById('bg-select');
const mainContainer = document.getElementById('main-container');
bgSelect.addEventListener('change', (e) => {
    isGradient = e.target.value === 'gradient';
    if (isGradient) {
        mainContainer.style.background = 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)';
        document.body.classList.remove('bg-gray-50', 'dark:bg-gray-900');
    } else {
        mainContainer.style.background = '';
        document.body.classList.add('bg-gray-50', 'dark:bg-gray-900');
    }
});
```

### 7. Run the Application

```bash
python app.py
```

Visit `http://localhost:5000` in your browser.

## Deployment

### Deploy to Replit (Python)

1. Create a new Python Repl
2. Copy all files into the Repl
3. Install Flask: `pip install flask`
4. Run: `python app.py`

### Deploy to Heroku

```bash
# Create Procfile
echo "web: python app.py" > Procfile

# Create requirements.txt
pip freeze > requirements.txt

# Deploy
heroku create
git push heroku main
```

## Features Implementation

- ✅ Responsive typography (text-5xl → text-9xl)
- ✅ Dark/Light mode toggle
- ✅ Message rotation (4 languages)
- ✅ Color customization
- ✅ Font selection
- ✅ Background gradient option
- ✅ Smooth animations

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile responsive

## License

MIT License - Feel free to use this for learning and personal projects!
