
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
            <section class="relative text-center py-24 z-40">
                 <p class="text-3xl">About Us!</p>
            </section>
            
        )
    }
}

export default AboutUs