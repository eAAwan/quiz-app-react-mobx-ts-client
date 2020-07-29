import { action, observable } from "mobx";

class AppStore {
  @observable name = "";
  @observable currentScore = 0;
  @observable totalScore = 0;

  @action
  updatePoints = (points: number) => {
    this.currentScore += points;
  };

  @action
  getTotalScore = (quizQuestions: any) => {
    this.totalScore = 0;
    quizQuestions.forEach((element) => {
      this.totalScore += element.answers.sort(
        (a, b) => b.value - a.value
      )[0].points;
    });

    return this.totalScore;
  };
}

export default AppStore;
