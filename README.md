# Prueba1IngDev_EduCortes-CrisSalas
## Descripción
Este proyecto implementa un flujo DevOps utilizando GitHub, basado en una aplicación web (MasterBikes) junto con un microservicio en Node.js.

## Modelo de trabajo
Se utilizó GitFlow como estrategia de ramificación, permitiendo organizar el desarrollo en ramas:
- main
- develop
- feature/*
- hotfix/*

## Convenciones de commits
Se utilizaron las siguientes convenciones:
- feat: nuevas funcionalidades
- fix: corrección de errores
- ci: integración continua
- docs: documentación

## Flujo de trabajo
El flujo utilizado fue:
- feature → develop
- develop → main
- hotfix → main

Se realizaron:
- 2 features (catalogo y contacto)
- 1 hotfix (corrección de texto)

## Automatización
Se implementó GitHub Actions para automatizar la ejecución del proyecto en:
- push a develop
- pull request a main

## Microservicio
Se implementó un microservicio en Node.js que permite gestionar productos de bicicletas.

## Integrantes
- Eduardo Cortes
- Cristian Salas