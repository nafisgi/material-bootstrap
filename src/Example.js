import React, { useEffect } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

function Example() {
  const [date, setDate] = React.useState(new Date());

  useEffect(() => {}, []);
  return (
    <div className="App pt-5">
      <div className="container">
        <div className="h1">Material</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={date}
                onChange={e => setDate(e)}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className="col">
            <i className="material-icons">accessibility</i>
          </div>
        </div>
      </div>
      <hr className="divider" />

      <div className="container mt-4 mb-4">
        <form
          className="d-flex justify-content-between"
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Standard" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </div>
      <hr className="divider" />

      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Example select</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">
              Example multiple select
            </label>
            <select
              multiple
              className="form-control"
              id="exampleFormControlSelect2"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
      <hr className="divider" />
      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          модальное окно
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example;
