export class AddressModel {
    constructor(
        public street: string,
        public number: string,
        public neighborhood: string,
        public city: string,
        public state: string,
        public country: string,
        public zipCode: string
    ) { }
}