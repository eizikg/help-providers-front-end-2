import PlacesAutocomplete from 'react-places-autocomplete';
import {geocodeByAddress, geocodeByPlaceId, getLatLng} from 'react-places-autocomplete';
import React, { Component } from 'react';
import EachGroup from '../components/EachGroup.js'
import { Input, Container} from 'semantic-ui-react'

class Address extends Component {

state={
  address: ""
}

  handleChange = address => {
  this.setState({ address });
};

handleSelect = address => {
  let neighborhood
  geocodeByAddress(address)
    .then(results => {
      neighborhood = results[0].address_components[2].short_name
      return getLatLng(results[0])
    })
    .then(latLng => {
      console.log('Success', latLng)
      this.setState({
         address: address,
         location: latLng,
         neighborhood: neighborhood
      })
      console.log(this.state)
      this.props.getVolounteersLocation(this.state)
    })
    .catch(error => console.error('Error', error));
};


render() {
  // console.log(this.searchOptions())
  return (
    <div>
    <PlacesAutocomplete
      value={this.state.address}
      onChange={this.handleChange}
      onSelect={this.handleSelect}
      searchOptions={this.searchOptions}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <Input
            icon={{ name: 'search', circular: true, link: true }}
            {...getInputProps({
              placeholder: 'Type your address ...',
              className: 'location-search-input',
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  </div>
  );
}

}

export default Address;
