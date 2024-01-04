interface HttpClient {
    new(): HttpClient;

    get(url: string, callback: (content: any, response: XMLHttpRequest) => void, contentType?: string): void;
    post(url: string, data: object|null, callback: (content: any, response: XMLHttpRequest) => void, contentType?: string): void;
    patch(url: string, data: object|null, callback: (content: any, response: XMLHttpRequest) => void, contentType?: string): void;
    delete(url: string, data: object|null, callback: (content: any, response: XMLHttpRequest) => void, contentType?: string): void;

    /**
     * Abort running Request
     */
    abort(): void;
}

declare module 'src/service/http-client.service' {
    const Client: HttpClient;
    export = Client;
}