# 🎬 Débora Guerra — Portfólio Pessoal & Broadcast Suite

Portfólio interativo de pós-produção audiovisual, edição de vídeo, finalização, criação de vídeos com Inteligência Artificial e Ciência da Computação para **Débora Guerra**.

- **Contato:** `deboracguerra@gmail.com` | `+55 (11) 96484-4975` | São Paulo, SP
- **Portfólio Online (GitHub Pages):** [https://deboracguerra.github.io/PORT_DEBORA_GUERRA/](https://deboracguerra.github.io/PORT_DEBORA_GUERRA/)
- **LinkedIn:** [https://www.linkedin.com/in/débora-guerra-534b80a6/](https://www.linkedin.com/in/d%C3%A9bora-guerra-534b80a6/)

---

## ⚡ Qual linguagem o GitHub entende para colocar o site no ar?

O GitHub hospeda sites através do serviço oficial e gratuito chamado **GitHub Pages**. 
A linguagem universal e nativa que o GitHub Pages lê diretamente é o **HTML5 puro acompanhado de CSS3 e JavaScript nativo**:

- **`index.html`**: É o arquivo central que o GitHub Pages procura automaticamente. Ele contém toda a estrutura do site, o design retrô/broadcast CRT, o player com o seu vídeo, e o sistema bilíngue (Português/Inglês).
- **Zero necessidade de servidores ou comandos**: O GitHub lê o `index.html` e o coloca na internet instantaneamente. Qualquer navegador (Chrome, Safari, Edge, celular) abre o site sem precisar de nada extra.
- **`.nojekyll`**: Arquivo especial que instrui o GitHub Pages a publicar todos os arquivos de mídia (vídeos e imagens) sem filtros.

---

## 🚀 Como Postar o Projeto no GitHub (Passo a Passo Fácil)

Você pode publicar no GitHub de duas formas: diretamente pelo navegador (sem instalar nada) ou via terminal com Git.

### 👉 Método 1: Pelo Navegador (Sem instalar nada, em 3 minutos)

1. **Baixe o arquivo ZIP do projeto:**
   - No topo ou no rodapé do site, clique no botão **ZIP** (ou baixe `portfolio-debora-guerra.zip`).
   - Descompacte o arquivo no seu computador.
2. **Crie o repositório no seu GitHub:**
   - Acesse [github.com](https://github.com/) e faça login.
   - Clique no botão verde **New** (Novo repositório).
   - Nomeie o repositório como `PORT_DEBORA_GUERRA` (ou o nome que preferir).
   - Deixe como **Public** (Público) e clique em **Create repository**.
3. **Envie os arquivos:**
   - Na página do repositório criado, clique em **uploading an existing file** (ou **Add file** > **Upload files**).
   - Arraste para a tela os arquivos descompactados:
     - `index.html`
     - `hero-video.mp4`
     - `hero-poster.jpg`
     - `profile.jpg`
     - `.nojekyll`
     - `README.md`
   - Clique no botão verde **Commit changes**.
4. **Ative o GitHub Pages:**
   - Clique na aba **Settings** (Configurações) no topo do seu repositório.
   - No menu lateral esquerdo, clique em **Pages**.
   - Na seção **Build and deployment** > **Source**, selecione:
     - **Deploy from a branch**
     - Branch: `main` (ou `master`)
     - Pasta: `/(root)`
   - Clique em **Save**.
5. **Pronto! 🎉** Em cerca de 30 a 60 segundos, o GitHub exibirá o link público do seu site:  
   👉 `https://deboracguerra.github.io/PORT_DEBORA_GUERRA/`

---

### 👉 Método 2: Pelo Terminal (Git)

Se preferir usar o terminal na sua máquina:

```bash
# 1. Entre na pasta do projeto
cd pasta-do-projeto

# 2. Inicie o repositório git local
git init

# 3. Adicione todos os arquivos e faça o primeiro commit
git add .
git commit -m "Publicação inicial do portfólio Débora Guerra"

# 4. Vincule com o seu repositório remoto no GitHub
git branch -M main
git remote add origin https://github.com/deboracguerra/PORT_DEBORA_GUERRA.git

# 5. Envie para o GitHub
git push -u origin main
```

Depois basta ir em **Settings** > **Pages** e selecionar a branch `main` e pasta `/ (root)`.

---

## 📸 Como Substituir a Foto de Perfil

Você pode trocar sua foto a qualquer momento sem mexer em nenhuma linha de código:

1. Pegue sua nova foto (JPG ou PNG).
2. Nomeie o arquivo como **`profile.jpg`** (ou `profile.png`).
3. Substitua o arquivo na raiz do repositório.
4. No GitHub, você pode fazer isso clicando em **Add file** > **Upload files** e enviando o novo `profile.jpg`.
5. O site atualiza automaticamente na mesma hora!

---

## 📁 Estrutura de Arquivos

```text
├── index.html                  # O site completo em HTML5 + CSS + JavaScript nativo
├── hero-video.mp4              # O vídeo em exibição na TV CRT do topo
├── hero-poster.jpg             # Imagem de capa do vídeo
├── profile.jpg                 # Sua foto de perfil (substituível)
├── .nojekyll                   # Compatibilidade 100% com o GitHub Pages
├── README.md                   # Instruções e documentação do projeto
├── portfolio-debora-guerra.zip # Pacote ZIP para download direto
└── .github/workflows/deploy.yml # Automação de deploy contínuo (opcional)
```

---

## 🌟 O que está incluído no site

- **TV Retrô CRT**: Player estilizado com proporção harmoniosa reproduzindo o seu vídeo com botões de áudio e play/pause.
- **Showreels & Vídeos Integrados**:
  - *Showreel Principal* (Cinema, TV & Streaming)
  - *TikTok & Redes Sociais* (Edição dinâmica)
  - *Criação de Vídeo com IA* (IA generativa e inteligência artificial)
- **Clientes em Destaque**: Netflix, HBO, Globoplay e Amazon Prime Video destacados em painéis especiais com iluminação neon.
- **Prêmios em Evidência**:
  - Indicação ao **EMMY AWARDS 2025** (Projeto *Bora, o Pódio é Nosso* para a Rede Globo).
  - **Prêmio de Inovação com IA 2026** (Mondial e Aiwa).
  - **1º Lugar Nacional 2026** (L'Oréal Paris).
- **Sistema Bilíngue**: Alternância instantânea entre Português e Inglês com 1 clique (mantém a preferência no navegador).
- **100% Responsivo**: Otimizado para celular, tablet e monitores ultrawide.
