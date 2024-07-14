import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"
const NftSaleTaxs = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'How can I export my NFT sales for taxes?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How can I export my NFT sales for taxes?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        Users are responsible for determining what, if any, taxes apply to their purchases, sales, and transfers of NFTs. If you have questions about taxes, please consult with a professional tax advisor.
                    </p>
                    <br />

                    <p className="text-[16px]">
                        Third parties (unaffiliated with OpenSea) may offer services to help you understand and/or estimate taxes from purchases, sales, and transfers of NFTs for a specific wallet address. Please note that these are third parties and we cannot make any guarantees about their service
                    </p>
                    <br />
                    <p className="text-[16px]">
                        More information on our partnership with CoinTracker can be found here.
                    </p>


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default NftSaleTaxs