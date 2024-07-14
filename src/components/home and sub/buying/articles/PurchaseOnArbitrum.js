import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const PurchaseOnArbitrum = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'How do I purchase NFTs on Arbitrum?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I purchase NFTs on Arbitrum?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        OpenSea is compatible with the Arbitrum chain Arbitrum One, which features rapid and inexpensive transactions.
                    </p>
                    <br />

                    <h2 className="text-2xl font-semibold">Adding Arbitrum to your wallet</h2>
                    <br />
                    <p className="text-[16px]">
                        Many wallets will automatically prompt you to switch networks. If your wallet doesn’t support this, or you’d like to add the Arbitrum network to your wallet manually, you can connect manually. These steps may vary by wallet provider, but here’s how you can do so with MetaMask:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Click on your browser extension for MetaMask.

                        <br />

                        2. From the network drop-down menu, click Add network.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722156/1234df6a41e8192562aeb3ee/18678266176275?expires=1711547754&signature=42b54ea331ae06cce5a1404e4eb85a44a80a49964d5cf9aa150d2be157984266" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]">
                        3. This will open up a new window. On the bottom, select Add a network manually.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722157/8a2b9d2fc801e198bb0eb9dd/18678332572947?expires=1711547754&signature=8bd93e6da426acd22e590ccfd697831f7ecc732dc31a274ecb27e87d001923ea" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4. Fill in the network information manually, matching the screenshot below.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Network name: Arbitrum One
                        </li>
                        <li className="list-disc" >
                            New RPC URL: https://arb1.arbitrum.io/rpc
                        </li>
                        <li className="list-disc" >
                            Chain ID: 42161
                        </li>
                        <li className="list-disc" >
                            Currency Symbol: ETH
                        </li>
                        <li className="list-disc" >
                            Block Explorer URL: https://arbiscan.io/
                        </li>
                        <br />
                    </p>
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722159/4312461e3f8c89cb78ad6f5c/9606046043667?expires=1711547754&signature=06815ffaeb6ceb82f49220c1fd80dbf3f3904b853efed8294e597a60b5bda37f" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        5. Click Save.


                        <br />
                        6. You should now see Arbitrum added to your networks.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Buying on Arbitrum</h2>
                    <br />

                    <p className="text-[16px]">
                        To buy with ETH on Arbitrum, your ETH needs to be “bridged” from the Ethereum network to the Arbitrum One network.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you’d like to buy an NFT with ETH on Arbitrum, you can use a credit card at checkout. Alternatively, you can transfer funds from another wallet that have already been bridged. Finally, you can bridge your funds to Arbitrum using the Swap functionality in your wallet while using OpenSea. Learn more in our Help Center guide.
                    </p>
                    <br />



                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default PurchaseOnArbitrum