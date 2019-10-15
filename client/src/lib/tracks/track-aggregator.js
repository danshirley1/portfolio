/*
const todo = {
  tracks: [{
    id: 'xxx',
    name: 'xxx',
    album: {
      id: 'xxx',
      name: 'xxx',
    },

    // 'artists' refers to the artists that performed on the track, not the sole proprietory track 'artist'.
    // However, a brief amount of poking around leads me to believe that the 'main'/ 'feature' artist could well be the
    // first artist returned in this array.
    //
    //  ^^^ THIS NEEDS INVESTIGATING FURTHER ^^^ DS 2/10/19
    //
    artists: [
      {
        id: 'xxx',
        name: 'xxx',
      }
      ...
    ],
  }],
};
*/

// TODO - maybe genre could be based on artists?

// @returns Array
export const getAggregatedArtists = tracks => tracks.reduce((agg, curr) => {
  const trackArtist = curr.artists[0];

  if (Object.prototype.hasOwnProperty.call(agg, trackArtist.id)) {
    agg[trackArtist.id].trackCount += 1;
  } else {
    agg[trackArtist.id] = { trackCount: 1 };
  }

  return agg;
}, {});

// @returns Array
export const getTopAggregatedArtists = (tracks, count) => Object.keys(tracks)
  .sort((a, b) => tracks[a].trackCount < tracks[b].trackCount)
  .map(sortedKey => ({
    artistId: sortedKey,
    ...tracks[sortedKey],
  }))
  .slice(0, count);

export default getAggregatedArtists;
