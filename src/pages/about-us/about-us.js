
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

class AboutUs extends React.Component {


    constructor(props) {
        super(props);

        console.log(categories)
        this.state = {
            categories
        }
    }

    render() {
        return (
            <section class="relative py-24 z-40">
                {/* <div className="border">
                    <img src="static/assets/banner.jpg" alt="pizza" className="w-full fixed z-10" />
                </div> */}
                <div className="pt-10 text-center z-20">
                    <h1 className="flex items-center justify-center font-prim text-dark">
                        <span className="text-lg px-4">OUR</span>
                        <span className="text-3xl border-l-2 border-black px-4"> STORY </span>
                    </h1>
                </div>
                <div className="mt-20 px-48 z-20">
                    <p className="text-gray-500 text-sm">
                        Our Story ...
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                        Since our founding in 1999, we committed to the shawarma as the centrepiece of our menu. That will never change. With shawarma, we share a common history. A shared love of the most desirable sandwich in the Arab world and a token of the tradition, generosity and good taste of our people.
                        What makes Shawarmer unique is our drive to make the perfect shawarma. To take a traditional street food and through innovation, creativity and experimentation, constantly modernize and interpret shawarma with new flavours and sauces and variations in wraps and sandwich styles.
                        What started with the now famous “Shawarmer’s Plate” has evolved time and again over the years. Just as our customers’ tastes have evolved and changed. Our chefs travel the world exploring new ways to surprise our customers with beef and chicken sandwiches presented in creative new ways and with a variety of flavours, like adding pomegranate molasses. The attractive names of our meals indicate the ingredients and the way they are presented, like “Arabo” our Arabic sharing plate, “Shat’shaweesh” which is a spicy Shawarma, and “Bites” which is 6 pieces of small Shawarma sandwiches.
                        Our dedication to the modern shawarma is equalled by our commitment to using only the highest quality, fresh and natural ingredients. It’s a cornerstone of the Shawarmer experience that enables us to maintain absolute consistency in flavour in our handmade sauces and marinades while ensuring the highest quality of meat in our cones that our customers expect and demand.
                        From our founding mission to spread joy and happiness through our shared love of shawarma, we have grown to more than 90 restaurants and counting. As Shawarmer continues to grow and evolve, our customers can be sure of two things: The beloved shawarma will always be the hero of our menu. And our customers can always expect more surprises in new Shawarmer flavours, sauces, ingredients and sandwich styles we offer.
                    </p>
                    <p className="text-gray-500 text-sm mt-6">
                        Our Values ...
                    </p>
                    <p className="text-gray-500 text-xs mt-4 whitespace-pre-wrap">
                        <span className="text-sm">Innovation …</span> Innovation is at the core of everything we do every day. From our menu to our open kitchens to our restaurant designs and how we talk to and listen to our customers, being fresh, different and striving for continuous improvement is in the Shawarmer DNA.
                    </p>

 

                    <p className="text-gray-500 text-xs mt-4 whitespace-pre-wrap">
                        <span className="text-sm">Hospitality …</span> Our success is all about our customers and our people. We are dedicated to making our customers feel welcomed, appreciated and at home at Shawarmer. That starts with our people genuinely feeling like they are part of the Shawarmer family.
                    </p>

 
                    <p className="text-gray-500 text-xs mt-4 whitespace-pre-wrap">
                        <span className="text-sm">Excellence …</span> Delivering on our commitment to Excellence starts with absolute consistency in the fresh and natural ingredients we source, the meals we make and in our customer service. Then going two steps beyond to surprise and delight our customers. In every shawarma we create. In every meal we serve. In every experience we share.
                    </p>

 
                    <p className="text-gray-500 text-xs mt-4 whitespace-pre-wrap">
                        <span className="text-sm">Transparency …</span>  Opening our kitchens for all to see the quality and care we bring to our food preparation is the last mile in our commitment to Transparency. But Transparency starts at the very beginning of the food chain, in how we train our people, how we select our suppliers and partners and our food handling and safety processes that are the foundation of the Shawarmer promise.
                    </p>
                </div>

            </section>

        )
    }
}

export default AboutUs