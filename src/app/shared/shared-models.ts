export interface ISideMenuItem {
    name: string;
    link?: string;
    expand?: boolean;
    selected?: boolean;
    children?: ISideMenuItem[];
}
export interface IContentData {
    heading: string;
    text?: string;
    videosList?: {
        englishText: string;
        hindiText: string;
        urduText: string;
        url: string;
    }[];
}
