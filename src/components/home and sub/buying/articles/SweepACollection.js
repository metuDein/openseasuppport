import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"
import { sweepDropdown } from "../../faqs/DropDownData"


const SweepACollection = () => {
    const renderTabs = () => (
        sweepDropdown.map(item => <DropDown key={item.id} id={item.id} />)
    )


    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'How do I sweep a collection?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I sweep a collection?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">


                    <p className="text-[16px]">
                        You can use the “sweep” feature to purchase multiple NFTs at once. This is particularly useful on fast-moving collections where you want to buy a certain number of NFTs in one transaction. Sweeps will select the first items on the screen based on the filters and sorts you have set.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Items in a sweep will go through a separate transaction that won’t include any items already in your cart. All items have to be on the same chain in order to be part of the same transaction.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Some collections, like collections that have multiple contracts, aren’t eligible for sweeping and won’t show the sweep option.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        You can follow these steps to sweep a collection:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1.In the collection footer, click the Sweep toggle to turn it on.
                        <br />
                        2.Use the slider to select the number of items you’d like to buy. The specified number of items listed first in the collection will be highlighted in blue.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719272/7288ca95ae97abec894a84e9/12363037426707" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        3.(Optional) Check the Substitute items box and specify the Max price per item you’re willing to pay. If any of the first items fail (for example, because they were already purchased), your transaction will instead include the next NFTs under your specified max price. The specified number of items will be highlighted in blue, items you’re authorizing as potential substitutes will have the standard item card display, and items above your max price per item will be grayed out.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719273/ad9cd25c2b40d7f82092ef37/12363089125651" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4. Click the Sweep button on the right side of the collection footer.
                    </p>
                    <br />
                    <br />
                    {renderTabs()}
                    <br />



                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default SweepACollection