function generateRandomSearch() {
    const queries = [
        'funny cats', 'how to cook pasta', 'best coding tutorials', 
        'latest technology news', 'workout routines', 'travel vlogs', 
        'DIY crafts', 'top 10 movies', 'unboxing videos', 'music playlists'
    ];

    const randomQuery = queries[Math.floor(Math.random() * queries.length)];
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(randomQuery)}`;
    window.open(url, '_blank');
}
