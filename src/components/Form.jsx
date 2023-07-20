import React, { Component } from 'react';
import './Form.css';
import DisplayForm from './DisplayForm';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            Name: '',
            Rate: '',
            Dept: '',
            clicked: true,
            EmpData: [],
            formError: '',
        };
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    toggleFunction = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    clickHandler = (e) => {
        e.preventDefault();
        const { Name, Rate, Dept } = this.state;

        // Check if required fields are empty
        if (Name.trim() === '' || Rate.trim() === '' || Dept.trim() === '') {
            this.setState({ formError: 'Please fill all the required fields.' });
        } else {
            const newEmployee = {
                name: Name,
                rate: Rate,
                dept: Dept,
            };
            this.setState((prevState) => ({
                EmpData: [...prevState.EmpData, newEmployee],
                Name: '',
                Rate: '',
                Dept: '',
                clicked: false,
                formError: '',
            }));
        }
    };

    render() {
        const { Name, Rate, Dept, clicked, EmpData, formError } = this.state;

        return (
            <div className='container'>
                {clicked ? (
                    <>
                        <h1 className='my-heading'>Employee Feedback Form</h1>
                        <form>
                        {formError && <p className="error">{formError}</p>}
                            <div className='name-area'>
                                <label htmlFor='name'>Name:</label>
                                <input
                                    id='name'
                                    type='text'
                                    placeholder='Enter'
                                    name='Name'
                                    value={Name}
                                    onChange={this.changeHandler}
                                    required
                                />
                                <br />
                            </div>

                            <div className='dept-area'>
                                <label htmlFor='dept'>Department:</label>
                                <input
                                    id='dept'
                                    type='text'
                                    placeholder='Enter'
                                    name='Dept'
                                    value={Dept}
                                    onChange={this.changeHandler}
                                    required
                                />
                                <br />
                            </div>

                            <div className='rating-area'>
                                <label htmlFor='rating'>Rate:</label>
                                <input
                                    id='rating'
                                    type='number'
                                    placeholder='Enter'
                                    name='Rate'
                                    value={Rate}
                                    onChange={this.changeHandler}
                                    required
                                />
                                <br />
                            </div>
                            
                            <button onClick={this.clickHandler}>Submit</button>
                        </form>
                    </>
                ) : (
                    <>
                        <h1 className='my-heading'>Employee Feedback Data</h1>
                        <DisplayForm value={EmpData} toggleFunc={this.toggleFunction} />
                    </>
                )}
            </div>
        );
    }
}

export default Form;
