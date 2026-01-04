# Guia de Deploy Automático 🚀

Agora que seu GitHub está conectado à Vercel, o fluxo de trabalho ficou muito mais simples.

## Como funciona?

Sempre que você "sobe" (faz um **Push**) alterações para o GitHub, a Vercel detecta isso automaticamente e inicia uma nova build.

1. **Alteração Local**: Você faz mudanças no código (ou eu faço por você).
2. **Commit & Push**: As mudanças são enviadas para o repositório no GitHub.
3. **Deploy Automático**: A Vercel recebe o sinal e publica o site em segundos.

## Como subir os arquivos rapidamente?

Para facilitar, criei o arquivo `sync.bat` na raiz do seu projeto. 

**Basta dar um duplo clique no `sync.bat`** e ele vai:
1. Adicionar todas as mudanças (`git add .`)
2. Criar um ponto de salvamento (`git commit`)
3. Enviar para o GitHub (`git push`)

O site será atualizado na Vercel logo em seguida!
