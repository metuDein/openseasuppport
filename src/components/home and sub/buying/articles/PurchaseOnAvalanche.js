import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const PurchaseOnAvalanche = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'How do I purchase NFTs on Avalanche?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I purchase NFTs on Avalanche?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        OpenSea is compatible with Avalanche, an open-source programmable smart contract platform for decentralized applications.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        To purchase items on Avalanche, you’ll need some AVAX, Avalanche’s native token. You can purchase AVAX through exchanges like Coinbase, and then transfer it to your wallet. If your wallet permits, you may also be able to purchase AVAX directly through your wallet extension. Learn more about transferring AVAX from an exchange in the Avalanche knowledge base.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Alternatively, you can use the Swap tab in your wallet to convert existing cryptocurrency to AVAX while using OpenSea. Learn more in our Help Center guide.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        You’ll also need to add the Avalanche network to your wallet. Since Avalanche is EVM-compatible, you can easily add it to Ethereum-based wallets, such as MetaMask. We also support the Avalanche-based wallet extension, Core.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you’re buying an NFT on Avalanche, many wallets (such as the one you create when you log in with email) will automatically prompt you to switch networks. If your wallet doesn’t support this, or you’d like to add the Avalanche network to your wallet manually, you can follow these steps:
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Adding Avalanche to your wallet </h2>
                    <br />
                    <p className="text-[16px]">
                        To add Avalanche to your wallet, you’ll need the chain RPC information found here. Here's how to add Avalanche to MetaMask.
                    </p>
                    <br />

                    <p className="text-[16px]">
                        1. Click on your MetaMask browser extension.

                        <br />

                        2. Select the network drop-down menu at the top of the screen and select Add Network.
                        <br />

                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722203/f5848b1955b82f02faba2d2f/18678592674195?expires=1711547757&signature=4edbe96902f5f17e796fd4a6467ef329199a3153a885408ca41596fe5c9a0ca8" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        3. This will open up a new window. On the bottom, select Add a network manually.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722202/2b060225cf21e5131eb3fdb9/18678649679635?expires=1711547757&signature=ba3be803189b6d35906daf45a48b7ff423a8a22c988a481acc76d46c6f7aef3f" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4. Fill in the network information manually, matching the screenshot below:
                    </p>
                    <br />
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Network name: Avalanche Network
                        </li>
                        <li className="list-disc" >
                            New RPC URL: https://api.avax.network/ext/bc/C/rpc
                        </li>
                        <li className="list-disc" >
                            Chain ID: 43114
                        </li>
                        <li className="list-disc" >
                            Currency Symbol: AVAX
                        </li>
                        <li className="list-disc" >
                            Explorer: https://snowtrace.io/
                        </li>
                        <br />
                    </p>
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722205/0e3b0549fdc2e38d8e1a0c01/10107051080083?expires=1711547757&signature=9028c3741b42010a2680ffd5992d1bf5484f1e7f4a9146926fb864341fcea699" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        5. Click Save.


                        <br />
                        6. You should now see Avalanche  added to your networks.
                    </p>
                    <br />


                    <p className="text-[16px]">
                        Once you’ve added the Avalanche network and have AVAX in your wallet, you’ll be ready to purchase Avalanche items using OpenSea!
                    </p>
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default PurchaseOnAvalanche