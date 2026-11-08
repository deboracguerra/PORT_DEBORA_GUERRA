# GUIA DEFINITIVO: PUBLICAR NO GITHUB PAGES SEM TELA BRANCA

## ⚠️ Por que a tela ficava branca antes?
Navegadores de internet (Chrome, Safari, Edge) e o GitHub Pages **não conseguem executar arquivos TypeScript (`.tsx`) diretamente** sem compilação. Quando os arquivos brutos de desenvolvimento eram enviados diretamente ao GitHub, o navegador tentava carregar o arquivo `.tsx` e travava em uma tela branca.

## ✅ O que foi corrigido nesta versão:
Este arquivo ZIP já vem **100% PRÉ-COMPILADO em linguagem nativa da web (HTML5 + JavaScript ES6 + CSS + Imagens)**:
- `index.html` — Arquivo HTML pronto que qualquer navegador e o GitHub Pages abrem imediatamente.
- `assets/` — Todos os scripts JavaScript já traduzidos e empacotados, estilos CSS e imagens originais.
- `.nojekyll` — Arquivo essencial que desativa o processador Jekyll do GitHub, garantindo que nenhum script seja bloqueado.
- `404.html` — Garante que qualquer rota ou recarregamento de página funcione sem erro.

---

## 🚀 PASSO A PASSO PARA SUBIR NO GITHUB (EM 2 MINUTOS)

### Passo 1: Extrair o ZIP no seu computador
1. Dê um duplo-clique no arquivo `debora-guerra-portfolio.zip` (ou clique com o botão direito e selecione **"Extrair para debora-guerra-portfolio\"** no WinRAR).
2. Você verá dentro da pasta:
   - `index.html`
   - `404.html`
   - `.nojekyll`
   - Pasta `assets/` (com scripts JS, CSS e imagens)
   - Pasta `codigo-fonte-desenvolvedor/` (código TypeScript para quem quiser programar)

### Passo 2: Subir os arquivos para o GitHub
1. Acesse [github.com](https://github.com) e crie um novo repositório (exemplo: `debora-guerra-portfolio`). Deixe como **Public**.
2. Na página do repositório vazio, clique no link **"uploading an existing file"** (enviar arquivos existentes).
3. Arraste todos os arquivos da pasta extraída para a tela do GitHub:
   - `index.html`
   - `404.html`
   - `.nojekyll`
   - A pasta `assets`
4. Clique no botão verde **"Commit changes"**.

### Passo 3: Ativar o GitHub Pages (O Site entra no ar!)
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu da esquerda, clique em **Pages**.
3. Em **Build and deployment > Source**, deixe marcado:
   - **Deploy from a branch**
4. Em **Branch**, selecione:
   - **main** (ou *master*) e a pasta **/ (root)**.
5. Clique em **Save**.
6. Aguarde cerca de 30 a 60 segundos e recarregue a página de configurações. O GitHub mostrará o link oficial do seu site no ar:
   `https://seu-usuario.github.io/debora-guerra-portfolio/`

---

## 💻 Teste no Computador (Sem Internet)
Você também pode abrir o arquivo `index.html` diretamente no seu navegador após extrair para verificar que ele funciona perfeitamente.
