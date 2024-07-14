import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const HowToSwitchNetwork = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'How can I switch my wallet to other blockchains while using OpenSea?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How can I switch my wallet to other blockchains while using OpenSea?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        OpenSea is compatible with several blockchains. To switch chains, click on the blockchain icon within your wallet sidebar and select the chain you’d like to switch to.
                    </p>
                    <br />
                    <img src="https://downloads.intercomcdn.com/i/o/1006359322/5378fb5a5585749a469fc91a/Screenshot+2024-03-29+at+12_31_49%E2%80%AFPM.png" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]">Depending on your wallet provider, you may see a confirmation screen in your wallet extension. Here’s an example from MetaMask:
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720981/1dc9a3dc02ee4ea06b92730e/24989802244499?expires=1711547736&signature=645e72d54f188774251029ac29a6f989659bd4901e038d9006e31c92ba6e6ca7" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]">If you’ve logged in with a third-party crypto wallet, such as MetaMask, you can also switch blockchains within your wallet extension, which will automatically switch the chain on OpenSea:.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720978/645aad153f51621b8cb2592e/24989771966611?expires=1711547736&signature=024f630b1d4368f80d61c5120107ca34d32937cfa41a765844ccd0a822880dbf" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />

                    <p className="text-[16px]">If you’d like to purchase an NFT on another chain while using OpenSea, depending on your locality, you can either add funds or purchase NFTs with your credit card. You can also bridge or swap existing cryptocurrency in your wallet using the Swap functionality. Learn more in our Help Center article.
                    </p>
                    <br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default HowToSwitchNetwork