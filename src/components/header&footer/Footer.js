import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="w-full bg-white p-7 min-h-[250px] mt-9">
            <div className="max-w-4xl w-full flex justify-between items-center mx-auto">
                <div className="self-start">
                    <Link to={'/'}>

                        <img className="w-[35px] h-[35px]" src="https://downloads.intercomcdn.com/i/o/483383/9ebf33acaebb36649fc325dc/a3dd3fcfe89960f9368750bbb4fd6bd8.png" alt="footer logo" />
                    </Link>
                </div>
                <div className="flex items-center justify-between space-x-12">
                    <ul className="list-none self-start">
                        <li className="text-gray-400 text-[14px] my-3">
                            <Link to={'https://learn.opensea.io/'}>
                                Learn
                            </Link>
                        </li>
                        <li className="text-gray-400 text-[14px] my-3">
                            <Link to={'https://blog.opensea.io/'}>
                                Blog
                            </Link>
                        </li>
                        <li className="text-gray-400 text-[14px] my-3">
                            <Link to={'https://blog-v2.opensea.io/newsletter'}>
                                Newsletters
                            </Link>
                        </li>
                        <li className="text-gray-400 text-[14px] my-3">
                            <Link to={'https://opensea.io/community-standards'}>
                                Community <br />
                                standards
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-none self-start">
                        <li className="text-gray-400 text-[14px] my-3">
                            <Link to={'https://status.opensea.io/'}>
                                Platform Status
                            </Link>
                        </li>
                        <li className="text-gray-400 text-[14px] my-3">
                            <Link to={'https://opensea.io/partners'}>
                                Partners
                            </Link>
                        </li>
                        <li className="text-gray-400 text-[14px] my-3">
                            <Link to={'https://opensea.io/tax-resources'}>
                                Taxes
                            </Link>
                        </li>
                        <li className="text-gray-400 text-[14px] my-3">
                            <Link to={'https://docs.opensea.io/'}>
                                Developers Docs
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-none self-start">
                        <li className="text-gray-400 text-[14px] my-3">
                            <Link to={'https://opensea.io/about'}>
                                About
                            </Link>
                        </li>
                        <li className="text-gray-400 text-[14px] my-3">
                            <Link to={'https://opensea.io/careers'}>
                                Careers
                            </Link>
                        </li>
                        <li className="text-gray-400 text-[14px] my-3">
                            <Link to={'https://opensea.io/opensea-ventures'}>
                                Ventures
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer