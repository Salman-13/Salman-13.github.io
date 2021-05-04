import image from './logo-2.svg'

function Footer(props) {
    return (
        <div className='footer'>
            <Logo2/>
            <Navbottom/>
            <Copirite/>
        </div>
    );
}
function Logo2 () {
    return (
        <div>
            <img src={image} alt=""/>
        </div>
    )
}

function Navbottom () {
    return (
        <div className='navbot'>
            <div>
                Партнерам
            </div>
            <div>
                Разработчикам
            </div>
            <div>
                Вакансии
            </div>
        </div>
    )
};

function Copirite () {
    return (
        <div className='corp'>
            ООО "интукод", 2020г
        </div>
    )
}

export default Footer;