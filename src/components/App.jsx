import React, { Component } from 'react';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackIncrement = type => {
    this.setState(({ [type]: prevStateValue }) => ({
      [type]: prevStateValue + 1,
    }));
  };

  getTotal() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.getTotal();
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.getTotal();
    const positivePercentage = this.countPositiveFeedbackPercentage(this.state);

    const StatisticsComponent = () => {
      return total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      );
    };

    return (
      <main>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedbackIncrement}
          />
        </Section>

        <Section title="Statistics">
          <StatisticsComponent />
        </Section>
      </main>
    );
  }
}

export default App;
