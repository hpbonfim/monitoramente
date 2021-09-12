import React from 'react'
import Header from '../../components/Header'
import MaisNoticias from './MaisNoticias'
import { principalNewsAPI } from './mock'

interface NoticiasLocaisProps {
    estado: string,
    descricao: string,
}

interface NoticiasLocaisState {
    estado: string,
    descricao: string,
}

class NoticiasLocais extends React.Component<NoticiasLocaisProps, NoticiasLocaisState> {

    constructor(props: NoticiasLocaisProps) {
        super(props)
        this.state = {
            estado: typeof props.estado === 'undefined' ? 'Brasil' : this.state.estado,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo risus, pharetra non elit eu, tristique suscipit nibh. Integer sed tellus ac urna pretium ultricies in eu eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam molestie quam orci, nec auctor magna rutrum id. Curabitur non nunc non metus scelerisque condimentum ut vel odio. In sit amet velit at turpis faucibus luctus id eu quam. Curabitur feugiat tincidunt elit, vitae aliquet diam mollis non. Quisque egestas dui eget metus efficitur egestas. Aliquam congue laoreet diam, ut ornare purus ullamcorper at. Etiam sagittis porttitor interdum. Suspendisse potenti. Cras ornare diam et lorem suscipit rhoncus. Quisque sagittis nunc egestas, dictum est in, bibendum leo. Morbi dictum congue tristique.',
        }
    }

    render() {
        return (
            <>
                <Header />
                <main>
                    <div className="bg-white">
                        <div className="max-w-2xl mx-auto py-24 px-4 grid grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2 ">
                            <section>
                                <div className="relative w-full h-100 bg-white rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src="http://www.fundacaofia.com.br/gdusm/reservatorio_riodaspedras.jpg"
                                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <h3 className=" text-right text-sm text-gray-500">
                                    imagem de Lorem ipsum
                                </h3>

                                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
                                    {this.state.estado}
                                </h2>

                                <br />
                                <hr />
                                <br />

                                <p className="mt-4 text-gray-500">
                                    {this.state.descricao}
                                </p>
                                <br />
                            </section>

                            <section className='border p-6'>
                                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    Principais notícias
                                </h2>
                                <br />
                                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                                    {principalNewsAPI.map((news, index) => (
                                        <div key={index} className="flex flex-col gap-1">
                                            <img
                                                src="http://www.fundacaofia.com.br/gdusm/reservatorio_riodaspedras.jpg"
                                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                                className="rounded-lg"
                                            />
                                            <dt className="font-medium text-gray-900">{news.name}</dt>
                                            <dd className="mt-2 text-sm text-gray-500">{news.description}</dd>

                                        </div>
                                    ))}
                                    <a href='#acompanhe-noticias'>continue lendo...</a>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
                <MaisNoticias />
            </>
        )
    }
}

export default NoticiasLocais