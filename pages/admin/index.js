import React from 'react'
import AdminLayout from './AdminLayout'
import LeftNavbar from './components/LeftNavBar'
import Header from './components/Header'
import Card from '../../components/kit/card'

class Home extends React.Component {



    render() {
        return (
            <AdminLayout>
                <div className="flex w-screen h-screen">
                    <div className="w-64 h-screen">
                        <LeftNavbar />
                    </div>
                    <div className="w-full">
                        <Header />
                        <div className="flex  p-4">
                            <div className="w-1/3 p-2 h-64"><Card className="w-full h-full"> Card 2 </Card></div>
                            <div className="w-1/3 p-2 h-64"><Card className="w-full h-full"> Card 2 </Card></div>
                            <div className="w-1/3 p-2 h-64"><Card className="w-full h-full"> Card 2 </Card></div>
                            
                        </div>

                    </div>
                </div>
            </AdminLayout>
        )
    }

}

export default Home