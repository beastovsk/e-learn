import React, { FC } from "react";
import s from "./CoursesList.module.scss";
import Image from "next/image";

import studentsImage from "../../../assets/images/content/students-icon.svg";
import favouriteIcon from "../../../assets/images/content/favourite-icon.svg";
import showMore from "../../../assets/images/content/show-more.svg";

interface CoursesListProps {}

const CoursesList: FC<CoursesListProps> = () => {
	const coursesData = [
		{
			id: 0,
			title: "Sketch from A to Z",
			subtitle: "12 hours of video tutorials",
			amount: 423,
		},
		{
			id: 1,
			title: "Intro to React",
			subtitle: "8 hours of video tutorials",
			amount: 648,
		},
	];

	return (
		<div className={s.container}>
			<h1 className={s.title}>Your learning path</h1>

			<ul className={s.cards}>
				{coursesData.map(({ id, title, subtitle, amount }) => (
					<li className={s.item} key={id}>
						<h2 className={s.cardTitle}>{title}</h2>
						<p className={s.cardSubtitle}>{subtitle}</p>
						<p className={s.cardAmount}>{amount} students</p>

						<div className={s.cardInfo}>
							<Image
								src={studentsImage}
								alt=""
								className={s.image}
							/>
							<div className={s.manipulation}>
								<Image
									src={favouriteIcon}
									alt=""
									className={s.favouriteIcon}
								/>
								<Image
									src={showMore}
									alt=""
									className={s.image}
								/>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CoursesList;
