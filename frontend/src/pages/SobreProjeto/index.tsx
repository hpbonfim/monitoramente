import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

interface Props { }

interface State { }

class SobreProjeto extends Component<Props, State> {

    render() {
        return (
            <>
                <Header />
                <main className='flex flex-col self-center	 justify-center justify-items-center content-center max-w-7xl mx-auto py-6 px-8'>
                    <header className="bg-white shadow overflow-hidden rounded-lg">
                        <div className="uppercase text-3xl font-extrabold tracking-tight text-gray-900 sm:text-1xl  py-2 px-4 sm:px-6 lg:px-8 items-center text-center ">
                            <h1>Monitoramente</h1>
                        </div>
                        <p className="max-w-7xl  py-2 px-2 sm:px-3 lg:px-8 items-center text-center  text-xl text-gray-500 ">
                            Monitore tudo <i>"ou quase tudo"</i> sobre sua região!
                        </p>
                    </header>

                    <figure className='flex  justify-center w-full'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Math_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif/600px-Math_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif' width='15%' />
                    </figure>

                    <br />

                    <div className="bg-white shadow overflow-hidden rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium  text-center text-gray-900">Objetivos</h3>
                            <p className="mt-1  text-gray-500 text-center ">
                                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                            </p>
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Missão</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo risus.
                                    </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Visão</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo risus.
                                    </dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Valores</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo risus.
                                    </dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Criadores</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                        qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                        pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                </main>
                <Footer />
            </>
        )
    }
}

export default SobreProjeto