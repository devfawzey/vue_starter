import type {MaybeRef} from "@vueuse/core";

interface UiPageHeaderAction {
    label: string,
    icon?: string,
    to: string,
    target: "_blank" | "_self"
}

export interface UiPageHeader {
    title: string,
    description?: string,
    headline?: string,
    links?: MaybeRef<UiPageHeaderAction[]>
}