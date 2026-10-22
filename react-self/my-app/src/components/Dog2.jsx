//Dog 컴포넌트 정의
const Dog2 = ({breed, age}) => {

    return(
        <div>
            <h2>강아지</h2>
            <p>품종: {breed}</p>
            <p>나이: {age}</p>
        </div>
    )
}

export default Dog2;