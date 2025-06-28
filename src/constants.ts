export type DropdownLink = {
    onClick: () => void;
    title: string;
}

export type DropdownProps = {
    title: string;
    links: DropdownLink[];
    onClick : () => void;
}