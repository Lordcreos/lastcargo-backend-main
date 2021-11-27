# lastcargo-backend

## verificar la distribución
```
lsb_release -a
```
![image](https://user-images.githubusercontent.com/50051312/141898184-7f0c9c2f-1df3-4225-911f-c4846fdd31c5.png)

## Instalacion de NODE 
```
sudo apt install nodejs
```
## Instalación de NPM
```
apt install npm
```

## Instalacion de NVM 
```
sudo apt install curl 
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
source ~/.profile
nvm install node 
```

## Node Project Management 
```
npm install pm2 -g
```

## Clonar el proyecto
```
git clone https://github.com/crisjc6/lastcargo-backend

```

## Instalación de dependencias 
```
npm install
```

## Creación de archivo de configuracion process.json
```
nano process.json
```

* copiar el siguiente registros

```
{
   "apps":[
      {
         "name":"main-app",
         "script":"./server.js",
         "env":{
            "NODE_ENV":"development"
         },
         "env_production":{
            "NODE_ENV":"production"
         }
      }
   ]
}
```

Ctrl O acpetar
Ctrl X salir

## Ejecutar el comando de produccion
```
npm run build
```
## Configuración  de las base de datos y de las variables de entorno
![image](https://user-images.githubusercontent.com/50051312/141923428-b2b385de-2db8-45df-933e-8316f4c811cb.png)

## enable 80 and udpate .env
IP and PORT and the database
## Levantar proyecto y crear scrapper Transporte
```
npm run start
```
![image](https://user-images.githubusercontent.com/50051312/141925240-e2daab15-06b7-4e4f-bf94-4f358619c9a3.png)

## Instalar el moton de chrome en el servidor si se presenta este error en consola
![image](https://user-images.githubusercontent.com/50051312/141925330-1628c0be-7dd0-4436-b14b-3c7e3fc9e801.png)

```
sudo apt-get install chromium-browser
```
```
sudo apt-get install gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget

```
sudo apt-get update
sudo apt-get install -y libgbm-dev


## Start PM2
```
pm2 start process.json --env production

```
```
pm2 restart process.json --env production

```

![image](https://user-images.githubusercontent.com/50051312/141926601-ac991481-9b05-4d4a-a6bb-51e437221e4c.png)

```
pm2 list
```
