import Reaction from "../../../reaction/Reaction"
import NavigationTab from "../../../cards/NavigationTab"

const WhatToDoWhenCopyRightINfringed = () => {
    return (
        <main className="w-full min-h-screen">
            <section className="max-w-2xl mx-auto">
                <NavigationTab link={'/buying'} title1={'Buying'} title2={'What can I do if my copyrighted works are being sold without my permission?'} />

                <div className="flex flex-col mb-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">What can I do if my copyrighted works are being sold without my permission?</h1>
                    <p className="text-[#737373] text-[12px]">Updated over a week ago</p>
                </div>

                <div className="w-full min-h-[100px] py-3">

                    <p className="text-[16px]">
                        Content that infringes on the intellectual property rights of other individuals, including copyright, may be removed for violating our Terms of Service.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Pursuant to the Digital Millennium Copyright Act (DMCA), OpenSea maintains a notice and takedown process for alleged copyright infringement. In accordance with this U.S. federal law, OpenSea allows users to report content if they believe that it violates their copyright. To request that a collection or item be taken down because you believe that it violates your copyright, please reach out to our Support team.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">How does OpenSea process copyright takedown requests? </h2>
                    <br />

                    <p className="text-[16px]">
                        Upon receiving a copyright takedown request, we evaluate the submission for completeness and authenticity. If we determine that a takedown request fulfills the requirements of the DMCA, we will delist the allegedly infringing content from our site. OpenSea does not make subjective determinations as to the legal merit of copyright claims.
                    </p>
                    <br />
                    <p className="text-[16px]">

                        When OpenSea delists a collection or item due to copyright infringement, we take steps to inform the affected users. If we have an email on file for the creator of the delisted content, we will forward them a copy of the takedown request with any personally identifying information (PII) redacted and will also provide instructions for filing a counter-notice. If we have an email on file for the owner of the delisted content, and they have opted to receive emails from OpenSea, we will email that user letting them know that item has been delisted.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        As permitted under the DMCA, the affected user may submit a counter-notice in which they affirm their good faith belief that the content was delisted as a result of a mistake or misidentification. For more information on counter-notices, please visit our Help Center article.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">What happens if the affected user files a counter-notice?</h2>
                    <br />
                    <p className="text-[16px]">
                        If the affected user files a counter-notice, we will forward a copy to the complainant. After receiving a counter-notice, the complainant may choose to file a legal action seeking a court order to prevent the affected user from engaging in infringing activity. If they do not file a court action and forward us proof of their filing within 10 business days of receiving the counter-notice, pursuant to the DMCA, the content will be relisted on OpenSea.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        In other words, if we receive a counter-notice, the original complainant will need to file a court action if they wish to prevent the allegedly infringing content from being reinstated on OpenSea. Additionally, under the DMCA, any person who knowingly misrepresents material as infringing will be liable for damages incurred by the alleged infringer due to their content being delisted. We strongly encourage users to keep these facts in mind when determining whether to submit a takedown request.
                    </p>
                    <br />

                    <h2 className="text-2xl font-semibold">What constitutes a violation of OpenSea’s copyright policy?</h2>
                    <br />
                    <p className="text-[16px]">
                        A copyright is an exclusive legal right given to the creator over the ability to distribute a creative work. If you are unsure whether you own the rights to work on OpenSea, we recommend that you consult an attorney as we are unable to provide legal advice.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Alternatively, you can email your request to copyright@opensea.io (preferred) or mail it to our physical address:
                    </p>
                    <p className="text-[16px]">
                        Ozone Networks, Inc. <br />
                        Attn: Copyright Agent <br />
                        228 Park Ave S, #22014 <br />
                        New York, NY 10003 <br />
                    </p>
                    <br />
                    <p className="text-[16px]">
                        Note that only copyright owners and their legal representatives are eligible to submit a valid takedown request. OpenSea does not respond to takedown requests submitted by third-party individuals. Before submitting a takedown request, please ensure that you are eligible and can provide all the necessary information to submit an accurate and complete request.
                    </p>
                    <br />
                    <h2 className="text-2xl font-semibold">What information do I need to include in my takedown request if I submit via email or physical mail?</h2>
                    <br />
                    <p className="text-[16px]">
                        Copyright takedown notices must include all of the following:
                    </p>
                    <br />
                    <p className="text-[16px]">
                        <li className="list-disc" >
                            A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright or other intellectual property right that is allegedly infringed. Pseudonyms are not considered an acceptable form of signature.
                        </li>
                        <li className="list-disc" >
                            Identification of the copyrighted or other protected work claimed to have been infringed. Identification of the material that is claimed to be infringing and information reasonably sufficient to permit us to locate the material. URLs linking to the specific items you assert are violating your rights are important to help us resolve your issue.
                        </li>
                        <li className="list-disc" >
                            Information reasonably sufficient to permit us to contact you, such as an address, or email at which you may be contacted.
                        </li>
                        <li className="list-disc" >
                            A statement that you have a good faith belief that the use of the material in the manner complained of is not authorized by the copyright or IP rights owner, its agent, or the law.
                        </li>
                        <li className="list-disc" >
                            A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of the copyright or other IP right that is allegedly infringed.
                        </li>
                        <br />
                    </p>


                </div>

                <Reaction />
            </section>
        </main>
    )
}
export default WhatToDoWhenCopyRightINfringed