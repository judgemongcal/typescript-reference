var dune = {
    title: 'Dune',
    originalTitle: 'Dune Part One',
    director: 'Denis Villeneuve',
    releaseYear: 2021,
    boxOffice: {
        budget: 16500000,
        grossUS: 30000000,
        grossWorldwide: 40000000
    }
};
var cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
var getProfit = function (movie) {
    console.log("The movie named ".concat(movie.title, " had a profit of ").concat(movie.boxOffice.grossWorldwide - movie.boxOffice.budget, "."));
};
getProfit(cats);
getProfit(dune);
