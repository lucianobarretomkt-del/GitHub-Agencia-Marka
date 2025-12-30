<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1m1ZR7YD_xv9Oe4rtE887OXnqVJjHPhdo

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

### ⚠️ Importante: Variáveis de Ambiente (.env)

Os arquivos `.env` ou `.env.local` **não são comandos** para serem executados no terminal. Eles são arquivos de configuração que o sistema lê.

1.  **Edite o arquivo:** Abra o arquivo `.env.local` no seu editor e insira as chaves necessárias.
2.  **Reinicie o Vite:** Se o servidor já estiver rodando (`npm run dev`), você precisa pará-lo (Ctrl+C no terminal) e iniciá-lo novamente para que as novas variáveis sejam carregadas.
