'use client';
import Image from "next/image";
import Arrow from "@/assets/icons/Arrow";
import ArrowRight from "@/assets/icons/ArrowRight";
import TopCharImage1 from '@/assets/images/top-char-1.png'
import TopCharImage2 from '@/assets/images/top-char-2.png'
import RatingsImage from '@/assets/images/ratings.png'
import { useCallback } from "react";

export default function Contents() {
    
    const callToActionHandler = useCallback(() => {
        console.log("ANDY F. NIEVES")
    }, [])

    return <div className="flex flex-col relative items-center p-0 -mt-3 lg:flex-row md:justify-center">
        <div className="-mx-[37px] items-center justify-center order-2 lg:order-1 -mt-30 lg:mt-0 -z-1">
            <Arrow />
        </div>
        <div className="flex flex-col flex-1 w-full lg:max-w-[528px] mt-20 lg:mt-5 gap-5 order-1 lg:order-2">
            <div className="card flex flex-col gap-5 justify-center items-center px-5">
                <h1>
                    Remarkable<br />new journeys on every flight
                </h1>
                <button onClick={callToActionHandler} className="visit-now-btn flex flex-row items-center justify-center gap-1 w-10/12 z-1">
                    Visit Now <ArrowRight />
                </button>
                <p className="text-center">No delay in your current progress</p>
            </div>
            <div className="flex box-shadow p-[7px] bg-white rounded-[24px] items-center justify-center z-1">
                <Image
                    alt="Banner Image"
                    src={RatingsImage} />
            </div>
        </div>
        <Image className="absolute bottom-0 -ml-[100px] hidden lg:flex mb-[10px]" alt="" src={TopCharImage1} />
        <Image className="absolute bottom-0 object-cover object-center flex lg:hidden overflow-visible h-[500px] w-[500px] ml-[100px] -mb-[55px]" width={390} alt="" height={390} src={TopCharImage2} />
    </div>
}
