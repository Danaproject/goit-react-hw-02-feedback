import { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import Container from './components/Container/Container';
import Panel from './components/Panel';
import './styles.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (e) => {
    this.setState(prevState => ({
      [e.target.dataset.id]: prevState[e.target.dataset.id]+1
    }));
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return isNaN(good / this.countTotalFeedback()) ? 0 : Math.round((good / this.countTotalFeedback()) * 100)
  }

  render() {
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Panel>
          <Section title="Please leave feedback">
            <FeedbackOptions options={this.state} onLeaveFeedback={this.handleFeedback} />
          </Section>
    
          <Section title="Statistics">
            {countTotalFeedback
              ? <Statistics options={this.state} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} />
              : <Notification message="No feedback given" />}
          </Section>
        </Panel>
      </Container>
    );
  }
}

export default App;
