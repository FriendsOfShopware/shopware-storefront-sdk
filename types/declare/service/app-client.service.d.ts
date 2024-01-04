declare module 'src/service/app-client.service' {
    class AppClient {
        constructor();
    
        get(url: RequestInfo, options?: RequestInit): Promise<Response>;
        post(url: RequestInfo, options?: RequestInit): Promise<Response>;
        patch(url: RequestInfo, options?: RequestInit): Promise<Response>;
        delete(url: RequestInfo, options?: RequestInit): Promise<Response>;
        reset(): void;
    }

    export = AppClient;
}