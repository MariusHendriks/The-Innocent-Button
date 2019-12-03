import React , { useState }from 'react';
import {connect} from "react-redux";
import {incrementCounter} from "../../../Actions/actions";
import {bindActionCreators} from 'redux';


function Level1(props) {
    const [count, setCount] = useState(0);
    return (
        <div className='container-standard' >
            <a href="#" onClick={() => props.incrementCounter()} className="btn-3d green" >Button</a>
        </div>
    );
}

const mapStateToProps = state => ({
    count: state.counter
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            incrementCounter
        },
        dispatch
    );
export default connect(mapStateToProps, mapDispatchToProps)(Level1);

