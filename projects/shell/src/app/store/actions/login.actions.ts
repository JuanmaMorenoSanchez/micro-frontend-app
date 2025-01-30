export class SetLoginStatus {
    static readonly type = '[Login] Set Status';
    constructor(
        public status: boolean,
        public email?: string
    ) {}
}