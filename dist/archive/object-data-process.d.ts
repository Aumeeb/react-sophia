interface ObjectDataEventHandler {
    onSave: () => void;
    onSaveFailure: (err: string) => void;
}
export declare class ObjectDataProcess implements ObjectDataEventHandler {
    onSave(): void;
    onSaveFailure(err: string): void;
}
export {};
