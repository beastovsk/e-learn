import { Button } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import s from "./ContentSliderItem.module.scss";

interface ContentSliderItemProps {
	id: number;
	backgroundImage: string;
	sliderTitle: string;
	sliderSubtitle: string;
	sliderButtonText: string;
}

const ContentSliderItem: FC<ContentSliderItemProps> = ({
	id,
	backgroundImage,
	sliderButtonText,
	sliderSubtitle,
	sliderTitle,
}) => (
	<div className={s.contentSliderItem}>
		<div className={s.sliderImage}>
			<Image
				src={backgroundImage}
				className={s.backgroundImage}
				alt=""
				width={500}
				height={500}
			/>
		</div>
		<div className={s.sliderText}>
			<h1 className={s.title}>{sliderTitle}</h1>
			<h2 className={s.subtitle}>{sliderSubtitle}</h2>
			<div className={s.buttonContainer}>
				<Button size="large" type="default" className={s.button}>
					{sliderButtonText}
				</Button>
			</div>
		</div>
	</div>
);

export default ContentSliderItem;
