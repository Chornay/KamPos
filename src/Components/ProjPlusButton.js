import React from 'react';
// import { Icon } from 'native-base';

export default class ProjCol extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} style={{ height: 60, width: 60, borderRadius: 1000,borderWidth:.5,  }}>{this.props.text}</button>
            // <div>
            //     <TouchableOpacity
            //         style={[{ backgroundColor: '#2277ee' }]}
            //         onClick={this.props.onClick}>
            //     {this.props.children}
            //     </TouchableOpacity>
            // </div>

        )
            ;
    }


}
