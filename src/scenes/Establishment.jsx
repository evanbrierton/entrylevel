import React, { Component } from 'react';
import { number, string, func, shape } from 'prop-types';
import { match } from 'react-router-prop-types';
import { connect } from 'react-redux';

import { fetchEstablishmentAction } from '../store';

import { MapContainer } from '../containers';

class Establishment extends Component {
  static propTypes = {
    match: match.isRequired,
    fetchEstablishment: func.isRequired,
    establishment: shape({
      name: string.isRequired,
      address: string.isRequired,
      profileImage: string.isRequired,
      location: shape({ lat: number.isRequired, lng: number.isRequired }).isRequired,
    }).isRequired,
  };

  componentDidMount = () => {
    const {
      match: { params: { company, establishment } },
      fetchEstablishment,
    } = this.props;
    fetchEstablishment(company, establishment);
    console.log(this.props.establishment);
  };

  render = () => {
    const { location, name, profileImage } = this.props.establishment;
    return (
      <main className="Establishment">
        <MapContainer location={location} name={name} image={profileImage} />
      </main>
    );
  }
}

const mapStateToProps = ({ establishment }) => ({ establishment });

export default connect(
  mapStateToProps,
  { fetchEstablishment: fetchEstablishmentAction },
)(Establishment);
