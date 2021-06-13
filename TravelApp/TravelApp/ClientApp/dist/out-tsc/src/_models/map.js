export class GeoJson {
    constructor(coordinates, properties) {
        this.properties = properties;
        this.type = 'Feature';
        this.geometry = {
            type: 'Point',
            coordinates: coordinates
        };
    }
}
export class FeatureCollection {
    constructor(features) {
        this.features = features;
        this.type = 'FeatureCollection';
    }
}
//# sourceMappingURL=map.js.map