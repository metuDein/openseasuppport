import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const CollectionOffers = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'What is a collection offer?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What is a collection offer?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">


                    <p className="text-[16px]">
                        If you’d like to buy an NFT in a collection, but don’t have a specific NFT in mind, you can save time by setting up a collection offer. Instead of making an offer on every individual NFT in that collection, you’ll make one offer that applies to all NFTs in the collection.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        A given collection offer can only be accepted once and will expire for all other NFTs in the collection after being accepted.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        For some collections, you’ll be able to select a specific trait and send a collection offer to all applicable NFTs with that trait. Your offer will be sent for NFTs that have the trait at the time of the offer, so there's a chance the traits may change after your offer is sent.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Similar to other offers you make for Ethereum NFTs, you’ll need WETH (Wrapped Ether) in your wallet in order to make a collection offer. Learn more in this help guide.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Collection offers aren’t valid for NFTs flagged for suspicious activity.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Placing a collection offer</h2>
                    <br />

                    <p className="text-[16px]">
                        You can follow these steps to make a collection offer:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Navigate to the collection page.
                        <br />
                        2. On the bottom of the page, click Make collection offer.
                        <br />
                        3. Fill in the Offer price in WETH or click Set to best offer.
                        <br />
                        4. To make more than one collection offer, increase the Quantity. Note: these offers can all be accepted separately.
                        <br />
                        5. (Optional) If you have a specific trait in mind, use the Trait field to select it. If no trait is selected, the offer will be sent for all NFTs in the collection.
                        <br />
                        6. (Optional) Modify the Duration for your offer(s). The default duration for collection offers is 7 days.
                        <br />
                        7. Click Make offer.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721457/02dc4eae0c3ea0dee77ee069/15579149236883?expires=1711478225&signature=d5076a08374ba56406941001c4bc36aa346516a78c312575165a1b6f115c60a7" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Here's what it looks like when you make a collection offer:
                    </p>
                    {/* COLLECTION VIDEO */}
                    <br />
                    <p className="text-[16px]">
                        You can see all of your active offers on the Offers made tab of your profile. You can have multiple collection offers active at the same time.


                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721458/0e5e6766febbd7b57eb1a3b6/22465697457299?expires=1711478225&signature=72686eefbc69536f7ab3dcb7ddbed8a632234b89a8b5ba2fee8073756d167c24" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">Canceling a collection offer</h2>
                    <br />
                    <p className="text-[16px]">
                        If you’d like to cancel your collection offer, you can do so on the Offers made tab of your profile or on the item page. By default, you don’t have to pay gas to cancel a collection offer.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        To cancel from your profile:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1.On OpenSea, in the upper right corner, click the Profile icon.
                        <br />
                        2.Select the Offers made tab.
                        <br />
                        3.Hover over the offer and click the X to Cancel offer.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        When canceling an offer, your order may be delayed for a few minutes as we check to make sure there are no outstanding attempts to fulfill the offer. After choosing to cancel an offer, you’ll see an option to pay gas to cancel immediately.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        To cancel from the item page:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1.Navigate to the collection where you sent a collection offer.
                        <br />
                        2. Click on any NFT in the collection that has the offer live. If it was a whole collection offer, you can click on any NFT. If it was sent for a specific trait, click on an NFT that has the trait.
                        <br />
                        3. Scroll down to the Offers heading, and click Cancel on the offer you sent. Offers are sorted by price.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Receiving notifications for collection offers</h2>
                    <br />

                    <p className="text-[16px]">
                        Collection offer emails are off by default. You can follow these steps to receive email notifications for collection offers:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Navigate to your Offer settings.
                        <br />
                        2. Set an amount in the minimum offer column.
                        <br />
                        3. Click Save.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        You’ll receive an email notification for any offer (collection or single) that’s above the value you set.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Offer protection</h2>
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

                    <p className="text-[16px]">This helps make sure that when your offer is accepted, you’ll receive an item that meets your expectations. Not all state changes can be detected in real time, so it’s possible for a state change to happen right before or after fulfillment that OpenSea doesn’t detect, in which case the offer may still be fulfilled.
                    </p>
                    <br />
                    <p className="text-[16px]">While we recommend keeping these protections turned on, you can disable them at any time in your profile settings.
                    </p>
                    <br />


                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721459/1549dd71a0bf0628fa8fb848/17764211445139?expires=1711478225&signature=4cf606a3f319098293fa60a99c6302b123e132f2501a94305d524f4f6cca8502" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default CollectionOffers