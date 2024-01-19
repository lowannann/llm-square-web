import '../App.css';

const CardItemContent = (props) => {
    return(
        <div className='card-item-content'>
        <div className='card-item-text'>
            <div className='number'>{props.num}</div>
            <h3>
                <strong>
                    {props.step}
                </strong>
            </h3>
            <p>{props.description}</p>
        </div>
        <a href='' title='深入了解' className='button w-button'>深入了解</a>
        <p></p>
    </div>
    )
}

export default CardItemContent