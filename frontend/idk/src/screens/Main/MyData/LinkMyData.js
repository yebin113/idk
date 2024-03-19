import { Text, View, Dimensions, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import theme from '../../../style'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const assets = [
   'KB국민은행', '카카오뱅크', '신한은행', 'NH농협은행', '하나은행', '우리은행',
   'IBK기업은행', '케이뱅크', 'KB국민카드', '신한카드', 'NH농협카드', '현대카드',
   '카카오뱅크카드', '삼성카드', '하나카드', '우리카드'
]

const imgMatch = {
  'KB국민은행': require("../../../../assets/banks/KBBank.png"),
  '카카오뱅크': require("../../../../assets/banks/KakaoBank.png"),
  '신한은행': require("../../../../assets/banks/ShinhanBank.png"),
  'NH농협은행': require("../../../../assets/banks/NHBank.png"),
  '하나은행': require("../../../../assets/banks/HanaBank.png"),
  '우리은행': require("../../../../assets/banks/WooriBank.png"),
  'IBK기업은행': require("../../../../assets/banks/IBKBank.png"),
  '케이뱅크': require("../../../../assets/banks/KBank.png"),
  'KB국민카드': require("../../../../assets/banks/KBCard.png"),
  '신한카드': require("../../../../assets/banks/ShinhanCard.png"),
  '현대카드': require("../../../../assets/banks/HyundaiCard.png"),
  '카카오뱅크카드': require("../../../../assets/banks/KakaoCard.png"),
  'NH농협카드': require("../../../../assets/banks/NHCard.png"),
  '삼성카드': require("../../../../assets/banks/SamsungCard.png"),
  '하나카드': require("../../../../assets/banks/HanaCard.png"),
  '우리카드': require("../../../../assets/banks/WooriCard.png"),
}

const LinkMyData = ({navigation}) => {
  const [checkList, setCheckList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [allChecked, setAllChecked] = useState(false);

  const toggleCheckbox = (asset) => {
    const updatedCheckList = [...checkList]
    if (updatedCheckList.includes(asset)) {
      const idx = updatedCheckList.indexOf(asset)
      updatedCheckList.splice(idx, 1)
    } else {
      updatedCheckList.push(asset)
    }
    setCheckList(updatedCheckList);
  };

  const toggleAllCheckbox = () => {
    setAllChecked(!allChecked);
    setCheckList(allChecked ? [] : [...assets]);
  };

  return(
    <View style={styles.container}>
      <Text className='text-3xl font-bold my-16'>연결할 자산을 선택해주세요</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="검색"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
        <TouchableOpacity
          style={{...styles.assetItem, marginBottom: 30}}
          onPress={toggleAllCheckbox}
        >
          <View style={styles.assetInfo}>
            <Text className='text-base'>전체 선택</Text>
          </View>
          <Checkbox
            color={theme['sky-basic']}
            style={styles.checkbox}
            value={allChecked}
            onValueChange={toggleAllCheckbox}
          />
        </TouchableOpacity>
        {assets
          .filter((asset) => asset.toLowerCase().includes(searchText.toLowerCase()))
          .map((asset, index) => (
            <TouchableOpacity
              key={index}
              style={styles.assetItem}
              onPress={() => toggleCheckbox(asset)}
            >
              <View style={styles.assetInfo}>
                <Image source={imgMatch[asset]} style={styles.bankImage} />
                <Text className='text-lg'>{asset}</Text>
              </View>
              <Checkbox
                color={theme['sky-basic']}
                style={styles.checkbox}
                value={checkList.includes(asset)}
                onValueChange={() => toggleCheckbox(asset)}
              />
            </TouchableOpacity>
          ))}
      </ScrollView>
      <TouchableOpacity
        style={[styles.button, { opacity: checkList.length === 0 ? 0.5 : 1 } ]}
        disabled={!checkList.length === 0}
        onPress={() => navigation.navigate('CheckMyData')}>
        <Text className="text-white text-lg">연결</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LinkMyData


const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 30,
  },
  assetItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 350,
    marginBottom: 20,
  },
  searchInput: {
    width: 350,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 40
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: 350,
    height: 80,
    borderBottomWidth: 1,
  },
  assetInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notbox: {
    flexDirection: 'row',
    padding: 10,
    width: 350,
    marginTop: 10,
  },
  bankImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  checkbox: {
    width: 25,
    height: 25,
  },
  button: {
    width: SCREEN_WIDTH*(9/10),
    height:50,
    backgroundColor: theme['sky-basic'],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
  },
})