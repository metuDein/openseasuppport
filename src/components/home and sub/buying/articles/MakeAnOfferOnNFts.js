import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const MakeAnOfferOnNFts = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'How do I make an offer on NFTs?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I make an offer on NFTs?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">


                    <p className="text-[16px]">
                        If you've found an NFT and you're ready to make an offer, this guide shows you how to get started!
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Click Make offer on the item page.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721010/53914f775be8ec3cd9230bc7/9304704228755?expires=1711547733&signature=8ab6ee50f8033a291f742bd4eff6da9b31f67ee71b422c3c51ecca133eb2470d" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        2. Select the currency you'd like to make your offer in. If you'd like to make an offer on an ETH item, you'll notice that the only option is Wrapped ETH (WETH).
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721009/13c98375e57cbd080e5b0f99/16312812988947?expires=1711547733&signature=3ad5359d26cd31e3ad007fe8e80c5fde70e25c1caaaa26ef63dc12c7b9dab2c7+" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        If you're making an offer in a currency you've never purchased with before, like WETH, you may be prompted to pay a one-off gas fee (network transaction cost) to allow your wallet to purchase with that particular currency. After you've enabled your wallet for buying, you'll be able to make offers in the currency for free.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        3. Enter the amount of your offer in the appropriate currency and the expiration date. The minimum offer amount is $5 USD for ETH and $1 USD for Polygon or Klaytn.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        4. Click Make offer and sign the relevant transactions in your wallet.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        To see a list of all active offers linked to your wallet address, select the Offers made tab in your profile.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        By default, you don’t have to pay gas to cancel an offer.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">
                        Offer protection</h2>
                    <br />
                    <p className="text-[16px]">
                        When making an offer, you'll likely want the items to be in a specific state if and when the offer is fulfilled. When a seller tries to accept your offer, we run a check for item state changes. NFTs that aren’t in an expected state can’t be used to fulfill your offer.
                    </p>
                    <br />
                    <p className="text-[16px]">

                        These checks include:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Whether an item is now marked for suspicious activity
                        </li>
                        <li className="list-disc" >
                            Whether an item no longer has the traits required for a trait-based offer
                        </li>

                        <br />
                    </p>
                    <p className="text-[16px]">
                        This helps make sure that when your offer is accepted, you’ll receive an item that meets your expectations. Not all state changes can be detected in real time, so it’s possible for a state change to happen right before or after fulfillment that OpenSea doesn’t detect, in which case the offer may still be fulfilled.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        While we recommend keeping these protections turned on, you can disable them at any time in your profile settings.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721013/6f4c2475201786cc55898191/17764376794387?expires=1711547733&signature=e1c14258b4a8f2ed8dd8f00cc228d78d9d6b1d190f38e35b946d04b375c65c32" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default MakeAnOfferOnNFts