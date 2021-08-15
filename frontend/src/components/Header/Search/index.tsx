import React, { Component } from 'react'

interface Props {
    searchValue: string
}

interface State {
    search: string
    timerID: any
    date: any
}

class Search extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            search: this.props.searchValue,
            timerID: '',
            date: new Date()
        }
    }

    componentDidMount() {
        this.setState({
            timerID: setInterval(
                () => this.tick(),
                1000
            )
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    _handleChange(event: any) {
        console.log(event.target.value)
        this.setState({ search: event.target.value })
    }


    render() {
        return (
            <section>
                <input onChange={this._handleChange.bind(this)} className="App-logo" alt="logo" defaultValue={this.state.search} />
                <h1>My Search is {this.state.search}</h1>
                <h1>Date {this.state.date.toLocaleTimeString('pt-BR')}</h1>
                <h1>timerID {this.state.timerID}</h1>
            </section>
        )
    }
}

export default Search
