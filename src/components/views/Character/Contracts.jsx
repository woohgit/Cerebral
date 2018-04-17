'use strict';

import React from 'react';

import {Card, CardHeader, CardText} from 'material-ui/Card';

import CharacterModel from '../../../models/Character';
import appProperties from '../../../../resources/properties';

import ContractsTable from '../../tables/ContractsTable';

const styles = {
    card: {
        margin: 10
    }
};

export default class Contracts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const contracts = CharacterModel.get(this.props.characterId).contracts;

        return (
            <div>
                <Card style={styles.card}>
                    <CardHeader title="Pending Contracts"/>

                    <CardText>
                        <ContractsTable contracts={contracts.filter(c => !appProperties.contract_completed_statuses.includes(c.status))}/>
                    </CardText>
                </Card>

                <Card style={styles.card}>
                    <CardHeader title="Completed Contracts"/>

                    <CardText>
                        <ContractsTable contracts={contracts.filter(c => appProperties.contract_completed_statuses.includes(c.status))}/>
                    </CardText>
                </Card>
            </div>
        );
    }
}