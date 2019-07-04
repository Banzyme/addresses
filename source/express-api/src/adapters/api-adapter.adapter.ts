export abstract class MapsAPIAdapter {
    protected apiKey: string;
    public abstract lookupAddress(address: string);
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
}