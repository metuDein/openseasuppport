import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const PolyGonFunds = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'How do I find my funds on Polygon?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I find my funds on Polygon?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        Polygon is a blockchain that provides scalable, secure, and quick transactions with Ethereum currencies like ETH, USDC, and DAI. Think of Polygon as a sibling to Ethereum: the currencies are similar, but the two blockchains have slight differences.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        This guide explains how to navigate the Polygon blockchain, including:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            How to see your funds on Polygon
                        </li>
                        <li className="list-disc" >
                            How to use Polygonscan to see your transaction history on Polygon
                        </li>
                    </p>

                    <br />
                    <h2 className="text-2xl font-semibold">How to see your funds on Polygon</h2>
                    <br />
                    <p className="text-[16px]">
                        There are two ways to view your funds on Polygon.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Currently, OpenSea supports Polygon ETH and MATIC on Polygon. You can follow these steps to see your Polygon ETH and MATIC balances:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Navigate to the top-right corner of OpenSea and click your Wallet balance.
                        <br />
                        2. Click the chain logo at the top of your wallet and select the Polygon chain.
                    </p>
                    <br />


                    <img src="https://downloads.intercomcdn.com/i/o/1006367945/78c78b61bad8cb6e364d0a9b/Screenshot+2024-03-29+at+12_42_19%E2%80%AFPM.png?expires=1711732394&signature=a5bf3924aa2ba399a3dad0d03d3efa367afb6c9d9e12a9c2e1f072c05e1ae665" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        3. Now you’ll be able to see your Polygon wallet balance.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you've recently completed a Polygon transaction using OpenSea, but the balance on OpenSea hasn't updated (there can be a short delay across blockchains updating), and you’re using a third-party crypto wallet such as MetaMask, you can use wallet.polygon.technology to view the correct balance.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Navigating Polygonscan</h2>
                    <br />
                    <p className="text-[16px]">
                        Using Polygonscan is just like using Etherscan! You can use Polygonscan to view transactions and addresses on the Polygon (PoS) mainnet.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943723082/a9caf16e87fd276cf4c34b91/4417512664211?expires=1711732394&signature=173ed4b6881684791311f16a51ef79d4d42ddb687ff7f2bcfe5c7fd8f4d2fa69" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        You'll then be taken to the address view where you can see balances for various tokens on Polygon (PoS).
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943723081/d0c370338ef249674f09ac01/4417519062931?expires=1711732394&signature=191aafb24d171adab4df102fa9cd0cc34c19ee837be163e715262e040bcd2a68" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        To see your Polygon ETH balance, click on the "Token" field. To see your transaction history, click on the "ERC-20 Token Txns" tab.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943723085/e2ac0868848efe0f305b1790/4417504219795?expires=1711732394&signature=1b8c1ad8ff7fa2af9b532dde6041b2f3694b182cc2538e1a02bf9e9c2f0d0303" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default PolyGonFunds