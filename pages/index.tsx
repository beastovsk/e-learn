import Head from "next/head";
import Image from "next/image";
import Content from "../src/components/Content/Content";
import Sidebar from "../src/components/Sidebar/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className="container">
            <div className="sidebarContainer">
                <Sidebar />
            </div>
            <div className="contentContainer">
                <Content />
            </div>
        </div>
    );
}
