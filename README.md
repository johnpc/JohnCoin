# Create your own BEP20 Coin

This repository covers how dead simple it is to create your own crypto coin and sell it. Just bring your own clever name, branding, and audience, and you could become the founder of the next meme crypto sensation.

## Step 1: Writing the Source Code

Take the code from JohnCoin.sol, but replace the coin name and ticker symbol with your preferred values.

## Step 2: Compiling the Source Code

Visit [remix](http://remix.ethereum.org/) and add your code to the editor. On the "SOLIDITY COMPILER" tab, choose your file and compile it. On the "DEPLOY & RUN TRANSACTIONS" tab, update the "Environment" dropdown to "Injected Web3". This requires that you have Metamask installed with Binance Smart Chain added. If you just added the metamask chrome extension, you'll need to refresh the page.

### Step 2.5: Installing Metamask dependency and configuring for BEP20

If you don't already have metamask set up:

Add the [metamask](https://metamask.io/) extension to Chrome and set up an account. Under networks, choose "Custom RPC":

- Network Name: BSC Mainnet
- New RPC URL: https://bsc-dataseed.binance.org/
- Chain ID: 56
- Currency Symbol: BNB
- Block Explorer URL: https://bscscan.com

Send some BNB coins to your metamask address. You might need to create an account at binance.us to purchase your BNB coins. Note that there is a 10 day withdrawl period if you do not already have other settled funds in your Binance account.

## Step 3: Deploy the Contract

Deploy the contract on Remix. It will prompt you how many coins you want in your initial supply.

Pick a big number. 1,200,000,000,000,000,000,000,000 as the input results in 1.2M coins since it's using 18 digits of precision.

This will cost some BNB. When the deployment is complete, your contract address will appear and become available on BSCScan. Here is the example from JohnCoin:

Contract address: 0x8AF3eC13F7c9c5c870BA3fE014C55415D258b1e9
BSC Scan (contract): https://bscscan.com/address/0x8AF3eC13F7c9c5c870BA3fE014C55415D258b1e9
BSC Scan (coins): https://bscscan.com/token/0x8AF3eC13F7c9c5c870BA3fE014C55415D258b1e9

On the BSCScan contract page, you may verify the contract source code.

## Step 4: Add Liquidity to Pancakeswap

Add your new coin to your metamask wallet using the "add token" button and pasting the address your contract was deployed to. You should have the total supply of all of your coins in existence.

Visit the [pancakeswap "Liquidity" page](https://exchange.pancakeswap.finance/#/add/BNB) and add your coin by address to pancakeswap to enable trading. This also costs some BNB to set the initial price your coin will trade at.

## Create a Splash Page

View the source of the repsitory for a basic splash page that instructs buyers on how to buy, [including a link to Pancakeswap](https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8AF3eC13F7c9c5c870BA3fE014C55415D258b1e9) and instructions how your buyers can install metamask, obtain bnb, and use pancakeswap. Make sure to use v2 of pancakeswap otherwise there may be errors.

Feel free to create this splash page using [SquareSpace](https://www.squarespace.com/), [Webflow](https://webflow.com/), [Weebly](https://www.weebly.com/) or anything else. The demo in this package uses AWS Amplify because it's easy and cheap, but requires technical background.
