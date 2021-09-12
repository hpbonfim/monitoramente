import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

interface ReservatoriosDeAguaProps {
    defaultProps: any
    routes: any
}

interface ReservatoriosDeAguaState {
    search: string
    timerID: any
    date: any
}

const reservatorios = [
    {
        imagem: 'http://www.fundacaofia.com.br/gdusm/reservatorio_riodaspedras.jpg',
        nome: 'Reservatório ABC',
        detalhes: 'Maior reservatório do Brasil',
        titulo: 'Centro',
        localizacao: 'São Paulo',
        status: 'ATIVO',
        nivel: '80%',
    },
    {
        imagem: 'http://www.fundacaofia.com.br/gdusm/reservatorio_riodaspedras.jpg',
        nome: 'Reservatório ABC',
        detalhes: 'Maior reservatório do Brasil',
        titulo: 'Centro',
        localizacao: 'São Paulo',
        status: 'INATIVO',
        nivel: '39%',
    },
    {
        imagem: 'http://www.fundacaofia.com.br/gdusm/reservatorio_riodaspedras.jpg',
        nome: 'Reservatório ABC',
        detalhes: 'Maior reservatório do Brasil',
        titulo: 'Centro',
        localizacao: 'São Paulo',
        status: 'ATIVO',
        nivel: '60%',
    },
    {
        imagem: 'http://www.fundacaofia.com.br/gdusm/reservatorio_riodaspedras.jpg',
        nome: 'Reservatório ABC',
        detalhes: 'Maior reservatório do Brasil',
        titulo: 'Centro',
        localizacao: 'São Paulo',
        status: 'ATIVO',
        nivel: '40%',
    },

]

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

    formatNivelColor(value: string) {
        const valor = Number(value.replace(/\D+/g, ""))
        if (valor >= 80)
            return 'bg-green-100 text-green-800'

        else if (valor >= 40)
            return 'bg-yellow-100 text-yellow-800'

        else if (valor < 40)
            return 'bg-red-100 text-red-800'

    }

    formatStatusColor(status: string) {
        switch (status) {
            case 'ATIVO':
                return 'bg-green-100 text-green-800'

            default:
                return 'bg-red-100 text-red-800'
        }
    }

    render() {
        return (
            <>
                <Header />
                <section className='container max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
                    {/* 
                    <div className="relative rounded-md shadow-sm">
                        <input
                            type="search"
                            name="cep"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                            placeholder='DIGITE O CEP'
                        />
                    </div> */}

                    <br />
                    <br />

                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Reservatórios de ...
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Localização
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Nível
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {reservatorios.map((reservatorio: any, index: number) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img className="h-10 w-10 rounded-full" src={reservatorio.imagem} alt="" />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">{reservatorio.nome}</div>
                                                                <div className="text-sm text-gray-500">{reservatorio.detalhes}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{reservatorio.titulo}</div>
                                                        <div className="text-sm text-gray-500">{reservatorio.localizacao}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${this.formatStatusColor(reservatorio.status)}`}>
                                                            {reservatorio.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${this.formatNivelColor(reservatorio.nivel)}`}>
                                                            {reservatorio.nivel}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}

export default ReservatoriosDeAgua