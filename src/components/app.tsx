import { FunctionalComponent, h } from "preact";
import Header from "./header/header";
import Home from "../routes/home/Home";
import Todo from "../routes/todo/Todo";
import { Router, Route } from "preact-router";

const App: FunctionalComponent = () => {
    return (
        <div>
            <Header />
            <main>
                <Router>
                    <Route component={Home} path="/" />
                    <Route component={Todo} path="/todo" />
                </Router>
            </main>
        </div>
    )
}

export default App;