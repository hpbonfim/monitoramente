import React, { Component } from 'react'
import Header from '../../components/Header'

interface Props { }

interface State { }

class GeradoresDeEnergia extends Component<Props, State> {

    render() {
        return (
            <>
                <Header />
                <main className='px-4 py-5 sm:px-6'>
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                </main>
            </>
        )
    }
}

export default GeradoresDeEnergia