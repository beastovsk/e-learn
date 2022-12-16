import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";

import s from "./Sidebar.module.scss";
import ProfileSelect from "../ui/ProfileSelect/ProfileSelect";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
	const router = useRouter();

	const store = useAppSelector((store) => store.layoutSlice);

	const navigationItems = store.sidebarNavigation;

	const navLink = navigationItems.map(({ id, icon, label, path }) => (
		<Link href={path}>
			<div
				className={
					router.pathname == path
						? `${s.activeNavigationItem} ${s.navigationItem}`
						: s.navigationItem
				}
				key={id}
			>
				{icon ? (
					<Image
						src={icon}
						alt="nav-item"
						width={30}
						height={30}
						className={s.image}
					/>
				) : null}
				<p className={s.label}>{label}</p>
			</div>
		</Link>
	));

	return (
		<div className={s.sidebarContaner}>
			<div className={s.sidebarLogo}>Elearn</div>

			<div className={s.sidebarNavigation}>{navLink}</div>

			<div className={s.sidebarProfile}>
				<ProfileSelect />
			</div>
		</div>
	);
};

export default Sidebar;
