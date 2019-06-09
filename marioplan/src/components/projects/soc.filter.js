import React, { Component } from "react";
import { connect } from "react-redux";
// import { filterSocAct } from "../../store/actions/filterSocAct";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { object } from "prop-types";

class SocFilter extends Component {
  render() {
    var { filterFields, Soc } = this.props;
    var newF = {};
    var socArr = [];
    socArr = Object.values(Soc[0]);
    var opt = [];
    //Soc[0][1]
    var filterFieldsObj = filterFields.map(obj => (newF[obj] = ""));
    var ar1 = [];
    return (
      <Formik
        className="container"
        onSubmit={(values, actions) => actions.props.filterSocAct(values)}
        initialValues={filterFieldsObj || {}}
        render={props => (
          <Form className="white">
            {filterFields &&
              filterFields.map((field,i) => {
                // var opt = [];
                let notRender = ["ठराव  परंतुका"];
                if(notRender.indexOf(field)===-1)
                return (
                  <div key={field}>
                    <label htmlFor={field}>{field}</label>
                    <Field component="select" name={field} placeholder={field}>
                      {Soc &&
                        socArr.map(filterObj => {
                          let opt1 = filterObj[field];
                          if(ar1.indexOf(opt1) === -1){
                            ar1 = [...ar1,opt1];
                            return <option key={filterObj[field]} >{filterObj[field]}</option>;
                          }
                          
                        })}
                        {ar1 = []}
                    </Field>
                    <ErrorMessage component="div" name={field} />
                  </div>
                );
              })}

            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0" type="submit">
                submit
              </button>
            </div>
          </Form>
        )}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterSocAct: cred => dispatch({ type: "update_soc", cred })
  };
};
const mapStateToProps = state => {
  return {
    userData: state.auth.user,
    authenticate: state.auth.authenticate,
    Soc: state.firestore.ordered.Society
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocFilter);
