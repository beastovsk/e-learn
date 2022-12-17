import { Dropdown, Menu, Space } from "antd";
import React, { FC } from "react";
import s from "./ProfileSelect.module.scss";
import Image from "next/image";

import profilePhoto from "../../../assets/images/sidebar-icons/profile-photo.svg";
import profileArrows from "../../../assets/images/sidebar-icons/profile-arrows.svg";
import { useAppSelector } from "../../../hooks/hooks";

interface ProfileSelectProps {}

const ProfileSelect: FC<ProfileSelectProps> = () => {
	const store = useAppSelector((store) => store.layoutSlice);
	const { firstName, lastName, status } = store.profileInfo;

	const items = [
		{ label: "Profile", key: "item-1" },
		{ label: "FAQ", key: "item-2" },
	];
	const profileInfo = (
		<>
			<Image src={profilePhoto} alt="" width={60} height={60}></Image>
			<div className={s.container}>
				<p className={s.name}>
					{firstName} {lastName.slice(0, 1)}.
				</p>
				<p className={s.status}>{status}</p>
			</div>
			<Image src={profileArrows} alt="" width={20} height={20}></Image>
		</>
	);
	return (
		<Dropdown menu={{ items }} trigger={["click"]} placement={"top"}>
			<Space>{profileInfo}</Space>
		</Dropdown>
	);
};

export default ProfileSelect;
