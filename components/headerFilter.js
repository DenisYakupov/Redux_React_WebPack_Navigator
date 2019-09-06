import React from "react";
import PropTypes from 'prop-types';
import SorterFilter from './sorterFilter';
import PaginationFilter from './paginationFilter';


const HeaderFilter = (props) =>{
    // const {data,toggleModal,handlePaginationCountTarifs,search,handleSort} = props; 
        return(
            <div>
                <div className="an-navigator-section-2-nav">
                    <div className="an-section-title">Тарифы <span className="an-section-title-count">0</span></div>
                    <input type="text" className="an-section-2-search" placeholder="Поиск"/>
                        <SorterFilter
                            // handleSort={(data)=>{handleSort(data)}}
                            // data={data}
                        />
                        <PaginationFilter
                            // handlePaginationCountTarifs={(i)=>{handlePaginationCountTarifs(i)}}
                            />
                    <div className="an-section-2-settings">
                        <img src="/navigator/img/an-navigator-setings.svg" className="an-navigator-setings"/>
                    </div>
                </div>
            </div>
        )
    }

// HeaderFilter.propTypes = {
// 	data: PropTypes.array.isRequired,
// 	headerModalCheck: PropTypes.func.isRequired,
// 	search: PropTypes.func.isRequired,
//     handleSort: PropTypes.func.isRequired,
//     toggleModal: PropTypes.func.isRequired,
//     handlePaginationCountTarifs: PropTypes.func.isRequired
// }

export default HeaderFilter