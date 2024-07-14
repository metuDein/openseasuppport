import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const AnalyticsTab = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'How do I use the Analytics tab?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I use the Analytics tab?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">


                    <p className="text-[16px]">
                        OpenSea users often want a variety of information to make informed transaction decisions, whether they're buying, selling, or listing NFTs. Collections include an Analytics tab you can use to browse trends, metrics, and collection activity.


                    </p>
                    <br />
                    <p className="text-[16px]">
                        The analytics tab is not available on all collections. We’re working to have this rolled out across OpenSea soon.

                    </p>
                    <br />
                    <p className="text-[16px]">
                        To get started, navigate to your desired collection page and click the Analytics tab. You can filter the data by the last 1, 7, or 30 days. You can also see an overview of the collection’s activity by looking at three core metrics: volume, sales, and floor price.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721652/b609ae6cb76d2815876b4621/10765361964179" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        You’ll also have access to these interactive analytics views:
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Volume & Price Dashboard </h2>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721653/56eae6425252cb943c996698/10345555530259" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">What it shows:  </h2>
                    <br />
                    <p className="text-[16px]">
                        The transaction volume, average price, and total number of sales each day over the specified time period.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Floor Price</h2>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721651/0a5817f198042d3cf61fca87/10345517578131" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">What it shows: </h2>
                    <br />
                    <p className="text-[16px]">
                        The floor price of listings over the specified time period, helping you understand pricing trends for the collection. The floor price is the lowest-priced item for sale in a particular collection.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Sales </h2>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721649/7e80fc7467821045aeff313b/10345522312851" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">What it shows:  </h2>
                    <br />
                    <p className="text-[16px]">
                        A scatter plot of recent sales to help you spot trends in collection activity. It also provides an easy way to navigate to the NFT’s item page directly - click the dot representing the sale to be redirected to the item page. This chart filters out any outlier sales by default; you can click the outliers toggle on the chart to see all of the data.
                    </p>


                    <br />
                    <h2 className="text-2xl font-semibold">Listings & Sales Feeds</h2>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721663/f844a6cb4bb67016ac0cc05c/13346843025427" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">What it shows:  </h2>
                    <br />
                    <p className="text-[16px]">
                        The Listings feed shows current listings that can be sorted by price or date. The Sales feed shows the most recent sales. You can use either feed to see a real-time view of the collection’s activity. If you’re interested in purchasing items, you can hover over items in the listing feed and add them to your cart directly.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">

                        Price Distribution</h2>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721665/6231331479a4c383961bae78/10345638858003" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">What it shows:  </h2>
                    <br />
                    <p className="text-[16px]">
                        The number of listings and collection offers within a certain price bucket. You can adjust the bucket size by clicking on the dropdown to adjust the size. In the above example, there are 10 collection offers between 7-8 ETH and 11 listings between 8-9 ETH.

                        <br />

                        Depending on the collection’s total volume, the price bucket increments may vary.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">
                        Owner Distribution</h2>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721670/f4dd0b9cf006d7a74e27e21a/10345483927955" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">What it shows:  </h2>
                    <br />
                    <p className="text-[16px]">
                        The total number of owners, as well as the percentage of owners who hold the specified ranges of NFTs in the collection. In the above example, 77% of owners hold one NFT, while 2% hold between six and 10.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">
                        Owner List</h2>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943721667/dd428d033de34d698c8a4503/10345480612627" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">What it shows:  </h2>
                    <br />
                    <p className="text-[16px]">
                        The total number of owners, as well as the wallet address, number of NFTs in the collection owned, and percentage of NFTs in the collection owned. This list is sorted by number owned. This list only shows the top 250 owners.
                    </p>


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default AnalyticsTab