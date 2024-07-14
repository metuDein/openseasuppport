import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const SignatureRequest = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/faq'} title={'What does a typed signature request look like?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What does a typed signature request look like?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        The typed signature request will be different depending on which contract you’re interacting with, and it will also look a little differently depending on your wallet. A signature request means you’re authorizing your wallet to take action, such as connecting to OpenSea’s platform, or buying or selling an NFT using OpenSea.
                    </p>
                    <br />

                    <p className="text-[16px]">
                        All signature requests using OpenSea will be from Seaport. Single listings will display the following request in MetaMask:
                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943723241/798b41a37cf970d46181e0b8/14485123893011?expires=1711460623&signature=7d3646168711b80b2a676ca31c2db50f1151df1b5df08e77e32a3cbf124ca7cb" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        Bulk listings will show the following request from Seaport:

                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943723239/1dc9876b81ba5b70a7ceee80/14485181100819?expires=1711460623&signature=ab9fa71dfa0f4f6eb23660ba5b1a7208757cd21f34ac86ef65ecde7d1db57bf3" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        If you logged into OpenSea with email, your signature request for a single listing will look like the following:

                    </p>
                    <br />
                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943723571/0e114042e33bb01bd2730903/24993850125843?expires=1711460623&signature=d6ca95359b9ba037879bc0d0c2470c0762444fcbb5f32a6b752b4a0d9b0d87aa" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <h2 className="text-2xl font-semibold"> Troubleshooting Signature Requests</h2>
                    <br />
                    <p className="text-[16px]">
                        If you don't see the Sign button at first, you'll likely need to scroll down in the wallet extension window until it appears.
                    </p>
                    <br />

                    <img src="https://opensea-b9882cfe3709.intercom-attachments-7.com/i/o/943723245/bec1b3df91a12a7c86aca576/14485324934035?expires=1711460623&signature=6ed6511ab2c3311ba9d1d5411791a017d80502b62d505056c885e355db268235" alt="purchase nft" className="mx-auto max-w-xl" />
                    <br />
                    <p className="text-[16px]">
                        If you're interacting with Seaport through OpenSea, here's what you should see on your interactions:
                    </p>
                    <br />

                    <p className="text-[16px]">
                        <li className="list-disc" >
                            "First-time" user proxy deployment: NONE (no longer needed)
                        </li>
                        <li className="list-disc" >
                            Token approvals: `0x1E0049783F008A0085193E00003D00cd54003c71` (the OpenSea "conduit")
                        </li>
                        <li className="list-disc" >
                            Listings & offers:
                        </li>


                    </p>
                    <br />
                    <p className="text-[16px]">
                        As of March 25, 2024, Seaport’s contract address is: 0x0000000000000068F116a894984e2DB1123eB395. You can view it on Etherscan here.
                    </p>
                    <br />


                    <p className="text-[16px]"></p><br />

                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default SignatureRequest