import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const TurnOnNightMode = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'How do I turn on Night Mode?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I turn on Night Mode?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        It's late at night and you're still looking for the perfect NFT. We get it. That's why we support Night Mode!
                    </p>
                    <br />
                    <p className="text-[16px]">
                        To use OpenSea with a dark theme, head to the Profile icon at the top right of your page. Click the Night Mode toggle at the bottom of the dropdown menu to switch between light and dark themes.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722844/9a8af234f1bd6fd5c574f4a8/16321442135955" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default TurnOnNightMode