
import React, { Component } from 'react'
import Search from '../../components/Header/Search'

interface ReservatoriosDeAguaProps {
    defaultProps: any
    routes: any
}

interface ReservatoriosDeAguaState {
    search: string
    timerID: any
    date: any
}

class ReservatoriosDeAgua extends Component<ReservatoriosDeAguaProps, ReservatoriosDeAguaState> {

    constructor(props: ReservatoriosDeAguaProps) {
        super(props)
        this.state = {
            ...this.props.defaultProps,
            timerID: '',
            date: new Date().toLocaleTimeString('pt-BR')
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
            date: new Date().toLocaleTimeString('pt-BR')
        })
    }

    _handleChange(event: any) {
        console.log(event.target.value)
        this.setState({ search: event.target.value })
    }


    render() {
        return (
            <section>
                <input onChange={this._handleChange.bind(this)} type='search' defaultValue={this.state.search} />
                <h1>My Search is {this.state.search}</h1>
                <h1>Date {this.state.date}</h1>
                <h1>timerID {this.state.timerID}</h1>
            </section>
        )
    }
}

export default ReservatoriosDeAgua