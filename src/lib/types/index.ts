import { StaticImageData } from "next/image";

export type ProjectType = {
    title: string,
    description: string,
    image: StaticImageData,
    stack: string[],
    demoLink: string | "",
    codeLink: string | "",
}