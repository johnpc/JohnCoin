import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import {Collapse} from "antd";

const {Panel} = Collapse;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Buy <code>JohnCoin</code> and invest in the future.
        </p>
        <a
          className="App-link"
          href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8AF3eC13F7c9c5c870BA3fE014C55415D258b1e9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy JohnCoin on PancakeSwap
        </a>
        <small>
          If you see a liquidity error, wait a moment and try again.
        </small>
      </header>
      <div>
        <h1>How to buy</h1>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="Install Binance Chain Chrome Extension" key="1">
            <p>
              Install the{" "}
              <a href="https://chrome.google.com/webstore/detail/binance-chain-wallet/fhbohimaelbohpjbbldcngcnapndodjp?hl=en">
                Binance chain wallet Chrome extension
              </a>{" "}
              and create an account on there. Make sure to hold on to your
              private keys!
            </p>
            <p>
              Take a moment to familiarize yourself with the interface. You'll
              find that you have two wallets. A "Binance Smart Chain Network"
              wallet and a "Binance Chain Network" wallet. Each wallet has a
              different address that you can copy and paste. This will be
              important later.
            </p>
          </Panel>
          <Panel
            header="Send BNB coins to your Binance Smart Chain wallet"
            key="2"
          >
            <p>
              The easiest place to buy BNB coins is on{" "}
              <a href="https://binance.us">binance.us</a>
            </p>
            <p>
              If this is your first time using Binance, it may take a couple
              days for Binance to verify your account.
            </p>
            <p>
              Then you can deposit funds. It may take up to 10 days to be able
              to withdraw or use your Binance coins after you purchase them,
              unless you already own other coins in your account where funds
              have settled.
            </p>
            <p>
              BNB coins are purchased using the{" "}
              <a href="https://www.binance.us/en/trade/BNB_USD">
                BNB_USD trading pair
              </a>
              .
            </p>
            <p>
              Once funds are settled, go to Wallet {">"} Withdraw. Select BNB
              coins. Set the "Recipient's BNB Address" to the address of your
              "Binance Chain Network" wallet in your Chrome extension. NOT the
              "Binance Smart Chain Network" wallet!
            </p>
            <p>
              It takes a minute or two for the funds to appear in your Binance
              Chain Network wallet. When they do, you can send the funds from
              there to your Binance Smart Chain Network wallet address. Finally,
              you are done moving your coins around.
            </p>
          </Panel>
          <Panel header="Buy coins" key="3">
            <p>
              Visit{" "}
              <a
                className="App-link"
                href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8AF3eC13F7c9c5c870BA3fE014C55415D258b1e9"
                target="_blank"
                rel="noopener noreferrer"
              >
                PancakeSwap
              </a>{" "}
              to buy JohnCoin there. Connect your Binance Chain wallet using the
              "Connect" button in the upper right. There could a low-liquidity
              issue. If so, wait a moment and try again. Make sure you're using
              the v2 of PancakeSwap.
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default App;
