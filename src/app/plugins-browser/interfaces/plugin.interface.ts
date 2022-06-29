export interface Plugin {
    shortName: string;
    name: string;
    description: string;
    dllName: string;
    statiticsOfUsage?: number[];
    comments?: string[];
    reports?: string[]
}