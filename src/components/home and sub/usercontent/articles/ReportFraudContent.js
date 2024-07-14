import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const ReportFraudContent = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'usercontent'} title2={'How can I report fraudulent content on OpenSea?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How can I report fraudulent content on OpenSea?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        OpenSea is a self-serve, peer-to-peer marketplace, which means anyone can create and sell an NFT using OpenSea.
                    </p>
                    <br />
                    <p className="text-[16px]">

                        Our User Safety team actively monitors the platform and removes fraudulent content as soon as it is discovered or reported by users. This includes content that may infringe on the rights of others or otherwise violates our Terms of Service.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        When you make a report, our team reviews the collection to determine if it violates our Terms of Service and takes the appropriate action. Your ticket will be closed at that point, and you may not hear back from us directly due to high volumes. If you don't hear back from us, please know that we appreciate your help in making OpenSea a secure marketplace.


                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Reporting a fraudulent collection</h2>
                    <br />
                    <p className="text-[16px]">
                        You can follow the steps below to report fraudulent or inappropriate content.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. On the collection page, click the three-dot menu and select Report.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720470/664c335a1e43dc6eb6a3aaee/22456789985043?expires=1720971900&signature=a2dec8dd6060b07152b20f29fb98ab6a5fb4a8cffd22c9a9186af5a7dbf755fd" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />


                    <p className="text-[16px]">
                        2. Use the drop-down menu to select the reason you're reporting the content.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720475/02383b67d4ea6511062019c0/8083845617043?expires=1720971900&signature=3b2a28bad6db9d1e1c0e58e270c535fc86e68a8bb6f97a1a2ddb34768dcda9fc" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        3. If you select "Fake collection or possible scam," you'll be prompted to select the original collection before clicking Report. You can enter the original collection's name or contract address. If you're reporting an account, you can enter the original account's username or wallet address.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720472/b80f7b1e5c6773abe4c30ab3/8083906403859?expires=1720971900&signature=766126b856822d36d0b612d3c1cc839c272a64ab1615bbb82ac3c0e89acb2785" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Thanks for your report. Our User Safety team appreciates your efforts and will gladly investigate further.
                    </p>
                    <br />


                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default ReportFraudContent