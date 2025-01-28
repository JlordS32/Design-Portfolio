export type ButtonType = {
   buttonType?: "primary" | "secondary";
   onClick?: () => void;
   text?: string;
};

export type ArrowType = {
   direction?: "left" | "right";
   onClick?: () => void;
}; 
