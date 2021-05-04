import image from './logo1.svg'
function Header (props) {
    return (
        <div className='header'>
            <Logo/>
            <Menu/>
        </div>
    );
}

function Logo (props) {
    return <div className='imga'>
        <img src={image} alt=""/>
    </div>
};

function Menu (props) {
    return <div>
        <ul>
            <li>Главная</li>
            <li className='pad'>О нас</li>
            <li>Контакты</li>
        </ul>

    </div>
}
export default Header