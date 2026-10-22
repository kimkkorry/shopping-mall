// Drinks의 하위 컴포넌트 정의
const DrinkList = ({drinklist}) => {
    console.log(drinklist);

    return(
        <div>
            <ul>
                {drinklist.map((drink, index) => (
                    <li key={index}>{drink}</li>
                ))}
            </ul>
        </div>
    )
}

export default DrinkList;