import React from "react"
import Social from './Footer/Social'
import Contacts from './Footer/Contacts'
import Flags from './Footer/Flags'

import Twitter from '../images/twitter-logo.svg'
import Whatsapp from '../images/whatsapp-logo.svg'
import Facebook from '../images/facebook-logo.svg'
import Instagram from '../images/instagram-logo.svg'
import Belarus from '../images/belarus-flag.png'
import Ukraine from '../images/ukraine-flag.jpg'


const Footer = (props) => {
    const socialNetworks = [
        {name: 'twitter', img: Twitter, link: 'https://twitter.com/sportsru',},       
        {name: 'whatsapp', img: Whatsapp, link: 'https://vk.com/sportsru',},       
        {name: 'facebook', img: Facebook, link: 'https://www.facebook.com/sportsru/',},       
        {name: 'instagram', img: Instagram, link: 'https://www.instagram.com/sportsru/',}       
    ]
    const contactsLink = [
        {name: 'Про нас', link: 'https://www.sports.ru/docs/about/',},       
        {name: 'Редакция', link: 'https://www.sports.ru/docs/editors/',},       
        {name: 'Контакты', link: 'https://www.sports.ru/docs/contacts/',},       
        {name: 'Вакансии', link: 'http://careers.tribuna.digital/',},       
        {name: 'Реклама', link: 'https://www.sports.ru/docs/advertisement/',}       
    ]
    const linksOfFlags = [
        {name: 'Belarus', link: 'https://by.tribuna.com/', img: Belarus},       
        {name: 'Ukraine', link: 'https://ua.tribuna.com/', img: Ukraine}
    ]
    return (
        <footer>
            <Social socialNetworks={socialNetworks} />
            <Contacts contactsLink={contactsLink} />
            <Flags linksOfFlags={linksOfFlags} />
        </footer>
    )
}
export default Footer 