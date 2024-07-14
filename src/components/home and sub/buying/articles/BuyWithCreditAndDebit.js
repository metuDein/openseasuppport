import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const BuyWithCreditAndDebit = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'How do I buy NFTs with a credit or debit card?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How do I buy NFTs with a credit or debit card?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">


                    <p className="text-[16px]">
                        If you live in a supported region, you can use MoonPay to buy NFTs with a credit or debit card. MoonPay helps convert your fiat currency to cryptocurrency, which is used to purchase NFTs. A credit card processing fee will apply to all credit card purchases. Gas fees may apply as well.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        To purchase an NFT with a credit card, you'll need to provide your first and last name, date of birth, nationality, and billing address. This process is not controlled by OpenSea and OpenSea doesn't store this data.
                    </p>
                    <br />
                    <br /> <h2 className="text-2xl font-semibold">Buying with a card</h2>


                    <p className="text-[16px]">
                        You can follow these steps to purchase an NFT with a card:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Navigate to the item page of the NFT you'd like to purchase. The minimum purchase amount is the equivalent of $2.00 USD.

                        <br />

                        2. Add the item to your cart. From your cart, select Credit or debit card as the payment method. Click Complete purchase.
                    </p>
                    <br />
                    <img src="https://downloads.intercomcdn.com/i/o/944840355/df38e00723a624e840cc3955/Screenshot+2024-01-26+at+10.34.17%E2%80%AFAM.png" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        3. You'll be asked to enter your email. Click Continue, and you'll be prompted to accept MoonPay's terms of use and privacy policy.
                    </p>
                    <br />
                    <img src="https://downloads.intercomcdn.com/i/o/944840753/4985aec44459e94d5be41c5c/Screenshot+2024-01-26+at+10.26.32%E2%80%AFAM.png" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        4. Next, you'll be asked to enter your name, date of birth, and nationality. Then, you'll need to supply a billing address, followed by your credit or debit card details.
                    </p>
                    <br />
                    <img src="https://downloads.intercomcdn.com/i/o/944841930/c41d673b8d18e268053a7d01/Screenshot+2024-01-26+at+10.29.50%E2%80%AFAM.png" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        5. Finally, confirm your purchase details before clicking Pay. MoonPay may charge fees for their services. You can see network and processing fees by opening the View fee breakdown dropdown
                    </p>
                    <br />
                    <img src="https://downloads.intercomcdn.com/i/o/944842536/07af7c7865cc4399b318ad0b/Screenshot+2024-01-26+at+10.32.42%E2%80%AFAM.png" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        As always, there may be slight delays in your transaction processing time due to network congestion.
                    </p>
                    <br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default BuyWithCreditAndDebit