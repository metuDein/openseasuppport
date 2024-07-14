import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const PurchaseOnBase = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'How do I purchase NFTs on Base?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I purchase NFTs on Base?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        OpenSea is now compatible with Base, a secure, low-cost, developer-friendly Ethereum Layer 2.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you’re buying an NFT on Base, many wallets (such as the one you create when you log in with email) will automatically prompt you to switch networks. If your wallet doesn’t support this, or you’d like to add the Base network to your wallet manually, you can follow these steps:
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Adding Base to your wallet </h2>
                    <br />
                    <p className="text-[16px]">
                        To add Base to your wallet, you’ll need the chain RPC information found in the Base developer docs.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Here's how to add Base to MetaMask:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Click on your MetaMask browser extension.

                        <br />

                        2. Select the network drop-down menu at the top of the screen and select Add Network.
                        <br />


                        3. This will open up a new window. Click Add a network manually at the bottom of your screen.
                        <br />


                        4. Fill in the network information:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Network name: Base Mainnet
                        </li>
                        <li className="list-disc" >
                            New RPC URL: https://mainnet.base.org
                        </li>
                        <li className="list-disc" >
                            Chain ID: 8453
                        </li>
                        <li className="list-disc" >
                            Currency symbol: ETH
                        </li>
                        <li className="list-disc" >
                            Block explorer URL: https://basescan.org
                        </li>
                        <br />
                    </p>
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721795/d82658c67a127449f38952b7/19238276760467?expires=1711478228&signature=eb7726ee47feafa0b8addb7f83c7f4ca896fb395efab55df4bbdcc9090164d7d" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        5. Click Save.


                        <br />
                        6. You should now see Base added to your networks.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Buying on Base </h2>
                    <br />

                    <p className="text-[16px]">
                        To buy with ETH on Base, your ETH needs to be “bridged” from the Ethereum network to Base network.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you’d like to buy an NFT with ETH on Base, you can use a credit card at checkout. Alternatively, you can transfer funds from another wallet that have already been bridged. Finally, you can bridge your funds to Base using the Swap tab in your wallet while using OpenSea. Learn more in our Help Center guide.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        You can use Base’s native bridging platform, Base Bridge, to bridge ETH from Ethereum to Base and vice versa.
                    </p>
                    <br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default PurchaseOnBase