import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const OpenseaPolicyOnFeaturingDrop = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'What is OpenSea\'s policy on featuring drops?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What is OpenSea's policy on featuring drops?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">


                    <p className="text-[16px]">

                        OpenSea’s Featured Drops tab is a place to highlight exciting drops on OpenSea, including both formal partners and, in a surprise-and-delight fashion, some independent creators who have used OpenSea Studio. We’re glad to be able to highlight up-and-coming creators who are producing interesting and unique NFT collections! Our marketing team regularly reviews drop pages as they are created, and evaluates them for things like art quality, content, community following, and engagement.
                    </p>
                    <br />

                    <p className="text-[16px]">

                        Additionally, to maintain a high standard of quality and integrity for self-serve drops and to protect users, we may deny or remove drops from being highlighted on the Featured tab. Given the visibility of drops pages, we don’t allow drops that violate any of our user content policies and our Terms of Service, including, but not limited to:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Content that incites hate
                        </li>
                        <li className="list-disc" >
                            Content that incites violence
                        </li>
                        <li className="list-disc" >
                            Intellectual property infringement
                        </li>
                        <li className="list-disc" >
                            NSFW
                        </li>
                        <li className="list-disc" >
                            Graphic and gory
                        </li>
                        <li className="list-disc" >
                            Hyperpartisan
                        </li>
                        <li className="list-disc" >
                            Photosensitive
                        </li>
                        <br />
                    </p>
                    <br />
                    <p className="text-[16px]">
                        We’re unable to feature all drops on our Featured tab at this time and are not currently accepting requests from independent creators to be featured.
                    </p>
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default OpenseaPolicyOnFeaturingDrop