interface BootstrapUtil {
    initTooltip(): bootstrap.Tooltip
    initPopover(): bootstrap.Popover
    initBootstrapPlugins(): void
}

declare module 'src/utility/bootstrap/bootstrap.util' {
    const helper: BootstrapUtil;
    export = helper;
}