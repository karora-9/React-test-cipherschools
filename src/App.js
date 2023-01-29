import React from "react";

import Card from "./components/Card";
import Greeting from "./components/Greeting";

function App() {
    return (
        <>
            <Card>
                <Greeting firstName="Kanishka" lastName="Arora" />
            </Card>
            <Card>
                <Greeting firstName="Sakshi" lastName="Arora" />
            </Card>
            <Card>
                <Greeting firstName="Nitish" lastName="Arora" />
            </Card>
        </>
    );
}

export default App;
