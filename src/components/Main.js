import React from "react";
import News from './Main/News'
import Article from './Main/Article'
import Table from './Main/Table'

import articleImage1 from '../images/article1.jpg'
import articleImage2 from '../images/article2.jpg'
import articleImage3 from '../images/article3.jpg'

const Main = (props) => {
    const news = [
        {time: '21:22', title: ' ЦСКА – первый клуб, проигравший три финала Кубка Гагарина. ', comments: 54, link: 'https://www.sports.ru/football/1096598253-deyan-lovren-lada-komfortnee-chem-lamborgini-u-moix-roditelej-byla-lad.html'},
        {time: '21:20', title: ' Хартли – второй тренер, выигравший Кубок Гагарина и Кубок Стэнли. Первый – Кинэн. ', comments: 85, link: 'https://www.sports.ru/football/1096598253-deyan-lovren-lada-komfortnee-chem-lamborgini-u-moix-roditelej-byla-lad.html'},
        {time: '21:18', title: '«Авангард» впервые выиграл Кубок Гагарина.', comments: 234, link: 'https://www.sports.ru/football/1096598253-deyan-lovren-lada-komfortnee-chem-lamborgini-u-moix-roditelej-byla-lad.html'},
        {time: '21:05', title: 'Лига чемпионов. 1/2 финала. «ПСЖ» против «Манчестер Сити». Мбаппе, Неймар, Ди Мария, де Брюйне, Марез и Бернарду – в стартовых составах. ', comments:44, link: 'https://www.sports.ru/football/1096598253-deyan-lovren-lada-komfortnee-chem-lamborgini-u-moix-roditelej-byla-lad.html' },
        {time: '21:05', title: 'Задержан бывший директор академии «Чертаново» Ларин. На него завели уголовное дело. ', comments: 1, link: 'https://www.sports.ru/football/1096598253-deyan-lovren-lada-komfortnee-chem-lamborgini-u-moix-roditelej-byla-lad.html'}
    ]
    const articles = [
        {time: '1 минуту назад',title: 'Смотрим второй полуфинал Лиги чемпионов: «ПСЖ» принимает «Сити»! Пепу надо останавливать Мбаппе и Неймара', content: 'Все суперзвезды играют с первых минут. ', comments: 23, link: 'https://www.sports.ru/football/1096598253-deyan-lovren-lada-komfortnee-chem-lamborgini-u-moix-roditelej-byla-lad.html', img: articleImage1}, 
        {time: '19 минут назад',title: '«Сити» Пепа плохо бьет пенальти – вы сможете лучше? Попробуйте в нашей игре', content: 'Три раунда 11-метровых', comments: 49, link: 'https://www.sports.ru/football/1096598253-deyan-lovren-lada-komfortnee-chem-lamborgini-u-moix-roditelej-byla-lad.html', img: articleImage2}, 
        {time: 'сегодня, 20:14',title: 'Аршавин считает, что «Зениту» нужна модель развития «Лейпцига». Но в России так не получится', content: 'Все из-за лимита.', comments: 2, link: 'https://www.sports.ru/football/1096598253-deyan-lovren-lada-komfortnee-chem-lamborgini-u-moix-roditelej-byla-lad.html', img: articleImage3}
    ]
    const tableSpain = [
        {ranking: 1, games: 33, points: 73, team: 'Атлетико'},
        {ranking: 2, games: 33, points: 71, team: 'Реал Мадрид'},
        {ranking: 3, games: 32, points: 71, team: 'Барселона'},
        {ranking: 4, games: 33, points: 70, team: 'Севилья'},
        {ranking: 5, games: 33, points: 53, team: 'Реал Сосьедад'},
        {ranking: 6, games: 33, points: 50, team: 'Бетис'},
        {ranking: 7, games: 33, points: 49, team: 'Вильярреал'},
        {ranking: 8, games: 32, points: 42, team: 'Гранада'},
        {ranking: 9, games: 33, points: 42, team: 'Атлетик'},
        {ranking: 10, games: 33, points: 41, team: 'Сельта'},
        {ranking: 11, games: 33, points: 40, team: 'Осасуна'},
        {ranking: 12, games: 33, points: 38, team: 'Леванте'},
        {ranking: 13, games: 33, points: 37, team: 'Кадис'},
        {ranking: 14, games: 33, points: 36, team: 'Валенсия'},
        {ranking: 15, games: 33, points: 34, team: 'Хетафе'},
        {ranking: 16, games: 33, points: 31, team: 'Алавес'},
        {ranking: 17, games: 33, points: 30, team: 'Вальядолид'},
        {ranking: 18, games: 33, points: 30, team: 'Эльче'},
        {ranking: 19, games: 33, points: 27, team: 'Уэска'},
        {ranking: 20, games: 33, points: 23, team: 'Эйбар'}
    ]
    return (
        <div class='main-container'>
            <News postsNews={news}/>
            <Article postsArticles={articles}/>
            <Table tableSpain={tableSpain}/>
        </div>
    )
}
export default Main 