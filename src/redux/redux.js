import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counter";

export function Redux() {
	const counter = useSelector((state) => state.counter)
	const dispatch = useDispatch()

	return(

		<div>
			<p> Aplikasi penjumlahan dan pengurangan super canggih! </p>
			<button onClick={() => dispatch(increment())} > tambah 1 </button>
			<button onClick={() => dispatch(decrement())} > kurang 1 </button>
			<h3> nilai saat ini : {counter.value} </h3>
		</div>
	)
}