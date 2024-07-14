import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const WhatIsOpenRarity = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'What is OpenRarity?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What is OpenRarity?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        We use “rarity” ranking to describe the relative scarcity of one NFT’s trait compared to another in the same collection. An NFT with rare traits will have a lower rarity ranking (such as 1 or 2) than an NFT that shares traits with thousands of others in the collection.


                    </p>
                    <br />
                    <p className="text-[16px]">
                        When rarity rankings vary across platforms and use different methodologies, it can cause confusion for buyers and sellers and make it difficult to use rarity for purchase and sale decisions.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        To provide a unified and transparent set of rarity rankings across our marketplace, OpenSea has adopted the OpenRarity standard — an open, transparent and reproducible standard for rarity rankings across the NFT industry.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        OpenRarity is an open collaboration between OpenSea, icy.tools, Curio, and PROOF. The latest version includes Double Sort and Trait Count updates, improving rarity rankings for 1 out of 1 unique traits and giving more weight to trait counts that are less common.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        On OpenSea, eligible collections will show a numerical rarity ranking on the item page and on the collection page.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722093/d2e2bf37856db13457bdc70d/15519248998035" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        If you hover over the number, you'll see the percentage ranking. OpenRarity rarity rankings directly reflect the creator-published trait data and can change over time if the creator makes changes to item metadata.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722088/e7f1af0e7635349425ecec94/10795453907219" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <h2 className="text-2xl font-semibold"> How can I sort by rarity?</h2>
                    <br />
                    <p className="text-[16px]">When searching for NFTs on OpenSea, you can use the filter on the left side to filter by Rarity rank.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722645/31ad44d2bd2a280de225f8a7/9608655073811" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        You can also use the menu at the top of the page to sort by Most rare.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722105/82feaf070d1608123096715a/16316319527827" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <h2 className="text-2xl font-semibold">For Creators: How do I show rarity for my collection?</h2>
                    <br />
                    <p className="text-[16px]">We’ll automatically display OpenRarity rarity rankings for eligible collections with the following properties:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Only ERC721/non-fungible items (no ERC1155/semi-fungible items)
                        </li>
                        <li className="list-disc" >
                            Only string traits (no numeric traits)
                        </li>
                        <li className="list-disc" >
                            Trait information exists
                        </li>


                    </p>
                    <br />
                    <p className="text-[16px]">
                        We recommend only showing rarity if the collection is fully revealed and the item metadata won’t be changed.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If metadata changes, it can impact the rarity ranks and confuse users who expected the rarity to remain static. If you plan to make metadata changes that will impact rank, we suggest you clearly communicate these changes and their impact to your community.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Here’s how to turn off rarity for items in your collection:
                    </p>
                    <p className="text-[16px]">
                        1. Click on your Profile icon and select My Collections from the dropdown menu.
                        <br />
                        2.On the collection you'd like to edit, click the three-dot menu and select Edit collection.
                        <br />
                        3. Once in the collection editor, scroll down to the Show OpenRarity ranking header. Click the toggle to turn it off.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722108/664ea756e258046ef2628c60/16054489168147" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        You can change this setting anytime, but be aware that frequent changes could cause confusion within your community.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        When OpenRarity is enabled for your collection on OpenSea, the rarity ranks will be visible on OpenSea and available via the OpenSea API.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Why don’t all collections show rarity?</h2>
                    <br />

                    <p className="text-[16px]">
                        If you don't see rarity for a collection, it's because the creator has not opted-in to show rarity, or the collection isn’t eligible for rarity. You can reach out to the creator to let them know you’d like to see OpenRarity rarity rankings for the collection.
                    </p>
                    <br />



                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default WhatIsOpenRarity