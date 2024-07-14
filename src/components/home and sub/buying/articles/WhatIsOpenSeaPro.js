import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const WhatIsOpenSeaPro = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'What is OpenSea Pro?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What is OpenSea Pro?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719510/a4ae0f886ddc69ff37f54d18/15439214307219" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]">
                        OpenSea Pro is an NFT marketplace aggregator designed specifically for high-volume buyers and sellers. When using OpenSea Pro, you’ll be able to browse listings from over 170 NFT marketplaces, including OpenSea.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        OpenSea Pro features the most optimized gas fees of any NFT aggregator; includes live, cross-marketplace data; and offers powerful inventory management tools that make it easy to purchase and list items in bulk. You can also use OpenSea Pro to mint items, allowing you to avoid potentially malicious third-party websites or contracts.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        You can create OpenSea listings and offers through OpenSea Pro with 0.5% OpenSea fees on your favorite collections. When you accept offers, they’ll reflect the platform fee where the offer was made. For example, offers created using OpenSea will reflect a 2.5% fee, while offers created using OpenSea Pro will reflect a 0.5% fee.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        To try OpenSea Pro, navigate to https://pro.opensea.io/
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">How do I contact OpenSea Pro support?</h2>
                    <br />

                    <p className="text-[16px]">
                        To get support for OpenSea Pro, follow the steps below:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Head to OpenSea Pro's Discord and navigate to the #🎫tickets channel to create a ticket.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719514/b36a3d4449c9483c602068ff/15471833081875" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        2. Select the appropriate support category. If you’re not sure which category applies to your issue, select Other Issues.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719512/3e214389259481be321460e3/15437985650323" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        3. For most requests, you’ll need to describe your issue and include your wallet address and transaction hash from Etherscan. Click Submit when you’re done.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719506/61ef895c423c745adf3f43ad/15444556250131" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4. Submitting the form will create a private channel in Discord between you and the OpenSea Pro support team. Click the ticket-username channel to chat directly with OpenSea Pro support.
                    </p>
                    <br />

                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719533/78964d41a0794a99f9729449/15472171996947" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default WhatIsOpenSeaPro