import React, { Component } from "react";
import { connect } from "react-redux";
// import { filterSocAct } from "../../store/actions/filterSocAct";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { object } from "prop-types";

class SocFilter extends Component {
  render() {
    var { filterFields } = this.props;

    var socKeys = [];
    socKeys = Object.keys(filterFields[0]);
    var filterFieldsObj = filterFields[0];
    socKeys.forEach(obj => (filterFieldsObj[obj] = ""));

    var ar1 = [];
    return (
      <Formik
        className="container"
        onSubmit={(values, actions) =>
          this.props.filterSocAct(values, filterFields)
        }
        // onSubmit={(values, actions) =>  console.log(this.props)}
        initialValues={filterFieldsObj || {}}
        render={props => (
          <Form className="">
            <div className="form-group">
              <button className="btn btn-primary" type="submit" style={{}}>
                submit
              </button>
            </div>

            {filterFields &&
              socKeys.map((field, i) => {
                // var opt = [];
                let notRender = ["ठराव परंतुका", "अ क्र"];
                if (notRender.indexOf(field) === -1)
                  return (
                    <div key={field} className="form-group">
                      <label htmlFor={field}>{field}</label>
                      <Field
                        component="select"
                        name={field}
                        placeholder={field}
                        className="form-control"
                      >
                        {filterFields &&
                          filterFields.map(filterObj => {
                            let opt1 = filterObj[field];
                            if (ar1.indexOf(opt1) === -1) {
                              ar1 = [...ar1, opt1];
                              return (
                                <option key={filterObj[field]}>
                                  {filterObj[field]}
                                </option>
                              );
                            }
                          })}
                        {(ar1 = [])}
                      </Field>
                      <ErrorMessage component="div" name={field} />
                    </div>
                  );
              })}
          </Form>
        )}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterSocAct: (cred, data) => dispatch({ type: "update_soc", cred, data })
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
