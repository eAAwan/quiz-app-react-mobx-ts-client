import * as React from "react";
import quizQuestions from "./api/quizQuestions";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import logo from "./svg/logo.svg";
import "./App.css";
import { Component } from "react";
import { observer, inject } from "mobx-react";
import AppStore from "./stores/AppStore";
import { autobind } from "core-decorators";

const API = "http://localhost:3008/";
const DEFAULT_QUERY = "getquiz";

interface IProps {
  store?: AppStore;
}

interface IState {
  counter: number;
  questionId: number;
  question: string;
  answerOptions: [];
  answer: string;
  answersCount: {};
  result: string;
  totalPoints: number;
  isShowQuiz: boolean;
}

@inject("store")
@observer
export default class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      answer: "",
      answersCount: {},
      result: "",
      totalPoints: 0,
      question: "",
      answerOptions: [],
      isShowQuiz: false,
    };
    this.props.store.totalScore = 0;
    this.props.store.currentScore = 0;
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("---" + JSON.stringify(data));
        this.setState({
          question: quizQuestions[0].question,
          answerOptions: quizQuestions[0].answers,
        });
      });
  }

  @autobind
  public resetQuiz() {
    this.setState({
      counter: 0,
      questionId: 1,
      answer: "",
      answersCount: {},
      result: "",
      totalPoints: 0,
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers,
    });
    this.props.store.totalScore = 0;
    this.props.store.currentScore = 0;
    this.props.store.getTotalScore(quizQuestions);
  }
  @autobind
  public handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
  }
  @autobind
  public onButtonClick() {
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 10);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 10);
    }
  }

  @autobind
  public setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  }

  @autobind
  public setNextQuestion() {
    const _score = this.state.answer === "" ? "0" : this.state.answer;

    this.props.store.updatePoints(parseInt(_score));
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: "",
    });
  }

  @autobind
  public getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswerCount
    );
  }

  @autobind
  public setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Unknown" });
    }
  }

  @autobind
  public onTextChange(event) {
    this.props.store.name = event.target.value;
    this.setState({ isShowQuiz: false });
  }
  @autobind
  public renderAskName() {
    return (
      <div className="container">
        <p className="App-header">What is your name?</p>
        <input
          className="container input-center"
          type="text"
          onChange={this.onTextChange}
        />
        <button
          className="container button-center"
          onClick={() =>
            this.props.store.name.length > 2 &&
            this.setState({ isShowQuiz: true })
          }
        >
          {"Next"}
        </button>
      </div>
    );
  }

  @autobind
  public renderQuiz() {
    const { store } = this.props;
    if (!this.state.isShowQuiz) {
      return this.renderAskName();
    }
    return (
      <div className="container">
        <h2 className="name">Hi {store.name}</h2>
        <Quiz
          currentpoints={
            store.currentScore === undefined ? 0 : store.currentScore
          }
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
        <button
          className="container button-center"
          onClick={this.onButtonClick}
        >
          {"Next"}
        </button>
      </div>
    );
  }

  @autobind
  public renderResult(name: string) {
    const { store } = this.props;
    return (
      <div>
        <Result
          name={name}
          currentPoint={store.currentScore}
          totalPoints={store.getTotalScore(quizQuestions)}
        />
        <button className="container button-center" onClick={this.resetQuiz}>
          {"Try Again"}
        </button>
      </div>
    );
  }

  render() {
    const { name } = this.props.store;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to OYNB</h2>
        </div>
        {this.state.result ? this.renderResult(name) : this.renderQuiz()}
      </div>
    );
  }
}
