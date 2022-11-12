import "../assets/styles/styles.scss";
import { store } from "../store/store";
import { Provider } from "react-redux";
import "antd/dist/antd.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
