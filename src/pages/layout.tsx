import {ReactNode} from "react";
import {HeaderScreen} from "@/app/screens/header/index.screen";

export default function Layout({children}: {children: ReactNode}) {
    return (
        <section>
            <HeaderScreen/>
            {children}
        </section>
    )
}