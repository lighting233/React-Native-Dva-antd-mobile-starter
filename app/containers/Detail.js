import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../utils'
import { Button } from 'antd-mobile'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: 'Detail',
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button type="primary" title="Goto Detail" onClick={this.gotoDetail}>
          Goto Detail
        </Button>
        <Button type="ghost" title="Go Back" onClick={this.goBack}>
          Go Back
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Detail
