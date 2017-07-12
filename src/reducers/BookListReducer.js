/*
    A reducer always returns a piece of data that will be saved into
    the store (state). One reducer per state part.
*/
export default function () {
    return [
        { title: 'World of Warcraft: Illidan', pages: 100 },
        { title: 'Star Wars, The Return of the Jedi', pages: 400 },
        { title: 'Eloquent Ruby', pages: 20 },
    ];
}