import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";

import react from "react";
import s from "./Sidebar.module.scss";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
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
                    <Image src={icon} alt="nav-item" width={30} height={30} />
                ) : null}
                <p>{label}</p>
            </div>
        </Link>
    ));
    const menu = [
        { label: "item 1", key: "item-1" },
        { label: "item 2", key: "item-2" },
    ];

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
