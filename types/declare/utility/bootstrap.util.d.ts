interface BootstrapUtil {
    initTooltip(): any
    initPopover(): any
    initBootstrapPlugins(): void
}

declare module 'src/utility/bootstrap/bootstrap.util' {
    const helper: BootstrapUtil;
    export = helper;
}