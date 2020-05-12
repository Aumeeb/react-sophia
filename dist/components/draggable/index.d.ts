import { FC } from 'react';
export interface DraggableProps {
    className?: string;
    position?: {
        x: number;
        y: number;
    };
    width?: number;
    height?: number;
    offsetTop?: number;
    offsetLeft?: number;
    onMouseUp?: () => void;
}
export declare const Draggable: FC<DraggableProps>;
