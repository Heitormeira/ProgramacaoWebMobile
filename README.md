# 🎯 Portfólio Heitor Meira — Especialista em Redes & Infraestrutura

> Estudante de **Ciência da Computação** (UNICAP) com foco em **Infraestrutura de TI e Redes de Computadores**.  
> Experiência com **Mininet, Wireshark, Docker, Linux** e conceitos avançados de redes TCP/IP.

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Projetos Principais](#-projetos-principais)
- [Tecnologias](#-tecnologias)
- [Como Usar](#-como-usar)
- [Contato](#-contato)

---

## 🎯 Visão Geral

Este repositório contém meu **portfólio profissional** e **projetos práticos de redes** desenvolvidos durante meus estudos e experiência profissional.

### ✨ Destaques

- **2 Projetos Avançados de Redes** com documentação completa
- **Portfolio Web interativo** em Next.js (React 18)
- **850+ linhas de código** em Python, Bash e JavaScript
- **Foco em Infraestrutura & Redes** (não back-end)

---

## 📁 Projetos Principais

### 🔴 1. Lab Topologia Híbrida — Mininet + Docker

**📂 Repositório:** https://github.com/Heitormeira/lab-mininet-docker-networking

Simulação de **rede corporativa** combinando Mininet (simulação de rede) com Docker (containerização).

**O que você aprenderá:**
- ✅ Criar topologias de rede com múltiplos switches e hosts
- ✅ Configurar redes Docker isoladas
- ✅ Comunicação entre hosts simulados e containers
- ✅ Testes de throughput e latência com iperf
- ✅ Roteamento entre subnets (10.0.0.0, 10.0.1.0, 10.0.2.0)

**Tecnologias:** Mininet, Docker Compose, Python, Linux, iperf, Redis

**Features:**
- 3 switches em topologia hierárquica
- 7 hosts em 3 subnets diferentes
- Containers web e database
- Health checks automatizados
- Logging estruturado

---

### 🔵 2. Análise de Tráfego — Wireshark + Casos Práticos

**📂 Repositório:** https://github.com/Heitormeira/wireshark-traffic-analysis

Captura e análise de **tráfego de rede real** com identificação de protocolos, vulnerabilidades e comportamentos.

**O que você aprenderá:**
- ✅ Capturar pacotes em tempo real com tcpdump
- ✅ Analisar protocolos: TCP, UDP, DNS, HTTP, HTTPS, DHCP, ARP
- ✅ Compreender TCP 3-way handshake
- ✅ Identificar anomalias e ataques (ARP spoofing, MITM)
- ✅ Usar Wireshark GUI e ferramentas CLI

**Tecnologias:** Wireshark, tcpdump, Scapy, Python, Bash, Linux

**Features:**
- Script interativo para 8 tipos de captura
- Analisador automático de .pcap com Python
- 6 casos práticos documentados
- Análise de segurança integrada
- Exportação de relatórios

---

### 🟢 3. Portfolio Web — Next.js + React

**📂 Diretório:** `/react-01`

Portfólio profissional **interativo** mostrando meus projetos, experiência e habilidades.

**Features:**
- ✅ Design moderno e responsivo
- ✅ Seções: Sobre, Projetos, Experiência, Skills, Formação
- ✅ Links para GitHub e LinkedIn
- ✅ Currículo em PDF

**Tecnologias:** Next.js 15, React 18, CSS Modules, JavaScript

---

## 💻 Tecnologias

### Redes & Infraestrutura
- **Mininet** — Simulação de redes
- **Wireshark** — Análise de tráfego
- **Docker** — Containerização
- **Oracle Virtual Box** — Virtualização
- **Linux** (Bash, iptables, ifconfig, ip)
- **Protocolo TCP/IP**, DNS, DHCP, Roteamento, VLAN, QoS

### Programação
- **Python** — Análise de pacotes (Scapy), automação
- **Bash/Shell** — Scripts de captura e análise
- **JavaScript** — React, Next.js
- **Java, C** — POO, Estruturas de Dados

### Ferramentas
- Git / GitHub
- VS Code
- Docker Compose
- tcpdump
- Excel, Power BI

---

## 🚀 Como Usar

### Opção 1: Explorar os Projetos de Redes

```bash
# Clone e navegue aos projetos
git clone https://github.com/Heitormeira/lab-mininet-docker-networking.git
cd lab-mininet-docker-networking
cat README.md  # Leia a documentação completa

git clone https://github.com/Heitormeira/wireshark-traffic-analysis.git
cd wireshark-traffic-analysis
cat README.md
```

### Opção 2: Executar o Portfolio Web Localmente

```bash
cd react-01
npm install
npm run dev
# Abra http://localhost:3000
```

---

## 📊 Estrutura do Repositório

```
Programa-oWebeMobile/
├── README.md                              # Este arquivo
├── LICENSE                                 # MIT License
│
├── react-01/                              # Portfolio Web (Next.js)
│   ├── app/
│   │   ├── page.js                       # Home page atualizado com Redes
│   │   ├── page.module.css
│   │   ├── layout.js
│   │   └── globals.css
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── lab-mininet-docker-networking/        # Projeto 1: Mininet + Docker
│   ├── README.md                         # Documentação (450+ linhas)
│   ├── topologia_mininet.py              # Script Python da topologia
│   ├── docker-compose.yml                # Orquestração Docker
│   ├── dockerfiles/
│   │   ├── Dockerfile.web
│   │   ├── Dockerfile.db
│   │   └── redis.conf
│   ├── .gitignore
│   └── LICENSE
│
└── wireshark-traffic-analysis/           # Projeto 2: Wireshark
    ├── README.md                         # Documentação (500+ linhas)
    ├── scripts/
    │   ├── capture_traffic.sh            # Menu interativo
    │   └── analyze_pcap.py               # Análise automática
    ├── requirements.txt                  # Dependências Python
    ├── .gitignore
    └── LICENSE
```

---

## 👨‍💻 Experiência Profissional

### Estagiário de TI — Infraestrutura & Suporte
**SINDHOSPE** (2026 – Atual) | Recife, Pernambuco

- Suporte técnico e diagnóstico de problemas de conectividade
- Análise de infraestrutura de TI
- Documentação de topologias de rede
- Levantamento de necessidades tecnológicas
- Relatórios técnicos com recomendações

### Packer / Picker
**City Beach** (2024) | Austrália

- Experiência internacional e multicultural
- Comunicação fluente em inglês
- Trabalho em equipe e adaptabilidade

---

## 🎓 Formação

**Bacharelado em Ciência da Computação**  
UNICAP — Universidade Católica de Pernambuco (2024 – 2028)

**Disciplinas Relevantes:**
- Redes de Computadores ✅
- Estrutura de Dados
- Programação Orientada a Objetos
- Banco de Dados
- Sistemas Operacionais

---

## 🌐 Links Importantes

- **Portfolio:** http://localhost:3000 (executar localmente)
- **GitHub:** https://github.com/heitormeira
- **LinkedIn:** https://linkedin.com/in/heitormeira/
- **Currículo:** `/react-01/public/curriculum`

### Repositórios dos Projetos
- 🔴 Lab Mininet + Docker: https://github.com/Heitormeira/lab-mininet-docker-networking
- 🔵 Wireshark Analysis: https://github.com/Heitormeira/wireshark-traffic-analysis

---

## 📈 Estatísticas

| Métrica | Valor |
|---------|-------|
| **Projetos de Redes** | 2 |
| **Linhas de Código** | 1,700+ |
| **Linguagens** | 5 (Python, Bash, JavaScript, Java, C) |
| **Documentação** | 950+ linhas |
| **Tecnologias** | 15+ |

---

## 🤝 Contato

- **Email:** heitor.meira@dev.com
- **LinkedIn:** https://linkedin.com/in/heitormeira/
- **GitHub:** https://github.com/heitormeira
- **Localização:** Recife, Pernambuco, Brasil

---

## 📄 Licença

Este repositório está sob a licença **MIT**. Veja [LICENSE](LICENSE) para detalhes.

---

## ✅ Status

- ✅ Portfólio atualizado (Agosto 2026)
- ✅ Projetos de Redes documentados
- ✅ Repositórios públicos no GitHub
- 🔄 Em busca de oportunidades de estágio em Infraestrutura & Redes

---

**Última atualização:** 18 de agosto de 2026  
**Autor:** Heitor Meira | Estudante de Ciência da Computação
