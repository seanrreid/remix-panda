import type { CSSProperties, ReactNode } from 'react';

export type FigureProps = {
    style: CSSProperties;
    children: ReactNode;
};

export function Figure({ style, children }: FigureProps) {
    return <figure style={style}>{children}</figure>;
}
