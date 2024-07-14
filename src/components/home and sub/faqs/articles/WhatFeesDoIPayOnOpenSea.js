import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const WhatFeesDoIPayOnOpenSea = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'What fees do I pay on OpenSea?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What fees do I pay on OpenSea?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        While it doesn't cost anything to create an account with OpenSea and start browsing, there are a couple of fees you may pay when buying and selling NFTs using OpenSea.
                    </p>
                    <br />

                    <h2 className="text-2xl font-semibold"> OpenSea fee</h2>
                    <br />
                    <p className="text-[16px]">Typically, OpenSea receives a 2.5% fee on secondary sales and between a 2.5% and 10% fee on mints from primary drops. The seller is responsible for bearing the OpenSea fee. The buyer is responsible for paying the item price, a portion of which is received by OpenSea as its fee. All transactions and payments occur on the blockchain, at the direction of the buyer and seller, and OpenSea is not involved in payment processing.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Fees are set at the time a listing or an offer is created. If a secondary sale listing or an offer was created using OpenSea, a 2.5% fee may apply. If the listing or offer was created using OpenSea Pro, a 0.5% OpenSea fee will apply. Deals transactions won’t include the OpenSea fee. OpenSea may not charge a fee on certain types of sales.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Creator earnings</h2>
                    <br />

                    <p className="text-[16px]">
                        Creator earnings refer to a portion of the NFT sale price paid to the original creator of the NFT when the item moves from wallet to wallet after a purchase.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        On OpenSea, creator earnings are enforced or optional. If they’re enforced, the earnings percentage set for that collection will be paid out at the time of sale. If they’re optional, creators can specify their preferred creator earnings in their collection settings, but the NFT owner will ultimately choose whether to pay the suggested earnings when selling the item.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you’re a seller and earnings are optional for the collection you’re selling from, you’ll have the option of adding creator earnings when you list an item or accept an offer. By default, these will include the creator’s preferred earnings, but you can choose to adjust this percentage. There’s no minimum creator earnings percentage enforced for items from these collections.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you’re a buyer, you are responsible for paying the item price for the NFT. If the seller includes creator earnings in the sale, or earnings are enforced, a portion of the item price you paid will go to the creator of the NFT. You can support creators by filtering for NFT listings that include creator earnings on the collection page.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        For more information about OpenSea’s approach to creator earnings, please check out our Help Center guide.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721067/27dced06aab2aa40c806024f/20207753260179?expires=1712079440&signature=095a542a7ae32fd22a7b6ceebf91b3f1bc3a96f27c3ba5bd98199358adf9bf03" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]">
                        Deals transactions won't include creator earnings.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold"> Gas</h2>
                    <br />

                    <p className="text-[16px]">
                        Gas fees are transaction fees paid to validators on the Ethereum blockchain for processing your transaction. ​​Gas is not paid to OpenSea, and OpenSea does not control gas prices.


                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you’re a seller, you’ll pay gas when listing an item on Ethereum for the first time or accepting an offer.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Buyers will pay gas when purchasing or transferring items using OpenSea.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        You can see a full list of gas fees that may apply to your transaction in our help guide What are gas fees?
                    </p>
                    <br />
                    <p className="text-[16px] p-6 rounded-md bg-[#c8d7e6] border border-solid">
                        ⚠️ Be aware of common phishing attempts. "Buyers" may claim they're experiencing an error when trying to purchase an item by messaging the seller with screenshots. OpenSea will never DM you first on social media or ask you to send funds to OpenSea in order to sell an item or resolve a transaction failure.

                        <br />
                        <br />

                        You can learn more about staying safe in web3 in our help guide. If you're experiencing a phishing attempt, here's how to report it.

                    </p><br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default WhatFeesDoIPayOnOpenSea