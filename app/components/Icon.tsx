import type { ElementType } from 'react';
import { getIconProps } from '@pluralsight/headless-styles';
import type { IconOptions } from '@pluralsight/headless-styles/types';

interface IconProps extends IconOptions {
    icon: ElementType;
}

export function Icon({ icon: El, ...iconOptions }: IconProps) {
    // destruction from `props` was throwing the following error:
    // "JSX element type 'El' does not have any construct or call signatures.ts(2604)
    // This appears to be because TS couldn't guarantee the icon prop was
    // a valid React component
    return <El {...getIconProps(iconOptions)} />;
}
