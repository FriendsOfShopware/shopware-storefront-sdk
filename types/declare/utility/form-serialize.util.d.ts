interface FormSerializeUtil {
    serialize(form: HTMLFormElement, strict?: boolean): FormData
    serializeJson(form: HTMLFormElement, strict?: boolean): object
}

declare module 'src/utility/form/form-serialize.util' {
    const helper: FormSerializeUtil;
    export = helper;
}