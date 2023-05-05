import React, { FC, useMemo } from 'react'
import { View, Text } from 'react-native'
import createStyles from './styles'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

interface IProps {
  navigation: NavigationProp<ParamListBase>
}

const NameScreen: FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), [])

  return (
    <View style={styles.body}>
      <Text style={styles.text}>NameScreen</Text>
    </View>
  )
}

export default NameScreen
