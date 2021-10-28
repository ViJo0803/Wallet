<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Mint App - Wallet :rocket:

This project was made by a team of 7 people *(check contributors)*, which was our Final Project for Henry. The purpose of the project, was to create a mobile app, which offers the possibility of to make deposits, to pay services, to make transfers and in a future to buy and operate with crypto.

### Applied technologies :hammer:

- **Front End:**
    + React Native
    + Expo
    + Redux
    

- **Back End:**
    + Node.js
    + Express 
    + PostgreQL
    + Sequelize

# How to start the project:

To run this project locally follow the next steps:

- Clone (or fork and clone) this repository
- Install [PostgreSQL](https://www.postgresql.org/) 
- Run command prompt and enter `psql -U postgres` and enter the password you provided when installing PostgreSQL.
- Enter `CREATE DATABASE wallet;` 
- Run ```npm i``` inside ```/api``` and ```/client```
- Sign up with [Sendgrid](https://sendgrid.com/) and obtain an API key, create at least one dynamic template.

- Create a `.env` file inside  `api` folder with the format provided bellow:
    + DB_HOST = ""
    + DB_USER  = "" 
    + DB_PASSWORD = ""
    + DB_PORT = ""

- Head to `api/microservices/db.js` uncomment lines 86-92, run `npm start` inside `api/microservices` TWICE, afterwards comment those lines again. This is used to create a bank user who is responsable of the recharge system.

- Head to `api/microservices/config/gateway.config.yml` and replace all `'YOUR_LOCAL_IP'` by your preffered IPv4 (you can find it by running `cmd` and writing `ipconfig /all`.

- Run `npm start` inside `/client` folder and start the project from Expo emulating a device or using your own device.

**NOTE**: If you want to promote yourself to administrador you must create an user and use Postman (or some related software) and make a PATCH request to: `http://YOUR_LOCAL_IP/users/promote/:userId`
# App Previews

### Promotional Video:
[![Click Here](https://img.youtube.com/vi/t1KtkQB5uQ8/0.jpg)](https://www.youtube.com/watch?v=t1KtkQB5uQ8) 
Click Me

### Project Full Demo (in spanish):

[![Click Me](https://img.youtube.com/vi/BcFIxGM8K_Y/0.jpg)](https://www.youtube.com/watch?v=BcFIxGM8K_Y)
Click Me

# About Us: :busts_in_silhouette:

- Eva Cristina Vargas Medina [GitHub](https://github.com/evacvargas) [LinkedIn](https://www.linkedin.com/in/evargasm/)
- Natalia Suarez [GitHub](https://github.com/Natalia977) [LinkedIn](https://www.linkedin.com/in/natalia-suarez-full-stack-developer/)
- Victor Carreno [GitHub](https://github.com/ViJo0803) [LinkedIn](https://www.linkedin.com/in/victor-carreno-fullstack/)
- Luciano Mazzetti [GitHub](https://github.com/luchomazze) [LinkedIn](https://www.linkedin.com/in/luchomazze/)
- Luciano Fuertes [GitHub](https://github.com/Luciano-Fuertes) [LinkedIn](https://www.linkedin.com/in/luciano-fuertes/)
- Agustin Chaves [GitHub](https://github.com/AguChaves92) [LinkedIn](https://www.linkedin.com/in/agustin-chaves-b5bb7216a/)
- Francisco Massello [GitHub](https://github.com/franmassello) [LinkedIn](https://www.linkedin.com/in/francisco-massello/)







Wallet
Agregar .env en cada carpeta, con sus correspondientes variables

En api

DB_HOST = ""

DB_USER  = ""

DB_PASSWORD = ""

DB_PORT = ""


En client

AUTH0_DOMAIN=""

AUTH0_CLIENT_ID=""

AUTHO_SCOPE=""

AUTH0_AUDIENCE=""
