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
        <title>Valentinovo 💖</title>
        <style>
          body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: #ffe6e6;
            font-family: sans-serif;
            text-align: center;
            overflow: hidden;
          }
          h1 { color: #ff1a75; }
          button {
            font-size: 1.5rem;
            padding: 10px 20px;
            margin: 10px;
            cursor: pointer;
            border: none;
            border-radius: 8px;
            position: relative;
          }
          #yes { background: #ff4d94; color: white; }
          #no { background: #ffcccc; color: #990000; position: absolute; }
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
            document.body.innerHTML = '<h1>Woohoo! 💘 Vesel Valentinovo!</h1>';
          });

          noBtn.addEventListener('mouseover', () => {
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
          });

          noBtn.addEventListener('click', () => {
            alert('Hmm… poskusi znova 😉');
          });
        </script>
      </body>
      </html>
    `;
  }
}
