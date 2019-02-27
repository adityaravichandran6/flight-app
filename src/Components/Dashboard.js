import React, {Component} from 'react';
import '../CSS/Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disp: 'previous',
        }
    }

    render() {
        return (
            <div class='Dashboard'>
                <h1>John Doe</h1>
                <div class='buttons'>
                    <button onClick = {() => this.setState({ disp: 'previous' })}>Previous</button>
                    <button onClick = {() => this.setState({ disp: 'upcoming' })}>Upcoming</button>
                    <button onClick = {() => this.setState({ disp: 'cancelled' })}>Cancelled</button>
                </div>
                <div class='dcontainer'>
                    { (this.state.disp == 'previous')?(
                        <div class='previous'>
                        <table>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>Passengers</th>
                            </tr>
                            <tr>
                                <td>12/11/2017</td>
                                <td>5:00pm</td>
                                <td>Chennai</td>
                                <td>Coimbatore</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>14/11/2017</td>
                                <td>8:00pm</td>
                                <td>Coimbatore</td>
                                <td>Chennai</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>24/02/2019</td>
                                <td>3:00pm</td>
                                <td>Chennai</td>
                                <td>Delhi</td>
                                <td>1</td>
                            </tr>
                        </table>
                    </div>
                    ):(this.state.disp == 'upcoming')?(
                        <div class='upcoming'>
                        <table>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>Passengers</th>
                            </tr>
                            <tr>
                                <td>03/03/2019</td>
                                <td>5:00am</td>
                                <td>Delhi</td>
                                <td>Mumbai</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>13/03/2019</td>
                                <td>8:00am</td>
                                <td>Mumbai</td>
                                <td>Chennai</td>
                                <td>2</td>
                            </tr>
                        </table>
                    </div>
                    ):(
                        <div class='cancelled'>
                        <table>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>Passengers</th>
                            </tr>
                            <tr>
                                <td>12/01/2018</td>
                                <td>5:00pm</td>
                                <td>Chennai</td>
                                <td>Kolkata</td>
                                <td>4</td>
                            </tr>
                        </table>
                        </div>
                    )}
                </div>
            </div>
        );
    };

}

export default Dashboard;