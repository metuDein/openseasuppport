import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const PurchaseOnZora = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'How do I purchase NFTs on Zora?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I purchase NFTs on Zora?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        The Zora Network is a fast, cost-efficient, scalable Layer 2 network that focuses on NFTs.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you’re buying an NFT on Zora, many wallets (such as the one you create when you log in with email) will automatically prompt you to switch networks. If your wallet doesn’t support this, or you’d like to add the Zora network to your wallet manually, you can follow these steps:
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Adding Zora Network to your wallet</h2>
                    <br />
                    <p className="text-[16px]">
                        Here's how to add Zora to MetaMask. These steps may vary by wallet provider.
                    </p>
                    <br />

                    <p className="text-[16px]">
                        1. Click on your MetaMask browser extension.

                        <br />

                        2. Click the network drop-down menu on the top of the extension. Select Add network.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721964/ac4b8a3817dac4811c979b1c/18678850192019?expires=1711547744&signature=acfe73ff38f3364768e852b84e4b90601f4da39104bcb5e062cd0847f11a0090" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        3. This will open up a new window. On the bottom, select Add a network manually.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721961/224e27cfa20c5200591339c5/18302086115987?expires=1711547744&signature=a039f4c19cb8295fb8699a059cd60c0c8652bb551f916e3c9265cd28561ffe1e" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4. Fill in the network information:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Network name: Zora
                        </li>
                        <li className="list-disc" >
                            New RPC URL: https://rpc.zora.co
                        </li>
                        <li className="list-disc" >
                            Chain ID: 777777
                        </li>
                        <li className="list-disc" >
                            Currency symbol: ETH
                        </li>
                        <li className="list-disc" >
                            Block explorer URL: https://explorer.zora.energy
                        </li>
                        <br />
                    </p>
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721960/8958ea00d35b2ce46eefb317/18302254642835?expires=1711547744&signature=2ca275b7dea0b59838a8d4b33a6594f89c46a0b17e786674e1c99f25c0c55860" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        5. Click Save.


                        <br />
                        6. You should now see Zora added to your networks.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Buying on Zora </h2>
                    <br />

                    <p className="text-[16px]">
                        If you use email to log into OpenSea, you can use a credit card to purchase NFTs on the Zora network or you can transfer in bridged ETH from another wallet using Zora’s native bridge. Finally, you can bridge your funds to Zora using the Swap tab in your wallet while using OpenSea. Learn more in our Help Center guide.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you use a third-party crypto wallet, such as MetaMask, follow the steps below.
                    </p>
                    <br />
                    <p className="text-[16px]">

                        1. Using Zora's native bridge, navigate to bridge.zora.energy.


                        <br />
                        2. Connect your wallet by selecting Connect in the top right corner.
                        <br />


                        3. Select the Deposit tab, then enter the amount of ETH you'd like to deposit to the Zora Network.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721965/7b919896447673df3c778633/18302777173523?expires=1711547744&signature=1ac7fc9d0836c479766204ce8283e1e82a58c150f9029f57cdd1caa601b94b06" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4. Click Bridge.

                        <br />

                        5. Confirm the transaction in your wallet (this can take a couple of minutes). This also requires a payment of a gas fee.

                        <br />

                        6. You should now see your bridged ETH on the Zora Network.
                    </p>
                    <br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default PurchaseOnZora