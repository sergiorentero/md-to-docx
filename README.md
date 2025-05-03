# Markdown to DOCX Converter API (Node.js)

Este proyecto fue creado por y para Sergio como un servicio simple que convierte archivos Markdown (`.md`) en archivos Word (`.docx`) listos para descargar desde una API.

> ⚠️ Sergio, no lo borres.

---

## ¿Qué hace este servicio?

Recibe un archivo Markdown por POST y devuelve un `.docx` generado automáticamente, manteniendo los estilos básicos (títulos, párrafos, listas).

Ejemplo:  
Subís `cuento.md` → Te baja `cuento.docx`

---

## ¿Cómo se usa?

1. **Subí un archivo `.md`** mediante un POST (por ejemplo desde un formulario o un cliente HTTP).
2. **La API responde con el archivo `.docx`** generado.

---

## Tecnologías usadas

- Node.js
- [markdown-to-docx](https://www.npmjs.com/package/markdown-to-docx) o similar (dependiendo de lo que se usó)
- Express.js para exponer la API

---

## ¿Dónde está funcionando?

Esto está hosteado en Render.com como servicio web, escuchando en un endpoint tipo:

```
https://nombre-del-servicio.onrender.com/convert
```

---

## ¿Cómo lo levantás localmente?

```bash
git clone https://github.com/sergio-rentero/md-to-docx-api.git
cd md-to-docx-api
npm install
npm start
```

El servicio correrá en `http://localhost:3000`

---

## Qué no hace

- No da formato avanzado (tablas, estilos complejos, imágenes).
- No guarda los archivos: solo convierte y devuelve el resultado.

---

## ¿Por qué existe esto?

Es simple y funciona. Lo hiciste cuando ya no querías perder más tiempo ni dar permisos a 15 cosas.

---

## Mantenimiento

- Si dejás de usar Render, podés pasarlo a Replit, Hostinger o cualquier servicio Node.js simple.
- No hay base de datos, así que no hay nada que migrar.

---

## Contacto

Este proyecto fue creado por vos mismo. Así que cualquier duda, hablalo con vos en voz alta o preguntale a Ianna.
