import React from "react";
import PropTypes from 'prop-types';
import Sort from './sort';
import Search from './search';
import Quantity from './quantity';
import { connect } from "react-redux";
import Loader from './loader';
import {showModal} from '../action/modal';
import {createSelectorData} from '../selectors';
import SelectFitlers from './selectFilters';

const HeaderFilter = (props) =>{
        const {loading,showModal,data} = props;
        return(
            <div>
                {loading ?
                 <Loader/>
                 :
                 <div className="an-navigator-section-2-nav">
                        <div className="an-section-title">Тарифы 
                <span className="an-section-title-count">{data.length}</span>
                        </div>
                            <Search/>
                            <SelectFitlers/>
                            <Sort/>
                            <Quantity/>
                        <div className="an-section-2-settings">
                            <img 
                                src="../src/img/an-navigator-setings.svg" 
                                className="an-navigator-setings"
                                onClick={(id)=>{showModal(false)}}/>
                        </div>
                </div>
                }
            </div>
        )
    }

HeaderFilter.propTypes = {
	data: PropTypes.array.isRequired,
    loading: PropTypes.bool
}

export default connect((state) =>({
    data: createSelectorData(state),
    loading: state.data.loading

}),{showModal})(HeaderFilter)