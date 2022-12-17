import React, { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { ContentSlider } from "../ui/ContentSlider/ContentSlider";
import CoursesList from "../ui/CoursesList/CoursesList";
import s from "./Content.module.scss";

interface ContentProps {}

const Content: FC<ContentProps> = () => {
	const store = useAppSelector((store) => store.layoutSlice);
	const { firstName } = store.profileInfo;
	return (
		<div className={s.container}>
			<div className={s.content}>
				<h2 className={s.title}>Hi {firstName},</h2>
				<h1 className={s.subtitle}>What will you learn today?</h1>
				<ContentSlider />
				<CoursesList />
			</div>
		</div>
	);
};

export default Content;
