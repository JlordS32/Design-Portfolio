export type ButtonType = {
   buttonType?: "primary" | "secondary";
   onClick?: () => void;
   text?: string;
};

export type ArrowType = {
   buttonType?: "primary" | "secondary";
   direction?: "left" | "right";
   onClick?: () => void;
}; 