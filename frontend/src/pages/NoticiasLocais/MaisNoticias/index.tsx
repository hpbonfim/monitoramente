import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { moreNewsAPI } from '../mock'

interface Props { }

interface State { }

const CurrentActive = "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
const Default = "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"


class MaisNoticias extends React.Component<Props, State> {

    render() {
        return (
            <main id='acompanhe-noticias'>
                <div className="bg-gray-100">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-2xl mx-auto py-10 sm:py-14 lg:py-22 lg:max-w-none">
                            <h2 className="text-2xl font-extrabold text-gray-900">Acompanhe mais notícias...</h2>
                            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                                {moreNewsAPI.map((callout, index) => (
                                    <div key={index} className="group relative">
                                        <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                            <img
                                                src={callout.imageSrc}
                                                alt={callout.imageAlt}
                                                className="w-full h-full object-center object-cover"
                                            />
                                        </div>
                                        <h3 className="mt-6 text-sm text-gray-500">
                                            <a href={callout.href}>
                                                <span className="absolute inset-0" />
                                                {callout.name}
                                            </a>
                                        </h3>
                                        <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                                        <br />
                                    </div>
                                ))}
                            </div>

                            <br />

                            <div className="bg-gray px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                                <div className="flex-1 flex justify-between sm:hidden">
                                    <a
                                        href="/"
                                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        Anterior
                                    </a>
                                    <a
                                        href="/"
                                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        Próximo
                                    </a>
                                </div>
                                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Mostrando <span className="font-medium">1</span> de <span className="font-medium">100</span> Páginas
                                        </p>
                                    </div>
                                    <div>
                                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                            <a href="/" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                <span className="sr-only">Anterior</span>
                                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                            </a>

                                            <a href="/" className={`${CurrentActive} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}>
                                                1
                                            </a>
                                            <a href="/" className={`${Default} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}>
                                                2
                                            </a>
                                            <a href="/" className={`${Default} hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium`}>
                                                3
                                            </a>
                                            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                                ...
                                            </span>
                                            <a href="/" className={`${Default} hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium`}>
                                                98
                                            </a>
                                            <a href="/" className={`${Default} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}>
                                                99
                                            </a>
                                            <a href="/" className={`${Default} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}>
                                                100
                                            </a>
                                            <a href="/" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                <span className="sr-only">Próximo</span>
                                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default MaisNoticias