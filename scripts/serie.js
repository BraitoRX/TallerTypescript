var Serie = /** @class */ (function () {
    function Serie(number, name, channel, seasons, description, link, photo) {
        this.name = name;
        this.seasons = seasons;
        this.description = description;
        this.photo = photo;
        this.number = number;
        this.channel = channel;
        this.link = link;
    }
    return Serie;
}());
export { Serie };
