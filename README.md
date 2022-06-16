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
