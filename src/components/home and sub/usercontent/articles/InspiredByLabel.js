import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const InspiredByLabel = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'What is an "inspired by" label on OpenSea?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What is an "inspired by" label on OpenSea?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        Just as traditional art is often inspired by the work of other artists, NFT collections may also be inspired by other popular collections.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        We don’t permit copymints, but we do allow collections “inspired by” other popular collections if there are multiple, substantial changes in the work. These “inspired by” collections can help create ecosystems around popular collections, and the creators behind them aspire to build collections that take on a creative ecosystem of their own. Some of these collections have become notable in their own right and if they meet our requirements for collection badging, are now eligible to be badged.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        As part of the badging review process, the OpenSea team will apply the "inspired by" label to these collections, which links to the original inspiration collection(s) to provide information for collectors who may be interested in understanding the project’s origins and inspirations.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943719236/8c84fe247b961ac360d8475d/13980575557779?expires=1720865700&signature=de0d2a7d32aeae326efa86743c53f15094a48290cee0b8a679af1c10b56919c7" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />


                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default InspiredByLabel