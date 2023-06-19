import { getGridProps } from '@pluralsight/headless-styles';
import type { GridOptions } from '@pluralsight/headless-styles/types';
import type { ReactNode, CSSProperties } from 'react';

interface GridProps extends GridOptions {
    style: CSSProperties;
    children: ReactNode;
}

export function Grid({ children, style, ...gridOptions }: GridProps) {
    return (
        <div {...getGridProps(gridOptions)} style={style}>
            {children}
        </div>
    );
}
