import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"
const MinimumBidRequirements = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'Is there a minimum bid requirement?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Is there a minimum bid requirement?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">


                    <p className="text-[16px]">
                        Bids must be at least 5% higher than the previous bid. Only bids in the same payment token (such as wrapped ETH or DAI) as the auction will be counted towards the winning bid.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If someone bids in the last 10 minutes of an auction and their bid exceeds all others, the auction will automatically extend by 10 minutes. Cancellations to the top bid also trigger an extension. This can continue for up to a week of extensions.
                    </p>
                    <br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default MinimumBidRequirements