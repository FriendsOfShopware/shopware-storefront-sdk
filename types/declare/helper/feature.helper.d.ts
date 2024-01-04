interface FeatureHelper {
    init(flagConfig: object): void;
    isActive(flag: string): boolean;
}

declare module 'src/helper/feature.helper' {
    const helper: FeatureHelper;
    export = helper;
}