import Section from './Section/Section.jsx';
import Statistics from './Statistics/Statistics.jsx';
import { Component } from 'react';
import CreatefeedbackButton from './CreateFeedbackButton/CreateFeedbackButton.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickButton = event => {
    const keyName = event.target.name;

    this.setState(prevState => {
      return {
        [keyName]: prevState[keyName] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, current) => acc + current, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    if (good === 0) return 0;
    return Math.floor((good / this.countTotalFeedback()) * 100);
  };

  options = () => {
    console.log(Object.keys(this.state));
    return Object.keys(this.state);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const handleClickButton = this.handleClickButton;
    const countTotalFeedback = this.countTotalFeedback;
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage;

    return (
      <>
        <Section title="Please Leave Feedback">
          <CreatefeedbackButton
            options={this.options()}
            clickButtonFeedback={handleClickButton}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <p>No feedback given</p>
          )}
        </Section>
      </>
    );
  }
}

export default App;
