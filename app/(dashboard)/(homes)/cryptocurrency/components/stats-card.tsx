import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import CardSmallChartTwo from '@/components/charts/card-small-chart-two';
import { Card, CardContent } from '@/components/ui/card';

interface CryptoItem {
    id: string;
    name: string;
    symbol: string;
    price: string;
    change: string;
    changeType: "success" | "danger";
    image: string;
    chartId: string;
    gradient: string;
    chartBg: string;
}

const cryptoItems: CryptoItem[] = [
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    price: "$45,138",
    change: "+ 27%",
    changeType: "success",
    image: "/assets/images/currency/crypto-img1.png",
    chartId: "bitcoinAreaChart",
    gradient: "from-yellow-600/10",
    chartBg: "#F98C08",
  },
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    price: "$45,138",
    change: "- 27%",
    changeType: "danger",   
    image: "/assets/images/currency/crypto-img2.png",
    chartId: "ethereumAreaChart",
    gradient: "from-blue-600/10",
    chartBg: "#5F80FF",
  },
  {
    id: "sol",
    name: "Solana",
    symbol: "SOL",
    price: "$45,138",
    change: "+ 27%",
    changeType: "success",
    image: "/assets/images/currency/crypto-img3.png",
    chartId: "solanaAreaChart",
    gradient: "from-purple-600/10",
    chartBg: "#C817F8",
  },
  {
    id: "ltc",
    name: "Litecoin",
    symbol: "LTE",
    price: "$45,138",
    change: "+ 27%",
    changeType: "success",
    image: "/assets/images/currency/crypto-img4.png",
    chartId: "litecoinAreaChart",
    gradient: "from-blue-600/10",
    chartBg: "#2171EA",
  },
  {
    id: "doge",
    name: "Dogecoin",
    symbol: "DOGE",
    price: "$45,138",
    change: "+ 27%",
    changeType: "success",
    image: "/assets/images/currency/crypto-img5.png",
    chartId: "dogecoinAreaChart",
    gradient: "from-yellow-600/10",
    chartBg: "#C2A633",
  },
];

const StatsCard = () => {
    return (
        <>
            {
                cryptoItems.map((crypto) => (
                    <Card
                        key={crypto.id}
                        className={cn(
                            "card shadow-none !border border-neutral-200 dark:border-slate-600 bg-gradient-to-l to-bg-white",
                            crypto.gradient
                        )}
                    >
                    <CardContent className="card-body p-0">
                        <div className="flex flex-wrap items-center gap-3">
                            <Image
                                src={crypto.image}
                                alt={crypto.name}
                                width={40}
                                height={40}
                                className="rounded-full shrink-0"
                            />
                            <div className="grow">
                                <h6 className="text-xl mb-1">{crypto.name}</h6>
                                <p className="font-medium text-secondary-light mb-0">{crypto.symbol}</p>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-wrap justify-between items-center gap-1">
                            <div>
                                <h6 className="mb-2">{crypto.price}</h6>
                                <span
                                className={cn(
                                    "text-base",
                                    crypto.changeType === "success"
                                    ? "text-green-600"
                                    : "text-red-600"
                                )}
                                >
                                    {crypto.change}
                                </span>
                            </div>
                        
                            <div className="remove-tooltip-title rounded-tooltip-value remove-tooltip-marker">
                                <CardSmallChartTwo chartColor={crypto.chartBg} />
                            </div>
                            
                        </div>
                        
                    </CardContent>
                </Card>
            ))
        }
        </>
    );
};

export default StatsCard;