import React, { Component } from 'react';

export default class DisplayForm extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     showEmployeeData: true // Initially set to true to display employee data
        // };
    }

    // handleGoBack = () => {
    //     this.setState({ showEmployeeData: false });
    // };

    render() {
        // const { value } = this.props;
        // const { showEmployeeData } = this.state;

        return (
            <div>

                <div className='output'>
                    {/* <h2>Employee Data:</h2> */}
                    {this.props.value.map((employee, index) => (
                        <p className='data' key={index}>
                            Name: {employee.name} |
                            Department: {employee.dept} |
                            Rate: {employee.rate}
                        </p>
                    ))}
                    
                </div>
                <button onClick={this.props.toggleFunc}>Go Back</button>
                )
            </div>
        );
    }
}
