export class Pelicula {
    film_id: number;
    title: string;
    description: string;
    language: number;

    constructor(id, title, description, language) {
        this.film_id = id;
        this.title = title;
        this.description = description;
        this.language = language;
    }
}
