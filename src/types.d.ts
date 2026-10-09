export type TSidebarEntry = {
    text: string;
    icon?: string;
    link?: string;
    items?: TSidebarEntry[];
    active: boolean;
    collapsed: boolean;
};
