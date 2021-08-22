import * as React from 'react';
import { AnnotationIcon, GlobeIcon, NewspaperIcon, LightningBoltIcon } from '@heroicons/react/outline'

export interface InicioProps { }

export interface InicioState { }

const features = [
    {
        name: 'Observe o nível de água nos reservatórios',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeIcon,
    },
    {
        name: 'Monitore os níveis de geração de energia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: LightningBoltIcon,
    },
    {
        name: 'Leia as principais notícias locais',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: NewspaperIcon,
    },
    {
        name: 'Faça comentários sobre sua região',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: AnnotationIcon,
    },
]

class Inicio extends React.Component<InicioProps, InicioState> {

    render() {
        return (
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

                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative">
                                        <dt>
                                            <button className="absolute flex cursor-pointer items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Inicio;