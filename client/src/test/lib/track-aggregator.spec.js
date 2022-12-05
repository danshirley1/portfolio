import { chai } from '../../../../test-utils';
import { getAggregatedArtists, getTopAggregatedArtists } from '../../../../../lib/tracks/track-aggregator';

const { expect } = chai;

const defaultTrackList = [
  {
    id: '1',
    artists: [
      {
        id: 'art_1',
        name: 'name_1',
      },
    ],
  },
  {
    id: '2',
    artists: [
      {
        id: 'art_2',
        name: 'name_2',
      },
    ],
  },
  {
    id: '3',
    artists: [
      {
        id: 'art_2',
        name: 'name_2',
      },
    ],
  },
  {
    id: '4',
    artists: [
      {
        id: 'art_3',
        name: 'name_3',
      },
    ],
  },
  {
    id: '5',
    artists: [
      {
        id: 'art_3',
        name: 'name_3',
      },
    ],
  },
  {
    id: '6',
    artists: [
      {
        id: 'art_3',
        name: 'name_3',
      },
    ],
  },
];

describe('track-aggregator', () => {
  describe('getAggregatedArtists', () => {
    it('Aggregates artists as expected:', () => {
      const result = getAggregatedArtists(defaultTrackList);

      expect(result).to.eql({
        art_1: { trackCount: 1 },
        art_2: { trackCount: 2 },
        art_3: { trackCount: 3 },
      });
    });
  });

  describe('getTopAggregatedArtists', () => {
    it('Aggregates artists as expected:', () => {
      const data = {
        art_1: { trackCount: 9 },
        art_2: { trackCount: 2 },
        art_3: { trackCount: 3 },
        art_4: { trackCount: 4 },
        art_5: { trackCount: 4 },
        art_6: { trackCount: 4 },
        art_7: { trackCount: 5 },
      };

      const result = getTopAggregatedArtists(data, 5);

      expect(result).to.eql([
        { artistId: 'art_1', trackCount: 9 },
        { artistId: 'art_7', trackCount: 5 },
        { artistId: 'art_4', trackCount: 4 },
        { artistId: 'art_5', trackCount: 4 },
        { artistId: 'art_6', trackCount: 4 },
      ]);
    });
  });
});
