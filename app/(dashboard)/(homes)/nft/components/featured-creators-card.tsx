"use client"

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import CommonLink from "@/components/shared/common-link";
import Image from 'next/image';
import NftImagesImage1 from '@/public/assets/images/nft/nft-items-img1.png';
import FeaturedCreatorImage1 from '@/public/assets/images/nft/featured-creator1.png';
import FeaturedCreatorImage2 from '@/public/assets/images/nft/featured-creator2.png';
import BitcoinIcon from '@/public/assets/images/nft/bitcoin.png';
import { Button } from '@/components/ui/button';

const FeaturedCreatorsCard = () => {

    const [follow, setFollow] = useState(false);

    return (
        <Card className="card h-full rounded-lg border-0 !p-0">
            <CardContent className="card-body p-0 flex flex-col justify-between gap-8">
                <div>
                    <div className="card-header border-b border-neutral-200 dark:border-slate-500 py-4 px-6">
                        <div className="flex items-center flex-wrap gap-2 justify-between">
                            <h6 className="font-bold text-lg mb-0">Statistics</h6>
                            <CommonLink />
                        </div>
                    </div>
                    <div className="card-body px-6 py-5">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                            <div className="flex items-center">
                                <Image src={NftImagesImage1} alt="Image"
                                    className="flex-shrink-0 w-10 h-10 rounded-full me-3" />
                                <div className="flex-grow-1">
                                    <h6 className="text-base mb-0 font-semibold">Theresa Webb</h6>
                                    <span className="text-sm text-secondary-light font-normal">Owned by ABC</span>
                                </div>
                            </div>
                            <Button type="button" variant="outline"
                                className="btn btn-outline-primary-600 px-6 rounded-full" onClick={() => setFollow(!follow)}>{follow ? "Following" : "Follow"}</Button>
                        </div>
                        <div className="mt-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div
                                    className="nft-card bg-white dark:bg-slate-700 rounded overflow-hidden shadow-4">
                                    <div className="rounded overflow-hidden">
                                        <Image src={FeaturedCreatorImage1} alt="Image"
                                            className="w-full h-full object-fit-cover" />
                                    </div>
                                    <div className="p-3">
                                        <h6 className="text-base font-bold text-primary-light mb-3">New Figures</h6>
                                        <div className="flex items-center gap-2">
                                            <Image src={BitcoinIcon}
                                                className="w-28-px h-28-px rounded-full object-fit-cover" alt="Image" />
                                            <span className="text-sm text-secondary-light font-medium">0.10
                                                BTC</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="nft-card bg-white dark:bg-slate-700 rounded overflow-hidden shadow-4">
                                    <div className="rounded overflow-hidden">
                                        <Image src={FeaturedCreatorImage2} alt="Image"
                                            className="w-full h-full object-fit-cover" />
                                    </div>
                                    <div className="p-3">
                                        <h6 className="text-base font-bold text-primary-light mb-3">Abstrac Girl
                                        </h6>
                                        <div className="flex items-center gap-2">
                                            <Image src={BitcoinIcon}
                                                className="w-28-px h-28-px rounded-full object-fit-cover" alt="Image" />
                                            <span className="text-sm text-secondary-light font-medium">0.10
                                                BTC</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default FeaturedCreatorsCard;