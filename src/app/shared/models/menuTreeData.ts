export interface MenuTreeData {
    name: string;
    textSize?: string;
    icon?: MenuTreeDataIcon;
    children?: MenuTreeData[];
}

interface MenuTreeDataIcon {
    name?: string;
    isSvg?: boolean;
}

export type { MenuTreeData as MenuTreeDataType}