import React from 'react';
import { VISIBILITY_FILTER } from '../redux/actions/typings';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';

function mapStateToProps(state) {
  return {
    activeFilter: state.visibilityFilter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: (filter) => dispatch(setFilter({ filter }))
  }
}

function VisibilityFilter({ activeFilter, setFilter }) {
  return (
    <div className="visibility-filter">
      {Object.keys(VISIBILITY_FILTER).map((filterKey) => {
          const currentFilter = VISIBILITY_FILTER[filterKey];
          return (
            <span key={filterKey} className={"filter".concat((currentFilter === activeFilter ? "--active" : ""))}
              onClick={() => setFilter(currentFilter)}
            >{VISIBILITY_FILTER[filterKey]}</span>
          )
        })
      }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter);
