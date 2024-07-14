import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"


const SubmitACopyrightCounterNotice = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'usercontent'} title2={'How can I submit a copyright counter-notice?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">How can I submit a copyright counter-notice?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        Content that infringes on the intellectual property rights of other individuals, including copyright, may be removed for violating our Terms of Service.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Pursuant to the Digital Millennium Copyright Act (DMCA), OpenSea responds to takedown requests submitted by individuals who believe content on the site violates their copyright.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        As part of this process, users whose content has been removed on the basis of alleged copyright infringement are entitled to submit a counter-notice. A counter-notice is a legal request for OpenSea to reinstate content that has been taken down for alleged copyright infringement
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Content removed on the basis of trademark or right of publicity infringement is not eligible for appeal through the DMCA counter-notice process.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">Am I eligible to submit a copyright counter-notice?</h2>
                    <br />

                    <p className="text-[16px]">
                        You may submit a copyright counter-notice if:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            The complainant is alleging copyright infringement on the content in question;
                        </li>
                        <li className="list-disc" >
                            You are the copyright owner or the copyright owner’s legal representative; and
                        </li>
                        <li className="list-disc" >
                            The content was removed due to a mistake or misidentification of the material, including disputes as to whether the material has been altered in a way that can be considered "Fair Use."
                        </li>

                        <br />
                    </p>
                    <p className="text-[16px]">

                        If not all of these conditions are met, we will be unable to process your request and the content in question will not be reinstated on OpenSea.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">How can I submit a copyright counter-notice?</h2>
                    <p className="text-[16px]">
                        To submit a counter-notice, please adhere to the following:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        1. Make sure you meet all of the previously mentioned legal requirements.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        2. Include all of the required information as outlined in this sample counter-notice template, including:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            A description of the removed material;
                        </li>
                        <li className="list-disc" >
                            A url where the material was posted;
                        </li>
                        <li className="list-disc" >
                            A statement declaring that, under penalty of perjury, you have a good faith belief that the material was removed in error;
                        </li>
                        <li className="list-disc" >
                            Your physical address
                        </li>
                        <li className="list-disc" >
                            Your telephone number or email address;
                        </li>
                        <li className="list-disc" >
                            A statement declaring that you consent to the jurisdiction of the federal district court for the judicial district in which you reside;
                        </li>
                        <li className="list-disc" >
                            Your full legal name; and
                        </li>
                        <li className="list-disc" >
                            Your physical or electronic signature.
                        </li>
                        <br />
                    </p>
                    <p className="text-[16px]">
                        3. Email your counter-notice to copyright@opensea.io (preferred) or mail it to our physical address:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Ozone Networks, Inc.<br />

                        Attn: Copyright Agent <br />

                        228 Park Ave S, #22014, New York, NY 10003 <br />
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">What happens after I submit my counter-notice?</h2>
                    <br />
                    <p className="text-[16px]">
                        Upon receipt of your counter-notice, we will evaluate it for completeness and authenticity. If it meets our requirements, we will forward a copy to the complainant. Any personal information included in the counter-notice will also be forwarded.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Pursuant to the DMCA, the complainant will have 10 business days to reply to your counter-notice. If they do not file a court action and forward us proof of their filing within this time period, your content will be relisted on OpenSea.
                    </p>
                    <br />


                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default SubmitACopyrightCounterNotice