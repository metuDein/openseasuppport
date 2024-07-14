import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const HowCanIContactOpenSea = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'How can I contact OpenSea?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How can I contact OpenSea?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">We provide agent support for all of our users in our Help Center. When you reach out to us at support.opensea.io, you'll be asked to provide:

                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Your email address
                        </li> <br />
                        <li className="list-disc" >
                            Your wallet address (if applicable)
                        </li> <br />
                        <li className="list-disc" >
                            Detailed information about your question or the issue you're experiencing
                        </li> <br />
                    </p>
                    <br />
                    <p className="text-[16px]">Sharing this information with us makes it more likely we can solve your issue quickly. We're happy to help!

                    </p>
                    <br />
                    <img src="https://downloads.intercomcdn.com/i/o/994814887/47cb197b379e35a7d543f8b7/Screenshot+2024-03-18+at+9_37_04%E2%80%AFAM.png" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default HowCanIContactOpenSea