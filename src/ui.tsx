import * as React from 'react';
import * as ReactDOM from 'react-dom'
import './ui.css'

declare function require(path: string): any

class App extends React.Component {
    textbox: HTMLInputElement

    constructor(props) {
        super(props);
    }

    countRef = (element: HTMLInputElement) => {
        this.textbox = element
    }

    onCreate = () => {
        window.open('https://meet.jit.si/' + this.textbox.value, 'MyWindow', 'width=700,height=500,left=150,top=200,toolbar=0,status=0');
        parent.postMessage({pluginMessage: {type: 'create-meeting', meetingName: this.textbox.value}}, '*')
    }

    onCancel = () => {
        parent.postMessage({pluginMessage: {type: 'cancel'}}, '*')
    }

    render() {
        return <div>
            <img src={require('./logo.svg')}/>
            <h2>Create your meeting!</h2>
            <input ref={this.countRef}/>
            <br/>
            <button id="create" onClick={this.onCreate}>Create</button>
            <button onClick={this.onCancel}>Cancel</button>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('react-page'))