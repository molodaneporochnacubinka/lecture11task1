import GameSavingLoader from '../src/js/GameSavingLoader';

jest.setTimeout(7000);

test('test GameSavingLoader Promise', () => {
  const gameSavingLoader = new GameSavingLoader();
  const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  gameSavingLoader.load().then((data) => {
    expect(JSON.stringify(data)).toBe(expected);
  });
});

