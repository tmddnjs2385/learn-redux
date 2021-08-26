import React from 'react';
import Counter from "../components/Counter";
import {useSelector, useDispatch, shallowEqual} from "react-redux";
import {increase, decrease, setDiff} from "../modules/counter";

const CounterContainer = () => {

    const {number, diff}=useSelector(state=>({
        number:state.counter.number,
        diff: state.counter.diff
    }), shallowEqual);//바뀐 부분에 대해서 얕게 비교함

    //const number=useSelector(state=>state.counter.number);// state 최적화
   // const diff=useSelector(state=>state.counter.diff);// state 최적화

    const dispatch=useDispatch();

    const onIncrease=()=>dispatch(increase());
    const onDecrease=()=>dispatch(decrease());
    const onSetDiff=(diff)=>dispatch(setDiff(diff));

    return (<Counter number={number} diff={diff} onIncrease={onIncrease} onDecrease={onDecrease} onSetDiff={onSetDiff}/>);
};

export default CounterContainer;