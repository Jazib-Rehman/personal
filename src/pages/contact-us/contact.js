
import React from 'react'
import mock from './../mock.json'
import { Facebook } from 'react-feather'
import { Twitter } from 'react-feather'
import { Instagram } from 'react-feather'
import { Youtube } from 'react-feather'
import { MapPin } from 'react-feather'
import { CreditCard } from 'react-feather'

const categories = mock.meals.map((item) => {
    let meals = item.meals.map((meal) => {
        return {
            ...meal,
            image: `/static/assets/menu/${item.name}/${meal.name}.jpg`,
            isSpicy: meal.tags && meal.tags.toLowerCase().includes('spicy'),
            isNormal: meal.tags && meal.tags.toLowerCase().includes('normal'),
            isHomos: meal.tags && meal.tags.toLowerCase().includes('homos'),
            isTahina: meal.tags && meal.tags.toLowerCase().includes('tahina'),
            tags: meal.tags ? meal.tags.split(',') : []
        }
    });
    return {
        ...item,
        meals,
    }
});

class Contact extends React.Component {


    constructor(props) {
        super(props);

        console.log(categories)
        this.state = {
            categories
        }
    }

    render() {
        return (
            <section class="relative text-center py-24 z-40">
                <div className="fixed top-100 left-0 w-screen overflow-hidden z-10 bages">
                    <div className="flex w-full px-24">
                        <div className="r-1">
                            <img src="/static/assets/b10.png" className="w-48 mt-8 inline-block" alt="badge" />
                            <img src="/static/assets/b4.png" className="w-48 mt-8 inline-block" alt="badge" />
                        </div>
                        <div className="flex-grow">.</div>
                        <div className="r-2">
                            <img src="/static/assets/b12.png" className="w-64 mt-8 inline-block" alt="badge" />
                            <img src="/static/assets/b6.png" className="w-48 mt-8 inline-block" alt="badge" />
                        </div>
                    </div>
                </div>
                <div className="relative px-32 py-20 bg-dark-trans z-40">
                    <div className="rounded-lg bg-white-trans py-10">
                        <div className="">
                            <p className="text-xl">Contact us via this form</p>
                        </div>
                        <div className="flex">
                            <div className="mt-4 w-1/2">
                                <div className="text-left py-5 px-16 flex">
                                    <div className="">
                                        <p className="text-xl">Site management Shawarmer</p>
                                        <p>Sulaymaniyah, Olaya Road Riyadh 12211, Saudi Arabia</p>
                                    </div>
                                    <div className="text-blue-500 px-6 flex justify-center mt-4">
                                        <MapPin size="24" />
                                    </div>
                                </div>
                                <div className="text-left py-5 px-16 mt-10 flex">
                                    <div>
                                        <p className="text-xl">To contact us</p>
                                        <p>Shawarmer Office: (011) 462-8841 , Sunday - Thursday, 8 AM - 5 PM</p>
                                        <p className="mt-6">Uniform Number: 920008080</p>
                                    </div>
                                    <div className="text-red-400 px-6 flex justify-center mt-4">
                                        <CreditCard size="24" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 w-1/2">
                                <div className="text-left py-5 px-16">
                                    <div className="flex">
                                        <div className="mx-1 w-full">
                                            <p>First name</p>
                                            <input type="text" className="p-2 bg-white w-full rounded border border-red-300 outline-none" placeholder="First Name" />
                                        </div>
                                        <div className="mx-1 w-full">
                                            <p>Last name</p>
                                            <input type="text" className="p-2 bg-white w-full rounded border border-red-300 outline-none" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="mx-1 mt-4">
                                        <p>E-mail</p>
                                        <input type="text" className="p-2 bg-white w-full rounded border border-red-300 outline-none" placeholder="example@example.com" />
                                    </div>
                                    <div className="mx-1 mt-4">
                                        <p>Message Contant</p>
                                        <textarea type="text" className="p-2 bg-white w-full rounded border border-red-300 outline-none" placeholder="Your message!"></textarea>
                                    </div>
                                    <div className="mx-1 mt-4 text-right">
                                        <button className="btn rounded text-prim bg-prim text-white font-bold outline-none">SEND</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-16">
                            <div className="border-t border-gray-600"></div>
                            <p className="mt-4 text-lg">Contact with us via socialmedia platforms</p>
                            <div className="mt-4 flex justify-center">
                                <div className="text-gray-400 rounded-full h-10 w-10 flex items-center justify-center bg-gray-700 text-white mx-1">
                                    <Twitter size="18" />
                                </div>
                                <div className="text-gray-400 rounded-full h-10 w-10 flex items-center justify-center bg-gray-700 text-white mx-1">
                                    <Facebook size="18" />
                                </div>
                                <div className="text-gray-400 rounded-full h-10 w-10 flex items-center justify-center bg-gray-700 text-white mx-1">
                                    <Instagram size="18" />
                                </div>
                                <div className="text-gray-400 rounded-full h-10 w-10 flex items-center justify-center bg-gray-700 text-white mx-1">
                                    <Youtube size="18" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        )
    }
}

export default Contact