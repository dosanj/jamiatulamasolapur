export interface ISideMenuItem {
    name: string;
    expand?: boolean;
    url?: string;
    selected?: boolean;
    children?: ISideMenuItem[];
    content?: IContentData;
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
