import { navInterface } from "./navInterface";

export const Navigation = ({links, logo}: navInterface) => {
    console.log(logo);

    return (
        <nav>
            <ul> {links.map((link) => link)} </ul>
        </nav>
    );
};