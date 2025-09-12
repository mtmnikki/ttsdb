import CardSmallChart from "@/components/charts/card-small-chart";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MarketItem {
  id: string;
  name: string;
  image: string;
  price: string;
  change: string;
  changeType: "positive" | "negative";
  chartBg: string;
}

const marketData: MarketItem[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    image: "/assets/images/currency/crypto-img1.png",
    price: "$55,000.00",
    change: "+3.85%",
    changeType: "positive",
    chartBg: "#45B369",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    image: "/assets/images/currency/crypto-img2.png",
    price: "$55,000.00",
    change: "-2.85%",
    changeType: "negative",
    chartBg: "#EF4A00",
  },
  {
    id: "solana",
    name: "Solana",
    image: "/assets/images/currency/crypto-img3.png",
    price: "$55,000.00",
    change: "+3.85%",
    changeType: "positive",
    chartBg: "#45B369",
  },
  {
    id: "litecoin",
    name: "Litecoin",
    image: "/assets/images/currency/crypto-img4.png",
    price: "$55,000.00",
    change: "+3.85%",
    changeType: "positive",
    chartBg: "#45B369",
  },
  {
    id: "dogecoin",
    name: "Dogecoin",
    image: "/assets/images/currency/crypto-img5.png",
    price: "$15,000.00",
    change: "-2.85%",
    changeType: "negative",
    chartBg: "#EF4A00",
  },
  {
    id: "crypto",
    name: "Crypto",
    image: "/assets/images/currency/crypto-img1.png",
    price: "$15,000.00",
    change: "-2.85%",
    changeType: "negative",
    chartBg: "#EF4A00",
  },
];

const MarketInfoCard = () => {
  return (
    <Card className="card h-full rounded-lg border-0">
      <CardContent className="card-body p-0">
        <div className="flex items-center flex-wrap gap-2 justify-between mb-5">
          <h6 className="mb-0 font-bold text-lg">Market Info </h6>
          <div className="border border-neutral-200 dark:border-neutral-500 rounded-md px-4 py-2 pe-0 flex items-center gap-1 text-sm text-secondary-light">
            Currency:
            <Select>
              <SelectTrigger className="w-[80px] !h-[32px] focus-visible:shadow-none focus-visible:ring-0 font-medium bg-transparent dark:bg-transparent text-neutral-900 dark:text-white border-0  data-[placeholder]:text-neutral-900">
                <SelectValue placeholder="USD" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="BDT">BDT</SelectItem>
                  <SelectItem value="RUP">RUP</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-5">
          {marketData.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap items-center justify-between gap-2 bg-neutral-200/75 dark:bg-slate-700 px-3 py-2 rounded"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={36}
                  height={36}
                  className="rounded-full shrink-0"
                />
                <div className="grow">
                  <h6 className="text-base mb-0">{item.name}</h6>
                </div>
              </div>
              <h6 className="text-base font-medium mb-0">{item.price}</h6>
              <span
                className={`text-base font-medium ${item.changeType === "positive"
                  ? "text-green-600"
                  : "text-red-600"
                  }`}
              >
                {item.change}
              </span>
              <div className="remove-tooltip-title rounded-tooltip-value remove-tooltip-marker">
                <CardSmallChart chartColor={item.chartBg} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketInfoCard;
