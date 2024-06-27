export declare const rules: {
    "call-cleanup": {
        meta: {
            type: string;
            docs: {
                description: string;
            };
            schema: never[];
        };
        create(context: any): {
            ImportDeclaration(node: any): void;
            NewExpression(node: any): void;
        };
    };
    "implement-cleanup": {
        meta: {
            type: string;
            docs: {
                description: string;
                category: string;
                recommended: boolean;
            };
            fixable: string;
            schema: never[];
        };
        create: (context: any) => {
            ClassDeclaration(node: any): void;
        };
    };
};
