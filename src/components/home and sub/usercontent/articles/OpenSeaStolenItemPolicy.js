import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const OpenSeaStolenItemPolicy = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'What is OpenSea\'s stolen item policy?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What is OpenSea's stolen item policy?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        The sale of stolen items is against our Terms of Service and is not allowed using OpenSea. When users notify us of a potential theft by submitting a police report, we disable the ability to buy, sell, or transfer the items using OpenSea's services to make sure we’re complying with legal requirements and protecting users.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Why does OpenSea have this policy? </h2>
                    <br />

                    <p className="text-[16px]">
                        This policy helps keep OpenSea a safe and trusted marketplace. It is against US law to knowingly allow the sale and transfer of stolen items. We do not want to incentivize theft by allowing our platform to be used to help sell stolen items.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">What should I do if my items are stolen?</h2>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943718659/f3d9613eb8d1017d7da16684/13987119565843" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        First, please work with law enforcement to prepare a police report. We need this to validate that we should disable your items.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        The police report should contain:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            Your blockchain wallet address (you can find this in your crypto wallet)
                        </li>
                        <li className="list-disc" >
                            A list of the item(s) taken, either the OpenSea or Etherscan URL or exact token ID for each item
                        </li>
                        <li className="list-disc" >
                            A statement that the item(s) were stolen
                        </li>
                        <br />
                    </p>

                    <p className="text-[16px]">
                        You can make a report with your local police or online with the FBI’s IC3 https://www.ic3.gov/Home/FileComplaint.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Next, once you’re ready, please reach out via OpenSea’s Help Center, making sure to attach a copy of your police report as a .pdf, .jpeg, or .png file when prompted.
                    </p>
                    <br />
                    <img src="https://downloads.intercomcdn.com/i/o/1011860215/20956927f25dcb59cf2a6e69/reaching+out+to+support.gif?expires=1716683400&signature=04f7acbf94d5e1b93b870861d86481f5014c8a2a7d1bd9b888c09398167baae8" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        After our User Safety team reviews the report to make sure it’s complete, the item(s) you reported as stolen will be disabled and marked with a red “suspicious activity” icon on OpenSea. We are not able to disable any items reported as stolen without a police report.
                    </p>
                    <br />
                    <p className="text-[16px] p-6 rounded-md bg-[#c8d7e6] border border-solid">
                        Please do not redact any of the information in the police report. It will not be shared with other users.

                    </p><br />
                    <p className="text-[16px] p-6 rounded-md bg-[#c8d7e6] border border-solid">
                        If you’re the victim of a theft and you want to re-enable an item because it was recovered or you would like to withdraw your report, please reach back out via our Help Center.
                    </p><br />
                    <p className="text-[16px]">
                        While we can prevent your items from being bought or sold using OpenSea's services, your items remain on the blockchain and are not in the custody of OpenSea. As a result, we aren't able to recover lost funds or NFTs that have been transferred out of your wallet. We also cannot prevent your items from being bought, sold, or transferred using other marketplaces or non-OpenSea services, or through direct interaction with the blockchain.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">What happens if my account is compromised?</h2>
                    <br />
                    <p className="text-[16px]">
                        If you believe your account is compromised, the best action is to immediately move your remaining items to a non-compromised wallet. Some of our users do this by using tools like Etherscan and wallets like MetaMask.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        You can also lock your OpenSea account, which disables buying, selling, and transferring items in the compromised wallet while using OpenSea's services to prevent further damage by a bad actor. For instructions on how to lock your account, please follow the steps in this help guide.
                    </p>
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default OpenSeaStolenItemPolicy