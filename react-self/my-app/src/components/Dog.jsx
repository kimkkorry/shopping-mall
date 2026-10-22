//Dog 컴포넌트 정의
const Dog = (props) => {

    return(
        <div>
            <h2>강아지</h2>
            <p>품종: {props.breed}</p>
            <p>나이: {props.age}</p>
        </div>
    )
}

export default Dog;