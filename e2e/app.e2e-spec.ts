import { TochkaExerciseAppPage } from './app.po';

describe('tochka-exercise-app App', () => {
  let page: TochkaExerciseAppPage;

  beforeEach(() => {
    page = new TochkaExerciseAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
