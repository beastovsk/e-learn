import { createSlice } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import achievementIcon from "../assets/images/sidebar-icons/achievement-icon.svg";
import certificateIcon from "../assets/images/sidebar-icons/certificate-icon.svg";
import coursesIcon from "../assets/images/sidebar-icons/courses-icon.svg";
import favoriteIcon from "../assets/images/sidebar-icons/favorite-icon.svg";
import settingsIcon from "../assets/images/sidebar-icons/settings-icon.svg";
import testIcon from "../assets/images/sidebar-icons/test-icon.svg";
import activityIcon from "../assets/images/sidebar-icons/activity-icon.svg";

interface layoutInitialState {
    sidebarNavigation: {
        id: number;
        icon: StaticImageData;
        label: string;
        path: string;
    }[];
    profileInfo: {
        firstName: string;
        lastName: string;
        status: string;
    };
}

const initialState: layoutInitialState = {
    sidebarNavigation: [
        {
            id: 0,
            icon: activityIcon,
            label: "Home",
            path: "/",
        },
        {
            id: 1,
            icon: coursesIcon,
            label: "My Courses",
            path: "my-courses",
        },
        {
            id: 2,
            icon: favoriteIcon,
            label: "Favorite",
            path: "favorite",
        },
        {
            id: 3,
            icon: testIcon,
            label: "Test",
            path: "test",
        },
        {
            id: 4,
            icon: achievementIcon,
            label: "Achievements",
            path: "achivements",
        },
        {
            id: 5,
            icon: certificateIcon,
            label: "Certificate",
            path: "certificate",
        },
        {
            id: 6,
            icon: settingsIcon,
            label: "Settings",
            path: "settings",
        },
    ],
    profileInfo: {
        firstName: "Toda",
        lastName: "Dallas",
        status: "Premium account",
    },
};

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {},
});

export const {} = layoutSlice.actions;
export default layoutSlice.reducer;
