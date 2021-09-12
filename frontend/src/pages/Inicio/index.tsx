import React, { useState } from 'react'
import { AnnotationIcon, GlobeIcon, NewspaperIcon, LightningBoltIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'


export interface InicioProps { }

export interface InicioState {
    filter: string
    search: string
}

const start = [
    {
        name: 'Observe o nível de água nos reservatórios',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeIcon,
        path: '/reservatorios'
    },
    {
        name: 'Monitore os níveis de geração de energia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: LightningBoltIcon,
        path: '/energia'
    },
    {
        name: 'Leia as principais notícias locais',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: NewspaperIcon,
        path: '/noticias'
    },
    {
        name: 'Faça comentários sobre sua região',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: AnnotationIcon,
        path: '/reservatorios'
    },
]

class Inicio extends React.Component<InicioProps, InicioState> {

    constructor(props: InicioProps) {
        super(props)
        this.state = {
            filter: 'CEP',
            search: ''
        }
    }

    _handleSearchChange(event: any) {
        console.log(event.target.value)
        this.setState({ search: event.target.value })
    }

    _handleFilterChange(event: any) {
        this.setState({ filter: event.target.value })
    }

    render() {
        return (
            <>
                <Header />
                <section className='container max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
                    <div className="p-12 bg-white" >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="lg:text-center">
                                <p className="uppercase mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    Monitoramente
                                </p>
                                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                    Monitore tudo <i>"ou quase tudo"</i> sobre sua região!
                                </p>
                            </div>

                            <div className="mt-1 relative rounded-md shadow-sm border-gray-700">
                                <input
                                    type="text"
                                    name="search"
                                    id="search"
                                    onChange={this._handleSearchChange.bind(this)}
                                    defaultValue={this.state.search}
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full m-2 p-3 sm:text-sm  rounded-md"
                                    placeholder={`DIGITE O ${this.state.filter}`}
                                />
                                <div className="absolute inset-y-0 right-1 flex items-center">
                                    <label htmlFor="filter" className="sr-only">
                                        Filtro
                                    </label>
                                    <select
                                        id="filter"
                                        name="filter"
                                        onChange={this._handleFilterChange.bind(this)}
                                        defaultValue={this.state.filter}
                                        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                                    >
                                        <option value='CEP'>CEP</option>
                                        <option value='UF'>UF</option>
                                        <option value='CIDADE'>CIDADE</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-10">
                                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                    {start.map((start, index) => (
                                        <Link to={start.path} key={index}>
                                            <div className="relative">
                                                <dt>
                                                    <button className="absolute flex cursor-pointer items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                                        <start.icon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{start.name}</p>
                                                </dt>
                                                <dd className="mt-2 ml-16 text-base text-gray-500">{start.description}</dd>
                                            </div>
                                        </Link>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>



                </section>
            </>
        )
    }
}

export default Inicio

