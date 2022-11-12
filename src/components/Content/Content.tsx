import React, { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { ContentSlider } from "../ui/ContentSlider/ContentSlider";
import s from "./Content.module.scss";

interface ContentProps {}

const Content: FC<ContentProps> = () => {
    const store = useAppSelector((store) => store.layoutSlice);
    const { firstName } = store.profileInfo;
    return (
        <div className={s.contentContainer}>
            <div className={s.contentTitle}>
                <h2>Hi {firstName},</h2>
                <h1>What will you learn today?</h1>
            </div>
            <ContentSlider />
        </div>
    );
};

export default Content;
