import React, { Component } from 'react';
import { string, func, shape } from 'prop-types';
import { match } from 'react-router-prop-types';
import { connect } from 'react-redux';

import { fetchEstablishmentAction } from '../store';

import { MapContainer } from '../containers';

class Establishment extends Component {
  static propTypes = {
    match: match.isRequired,
    fetchEstablishment: func.isRequired,
    establishment: shape({ name: string.isRequired, address: string.isRequired }).isRequired,
  };

  componentDidMount = () => {
    const {
      match: { params: { company, establishment } },
      fetchEstablishment,
    } = this.props;
    fetchEstablishment(company, establishment);
  };

  render = () => (
    <main className="Establishment">
      <MapContainer location={this.props.establishment.location} />
    </main>
  );
}

const mapStateToProps = ({ establishment }) => ({ establishment });

export default connect(
  mapStateToProps,
  { fetchEstablishment: fetchEstablishmentAction },
)(Establishment);
