import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getScales } from '@mapstore/framework/utils/MapUtils';
import ScaleBox from '@mapstore/framework/plugins/ScaleBox';
import HelpWrapper from '@mapstore/framework/components/help/HelpWrapper';

// Escalas personalizadas
const CUSTOM_SCALES = [
    10000000,
    5000000,
    2500000,
    1000000,
    750000,
    500000,
    250000,
    175000,
    125000,
    100000,
    75000,
    50000,
    25000,
    10000,
    5000,
    2500,
    1000,
    500
];

// Seletor para obter as escalas personalizadas
const scalesSelector = createSelector(
    state => state.map && state.map.present,
    () => CUSTOM_SCALES
);

class CustomScaleBoxTool extends React.Component {
    render() {
        return (
            <HelpWrapper
                id="scalebox-help"
                helpText="plugins.ScaleBox.helpText"
                helpEnabled={this.props.helpEnabled}
            >
                <ScaleBox
                    {...this.props}
                    scales={this.props.scales}
                />
            </HelpWrapper>
        );
    }
}

const CustomScaleBoxPlugin = connect(
    createSelector(
        scalesSelector,
        (scales) => ({
            scales
        })
    )
)(CustomScaleBoxTool);

export default {
    CustomScaleBoxPlugin,
    reducers: {},
    epics: {}
}; 