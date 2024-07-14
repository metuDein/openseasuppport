import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const HowDoISearchForNfts = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'How do I search for NFTs?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I search for NFTs?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        If you're new to NFTs, you've come to the right place. At OpenSea, there are many ways to search through millions of NFTs.
                    </p>
                    <br />

                    <h2 className="text-2xl font-semibold">From the landing page, select a category.</h2>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721412/de30d005913c1fee39f96e70/17342466990611" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Or, you can use the search bar to find a specific collection.
                    </p>
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721411/2f97b818c98e19a3a39d54d1/10763742274451" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <br />
                    <p className="text-[16px]">
                        If you prefer a particular buying style, you can choose to filter by Listed, New, or On auction on the left side of the page.
                    </p>
                    <br />
                    {/* VIDEO THINGY */}
                    <p className="text-[16px]">
                        If you want to get more selective, you can narrow your search in a variety of ways with the Sort by dropdown menu. This gives you many options to arrange your search, for example, items that were Recently sold, created, or listed.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721407/1e43ee96d33820eb3bd9fd80/16315925181331" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        You can also browse through Rankings to see what NFTs are currently popular.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721410/418d45927f345b010b40d135/10763606444691" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />



                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default HowDoISearchForNfts