# Send Your Crypto

## A web 3.0 application to send ethereum across the ropsten test network

This web app was created using Solidity in tie with Metamask along with hardhat for the smart contract.
The front end was created using react with tailwind css for styling.

### A preview:
When first loading up the web app we are presented with the landing page.
![landing page](https://github.com/roshan0926/sendCrypto/blob/main/readme_img/landing%20page.png?raw=true)


Scrolling down a bit we can see the services my web app provides.
![services](https://github.com/roshan0926/sendCrypto/blob/main/readme_img/services.png?raw=true)

Finally on the bottom there will be a list of all transactions completed on this web app.

![previous transactions](https://github.com/roshan0926/sendCrypto/blob/main/readme_img/previous%20transactions.png?raw=true)

### Using the web app
Scrolling back to the top we can connect out account via metamask by either pressing login or connect wallet. Metamask Chrome extention will promp you to connect your wallet.

![connection prompt](https://github.com/roshan0926/sendCrypto/blob/main/readme_img/connection%20prompt.png?raw=true)

Once connected we can fill in the fourm fields and press send now, we will again get a prompt from metamask confirming this transaction. 

![transfer confirmation](https://github.com/roshan0926/sendCrypto/blob/main/readme_img/transfer%20confirmation.png?raw=true)

There will be a loading animation while the transfer is occuring (roughly 10 seconds to a minute depending on the ropsten test network)

![loading](https://github.com/roshan0926/sendCrypto/blob/main/readme_img/loading.png?raw=true)

Once completed we can reload the page and see our new transaction completed. with the coresponding wallet addresses

![new transactions](https://github.com/roshan0926/sendCrypto/blob/main/readme_img/current%20transactions.png?raw=true)
