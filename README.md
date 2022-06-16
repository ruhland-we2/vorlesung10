# vorlesung10 Einführung von TypeScript in einem NodeJS Projekt

## Umgebung für TypeScript bereitstellen
Man erstellt zunächst zwei Directories

```
src
dist
```

`src` beinhaltet die TypeScript Sourcen. `dist` beinhaltet die compilierten JavaScript Dateien. Im ersten Schritt wird die Datei *restserver.js* umbenannt in *restserver.ts* und in den *src*-Ordner kopiert.

Nach den Installationen der Pakete

```
 npm i express
 npm i helmet
 npm i bs58
```

werden die Entwicklungswerkzeuge ebenso installiert

```
 npm i -D typescript
 npm i -D @types/node
 npm i -D @types/express
```

Mit dem Kommando 

```
$npx tsc --init
````
wird eine Datei *tsconfig.json* als Konfigurationsdatei für TypeScript generiert.

## require in NodeJS vs. import in TypeScript

Als erstes werden die 

```
const express = require('express');
const helmet = require('helmet');
const bs58 = require('bs58');
```

umgeschrieben in

```
import express from 'express';
import helmet from 'helmet';
import bs58 from 'bs58';
```

Mit dem Kommando 

```
$npx tsc
```

werden die Dateien - hier nur restserver.ts - compiliert.
Es wird ein Fehler
```
src/restserver.ts:69:62 - error TS2554: Expected 0-1 arguments, but got 2.
69 app.post('*', function(req, res){ res.send('file not found', 404); });
```
angezeigt, der in JavaScript nicht ersichtlich war, weil er aus einer alten Version von express stammt.

Damit die compilierte restserver.js Datei im dist Verzeichnis liegt muss man in der tsconfig.json die Zeile

```
    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
```
auskommentiert und geändert werden.

## Konfiguration von NodeJS

In der Datei *package.json* wird der Abschnitt *scripts* geändert in

```
  "scripts": {
    "compile": "tsc"
  },
```

so dass mit dem Kommando

```
$npm run compile
```

die Typescript Compilierung angestoßen wird

## Debuggen von TypeScript

Zu diesem Zweck muss in der tsconfig.json der Eintrag

```
    "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
```

gesetzt werden. Danach kann man in Visual Studio Code den restserver.ts debuggen.

Der Test des  debug in VSC erfolgt durch Setzen eines Breakpoints und durch das Kommando

```
$curl http://localhost:8000/service/test-b58/79jdpA
```


