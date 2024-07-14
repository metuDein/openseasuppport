import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const WhatisAMintableCollection = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'What\'s a \'mintable\' collection?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What's a 'mintable' collection?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        'Mintable' collections, like Rarible and Cargo, are collections where users are able to freely mint NFTs onto shared smart contracts.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        The minting doesn't happen on OpenSea - we just show the available items and allow users to list them for sale. The 'mintable' warning icon is a yellow circle with an exclamation mark as shown below.
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943723196/01979f6ed7aa7ba15d5cd90f/10765295199891?expires=1716555600&signature=c14b68f15341794bf4efa4a5269fc56cc697119663e6f5e5441fd67d72a1b435" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        As always - please do your research before making a purchase.
                    </p>
                    <br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default WhatisAMintableCollection