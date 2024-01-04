declare module 'src/service/http-client.service' {
    class HttpClient {
        constructor();
    
        get(url: string, callback: (content: any, response: XMLHttpRequest) => void, contentType?: string): void;
        post(url: string, data: object|null, callback: (content: any, response: XMLHttpRequest) => void, contentType?: string): void;
        patch(url: string, data: object|null, callback: (content: any, response: XMLHttpRequest) => void, contentType?: string): void;
        delete(url: string, data: object|null, callback: (content: any, response: XMLHttpRequest) => void, contentType?: string): void;
    
        /**
         * Abort running Request
         */
        abort(): void;
    }

    export = HttpClient;
}