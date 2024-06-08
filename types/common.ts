export type LayoutProps<T extends {} = {}> = Readonly<{ children: React.ReactNode }> & T

export enum XPositions {
    Left,
    Right
}