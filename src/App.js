import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './components/home and sub/Homepage';
import GettingStartedFaq from './components/home and sub/gettingstarted/GettingStartedFaq';
import WelcomeToOpenSea from './components/home and sub/gettingstarted/articles/WelcomeToOpenSea';
import CreateYourAccountWithAnEmail from './components/home and sub/gettingstarted/articles/CreateYourAccountWithAnEmail';
import GetToKnowYourWallet from './components/home and sub/gettingstarted/articles/GetToKnowYourWallet';
import PurchaseYourFirstNFT from './components/home and sub/gettingstarted/articles/PurchaseYourFirstNFT';
import ReviewYourItem from './components/home and sub/gettingstarted/articles/ReviewYourItem';
import FaqHome from './components/home and sub/faqs/FaqHome';
import HowDoIExportMyPrivateKey from './components/home and sub/faqs/articles/HowDoIExportMyPrivateKey';
import HowDoIUseOpenSeaStudios from './components/home and sub/faqs/articles/HowDoIUseOpenSeaStudios';
import WhatAreTheKeyTerms from './components/home and sub/faqs/articles/WhatAreTheKeyTerms';
import WhichBlockChainsAreCompatibleWithOpenSea from './components/home and sub/faqs/articles/WhichBlockChainsAreCompatibleWithOpenSea';
import WhatAreGasFees from './components/home and sub/faqs/articles/WhatAreGasFees';
import HowCanIContactOpenSea from './components/home and sub/faqs/articles/HowCanIContactOpenSea';
import WhatIsANonFungibleToken from './components/home and sub/faqs/articles/WhatIsANonFungibleToken';
import WhatIsACryptoWallet from './components/home and sub/faqs/articles/WhatIsACryptoWallet';
import HowToSwitchNetwork from './components/home and sub/faqs/articles/HowToSwitchNetwork';
import WhatCryptoWalletsCanIUseWithOpenSea from './components/home and sub/faqs/articles/WhatCryptoWalletsCanIUseWithOpenSea';
import WhatFeesDoIPayOnOpenSea from './components/home and sub/faqs/articles/WhatFeesDoIPayOnOpenSea';
import HowIDoUseTheDealsFeatures from './components/home and sub/faqs/articles/HowIDoUseTheDealsFeatures';
import ExecutionRevertedAndTransferErrors from './components/home and sub/faqs/articles/ExecutionRevertedAndTransferErrors';
import HowDoISearchForNfts from './components/home and sub/faqs/articles/HowDoISearchForNfts';
import WhatDoes404ErrorMean from './components/home and sub/faqs/articles/WhatDoes404ErrorMean';
import OopsSomehingWentWrong from './components/home and sub/faqs/articles/OopsSomehingWentWrong';
import OpenSeaTermsOfService from './components/home and sub/faqs/articles/OpenSeaTermsOfService';
import WhatIsOpenRarity from './components/home and sub/faqs/articles/WhatIsOpenRarity';
import NftsInHiddenTab from './components/home and sub/faqs/articles/NftsInHiddenTab';
import WrongOwnerListed from './components/home and sub/faqs/articles/WrongOwnerListed';
import TransactionHash from './components/home and sub/faqs/articles/TransactionHash';
import HowDoIDeleteAnNft from './components/home and sub/faqs/articles/HowDoIDeleteAnNft';
import ConvertToLocalCurrency from './components/home and sub/faqs/articles/ConvertToLocalCurrency';
import TurnOnNightMode from './components/home and sub/faqs/articles/TurnOnNightMode';
import PolyGonFunds from './components/home and sub/faqs/articles/PolyGonFunds';
import SignatureRequest from './components/home and sub/faqs/articles/SignatureRequest';
import NftSaleTaxs from './components/home and sub/faqs/articles/NftSaleTaxs';
import SwapFunctionality from './components/home and sub/faqs/articles/SwapFunctionality';
import BuyingFaqCenter from './components/home and sub/buying/BuyingFaqCenter';
import UserContent from './components/home and sub/usercontent/UserContent';
import OpenseaPolicyOnFeaturingDrop from './components/home and sub/usercontent/articles/OpenseaPolicyOnFeaturingDrop';
import OpenSeaStolenItemPolicy from './components/home and sub/usercontent/articles/OpenSeaStolenItemPolicy';
import OpenseaCopyMintingPolicy from './components/home and sub/usercontent/articles/OpenseaCopyMintingPolicy';
import InspiredByLabel from './components/home and sub/usercontent/articles/InspiredByLabel';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />

        <Route path='getting-started'>
          <Route index element={<GettingStartedFaq />} />
          <Route path='welcome-to-opensea' element={<WelcomeToOpenSea />} />
          <Route path='create-account-with-email' element={<CreateYourAccountWithAnEmail />} />
          <Route path='get-to-know-your-wallet' element={<GetToKnowYourWallet />} />
          <Route path='purchase-your-first-nft' element={<PurchaseYourFirstNFT />} />
          <Route path='review-your-item-page' element={<ReviewYourItem />} />

        </Route> {/* END OF GETTING STARTED*/}

        <Route path='faq'>
          <Route index element={<FaqHome />} />
          <Route path='how-to-export-my-privateKey' element={<HowDoIExportMyPrivateKey />} />
          <Route path='how-do-i-use-opensea-studio' element={<HowDoIUseOpenSeaStudios />} />
          <Route path='what-are-the-key-terms-to-know-in-nft' element={<WhatAreTheKeyTerms />} />
          <Route path='which-blockchains-are-compatible-with-opensea' element={<WhichBlockChainsAreCompatibleWithOpenSea />} />
          <Route path='what-are-gas-fees?' element={<WhatAreGasFees />} />
          <Route path='how-can-i-contact-opensea?' element={<HowCanIContactOpenSea />} />
          <Route path='what-is-a-non-fungible-token?' element={<WhatIsANonFungibleToken />} />
          <Route path='what-is-a-crypto-wallet?' element={<WhatIsACryptoWallet />} />
          <Route path='how-to-switch-network?' element={<HowToSwitchNetwork />} />
          <Route path='what-crypto-wallet-can-i-use-with-opensea?' element={<WhatCryptoWalletsCanIUseWithOpenSea />} />
          <Route path='What-fees-do-I-pay-on-OpenSea?' element={<WhatFeesDoIPayOnOpenSea />} />
          <Route path='How-do-I-use-the-Deals-feature?' element={<HowIDoUseTheDealsFeatures />} />
          <Route path='How-do-I-search-for-nfts?' element={<HowDoISearchForNfts />} />
          <Route path='execution-reverted-and-transfer-errors' element={<ExecutionRevertedAndTransferErrors />} />
          <Route path='what-does-a-404-error-mean?' element={<WhatDoes404ErrorMean />} />
          <Route path='why-am-i-seeing-oops-something-went-wrong-error?' element={<OopsSomehingWentWrong />} />
          <Route path='where-can-i-find-opensea-tos?' element={<OpenSeaTermsOfService />} />
          <Route path='what-is-openrarity?' element={<WhatIsOpenRarity />} />
          <Route path='what-nfts-are-in-the-hidden-tab-in-my-profile?' element={<NftsInHiddenTab />} />
          <Route path='why-is-the-wrong-owner-listed-for-my-nft?' element={<WrongOwnerListed />} />
          <Route path='how-do-i-find-my-transaction-hash?' element={<TransactionHash />} />
          <Route path='how-do-i-delete-an-nft?' element={<HowDoIDeleteAnNft />} />
          <Route path='How-do-I-convert-crypto-to-my-local-currency?' element={<ConvertToLocalCurrency />} />
          <Route path='How-do-I-turn-on-Night-Mode?' element={<TurnOnNightMode />} />
          <Route path='How-do-I-find-my-funds-on-Polygon?' element={<PolyGonFunds />} />
          <Route path='What-does-a-typed-signature-request-look-like?' element={<SignatureRequest />} />
          <Route path='How-can-I-export-my-NFT-sales-for-taxes?' element={<NftSaleTaxs />} />
          <Route path='How-do-I-use-the-Swap-functionality?' element={<SwapFunctionality />} />

        </Route> {/*END OF FAQ */}

        <Route path='buying'>
          <Route index element={<BuyingFaqCenter />} />
          <Route path='how-to-export-my-privateKey' element={<HowDoIExportMyPrivateKey />} />
          <Route path='how-do-i-use-opensea-studio' element={<HowDoIUseOpenSeaStudios />} />
          <Route path='what-are-the-key-terms-to-know-in-nft' element={<WhatAreTheKeyTerms />} />
          <Route path='which-blockchains-are-compatible-with-opensea' element={<WhichBlockChainsAreCompatibleWithOpenSea />} />
          <Route path='what-are-gas-fees?' element={<WhatAreGasFees />} />
          <Route path='how-can-i-contact-opensea?' element={<HowCanIContactOpenSea />} />
          <Route path='what-is-a-non-fungible-token?' element={<WhatIsANonFungibleToken />} />
          <Route path='what-is-a-crypto-wallet?' element={<WhatIsACryptoWallet />} />
          <Route path='how-to-switch-network?' element={<HowToSwitchNetwork />} />
          <Route path='what-crypto-wallet-can-i-use-with-opensea?' element={<WhatCryptoWalletsCanIUseWithOpenSea />} />
          <Route path='What-fees-do-I-pay-on-OpenSea?' element={<WhatFeesDoIPayOnOpenSea />} />
          <Route path='How-do-I-use-the-Deals-feature?' element={<HowIDoUseTheDealsFeatures />} />
          <Route path='How-do-I-search-for-nfts?' element={<HowDoISearchForNfts />} />
          <Route path='execution-reverted-and-transfer-errors' element={<ExecutionRevertedAndTransferErrors />} />
          <Route path='what-does-a-404-error-mean?' element={<WhatDoes404ErrorMean />} />
          <Route path='why-am-i-seeing-oops-something-went-wrong-error?' element={<OopsSomehingWentWrong />} />
          <Route path='where-can-i-find-opensea-tos?' element={<OpenSeaTermsOfService />} />
          <Route path='what-is-openrarity?' element={<WhatIsOpenRarity />} />
          <Route path='what-nfts-are-in-the-hidden-tab-in-my-profile?' element={<NftsInHiddenTab />} />
          <Route path='why-is-the-wrong-owner-listed-for-my-nft?' element={<WrongOwnerListed />} />
          <Route path='how-do-i-find-my-transaction-hash?' element={<TransactionHash />} />
          <Route path='how-do-i-delete-an-nft?' element={<HowDoIDeleteAnNft />} />
          <Route path='How-do-I-convert-crypto-to-my-local-currency?' element={<ConvertToLocalCurrency />} />
          <Route path='How-do-I-turn-on-Night-Mode?' element={<TurnOnNightMode />} />
          <Route path='How-do-I-find-my-funds-on-Polygon?' element={<PolyGonFunds />} />
          <Route path='What-does-a-typed-signature-request-look-like?' element={<SignatureRequest />} />
          <Route path='How-can-I-export-my-NFT-sales-for-taxes?' element={<NftSaleTaxs />} />
          <Route path='How-do-I-use-the-Swap-functionality?' element={<SwapFunctionality />} />

        </Route> {/*END OF BUYING */}

        <Route path='usercontent'>
          <Route index element={<UserContent />} />
          <Route path='opensea-policy-on-featuring-drop' element={<OpenseaPolicyOnFeaturingDrop />} />
          <Route path='opensea-policy-on-stolen-item' element={<OpenSeaStolenItemPolicy />} />
          <Route path='opensea-policy-on-copymint' element={<OpenseaCopyMintingPolicy />} />
          <Route path='inspired-by-label' element={<InspiredByLabel />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
