import Head from "next/head";
import Image from "next/image";
import Sidebar from "../src/components/ui/Sidebar/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className="container">
            <div className="sidebarContainer">
                <Sidebar />
            </div>
            <div className="contentContainer"></div>
        </div>
    );
}
