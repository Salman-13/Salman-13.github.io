

function Main(props) {
    return (
        <div className='main'>
            <Number/>
            <Buttons/>
        </div>
    );
}

function Number () {
    return (
        <div className='number'>
            0
        </div>
    )
}
function Buttons () {
    return (<div className='buttons'>
        <div className='buttons-1'>
            Уменьшить
        </div>
        <div className='buttons-2'>
            Увеличить
        </div>
        <div className='buttons-3'>
            Сбросить
        </div>
    </div>)
}

export default Main;