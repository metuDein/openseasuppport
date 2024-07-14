import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"
const ConvertToLocalCurrency = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'How do I convert crypto to my local currency?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I convert crypto to my local currency?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        This article shows the process for withdrawing cryptocurrency (like ETH) from your crypto wallet to a cryptocurrency exchange to convert to your local currency. Before we get started, make sure you have the following:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            a crypto wallet connected with OpenSea (like MetaMask, Coinbase Wallet, Rainbow)
                        </li>
                        <li className="list-disc" >
                            an account on a cryptocurrency exchange (like Coinbase)
                        </li>
                    </p>
                    <br />

                    <p className="text-[16px]">
                        Once you have those set up - let's dive in!
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold"> Withdrawing cryptocurrency to an exchange</h2>
                    <br />
                    <p className="text-[16px]">
                        For your first cryptocurrency withdrawal from your crypto wallet, we strongly suggest you withdraw a small amount first in order to familiarize yourself with sending cryptocurrency between two wallets.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        This is to avoid sending your funds to an unknown or nonexistent wallet. Since transactions on the blockchain are irreversible, funds that are sent to the wrong address will likely be permanently lost.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        For this tutorial, we'll be showing how to withdraw ETH from MetaMask to Coinbase. First, make sure to navigate to Coinbase's Ethereum wallet so you can see your ETH address.
                    </p>
                    <br />

                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722521/48d16a6c9f5eea3b77395843/4414863060627" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        This address is tied to your Coinbase account and should only be used for Ethereum, the ERC-20 token. Do not send NFTs to this address!
                    </p>
                    <br />
                    <p className="text-[16px]">
                        You can also view the address by pressing the Send/Receive button on the top right and selecting Ethereum.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722525/53badcf79f9934a1537050b2/11241078673683" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Once you've copied your ETH address from your Coinbase account, head back to MetaMask and click Send. Enter the Coinbase ETH address as the recipient before deciding the Amount to transfer.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722528/d32b0b889bbc04eb22c76d77/18552399169171" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Once you've decided the amount to send, click Next. Once you have reviewed the Estimated gas fee and Total, click Confirm.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722543/975cce205e4237f118be8275/18552399186195" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Once your ETH has been sent from MetaMask, the transaction will appear in Coinbase after it has been confirmed on the Ethereum network. This may take several minutes depending on how busy the network is.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722541/e558a10ea87d401fe5ee51c9/4414877247891" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">Selling crypto for your local currency</h2>
                    <br />
                    <br />
                    <p className="text-[16px]">
                        After some time, you should see the funds in your Coinbase account where you can swap your ETH for other currencies. You can Preview Sell once you've entered your amount.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722544/762d29360c9b30e834985d85/4414870227347" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Press Sell Now once you are satisfied with the details of the sale. You'll receive a confirmation message.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722547/1563a935ada6697aeef96477/4414870333203" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold">Withdrawing your local currency</h2>
                    <br />
                    <p className="text-[16px]">
                        To withdraw the proceeds of the sale, head to USD (or your local currency). Enter the amount you'd like to withdraw in the Cash out tab.
                    </p>
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943722553/ca76bf4a243899383294381c/4414870765971" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        You'll be asked to Select a destination for your funds, and review any fees that may be applied to this withdrawal.
                    </p>
                    <br />

                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default ConvertToLocalCurrency