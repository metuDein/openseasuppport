import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const HowIDoUseTheDealsFeatures = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'How do I use the Deals feature?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I use the Deals feature?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        With the Make a Deal feature, you can offer one or more of your NFTs in return for another user’s NFTs. You can also choose to include some WETH as part of the offer.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        All you’ll need to get started is the wallet address, ENS name, or OpenSea username of the person you want to make a deal with.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Similar to Offers, the user accepting the deal will pay gas. At this time, Deals transactions won’t include the OpenSea fee or any creator earnings.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Not all items are eligible for Deals.
                    </p>
                    <br />
                    <p className="text-[16px]">


                        Here’s how to make a deal:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <ol className="list-disc" >
                            To create your first deal, hover over your Profile icon and select Deals.
                        </ol>
                        <ol className="list-disc" >
                            Enter the username, ENS name, or wallet address of the person you want to make a deal with.
                        </ol>
                        <ol className="list-disc" >
                            Browse their eligible items and select the item or items you want to receive in the deal (up to 30 items). You can also include WETH you would like to receive as part of the deal.
                        </ol> <br />

                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721202/eb36d8a8d75881ea03ae034d/21770750363027" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        <ol className="list-disc" >
                            Click Next.
                        </ol>
                        <ol className="list-disc" >
                            Browse your collected items and select the item or items that you propose sending in the deal.
                        </ol>

                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721201/32ee93d507996d74a5f985b9/18722446534803" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        <ol className="list-disc" >
                            (Optional) Add WETH you propose to transfer as part of the deal. If you requested WETH from the other person, you won’t be able to include WETH here.
                        </ol>
                        <ol className="list-disc" >
                            Click Next.
                        </ol>
                        <ol className="list-disc" >
                            Review your proposed deal and click Send deal. You may be asked to approve the collection before signing the transaction.
                        </ol>

                    </p>
                    <br />


                    <p className="text-[16px]">

                        When the deal has been sent, you’ll see a confirmation message at the bottom of the screen.
                    </p>
                    <br />
                    <p className="text-[16px]">


                        You can see all of your active deals in the Deals tab in your profile. You can cancel your proposed deals from this tab, but it will require a gas fee.
                    </p>
                    <br />



                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default HowIDoUseTheDealsFeatures