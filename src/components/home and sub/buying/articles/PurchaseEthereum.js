import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const PurchaseEthereum = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'How do I purchase Ethereum (ETH)?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I purchase Ethereum (ETH)?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">


                    <p className="text-[16px]">
                        Ether is the native currency of the Ethereum network and it’s commonly abbreviated to ETH, which is its ticker symbol.
                    </p>
                    <br />
                    <p className="text-[16px]">

                        You need ETH to pay for some of your interactions with the blockchain and to pay for the items you buy. You can buy it through OpenSea, either by depositing from an exchange like Coinbase or using your credit card, or you can buy it directly in your wallet extension. You also can use OpenSea’s Swap functionality to convert any existing funds to ETH.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Let's learn more!
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Adding ETH through OpenSea</h2>
                    <br />
                    <p className="text-[16px]">
                        1. On OpenSea, click your Wallet balance in the upper right corner.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720891/e5f8c985850f3fdfc6931cb2/24988194959763?expires=1711547744&signature=cb49a351eab06816b8cf0bd8e39c6aa8a4da499c6a6878b1473b8defef913a56" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        2. Click the “+” sign next to your wallet balance.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720893/47c863e44e8cab27df615cdf/24988194983059?expires=1711547744&signature=66698f940fac0037cf27db336472b8deb20f8af91fb7170deb6124cb069a4a71" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        3. Select Deposit from the dropdown if you'd like to transfer funds from an exchange or another wallet, or Buy ETH with card to purchase ETH with a credit card. Follow the prompts on your screen.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">
                        Method 1: Deposit from an exchange</h2>
                    <br />
                    <p className="text-[16px]">
                        For most people, it can be easy to find a crypto exchange, like Coinbase, which will offer a way to buy crypto with cash.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Use the wallet address you copied to send crypto from your exchange. You can also read through the Coinbase help center guide.
                    </p>
                    <br />
                    <b>Please note that we cannot make any guarantees about third-party services.</b>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720890/7ee25240f004d137f00e4342/24988491019027?expires=1711547744&signature=b7420853a968e53d660dc67c94c72b1b204a0ca8bf718d34263b3e4b39ed05ac" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">
                        Method 2: Buy with a credit or debit card</h2>
                    <br />
                    <p className="text-[16px]">
                        Depending on your locality, you may be able to buy directly with a credit or debit card.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Buying with a credit card may incur additional processing fees. You may also not receive the entire crypto amount immediately.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720892/8d62f2fd670097d6b2c9fcdb/24988462647187?expires=1711547744&signature=6a591a06b00bf44c2407b34806741b4ebcbf4d50a38461efaed812094f873bc0" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">
                        Adding ETH through your web3 wallet</h2>
                    <br />
                    <p className="text-[16px]">
                        Depending on your third-party wallet provider, you may have the option to purchase ETH directly in your wallet.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Please see the instructions below on how to purchase ETH using MetaMask.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Click on the Buy/Sell button in your wallet.
                    </p>
                    <br />

                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720908/33c4a64037feb309cade8c9a/24988194998291?expires=1711547744&signature=a5ed29b730f059d826e6c48bcb12d29eb8f9c64396cb929c36904ef4bce5ffe6" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        2. Follow the prompts on your screen from MetaMask to buy your desired cryptocurrency.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720910/963cc35d31f2469632bdd206/24988195026451?expires=1711547744&signature=dece768fa537f825dfc3607e365b58bfac3c831ffbdf353dc7459ad99d8aa07e" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]">Keep in mind, all transactions completed on the Ethereum blockchain will require gas fees.
                    </p>
                    <br />
                    <p className="text-[16px]">You'll need enough ETH to complete your transaction using OpenSea, along with the gas fees associated with the transaction.
                    </p>
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default PurchaseEthereum