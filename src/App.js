import React from "react";
import { Link, Route, Routes } from "react-router-dom";
// import { FilteredList } from "./FilteredList";
// import { CarDetail } from "./CarDetail";
// import { ClickCounter } from "./ClickCounter";
// import { ClickTracker } from "./ClickTracker";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { ShowGitHubUser } from "./ShowGitHubUser";
// import { DisplayLanguage } from "./DisplayLanguage";
// import { GitHubUser } from "./GitHubUser";
// import { GitHubUserList } from "./GitHubUserList";
// import { Hello } from "./Hello";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { LanguageContext } from "./LanguageContext";
// import { Login } from "./Login";
// import { Sum } from "./Sum";
// import { TodoList } from "./TodoList";
// import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";
// import { HookCounter } from "./HookCounter"
// import { HookForm } from "./HookForm";

export class App extends React.Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };
  render() {
    return (
      <div>
        {/* 
                <Hello />
                <ClickCounter onCounterChange={(counter) => {console.log(`the count is ${counter}`)}}/>
                <ClickTracker />
                <InteractiveWelcome />
                <Login />
                <UncontrolledLogin />
                <TodoList render={
                    (items) => {
                        const [...item] = items
                        return (
                            <ul><li>{item}</li></ul>
                        )
                    }
                }/>
                <Sum /> */}
        {/* <LanguageContext.Provider value={this.state.language}>
                    <select value={this.state.language} onChange={this.handleLanguageChange}>
                        <option value="en">English</option>
                        <option value="it">Italian</option>
                    </select>
                    <DisplayLanguage />
                </LanguageContext.Provider> */}
        {/* <GitHubUser username="GiovanniGiannitto"/> 
                <GitHubUserList />
                <HookForm />
                <CarDetail initialData={{model:"Alfa Mito", year:2008, color:"blue"}}/>
                <HookCounter />
                <FilteredList />*/}
        <Container title="My prop is a title">
          <Routes>
            <Route
              path="/"
              element={<Welcome name="John" renderAge={true} />}
            />
            <Route
              path="counter"
              element={
                <Counter
                  initialValue={2}
                  incrementAmount={2}
                  incrementInterval={1000}
                />
              }
            />
            <Route path="user:username" element={<ShowGitHubUser />} />
          </Routes>
          <Link to="/">Home</Link>
          <Link to="counter">Go to Counter</Link>
          <Link to="user:username">Go to fetch Github</Link>
        </Container>
      </div>
    );
  }
}
