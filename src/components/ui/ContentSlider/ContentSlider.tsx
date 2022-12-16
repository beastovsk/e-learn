import React, { useEffect, useRef, useState } from "react";

import s from "./ContentSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, EffectCreative, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import ContentSliderItem from "../ContentSliderItem/ContentSliderItem";
import { useAppSelector } from "../../../hooks/hooks";

export const ContentSlider = () => {
    const sliderRef = useRef();

    const [slider, setSlider] = useState(0);

    const autoSlide = () => {
        // @ts-ignore
        sliderRef?.current.slideTo(slider + 1);
    };
    useEffect(() => {
        autoSlide();
    }, [slider]);

    const sliderList = useAppSelector((store) => store.layoutSlice.sliderList);

    let sliderPage = sliderList.map(
        ({
            id,
            backgroundImage,
            sliderTitle,
            sliderSubtitle,
            sliderButtonText,
        }) => (
            <SwiperSlide key={id} className={s.sliderCard}>
                <ContentSliderItem
                    id={id}
                    key={id}
                    backgroundImage={backgroundImage}
                    sliderTitle={sliderTitle}
                    sliderSubtitle={sliderSubtitle}
                    sliderButtonText={sliderButtonText}
                />
            </SwiperSlide>
        )
    );

    return (
        <div className={s.sliderContainer}>
            <Swiper
                onSwiper={(swiper) => {
                    // @ts-ignore
                    sliderRef.current = swiper;
                }}
                spaceBetween={40}
                slidesPerView={1}
                loop={true}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                // @ts-ignore
                delay={3800}
                navigation={{ nextEl: ".checkNext", prevEl: ".checkPrev" }}
                pagination={{
                    type: "bullets",
                    clickable: true,
                    el: ".checkDot",
                }}
                modules={[EffectFade, EffectCreative, Navigation, Pagination]}
            >
                {sliderPage}
            </Swiper>
            <div className="checkDot"></div>
            <div className={s.sliderNavigation}>
                <div className="checkPrev"></div>
                <div className="checkNext"></div>
            </div>
        </div>
    );
};
