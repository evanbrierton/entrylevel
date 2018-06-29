import React, { Component } from 'react';
import { number, string, func, shape } from 'prop-types';
import { match, history } from 'react-router-prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchEstablishmentAction } from '../store';

import { MapContainer } from '../containers';
import { EstablishmentProfile, EstablishmentPhotos, EstablishmentReviews } from '../components';

class Establishment extends Component {
  static propTypes = {
    match: match.isRequired,
    history: history.isRequired,
    fetchEstablishment: func.isRequired,
    establishment: shape({
      name: string.isRequired,
      address: string.isRequired,
      profileImage: string.isRequired,
      coordinates: shape({ lat: number.isRequired, lng: number.isRequired }).isRequired,
    }).isRequired,
  };

  componentDidMount = () => {
    const {
      match: { params: { company, establishment } },
      fetchEstablishment,
    } = this.props;
    this.props.history.push(`/establishments/${company}/${establishment}/profile`);
    fetchEstablishment(company, establishment);
  };

  render = () => {
    const {
      establishment: {
        coordinates, name, profileImage, address,
      },
      match: { params: { company, establishment } },
    } = this.props;

    return (
      <main className="Establishment">
        <MapContainer location={coordinates} name={name} image={profileImage} pathname={`/establishments/${company}/${establishment}`} />
        <Switch>
          <Route exact path="/establishments/:company/:establishment/profile" render={() => <EstablishmentProfile address={address} />} />
          <Route exact path="/establishments/:company/:establishment/photos" component={EstablishmentPhotos} />
          <Route exact path="/establishments/:company/:establishment/reviews" component={EstablishmentReviews} />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = ({ establishment }) => ({ establishment });

export default connect(
  mapStateToProps,
  { fetchEstablishment: fetchEstablishmentAction },
)(Establishment);
