import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, } from "@fortawesome/free-solid-svg-icons"
import HomeCard from "../cards/HomeCard"
import SearchResult from "../cards/SearchResult"
import { useState, useEffect } from "react"
import { allLinks } from "../search/searchData"


const Homepage = () => {

    const [searchText, setSearchText] = useState('')
    const [miniResult, setMiniResult] = useState(false)

    const [result, setResult] = useState([])

    useEffect(() => {
        let filteredResults
        if (searchText && searchText.length > 1) {
            setMiniResult(true)
            filteredResults = allLinks.filter(item => (item.title).toLowerCase().includes(searchText) || (item.content).toLowerCase().includes(searchText))

            setResult(filteredResults)
        } else {
            setMiniResult(false)
        }
    }, [searchText])

    return (
        <main className="w-full home-banner text-black min-h-screen transition-all duration-200 ease-linear relative"

        >

            <section className="min-h-[50vh]">
            </section>
            <section className="w-full min-h-screen -mt-[100px] sm:-mt-[200px] md:-mt-[250px] bg-white gradient-white"
            >
                <div className="w-full max-w-[300px]  md:max-w-4xl mx-auto pt-11">
                    <h1 className="text-white text-2xl md:text-3xl font-bold mb-10">OpenSea Help Center</h1>

                    <form onSubmit={e => e.preventDefault()} className="mb-10 relative">
                        <div className="flex items-center rounded-xl overflow-hidden bg-[#ffffff34] focus:bg-white">
                            <div>
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    className="inline text-white mx-1 text-xl p-2" />
                            </div>
                            <input
                                type="text"
                                onChange={(e) => setSearchText(e.target.value)}
                                value={searchText}
                                className="transition-all duration-200 focus:outline-none w-full text-black p-3 bg-transparent focus:bg-white placeholder:text-white focus:placeholder:text-gray-400"
                                placeholder="Search for articles..."
                            />
                        </div>
                        {miniResult && <div className="absolute top-[115%] left-0 bg-white rounded-xl w-full min-h-[120px] p-4">
                            {result ? result.map((item) => (
                                <SearchResult title={item?.title} content={item?.content} link={item?.link} />
                            )) : <p className="mx-auto text-black">No search result.</p>}
                        </div>}
                    </form>

                    <div className="grid auto-rows-auto gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6  md:grid-cols-3 justify-center">

                        <HomeCard
                            image={'gettingstartedOS'}
                            title={'Getting Started with OpenSea'}
                            body={'If this first time visting OpenSea, get started here'}
                            article={5}
                            link={"/getting-started"}
                        />
                        <HomeCard
                            image={'accountmanagementOS'}
                            title={'Account Management'}
                            body={'Learn how to create an account, set up your wallet and what you can do on OpenSea'}
                            article={13}
                        />
                        <HomeCard
                            image={'buyingnftOS'}
                            title={'Buying'}
                            body={'Learn how to purchase your first NFT, understand gas fees, and see what\'s gas free on OpenSea'}
                            article={24}
                            link={'/buying'}
                        />
                        <HomeCard
                            image={'sellingOS'}
                            title={'Selling'}
                            body={'Learn how to list your NFT for sale and understand the different ways to sell your NFTs'}
                            article={13}
                        />
                        <HomeCard
                            image={'createanNFTOS'}
                            title={'Create an NFT'}
                            body={'Learn how to create your first NFT and how to create NFT collections'}
                            article={10}
                        />
                        <HomeCard
                            image={'dropacollectionOS'}
                            title={'Drop a collection'}
                            body={'Learn how to set up your drop directly on OpenSea'}
                            article={11}
                        />
                        <HomeCard
                            image={'usercontentOS'}
                            title={'User Content'}
                            body={'Our Terms of Service, available at https://opensea.io/tos, outline our user conduct and content policies. You can find more information about our user content policies below or on our Community Standards site: https://opensea.io/community-standards'}
                            article={16}
                            link={'/usercontent'}
                        />
                        <HomeCard
                            image={'usersafetyOS'}
                            title={'User Safety'}
                            body={'Learn more about anti-fraud and user safety processes on OpenSea'}
                            article={9}
                        />
                        <HomeCard
                            image={'DevelopersOS'}
                            title={'Developers'}
                            body={'Learn how you can develop with OpenSea'}
                            article={3}
                        />
                        <HomeCard
                            link={'/faq'}
                            image={'FAQs'}
                            title={'FAQ'}
                            body={'Learn answers to frequently asked questions on OpenSea'}
                            article={28}
                        />

                    </div>
                </div>
            </section>
        </main>
    )
}
export default Homepage