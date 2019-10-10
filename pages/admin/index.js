import React from 'react'
import AdminLayout from './AdminLayout'
import LeftNavbar from './components/LeftNavBar'
import Header from './components/Header'
import Card from '../../components/kit/card'

class Home extends React.Component {

    static getInitialProps (data) {
        console.log(data)
        return { list: data.query.list }
      }
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
                            <div className="w-1/3 p-2 ">
                                <Card className="w-full h-full">
                                    <table>
                                        <tr>
                                            <th>ID</th>
                                            <th>FIRST NAME</th>
                                            <th>Value</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Some Item</td>
                                            <td>Some Value</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Some Item</td>
                                            <td>Some Value</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Some Item</td>
                                            <td>Some Value</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Some Item</td>
                                            <td>Some Value</td>
                                        </tr>
                                    </table>
                                </Card>
                            </div>
                            <div className="w-1/3 p-2 h-64">
                                <Card className="w-full h-full flex justify-between">
                                    <button>PLAY</button>
                                    <input type="text" />
                                    <select> <option>SOME</option> </select>
                                </Card>
                            </div>
                            <div className="w-1/3 p-2 h-64"><Card className="w-full h-full"> Card 2 </Card></div>

                        </div>

                    </div>
                </div>
            </AdminLayout>
        )
    }

}

export default Home