# GUIA: COMO ABRIR NO WINRAR E PUBLICAR NO GITHUB PAGES

Este projeto foi construído com **React, TypeScript, Vite e Tailwind CSS**, otimizado para execução local, hospedagem gratuita no **GitHub Pages**, Vercel ou Netlify, além de permitir extração direta pelo **WinRAR** no Windows.

---

## 1. Como Abrir e Extrair no WinRAR (Windows)

1. Localize o arquivo baixado: `debora-guerra-portfolio.zip`.
2. Clique com o **botão direito** no arquivo e selecione:
   - **"Extrair para debora-guerra-portfolio\"** (ou *"Extrair aqui"*).
3. O WinRAR criará a pasta com todos os arquivos do site organizados e prontos.

---

## 2. Como Subir no GitHub (Método Fácil — Pelo Navegador)

Você não precisa digitar comandos se preferir usar o navegador:

1. Acesse [github.com](https://github.com) e entre na sua conta (ou crie uma gratuita).
2. Clique no botão verde **"New"** (Novo Repositório).
3. Em **Repository name**, digite: `debora-guerra-portfolio` (ou o nome que desejar).
4. Deixe o repositório como **Public** e clique em **"Create repository"**.
5. Na página que abrir, clique no link **"uploading an existing file"** (enviar arquivos existentes).
6. Arraste todos os arquivos da pasta extraída pelo WinRAR para a tela do GitHub (exceto a pasta `node_modules` se existir).
7. No final da página, clique no botão verde **"Commit changes"**.

---

## 3. Como Ativar o GitHub Pages Gratuitamente (Site no Ar!)

1. No seu repositório no GitHub, clique na aba **"Settings"** (Configurações) no menu superior.
2. No menu lateral esquerdo, clique em **"Pages"**.
3. Em **Build and deployment > Source**:
   - Selecione **"GitHub Actions"**.
4. Pronto! O arquivo `.github/workflows/deploy.yml` já incluso neste projeto cuidará de compilar e publicar o site automaticamente.
5. Em cerca de 1 a 2 minutos, o GitHub exibirá o link público do site:
   `https://seu-usuario.github.io/debora-guerra-portfolio/`

---

## 4. Como Subir via Terminal (Git CLI)

Se preferir utilizar o terminal:

```bash
git init
git add .
git commit -m "Portfólio Profissional Débora Guerra"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/debora-guerra-portfolio.git
git push -u origin main
```

---

## 5. Como Testar e Rodar no seu Computador (Local)

Para editar ou testar no seu computador com VS Code:

1. Instale o [Node.js](https://nodejs.org/) (versão LTS).
2. Abra o terminal na pasta do projeto e execute:
   ```bash
   npm install
   ```
3. Para iniciar o servidor local:
   ```bash
   npm run dev
   ```
4. Para gerar a versão final de produção:
   ```bash
   npm run build
   ```
   (A pasta `dist/` conterá o HTML, CSS e JS estáticos e otimizados).
