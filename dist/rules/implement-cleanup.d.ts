declare const rule: {
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
export default rule;
