<p align='left'>
    <img src="client/assets/logoMintDef.png"  width="200px"> </img>
</p>

# Mint App - Wallet :💚

This project was made by a team of 7 people _(check contributors)_, which was our Final Project for Henry. The purpose of the project, was to create a mobile app, which offers the possibility of to make deposits, to pay services, to make transfers and in a future to buy and operate with crypto.

### Applied technologies :hammer:

- **Front End:**

  - React Native
  - Expo
  - Redux
  - CSS

- **Back End:**
  - Node.js
  - Express
  - PostgreQL
  - Sequelize

# How to start the project: :rocket:

To run this project locally follow the next steps:

- Clone (or fork and clone) this repository
- Install [PostgreSQL](https://www.postgresql.org/)
- Run command prompt and enter `psql -U postgres` and enter the password you provided when installing PostgreSQL.
- Enter `CREATE DATABASE wallet;`
- Run `npm i` inside each folder: `/api`, `/server` and `/client`
- Create a `.env` file inside `api` folder with the format provided bellow:

  - DB_HOST = ""
  - DB_USER = ""
  - DB_PASSWORD = ""
  - DB_PORT = ""

- Run `npm start` inside `/api`, `/server`, `/client`
- An expo localhost page will display a QR code in your browser. Scan it with the expo app and MINT will start on your device.

# About Us :busts_in_silhouette:

We are a work team, formed by Henry's students, in which each one comes from different places, situations and experiences, which make this team multi-faceted, being this a great advantage, at the hour of 'create' and development.
Many objectives unite us, between them, to acquire experience and knowledge regarding the profession and teamwork and being able to offer our service in the best way, as Full Stack Web Developers.

:man_technologist: - Carreño Victor [GitHub](https://github.com/ViJo0803) [LinkedIn](https://www.linkedin.com/in/victor-carreno-fullstack/)

:man_technologist: - Chaves Agustin [GitHub](https://github.com/AguChaves92) [LinkedIn](https://www.linkedin.com/in/agustin-chaves-b5bb7216a/)

:man_technologist: - Fuertes Luciano [GitHub](https://github.com/Luciano-Fuertes) [LinkedIn](https://www.linkedin.com/in/luciano-fuertes/)

:man_technologist: - Massello Francisco [GitHub](https://github.com/franmassello) [LinkedIn](https://www.linkedin.com/in/francisco-massello/)

:man_technologist: - Mazzetti Luciano [GitHub](https://github.com/luchomazze) [LinkedIn](https://www.linkedin.com/in/luchomazze/)

:woman_technologist: - Suarez Natalia [GitHub](https://github.com/Natalia977) [LinkedIn](https://www.linkedin.com/in/natalia-suarez-full-stack-developer/)

:woman_technologist: - Vargas Medina Eva Cristina [GitHub](https://github.com/evacvargas) [LinkedIn](https://www.linkedin.com/in/evargasm/)

<div>
    <h1>Landing</h1> 
    <p>On the landing page, you'll find two login or sign in options if you don't have an account already: the first one with a regular email and password or a second one with a Google account.
      Also, you may access to our Frequently Asked Questions (FAQ) section on the bottom of the screen</p>
   <img src="client\assets\readmeImages\landingPage.jpg" width="300px"> </img>
    <h1>Register</h1>
    <p>If you choose to sign in with a regular email, you'll get redirected to the register screen, where you must fill a short form with personal data and password to advance.</p> 
   <img src="client\assets\readmeImages\registerPage.jpg" width="300px"> </img>
    <h1>Extended Register</h1>
    <p>This screen will only appear the first time you login with either login methods. Here, Mint will collect information that neither Register, or Google register provides, this is necesary in order to proceed in the account creation.</p> 
   <img src="client\assets\readmeImages\registerExtended.jpg"  width="300px"> </img>
    <h1>Home</h1> 
    <p>This is the main screen of Mint, where you may choose wich action to perform on your account.
On the left side of the header you'll find the drawer, to access account management.
On the right side of the header, the house icon, redirects you from every screen to the home screen, for a quick navigation.
Below the header you can visualize the current balance of your accounts.
Right on the center of the screen, the shortcuts allow you to perform the account actions desired.
And, on the bottom, the banner will show some upcoming features, events or advertising</p>
   <img src="client\assets\readmeImages\homePage.jpg"  width="300px"> </img>
   <h1>Deposit</h1> 
   <p>Here is where you may charge money into your Mint account. If you want to test the app flow, you may enter the card information of the placeholder </p>
   <img src="client\assets\readmeImages\depositPage.jpg"  width="300px"> </img>
    <h1>Services</h1> 
    <p>Do you want to pay your bills? Use the search bar or scroll down to find the service you want to pay to.</p>
   <img src="client\assets\readmeImages\allServices.jpg"  width="300px"> </img>
    <h1>Service Payment</h1> 
    <p>Once the service is selected, you must provide the information required for the bill and the payment amount for it.</p>
   <img src="client\assets\readmeImages\servicePaymentPage.jpg"  width="300px"> </img>
    <h1>Drawer Menu</h1>
    <p>The drawer menu provides access to the User Profile screen, the details of account actions, the FAQ section if you have a doubt, a small description of the app and developers of Mint and the option to log out.</p> 
   <img src="client\assets\readmeImages\drawerPage.jpg"  width="300px"> </img>
    <h1>Account Details</h1> 
    <p>If you press on Accounts from drawer menu, the Account Details will display your transaction history, including the incoming or outcoming transfers and the services payment history.</p>
   <img src="client\assets\readmeImages\accountsPage.jpg"  width="300px"> </img>
    <h1>User Profile</h1> 
    <p>Here is a display of your account photo and information, next to your QR ready for scanning.</p>
   <img src="client\assets\readmeImages\profilePage.jpg"  width="300px"> </img>
    <h1>Contacts</h1> 
    <p>The contact list, provides a quick transfer interface, where you just select the contact you want to transfer to and the desired amount.
    </p>
   <img src="client\assets\readmeImages\contactsPage.jpg"  width="300px"> </img>
    <h1>Add Contact</h1> 
    <p>If you wanted to add a new contact, you only need to provide the alias (email) for it and press Add Contact</p>
   <img src="client\assets\readmeImages\addContactPage.jpg"  width="300px"> </img>
    <h1>Make a transfer</h1> 
    <p>Once you selected the contact you want to transfer to, this screen allows you to check the contact detail and the amount of money you want to send.</p>
   <img src="client\assets\readmeImages\contactsDetail.jpg"  width="300px"> </img>
    <h1>Scan QR</h1> 
    <p>By allowing Mint to access to your phone's camera, you may scan another user's QR to get his alias to ease the add contact process.
Scanned a different QR? "Scan Again?" button resets the data scanned for you.</p>
   <img src="client\assets\readmeImages\scanQRPage.jpg"  width="300px"> </img>
    <h1>About Us</h1> 
    <p>A brief review of the Mint creation and the team behind it.</p>
   <img src="client\assets\readmeImages\aboutUsPage.jpg"  width="300px"> </img>
    <h1>FAQ</h1> 
    <p>If you have any question or doubt about the app, you may find the answer on the FAQ screen.</p>
   <img src="client\assets\readmeImages\faqPage.jpg"  width="300px"> </img>
<div>
