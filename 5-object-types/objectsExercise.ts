type Movie = {
    readonly title: string,
    originalTitle?: string,
    director: string,
    releaseYear: number,
    boxOffice: {
        budget: number,
        grossUS: number,
        grossWorldwide: number
    }
}


const dune: Movie = {
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

const cats: Movie = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
      budget: 95000000,
      grossUS: 27166770,
      grossWorldwide: 73833348,
    },
  };

  const getProfit = (movie: Movie) : void => {
    console.log(`The movie named ${movie.title} had a profit of ${movie.boxOffice.grossWorldwide - movie.boxOffice.budget}.`);
  }

  getProfit(cats);
  getProfit(dune);