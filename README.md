# Fravega E2E Testing Project

Este proyecto contiene pruebas end-to-end automatizadas para el sitio web de Fravega utilizando Cypress y Cucumber.

## Tecnologías Utilizadas

- Cypress (v12.3.0)
- Cucumber para Cypress
- Node.js


## Requisitos Previos

- Node.js instalado en tu sistema
- Yarn o npm como gestor de paquetes

## Instalación

1. Clona este repositorio
2. Instala las dependencias:

yarn install

## Scripts Disponibles

El proyecto incluye los siguientes scripts:

- **Abrir Cypress Test Runner**:

yarn open:fravega:test

- **Ejecutar Pruebas en Modo Headless**:

yarn run:fravega:test


## Configuración

El proyecto está configurado con las siguientes características:

- URL base: https://www.fravega.com/
- Viewport: 1366x768
- Timeout de solicitudes: 20000ms
- Timeout de comandos por defecto: 20000ms
- Patrón de especificaciones: archivos .feature


## Autor

Jose Moreno
