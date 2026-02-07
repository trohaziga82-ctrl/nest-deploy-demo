import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHome(): string {
    return `
      <!DOCTYPE html>
      <html lang="sl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>E-asistent</title>
        <style>
          body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #ffe6e6, #ffb3c6);
            font-family: 'Comic Sans MS', sans-serif;
            text-align: center;
            overflow: hidden;
            position: relative;
          }

          h1 {
            color: #ff1a75;
            font-size: 2rem;
            animation: pulse 1.5s infinite;
          }

          button {
            font-size: 1.5rem;
            padding: 12px 24px;
            margin: 10px;
            cursor: pointer;
            border: none;
            border-radius: 12px;
            transition: transform 0.3s, background 0.3s;
          }

          #yes {
            background: #ff4d94;
            color: white;
          }

          #yes:hover {
            transform: scale(1.1);
            background: #ff66b2;
          }

          #no {
            background: #ffcccc;
            color: #990000;
            position: absolute;
            transition: left 0.3s, top 0.3s;
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }

          .heart {
            position: absolute;
            width: 20px;
            height: 20px;
            background: red;
            transform: rotate(-45deg);
            animation: floatUp 4s linear infinite;
          }

          .heart::before,
          .heart::after {
            content: "";
            position: absolute;
            width: 20px;
            height: 20px;
            background: red;
            border-radius: 50%;
          }

          .heart::before { top: -10px; left: 0; }
          .heart::after { left: 10px; top: 0; }

          @keyframes floatUp {
            0% { transform: translateY(0) rotate(-45deg); opacity: 1; }
            100% { transform: translateY(-500px) rotate(-45deg); opacity: 0; }
          }

          @media (max-width: 600px) {
            h1 { font-size: 1.5rem; }
            button { font-size: 1.2rem; padding: 10px 20px; }
          }
        </style>
      </head>
      <body>
        <h1>Bi bila z mano za Valentinovo? 💖</h1>
        <button id="yes">Da</button>
        <button id="no">Ne</button>

        <script>
          const noBtn = document.getElementById('no');
          const yesBtn = document.getElementById('yes');

          yesBtn.addEventListener('click', () => {
            document.body.innerHTML = '<h1>Hvala tiii,💘 Vesel Valentinovo!</h1>';
          });

          noBtn.addEventListener('mouseover', () => {
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
          });
S
          noBtn.addEventListener('click', () => {
            alert('Hmm… poskusi znova 😉');
          });

          // Fun hearts animation
          function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.width = heart.style.height = 10 + Math.random() * 20 + 'px';
            document.body.appendChild(heart);

            setTimeout(() => {
              heart.remove();
            }, 4000);
          }

          setInterval(createHeart, 300);
        </script>
      </body>
      </html>
    `;
  }
}
