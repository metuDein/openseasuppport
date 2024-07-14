import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const VerifiedAccountOrBadge = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'usercontent'} title2={'What is a verified account or badged collection?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What is a verified account or badged collection?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        Account verification brings greater trust to the NFT ecosystem by helping the community identify authentic creators and identify that the content belongs to them.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        A blue checkmark badge on an account means that the account has been verified for authenticity by OpenSea.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720645/6db0a2b80b397360e8191289/6181395916179?expires=1720972800&signature=d55664b4f8f380f1c5faabb1aafc5ad8f08327c56c677af2aa3fcf3523c365dc" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        A blue checkmark badge on a collection means the collection belongs to a verified account and has significant interest or sales.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720648/2d6ef4aefcdd677404daa25a/6181456342547?expires=1720972800&signature=4a1cab2d28f70a5af5e5ab94fa3a5c7fb2826337869659eae83f539ba42ce2ec" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        You can learn more about account verification and collection badge eligibility below, and how to apply. Please note that account verification and collection badging determinations are based on the eligibility requirements and criteria at the time of our review. For our current eligibility requirements, read more below.
                    </p>
                    <br />
                    <p className="text-[16px] p-6 rounded-md bg-[#c8d7e6] border border-solid">
                        ⚠️ Be aware of common scam attempts.

                        <br />

                        OpenSea does not have a paid verification option. The verification process takes place on the OpenSea website following the steps below — never work with a third party to secure verification.
                    </p><br />
                    <h2 className="text-2xl font-semibold">Minimum requirements to apply for verification & badging</h2>
                    <br />
                    <p className="text-[16px]">
                        Accounts that own one or more collections with at least 75 ETH of volume sold (or equivalent) and meet other criteria like minimum activity levels and social presence are eligible to apply for verification. Applying for account verification will also send any eligible collections for badge review. Creators don’t need to separately apply for account verification and collection badging.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If you’re eligible for verification and badging, you’ll see a banner on your account page directing you to apply in the Verification & badging section of your settings. This section will only appear to users eligible to apply.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Account verification & collection badging criteria</h2>
                    <br />
                    <p className="text-[16px]">
                        Since the goal of verification and badging is to support a healthy ecosystem on OpenSea, not all accounts and collections are eligible for verification and badging. To be eligible to apply, your account must have:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            A username
                        </li>
                        <li className="list-disc" >
                            A profile picture and banner image
                        </li>
                        <li className="list-disc" >
                            A verified email address
                        </li>
                        <li className="list-disc" >
                            A connected Twitter or Instagram account, or a collection with an active Discord connection
                        </li>
                        <li className="list-disc" >
                            Ownership of at least one collection with:
                            <li className="list-inside">At least 75 ETH of volume sold (or equivalent)</li>
                            <li className="list-inside">A title</li>
                            <li className="list-inside">A banner</li>
                            <li className="list-inside">A logo image</li>
                            <li className="list-inside">A connected Twitter, Instagram, or Discord server or a Farcaster link in the collection description</li>
                            <li className="list-inside">All collection items minted/revealed</li>
                        </li>

                        <br />
                    </p>
                    <p className="text-[16px]">
                        If your collection appears to be inspired by an existing badged collection, our customer support team may require your collection be tagged as an “inspired by” collection in order to be badged. More information can be found in our Help Center guide.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        In certain limited circumstances, accounts and collections may be eligible for verification and badging even if they don’t meet all the above criteria.
                    </p>
                    <br />
                    <p className="text-[16px] p-6 rounded-md bg-[#c8d7e6] border border-solid">
                        If you’re a Farcaster user and meet this criteria, but you aren’t prompted from your profile to apply, please reach out to our Support team.
                    </p><br />
                    <h2 className="text-2xl font-semibold">How to apply for verification & badging</h2>
                    <br />
                    <p className="text-[16px]">
                        Here’s how to apply for account verification and collection badging.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Navigate to the Verification and badging section of your settings. This section only appears if your account meets certain eligibility requirements.
                    </p>
                    <br />

                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720647/c2a5c64e2bb147fb988142d2/17385443472787?expires=1720972800&signature=b60fc1a4a4cd61cb1d2dd07c707c7096c5b843cdb400c5486cb3767a1bce9349" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />


                    <p className="text-[16px]">
                        2. Make sure to complete your profile and supply any missing information on your collections. If you’re missing something, click the three-dot menu under Review status to see what you need to complete.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        3. Once you’ve completed your profile and any missing items on your collections, click Submit for review.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720646/0ff2b318c10582dbb8f59406/17385434921363?expires=1720972800&signature=6ffc93f0d5464a8754877891eb0d4a823ab84932b71193dcd68e6af0c91d8aeb" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Your review will show as In progress under Review status while our customer support team reviews your request, and you’ll receive a response within seven days. You can also see the review decision in your profile settings.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943720668/2887a1aab4fc74a72719c828/17387121281555?expires=1720972800&signature=34dbd75aa51145928def1064faae03dd33f6511e9b1b54460a4ca4cc4c0bbd6a" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        If your account is verified, your username, email address, and social connections fields in your profile will be locked for security purposes. You'll need to contact our support team in order to make changes to a verified account profile.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        After your account is verified, your existing collections will be badged, and new collections that you create will automatically be sent for review, so there’s no need to manually reapply each time.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        If your account is reviewed by our customer support team and isn’t granted verification, you’ll need to wait seven days before you’ll be eligible to reapply for another review.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Loss of verification</h2>
                    <br />
                    <p className="text-[16px]">
                        We reserve the right to decline account verification or collection badging, and remove account verification and collection badging, for any reason, including violation of our Terms of Service.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Some accounts and collections that are initially eligible to apply may not meet certain internal criteria, such as size of social media following, collection sales activity, or ownership distribution. We’re continuing to look for ways to expand eligibility to more accounts and provide as much transparency as we can about verification decisions.
                    </p>
                    <br />


                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default VerifiedAccountOrBadge