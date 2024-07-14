import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const FixedPriceNft = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'How do I buy fixed-price NFTs?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I buy fixed-price NFTs?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <h2 className="text-2xl font-semibold">Purchasing on Desktop </h2>
                    <br />
                    <p className="text-[16px]">
                        When you're on an item page, click the Buy now button. You can add multiple NFTs from the same chain to your cart and check out using a single purchase flow.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718651/88c0d95470fc32261f9ab0e7/16314829812243" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        If you’re buying ERC-1155s (semi-fungible items), you can add multiple copies to your cart from the item page.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718659/f3d9613eb8d1017d7da16684/13987119565843" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        When you’re ready to check out, click the Cart icon in the upper right corner:
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718650/14ad5406db5ee4709a214cef/15506738665747" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Click Complete purchase, then follow the prompts in your wallet. If you log in with email, you’ll also be prompted to enter a security verification code.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718660/73f10abffdd429262de0d07d/10764408004499" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        If you have only one item in your cart, you can complete the purchase with a card by changing the payment method. You can also send multiple NFTs to a different wallet by clicking on the “send to a different wallet” dropdown.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Once the transaction is complete, the item will transfer to your wallet and the seller will receive the funds. You can return to your profile and click the Collected tab to see your newly purchased NFT.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718664/395f16e5253f24dd2530798e/7169238878739" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Keep in mind there might be a slight delay before it's visible due to transaction processing time.
                    </p>
                    <br /> <h2 className="text-2xl font-semibold">Buy now </h2>
                    <br />
                    <p className="text-[16px]">When purchasing an NFT, you’ll see the “Buy now” option on some collections. This allows you to purchase an NFT just by clicking the Buy now button and signing the transaction in your wallet. If you don’t have enough crypto in your wallet and you live in a region supported by MoonPay, you’ll see the option to buy with card.
                    </p>
                    <br />

                    <h2 className="text-2xl font-semibold">

                        Purchasing Multiple Items</h2>
                    <br />
                    <p className="text-[16px]">You can purchase multiple items by clicking Buy now either on the item card or the item page. When you’re finished adding items to your cart, follow the same steps above.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718670/760d3988b10871836f5a64c0/10118240335635" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        If you’re purchasing multiple items, each item will be processed as its own transaction on the blockchain. It’s possible that one or more of the transactions may fail.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If the entire purchase is successful, you’ll see this confirmation message:
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718672/3dc79e0ff790958dd4e3620e/10118058396051" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        If the purchase is only partially successful, you’ll see the following screen:
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718675/42cd91c13c0bd73277ac994e/10118061960595" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        If all transactions in the purchase failed, you’ll see this message:
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718679/8a5eaf355749950edc900430/10118139358099" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        You can read more about failed transactions in our help guide.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Purchasing on Mobile
                    </h2>
                    <br />

                    <p className="text-[16px]">
                        Android users can purchase fixed-price Ethereum NFTs directly in the OpenSea mobile app.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        To purchase, you’ll need a mobile version of a crypto wallet and a device running Android 10 or higher. We support WalletConnect-compatible wallets, such as MetaMask and Trust Wallet.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        You can follow these instructions to purchase an NFT on mobile:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Navigate to the item page for the NFT you’d like to purchase.
                        <br />
                        2. Tap the Buy now button.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718689/dee48c6e1cd8855758e7514a/11478723983379" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        3. Select a wallet to connect to. If the app isn’t downloaded for the wallet you selected, you’ll be redirected to the Google Play Store to download the wallet’s app.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718693/eb4c4343bfcdc26d546b49ce/11478745048979" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4. Review the details of your purchase and tap Purchase when ready.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718687/87928a07133240c11dbed05b/11478749641491" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        5. Complete the in-wallet transaction request to confirm the purchase.
                        <br />
                        6. You’ll be directed back to the OpenSea app as the transaction processes.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718694/bb018e9542d2e398e0964c6d/11478821556755" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        At this time, buy with card, auctions, and listing items for sale aren’t supported on the Android app. The item must be listed for sale in native Ethereum currency (ETH).
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Why am I seeing a security pop-up?</h2>
                    <br />
                    <p className="text-[16px]">
                        If your device doesn’t meet the below security standards, you may see a security pop-up and will be unable to purchase the item in-app:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            The OpenSea app must be downloaded directly from Google Play
                        </li>
                        <li className="list-disc" >
                            Your device must have Google Play Protect scanning enabled
                        </li>
                        <li className="list-disc" >
                            Your device must not have harmful apps installed
                        </li>
                        <br />
                    </p>
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718702/2a91e3d64d3b59121bd3e4c8/11478825947539" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        To remove the pop-up, you can re-download the app directly from the Google Play Store and make sure Google Play Protect is enabled.
                    </p>
                    <br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default FixedPriceNft