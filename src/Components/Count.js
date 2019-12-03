import React from 'react';
import {connect} from "react-redux";

function Count(props) {
    return (
        <div className='container-count green-color'>
            {props.count}
        </div>
    );
}

const mapStateToProps = state => ({
    count: state.counter
});


export default connect(mapStateToProps)(Count);
