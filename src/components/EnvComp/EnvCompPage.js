import React from 'react';

const body = {
    color: '#89d6fb'
};

class EnvCompPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Environmental Compliance</h1>
                    <div style={body}>
                    <h4>DEEP COAT SHIELDING IS ROHS COMPLIANT</h4>
                    <ul>
                        <li>Restriction on the Use of Hazardous Substances (RoHS) Directive</li>
                    </ul>

                    <h4>WEEE COMPATIBLE</h4>
                    <ul>
                        <li>Waste Electrical and Electronic Equipment Directive</li>
                    </ul>

                    <h4>MEETS/EXCEEDS IEEE 60601-1-2 REQUIREMENTS</h4>
                    <ul>
                        <li>Medical Device EMI/RFI Conformance</li>
                        <li>Institute of Electrical and Electronics Engineers (IEEE) Standard</li>
                    </ul>
                    </div>
            </div>
        );
    }
}

export default EnvCompPage;