import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const FundWithCreditOrDebitCard = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'How do I add funds with a credit or debit card?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I add funds with a credit or debit card?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        If you’re located in a region supported by MoonPay, a third-party payment tool, you can buy cryptocurrency with a card and have it ready in your wallet when it's time to purchase an NFT.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Buy crypto with a credit card</h2>
                    <br />
                    <p className="text-[16px]">
                        1. On OpenSea, click your Wallet balance in the upper right corner.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720814/d7783ea9079b584e670779e1/24987689553299" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        2. Click the “+” sign next to your wallet balance or select Add funds with cards.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720822/aeba7f2c276cf753c537a808/24987689569811" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        3. If you live in a region supported by MoonPay, you’ll see an option to buy with a card. Enter the amount of crypto you want to buy and view processing fees before clicking Continue. The minimum amount is the equivalent of $30 USD.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720213/a4645601bd71e3c2feda7a41/21772286664467" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4. Follow the steps to verify your email address.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720210/316e5b73d05f308d1695b938/21772298267539" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        5. If this is your first time using MoonPay, you'll need to set up your account by adding a debit/credit card and providing your first and last name, date of birth, nationality, and billing address. This process is not controlled by OpenSea and OpenSea doesn't store this data.
                    </p>
                    <br />
                    <img src="https://downloads.intercomcdn.com/i/o/944850068/2af10ba08189a42be80bc7cb/Screenshot+2024-01-26+at+10.45.10%E2%80%AFAM.png" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        6. After finishing account setup, you'll be able to complete your purchase. Shortly after, you should see the cryptocurrency you purchased in your wallet. You can now continue to browse and buy NFTs.
                    </p>
                    <br />



                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default FundWithCreditOrDebitCard