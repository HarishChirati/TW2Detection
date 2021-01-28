import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Styles } from '../styles/global'
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getCountryDetails } from '../redux/actions/action'
import SvgUri from 'react-native-svg-uri'

type Props = {
  getCountryDetails: Function
  country: any
  navigation: {
    navigate: Function
  }
}

const Country = ({ getCountryDetails, country, navigation }: Props) => {
  const clickHandler = () => {
    getCountryDetails(country.capital, navigation)
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.listDisplay}>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>Name: </Text>
            <Text>{country.name}</Text>
          </Text>
        </View>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>Capital Name: </Text>
            <Text>{country.capital}</Text>
          </Text>
        </View>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>Region: </Text>
            <Text>{country.region}</Text>
          </Text>
        </View>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>Currencies: </Text>
            <Text style={Styles.mr}>Code: </Text>
            <Text>{country.currencies[0].code}</Text>&nbsp;&nbsp;
            <Text style={Styles.mr}>Name: </Text>
            <Text>{country.currencies[0].name}</Text>&nbsp;&nbsp;
            <Text style={Styles.mr}>Symbol: </Text>
            <Text>{country.currencies[0].symbol}</Text>
            {/* <Text style={Styles.mr}>Code :{country.currencies[0].code}  </Text>
            <Text>Code :{country.currencies[0].code} Name:{country.currencies[0].name} Symbol:{country.currencies[0].symbol}</Text> */}
          </Text>
        </View>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>Population: </Text>
            <Text>{country.population}</Text>
          </Text>
        </View>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>Latitude: </Text>
            <Text>{country.latlng[0]}</Text>
          </Text>
        </View>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>Longitude: </Text>
            <Text>{country.latlng[1]}</Text>
          </Text>
        </View>
        <Image style={Styles.flag} source={{
          uri: `${country.flag}`
        }} />
      </View>

      <TouchableOpacity onPress={() => clickHandler()} style={Styles.button}>
        <Text style={Styles.buttonText}>Capital Weather</Text>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = (state: any) => (
  { country: state.reducer.country }
)

export default connect(mapStateToProps, { getCountryDetails })(Country);
