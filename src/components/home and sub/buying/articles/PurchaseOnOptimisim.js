import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const PurchaseOnOptimisim = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'How do I purchase NFTs on Optimism?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I purchase NFTs on Optimism?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        Optimism is an EVM equivalent Optimistic Rollup chain designed to be fast, simple, and secure.
                    </p>
                    <br />
                    <p className="text-[16px]">


                        If you’re buying an NFT on Optimism, you’ll need to add the Optimism network to your wallet and make sure you're ready to buy items on Optimism. Let’s get started!
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Adding Optimism to your wallet </h2>
                    <br />
                    <p className="text-[16px]">
                        If you’re buying an NFT on Optimism, many wallets (such as the one you create when you log in with email) will automatically prompt you to switch networks. If your wallet doesn’t support this, or you’d like to add the Optimism network to your wallet manually, you can follow these steps:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Click on your MetaMask browser extension.

                        <br />

                        2. Select the network drop-down menu at the top of the screen and select Add Network.
                        <br />
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722307/0cb100a1ef2fe46019b4ad11/18678462937235?expires=1711547757&signature=ed293f7674e2ac202cf5b1154e7a124d01c228b6998508788a5c2d888ce28e1f" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        3. This will open up a new window. On the bottom, select Add a network manually.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722310/a467330f662eb10ce9bf3fa2/18678484047379?expires=1711547757&signature=916acda99a45581579b561116e09e5a891e0d2f215efdd5d3308a8cb6fa7b795" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4. Fill in the network information manually, matching the screenshot below:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Network name: Optimism
                        </li>
                        <li className="list-disc" >
                            New RPC URL: https://mainnet.optimism.io
                        </li>
                        <li className="list-disc" >
                            Chain ID: 10
                        </li>
                        <li className="list-disc" >
                            Currency symbol: ETH
                        </li>
                        <li className="list-disc" >
                            Explorer: https://optimistic.etherscan.io
                        </li>
                        <br />
                    </p>
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722313/b5895e0d7ddfaacbb63c2561/9605072699283?expires=1711547757&signature=a2b331cd8dcd3a6f9d701d3ce40ea0bbdcd6bf7c0d9a2d57f351f1b1075e1bb6" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        5. Click Save.


                        <br />
                        6. You should now see Optimism added to your networks.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Buying with ETH on Optimism</h2>
                    <br />

                    <p className="text-[16px]">
                        To buy with ETH on Optimism, your ETH needs to be “bridged” from the Ethereum network to the Optimism network.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you’d like to buy an NFT with ETH on Optimism, you can use a credit card at checkout. Alternatively, you can transfer funds from another wallet that have already been bridged, or bridge existing funds using the Swap tab in your wallet.
                    </p>
                    <br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default PurchaseOnOptimisim