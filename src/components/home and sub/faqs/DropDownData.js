export const dropDownData = [
    {
        id: 1,
        title: 'Non-Fungible Tokens (NFTs)',
        content: 'Non-Fungible Tokens (NFTs) are unique, digital items with blockchain-managed ownership. Examples of NFTs include digital art, collectibles, virtual reality items, crypto domain names, ownership records for physical assets, and more. To learn more about NFTs, check out our Learn Center. ',
        active: false
    },
    {
        id: 2,
        title: 'Blockchain',
        content: 'A blockchain is a digitally distributed ledger that facilitates the process of recording transactions and information across a network. You can think of it as a decentralized or distributed database. OpenSea supports a number of blockchains. ',
        active: false
    },
    {
        id: 3,
        title: 'Collection',
        content: 'A collection is a body of work, like a store or art gallery. ',
        active: false
    },
    {
        id: 4,
        title: 'Crypto wallet',
        content: 'A crypto wallet is an application or hardware device that allows individuals to store and retrieve digital items, like cryptocurrency and NFTs.',
        active: false
    },
    {
        id: 5,
        title: 'Cryptocurrency',
        content: 'A cryptocurrency is a digital currency in which transactions are verified and records maintained by a decentralized system using cryptography, rather than by a centralized bank or government. The core cryptocurrencies you can use on OpenSea are Ethereum (ETH/WETH), AVAX, USDC, KLAY, and DAI. We support a few other payment tokens, but it\'s not currently possible to use non-crypto currencies like USD or the Euro.',
        active: false
    },
    {
        id: 6,
        title: 'dApp (decentralized app)',
        content: 'A blockchain-integrated website that requires you to connect and approve all transactions with your wallet signature. Examples include OpenSea, Uniswap, Zapper.fi.',
        active: false
    },
    {
        id: 7,
        title: 'ENS',
        content: 'The Ethereum Name Service (ENS) is a domain naming system based on the Ethereum blockchain. ENS domains resolve to wallet addresses, meaning you can send NFTs and cryptocurrency to them.',
        active: false
    },

    {
        id: 8,
        title: 'Ethereum/ETH',
        content: 'Ethereum is a blockchain, and ETH is the currency used to make transactions on the Ethereum blockchain.',
        active: false
    },
    {
        id: 9,
        title: 'Ethereum Virtual Machine / EVM',
        content: 'If a blockchain is EVM-compatible it means it is technically compatible with Ethereum, and tokens can be transferred between them. An example of an EVM-compatible blockchain is Polygon. Just because a blockchain is EVM-compatible does not mean you can directly send tokens from one chain to another. Tokens must be bridged across to the other chain. ',
        active: false
    },
    {
        id: 10,
        title: 'Floor price',
        content: 'Floor price is the lowest price for a collection\'s items, rather than the average item price, and is updated in real time.',
        active: false
    },
    {
        id: 11,
        title: 'Gas fees',
        content: 'Think of gas fees as Ethereum blockchain transaction costs. OpenSea has no say in setting gas fees – they are determined by supply and demand across the network (blockchain).',
        active: false
    },
    {
        id: 12,
        title: 'Gwei',
        content: 'Gwei describes a very small amount of ETH, the equivalent of 1 billionth of 1 ETH. It helps measure gas fees, or transaction costs, on the Ethereum blockchain, which are generally smaller relative to USD than ETH itself.',
        active: false
    },
    {
        id: 13,
        title: 'Priority fee',
        content: 'This describes a “tip” that is set automatically to compensate validators for executing transactions on Ethereum.',
        active: false
    },
    {
        id: 14,
        title: 'Private Key',
        content: 'A string of numbers (often 256 characters long) that represents your signature to authorize transactions on the blockchain.',
        active: false
    },
    {
        id: 15,
        title: 'Seed phrase',
        content: 'Your seed phrase is a list of words (usually ranges from 12-24 words) that can be used to recover your crypto should you forget your password or lose access to your wallet. When you first begin using your wallet, find your seed phrase and back it up somewhere safe, in multiple locations if possible. You’ll receive a seed phrase to write down when you first create a crypto wallet. This is how you can back up your key without actually holding the numbers. Also known as a "mnemonic phrase" or “secret recovery phrase.” Don’t store your seed phrase on an online cloud storage service and never share it with anyone.',
        active: false
    },
    {
        id: 16,
        title: 'Smart Contract',
        content: 'Smart contracts are decentralized code that run on blockchains. dApps are powered by smart contracts - buying and selling NFTs using OpenSea utilizes the Seaport smart contract protocol.',
        active: false
    },
    {
        id: 17,
        title: 'Wallet address',
        content: 'Also known as your "public key." Your wallet address is unique. It’s the address people will use when sending you cryptocurrency or NFTs. Your NFTs and cryptocurrency do not live in your wallet—they exist on the blockchain, under your wallet address. Your software or hardware wallet only contains the key to that address. On Ethereum, your address starts with a "0x". You can also use an ENS domain.',
        active: false
    },


]

export const exportDropDown = [
    {
        id: 1,
        title: 'Execution Reverted, Please reach out to the collection owner to troubleshoot',
        content: `This error is the result of an issue with the collection’s smart contract. A smart contract may produce this error if:
        \n
        \tAn NFT is locked by the contract (usually due to staked NFTs)
        \n
        \tThe contract does not explicitly follow (or predates) the ERC-721/ERC-1155 standard
        
        If you have staked your item, you’ll see this error message when attempting to sell your item. If you haven’t staked your item, you’ll need to reach out to the collection owner to see if they can address the contract issue on their end.`,
        active: false
    },
    {
        id: 2,
        title: 'NFT is locked and not available for transfer',
        content: `A locked NFT means the item is currently being used in another capacity and cannot be sold or transferred. Some reasons why an NFT may be locked include:
\n
        The owner has staked their NFT
        \n
        The NFT is being used as collateral for a loan
        \n
        \tThe NFT was purchased using an installment plan
        \n
        \tThe NFT is rented/borrowed through a service
        \n
       \t The NFT is soulbound (tied to an individual and cannot be transferred)
        \n
        A locked NFT may only be sold or transferred after it has been unlocked (for example, un-staking the NFT) or the locking period ends (for example, the loan duration ends).`,
        active: false
    },
    {
        id: 3,
        title: 'This account is not the owner of the NFT (or has not approved the NFT for transfer)',
        content: `The errors “This account is not the owner of the NFT” and “This account is not the owner of the NFT or has not approved the NFT for transfer” may occur when trying to purchase an item using OpenSea. This can happen if the owner of the NFT transfers the item to another wallet.
\n  
\n
 

        If you’ve received this error, it’s possible the transfer was still in progress while you attempted to purchase the item. As a result, the NFT is not available to purchase.`,
        active: false
    },
]
export const sweepDropdown = [
    {
        id: 1,
        title: 'Why can I only seem some items in a collection?',
        content: `If a collection includes items on multiple chains, you’ll only be able to sweep listings on the same chain as the first listing.`,
        active: false
    },
    {
        id: 2,
        title: 'Can I sweep with listings in multiple currencies? ',
        content: `No, it defaults to the currency of the first listing in the sweep. If you have a desired currency, you’ll need to filter by that currency before sweeping the collection.`,
        active: false
    },
    {
        id: 3,
        title: 'Are sweeps affected by sorting or filtering? ',
        content: `Yes! If you apply a sort, such as “Recently listed” or “Most viewed,” sweeps will buy the first items with the sort active. The specified number of the first items using that sorting will be highlighted in blue. The same applies for filtering.`,
        active: false
    },
    {
        id: 4,
        title: 'Why is there a price range?',
        content: `The range reflects the minimum and maximum amount for the possible items you will purchase. If any of the items fail (for example, because they were already purchased), your transaction may include items with different prices. Even though no individual item will exceed your specified “max price per item,” there may be a different total price depending on which items end up succeeding.`,
        active: false
    },
    {
        id: 5,
        title: 'Why does my receipt show "not spent"? ',
        content: `For substitute item transactions, you will need to authorize the maximum possible price. Any ETH not spent in the transaction will be automatically transferred back to your wallet.`,
        active: false
    },
]
export const copyMintDropdown = [
    {
        id: 1,
        title: 'How many substantial changes are needed for something to be considered a remix? ',
        content: `We do not publicize our internal guidelines for the minimum number of changes. We encourage creators to make as many changes as possible to clear up any confusion.`,
        active: false
    },
    {
        id: 2,
        title: 'If something is clearly a parody or satire of the original will it be considered a copymint?',
        content: `If the NFT includes text or images used to distinguish itself from the original, it will be a factor in determining whether it is a copymint.`,
        active: false
    },
    {
        id: 3,
        title: 'How does this program interact with OpenSea’s existing DMCA takedown procedures? ',
        content: `This program exists in addition to OpenSea’s existing DMCA takedown procedures. If a rights holder believes that an NFT infringes on their copyright, they can use the DMCA procedure.`,
        active: false
    },
    {
        id: 4,
        title: 'How can my collection be taken down if it’s considered a remix by OpenSea?',
        content: `Ultimately, it’s up to the copyright holder to make a determination on whether they believe an NFT or collection infringes on their intellectual property.`,
        active: false
    },
    {
        id: 5,
        title: 'Real fans will be able to tell the difference, so why is this copymint policy necessary? ',
        content: `To foster an inclusive web3 ecosystem, it’s important that we provide signals to reduce confusion for users, such as verified accounts. Our copymint enforcement is one of many tools we’re using to enhance the user experience.`,
        active: false
    },
    {
        id: 6,
        title: 'Is it considered a copymint if I mix up existing properties from a collection?',
        content: `Putting existing properties together in a different way is a factor in determining whether something is a copymint.`,
        active: false
    },
    {
        id: 7,
        title: 'A certain collection seems to fall within your copymint definition, so why hasn’t it been delisted?',
        content: `There are a few potential reasons. First, our systems may still be detecting and evaluating the underlying content and could action it soon. Second, we may be taking a closer look at the collection with human reviewers to make a determination. Third, we are also working to refine and improve our technology—so it may be that our systems haven’t been able to detect the content yet.`,
        active: false
    },
]