export class UserProfile {
    constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public birthDate: string,
        public street: string,
        public number: string,
        public neighborhood: string,
        public city: string,
        public state: string,
        public country: string,
        public zipCode: string,
        public image: string
    ) { }
}