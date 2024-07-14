import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const OpenSeaTermsOfService = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'Where can I find OpenSea’s Terms of Service?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Where can I find OpenSea’s Terms of Service?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        OpenSea’s Terms of Service are published here: https://opensea.io/tos
                    </p>
                    <br />
                    <p className="text-[16px]">
                        It’s important to read and understand these terms, as you’re agreeing to them by using OpenSea’s services.
                    </p>
                    <br />



                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default OpenSeaTermsOfService