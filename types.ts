import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type TooltipProps = {
    icon: IconProp;
    text: string;
    href?: string;
}

export type StarProps = {
    timeout: number;
}

export type StarComponent = {
    x: number;
    y: number;
    rotation: number;
    id: number;
}
