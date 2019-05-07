import GameSavingData from './GameSavingData';
import readGameSaving from './readGameSaving';

export default class GameSavingLoader {
  load() {
    readGameSaving().then((buffer) => {
      const saveData = new GameSavingData(buffer);
      return saveData.json();
    }).then((value) => {
      return JSON.parse(value);
    }).catch(() => {
      throw new Error('ошибка загрузки данных');
    });
  }
}