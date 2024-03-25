import {
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import {
  ScaleDecorator,
  ShadowDecorator,
  OpacityDecorator,
  useOnCellActiveAnimation,
  NestableDraggableFlatList,
} from "react-native-draggable-flatlist";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { useRef, useState } from "react";

const SCREEN_WIDTH = Dimensions.get("window").width;

import DonPocket from "./DonPocketItem";


// 돈포켓 리스트
const DonPocketList = function ({ navigation, pocketData, changePocketOrder }) {

  const ref = useRef();
  const data = pocketData;
  const renderItem = ({ item, drag }) => {
    // 상세 페이지로 넘길때 id만 넘긴다
    const pocketId = item.pocketId;
    const { isActive } = useOnCellActiveAnimation();
    return (
      <ScaleDecorator>
        <OpacityDecorator activeOpacity={0.1}>
          <ShadowDecorator>
            <TouchableOpacity
              onLongPress={drag}
              onPress={() => {
                // 상세 페이지 이동
                navigation.navigate("DetailPocket", { pocketId });
                
              }}
              activeOpacity={1}
              style={[styles.donpocketlist]}
            >
              <DonPocket item={item} isActive={isActive} isFiltered={false}/>
            </TouchableOpacity>
          </ShadowDecorator>
        </OpacityDecorator>
      </ScaleDecorator>
    );
  };
  const Pocket = () => {
    return (
      <GestureHandlerRootView>
        <NestableDraggableFlatList
          ref={ref}
          data={data}
          keyExtractor={(item) => item.pocketId}
          onDragEnd={({ data }) => {
            // 부모에게 바뀐 데이터 올려주기
            changePocketOrder(data);
            console.log("드래그로 바꿈!");
          }}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </GestureHandlerRootView>
    );
  };
  return <Pocket />;
};


const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  donpocketlist: {
    // height: SCREEN_HEIGHT * (1 / 8) * 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  donpocket: {
    height: 90,
    width: SCREEN_WIDTH * (6 / 7),
    backgroundColor: "white",
    borderRadius: 10,
  },
  activeItem: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default DonPocketList;