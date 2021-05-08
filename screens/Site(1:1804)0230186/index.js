import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_1_1014}>
        <View style={styles.View_1_1015} />
        <View style={styles.View_1_1033}>
          <View style={styles.View_1_1034}>
            <View style={styles.View_1_1035}>
              <View style={styles.View_1_1036}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c72a/b899/6fda5e8e76ecf4cf73857d2187d75adc"
                  }}
                  style={styles.ImageBackground_1_1037}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e795/b193/f70d663dbf68781d729c16cd7a6d133c"
                  }}
                  style={styles.ImageBackground_1_1039}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fea4/114e/ea045ff023186614a2b946bab88a1fba"
                  }}
                  style={styles.ImageBackground_1_1041}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebeb/5f87/1dd617bc57934f98dd2bde63c01a6a1a"
                  }}
                  style={styles.ImageBackground_1_1043}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04aa/1355/2631c1d73f5453614be8164c25bc5d37"
                  }}
                  style={styles.ImageBackground_1_1045}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d50/66fc/d073f1502ef4a41998143038d5a5b1c3"
                  }}
                  style={styles.ImageBackground_1_1047}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b01f/657d/85ae2ef49deea90cd3a3bc7a0389bde2"
                  }}
                  style={styles.ImageBackground_1_1049}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e4/af20/7d064a87200e839cfaf75e8cceb71881"
                  }}
                  style={styles.ImageBackground_1_1051}
                />
                <View style={styles.View_1_1053}>
                  <View style={styles.View_1_1054}>
                    <View style={styles.View_1_1055}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a05/ee93/5023e6cb2c320eeb73c7f1b49be53a2d"
                        }}
                        style={styles.ImageBackground_1_1056}
                      />
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af3b/13bb/eafa9cc62f95c198daae173929ff9bb0"
                  }}
                  style={styles.ImageBackground_1_1058}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0639/ffc6/4f8ee14a61008566a80a1d87f5050cff"
                  }}
                  style={styles.ImageBackground_1_1060}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c80b/5270/d5b30b429c06cadf57c1c289ac3ae6c6"
                  }}
                  style={styles.ImageBackground_1_1062}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7c8/9c9c/6237ff55d6fda5bbda782a18efe2f676"
                  }}
                  style={styles.ImageBackground_1_1064}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/857c/27e5/3531cc25ddeee1853414ce8da4429948"
                  }}
                  style={styles.ImageBackground_1_1066}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62d6/1e70/2b3db2e41a3520d988643742bd10714a"
                  }}
                  style={styles.ImageBackground_1_1068}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4377/9807/e1d5785b6c355dd977f6ee08bda99e8f"
                  }}
                  style={styles.ImageBackground_1_1070}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6847/a067/0e69eff6bbd63b0175e8a17c6d7a7428"
                  }}
                  style={styles.ImageBackground_1_1072}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e11c/22ba/d6290a0ae6a2d2c8ca76b4c1f2197c9d"
                  }}
                  style={styles.ImageBackground_1_1074}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb5b/28f5/1d1338b9143ba01265b89655a064292b"
                  }}
                  style={styles.ImageBackground_1_1076}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67d9/5053/0bba99dc0b14048a2684b834b33357b7"
                  }}
                  style={styles.ImageBackground_1_1078}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/effe/ec36/7f37508054e3529920840b6fc19889c5"
                  }}
                  style={styles.ImageBackground_1_1080}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39a7/2c20/f8adeccfa714f2ea94a728ec637693cb"
                  }}
                  style={styles.ImageBackground_1_1082}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d405/206a/f008c9604f1d2923622dc81bda8b7b7e"
                  }}
                  style={styles.ImageBackground_1_1084}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4653/e498/1a733fe67488719ade0dad77f3ca2ca6"
                  }}
                  style={styles.ImageBackground_1_1086}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/425b/e05b/824b87dfa37c0b214a5d5cae7d9e3529"
                  }}
                  style={styles.ImageBackground_1_1088}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ce9/c6e0/a0d8143b3eee29f89ee7dd95e7d4c927"
                  }}
                  style={styles.ImageBackground_1_1090}
                />
                <View style={styles.View_1_1092}>
                  <View style={styles.View_1_1093}>
                    <View style={styles.View_1_1094}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f3/61e2/4a5eb82ef43713fd6c8ad33da4622abe"
                        }}
                        style={styles.ImageBackground_1_1095}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1097}>
                  <View style={styles.View_1_1098}>
                    <View style={styles.View_1_1099}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af25/22e1/de142eb0cac12eab4dcd501e4a448b2f"
                        }}
                        style={styles.ImageBackground_1_1100}
                      />
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aea9/bb6b/35bb5a5ed1109cb74b873ddf4a8018f1"
                  }}
                  style={styles.ImageBackground_1_1102}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce67/e36c/659306398df3bbc4cebdf83357a22423"
                  }}
                  style={styles.ImageBackground_1_1104}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db8/2889/5dda93bdbdc43f1653ef9c62413958b3"
                  }}
                  style={styles.ImageBackground_1_1106}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc6/af30/36683450008d1dc84f93bc5a5a958a9e"
                  }}
                  style={styles.ImageBackground_1_1108}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b9e/9c4f/88b5f3676626bca2ac74ae089dcd9a1d"
                  }}
                  style={styles.ImageBackground_1_1110}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e600/c3ec/c0f46ab4563851e32f5f55500e5f3861"
                  }}
                  style={styles.ImageBackground_1_1112}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53fe/5f87/7013827d9732cb5bd988515f05063503"
                  }}
                  style={styles.ImageBackground_1_1114}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbef/faea/e9f41f5e3d9ac23520b92b499f840e9f"
                  }}
                  style={styles.ImageBackground_1_1116}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c11/5bc9/881fdd0e53ccc6c77bdf953ddb1e0fda"
                  }}
                  style={styles.ImageBackground_1_1118}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5cf/cc9d/2051008116c8f9cb9399f74b3e7e14b2"
                  }}
                  style={styles.ImageBackground_1_1120}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f77/5229/6fac6279ceacf3baf89efb27686a306c"
                  }}
                  style={styles.ImageBackground_1_1122}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c02/7778/161fe3e8370b5801d08916034c6e6255"
                  }}
                  style={styles.ImageBackground_1_1124}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8052/7724/4e0f707345122959f78e4f3e76636edc"
                  }}
                  style={styles.ImageBackground_1_1126}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f79/fb73/d19076ad6bc95b407f3e9937d3b0302f"
                  }}
                  style={styles.ImageBackground_1_1128}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f83c/592a/d8f7135398f03605f064576dcc22842c"
                  }}
                  style={styles.ImageBackground_1_1130}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70a2/b4e1/0fd897d07ac13275bf816df34985eafe"
                  }}
                  style={styles.ImageBackground_1_1132}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e55/645c/b432f9bdeb5abc7a7527127897410e85"
                  }}
                  style={styles.ImageBackground_1_1134}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a10/1f93/48c54faf5303174a64236fbf7f06559a"
                  }}
                  style={styles.ImageBackground_1_1136}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8616/3c05/7f04ca7a5861d454005076579fa3fc73"
                  }}
                  style={styles.ImageBackground_1_1138}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511f/c175/a800a1f4c483d0a1cb11ce859fb6b23c"
                  }}
                  style={styles.ImageBackground_1_1140}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e904/f706/95db2d8daeb82d0facae4de863e072c9"
                  }}
                  style={styles.ImageBackground_1_1142}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6406/9bf8/43d6c0fe7e0c8b070ff07956dd86387f"
                  }}
                  style={styles.ImageBackground_1_1144}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b70/2bfe/16b0e79e359128bdabeffb183540cffc"
                  }}
                  style={styles.ImageBackground_1_1146}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f53/ec2d/73fbdcfe0bb9b0a053f86f45320597a0"
                  }}
                  style={styles.ImageBackground_1_1148}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/190c/dc2c/36c8abf733121dd355d31bfb238e8ad7"
                  }}
                  style={styles.ImageBackground_1_1150}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b947/65a4/3cde5ae367e31e914a5ac185604ddfcb"
                  }}
                  style={styles.ImageBackground_1_1152}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b572/979c/eedbe344130b769932515e8280796a6a"
                  }}
                  style={styles.ImageBackground_1_1154}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/754d/51ff/9153c238e66e0af95fa4578ec29e024e"
                  }}
                  style={styles.ImageBackground_1_1156}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed65/37c7/944fcbe25c86d6ac8795043e37543996"
                  }}
                  style={styles.ImageBackground_1_1158}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5be3/6076/0d114354ff152c4c17bef1caedf3ec7f"
                  }}
                  style={styles.ImageBackground_1_1160}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/980c/d18f/ab0e28423666a9bf9a1696f1307750af"
                  }}
                  style={styles.ImageBackground_1_1162}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a86b/ad65/3c6e694c6df14127cf236116a66634fb"
                  }}
                  style={styles.ImageBackground_1_1164}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/707c/c7f1/bc8b630b08d26c8d32fa6bde9c76d385"
                  }}
                  style={styles.ImageBackground_1_1166}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6342/964b/0085592486065ae29ed122e0878216b1"
                  }}
                  style={styles.ImageBackground_1_1168}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a19b/c21c/d2d846face9e2f6fa37e2733b44cc2c0"
                  }}
                  style={styles.ImageBackground_1_1170}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fb9/23c1/ba881ce27b5e520bf58d2875befebc45"
                  }}
                  style={styles.ImageBackground_1_1172}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ef6/0cdb/6d0b7855a5c29beb2c7c59abe088d933"
                  }}
                  style={styles.ImageBackground_1_1174}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9fe/ef25/0c78ec714ae6ec816af291af163ca761"
                  }}
                  style={styles.ImageBackground_1_1176}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/747f/dafe/0b0b9dcc9a837ab664a01590a5ffcaca"
                  }}
                  style={styles.ImageBackground_1_1178}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e84/f9b9/62d9e221f5a6824a24a024c16aa998ee"
                  }}
                  style={styles.ImageBackground_1_1180}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd12/b43c/6a7a785101c16218d666ad9724bb9d54"
                  }}
                  style={styles.ImageBackground_1_1182}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c33f/9e67/8e15ff7b9a7dee990dd92e55b0fbbaf1"
                  }}
                  style={styles.ImageBackground_1_1184}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7104/f8e4/3af936aaab55965f0f6b380fd252cb95"
                  }}
                  style={styles.ImageBackground_1_1186}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e8b/4a0c/c28b3c0a965d819c4af10757ded035e1"
                  }}
                  style={styles.ImageBackground_1_1188}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c14b/6df8/757b7bafcbeaf0b08c8090e82692ef2d"
                  }}
                  style={styles.ImageBackground_1_1190}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/788b/1c89/b755fbbe33ea94ef2c92c29808686db0"
                  }}
                  style={styles.ImageBackground_1_1192}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a53/5e9c/2afcf40b2b95d582cffb2648dd69b949"
                  }}
                  style={styles.ImageBackground_1_1194}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1208/737e/ba969b26dd4d398c7bc647e4dd898ea3"
                  }}
                  style={styles.ImageBackground_1_1196}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d19/df53/8c7c7660a6b85fb40c3078b64dba3123"
                  }}
                  style={styles.ImageBackground_1_1198}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8a1/d67e/0bdbba66cb0953d3d5bb47a29b3d28b4"
                  }}
                  style={styles.ImageBackground_1_1200}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c39/227f/d340be25535ddab9c6f972f9b48461ce"
                  }}
                  style={styles.ImageBackground_1_1202}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3d/a78d/2619317165a6b4e5a5768166bb30797a"
                  }}
                  style={styles.ImageBackground_1_1204}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3022/6550/4304b823b567771eae66af921efd890d"
                  }}
                  style={styles.ImageBackground_1_1206}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c566/4493/d6af1f63109e58d32ce38ce7fd8315ab"
                  }}
                  style={styles.ImageBackground_1_1208}
                />
                <View style={styles.View_1_1210}>
                  <View style={styles.View_1_1211}>
                    <View style={styles.View_1_1212}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e9d/716d/0ec7e5343ec3bf125ab85e55ca7e8c7e"
                        }}
                        style={styles.ImageBackground_1_1213}
                      />
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70d4/80e5/1a3bfee21e9a885e13e982962373ac02"
                  }}
                  style={styles.ImageBackground_1_1215}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8099/08c9/2a15763171afab842586397a0c4d2ef1"
                  }}
                  style={styles.ImageBackground_1_1217}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e49/a1fc/d73da338e6c3e4a92726bdd34a332d7a"
                  }}
                  style={styles.ImageBackground_1_1219}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cba/32e8/f706f22287626171737a378d1ae3d6a9"
                  }}
                  style={styles.ImageBackground_1_1221}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cba/32e8/f706f22287626171737a378d1ae3d6a9"
                  }}
                  style={styles.ImageBackground_1_1223}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1902/cd19/99d11b1b71686dc37c551e421e7d1269"
                  }}
                  style={styles.ImageBackground_1_1225}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7a5/0633/5fd8aefb11b379317ea799743cdc4d7d"
                  }}
                  style={styles.ImageBackground_1_1227}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4473/fdc6/5fe46392ffc23190bf0ef36fcae2ee16"
                  }}
                  style={styles.ImageBackground_1_1229}
                />
                <View style={styles.View_1_1231}>
                  <View style={styles.View_1_1232}>
                    <View style={styles.View_1_1233}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f75f/c822/47dc81d69412989d162405c2d6af7ae9"
                        }}
                        style={styles.ImageBackground_1_1234}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1236}>
                  <View style={styles.View_1_1237}>
                    <View style={styles.View_1_1238}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d79f/8175/234cb2e998540b9d21795eb30581281c"
                        }}
                        style={styles.ImageBackground_1_1239}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1241}>
                  <View style={styles.View_1_1242}>
                    <View style={styles.View_1_1243}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b761/6d81/092f1430cde56ebcb0be34e39f95645a"
                        }}
                        style={styles.ImageBackground_1_1244}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1246}>
                  <View style={styles.View_1_1247}>
                    <View style={styles.View_1_1248}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec9/9e5e/8f10d60341e2a21cbf13098ea77ea8d1"
                        }}
                        style={styles.ImageBackground_1_1249}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1251}>
                  <View style={styles.View_1_1252}>
                    <View style={styles.View_1_1253}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c3d/4174/1c16580ebfe7ca5ff0f3b582a093c0a4"
                        }}
                        style={styles.ImageBackground_1_1254}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1256}>
                  <View style={styles.View_1_1257}>
                    <View style={styles.View_1_1258}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85d9/8acd/a08038bffe818b647df5e8a4851f9736"
                        }}
                        style={styles.ImageBackground_1_1259}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1261}>
                  <View style={styles.View_1_1262}>
                    <View style={styles.View_1_1263}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f711/8568/8eeef5477826b4abf442d2f3f90bb9e1"
                        }}
                        style={styles.ImageBackground_1_1264}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1266}>
                  <View style={styles.View_1_1267}>
                    <View style={styles.View_1_1268}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13bc/cd32/5bc72b55b4cc11da77e59cb86cd2d086"
                        }}
                        style={styles.ImageBackground_1_1269}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1271}>
                  <View style={styles.View_1_1272}>
                    <View style={styles.View_1_1273}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8e1/703f/6090a90f9def93f5e4e970039122a775"
                        }}
                        style={styles.ImageBackground_1_1274}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1276}>
                  <View style={styles.View_1_1277}>
                    <View style={styles.View_1_1278}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96cd/d97e/2380086c7c19391833716080bb0ceebf"
                        }}
                        style={styles.ImageBackground_1_1279}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1281}>
                  <View style={styles.View_1_1282}>
                    <View style={styles.View_1_1283}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/439b/ea0a/68d4f5ddca0dfe69150a838dae265b3c"
                        }}
                        style={styles.ImageBackground_1_1284}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1286}>
                  <View style={styles.View_1_1287}>
                    <View style={styles.View_1_1288}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2646/5201/4fc70efae4033ada48fae57038b66347"
                        }}
                        style={styles.ImageBackground_1_1289}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1291}>
                  <View style={styles.View_1_1292}>
                    <View style={styles.View_1_1293}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a0f/86fc/2008d7ef620c2c43a29138bf3cf91737"
                        }}
                        style={styles.ImageBackground_1_1294}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1296}>
                  <View style={styles.View_1_1297}>
                    <View style={styles.View_1_1298}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/694d/636c/e79b97aa640c57bc59e7df16a48e5802"
                        }}
                        style={styles.ImageBackground_1_1299}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1301}>
                  <View style={styles.View_1_1302}>
                    <View style={styles.View_1_1303}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bfb/e9b8/a10b593efa874617290f38081c45da81"
                        }}
                        style={styles.ImageBackground_1_1304}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1306}>
                  <View style={styles.View_1_1307}>
                    <View style={styles.View_1_1308}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dd9/0bd7/5887d1c4562c0813c1f8806fa924a4e2"
                        }}
                        style={styles.ImageBackground_1_1309}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1311}>
                  <View style={styles.View_1_1312}>
                    <View style={styles.View_1_1313}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e04/49ab/3a8fe401522336c556aad89017c17b03"
                        }}
                        style={styles.ImageBackground_1_1314}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1316}>
                  <View style={styles.View_1_1317}>
                    <View style={styles.View_1_1318}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0d5/fbe9/34bb46e0b0407fc40f5a5da164ddbd62"
                        }}
                        style={styles.ImageBackground_1_1319}
                      />
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c88c/71b2/b97ee54f27a098a65d5448fdd8235b88"
                  }}
                  style={styles.ImageBackground_1_1321}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3c8/3142/37f8a3c34a9e83aee25a0ac1c7f3b0f2"
                  }}
                  style={styles.ImageBackground_1_1323}
                />
                <View style={styles.View_1_1325}>
                  <View style={styles.View_1_1326}>
                    <View style={styles.View_1_1327}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93de/ee32/4f175d248f37854d4e6f14d570d6f2b1"
                        }}
                        style={styles.ImageBackground_1_1328}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1330}>
                  <View style={styles.View_1_1331}>
                    <View style={styles.View_1_1332}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da3c/08c3/f49031ffb72a676dd9e38157c9d2afbe"
                        }}
                        style={styles.ImageBackground_1_1333}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1335}>
                  <View style={styles.View_1_1336}>
                    <View style={styles.View_1_1337}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d486/dc5b/d44d8bc044a351f080fab5b46b5a6456"
                        }}
                        style={styles.ImageBackground_1_1338}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1340}>
                  <View style={styles.View_1_1341}>
                    <View style={styles.View_1_1342}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df0e/8926/91752b94a0becfabf3dc2d9d9f15d8e5"
                        }}
                        style={styles.ImageBackground_1_1343}
                      />
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6be1/228f/1fe4734b5e639fcea09a3bbbf210f804"
                  }}
                  style={styles.ImageBackground_1_1345}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6be1/228f/1fe4734b5e639fcea09a3bbbf210f804"
                  }}
                  style={styles.ImageBackground_1_1347}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8517/990e/a6bfc1804ef00f71adb06d3e6ea0b2e3"
                  }}
                  style={styles.ImageBackground_1_1349}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6be1/228f/1fe4734b5e639fcea09a3bbbf210f804"
                  }}
                  style={styles.ImageBackground_1_1351}
                />
                <View style={styles.View_1_1353}>
                  <View style={styles.View_1_1354}>
                    <View style={styles.View_1_1355}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e61/d22d/1712b099cd0eedccc1191653d9197b98"
                        }}
                        style={styles.ImageBackground_1_1356}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/959c/176f/22385204844a41d4108ffa498b28695c"
                        }}
                        style={styles.ImageBackground_1_1358}
                      />
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60fb/e93d/d2a156f55b3ebc5fbbf828a8ec42b455"
                  }}
                  style={styles.ImageBackground_1_1360}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76af/9227/d6ecd6fa86d9639ad8ef8f442f263dd4"
                  }}
                  style={styles.ImageBackground_1_1362}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acdc/988b/e3f14cbd045353c3521f0e6711ef577e"
                  }}
                  style={styles.ImageBackground_1_1364}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66c1/9214/7a45516708298eac0ca88238498b3e37"
                  }}
                  style={styles.ImageBackground_1_1366}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_1_1368}>
            <View style={styles.View_1_1369}>
              <Text style={styles.Text_1_1369}>ScoutHosting</Text>
            </View>
            <View style={styles.View_1_1370}>
              <Text style={styles.Text_1_1370}>©Tous droits réservés</Text>
            </View>
          </View>
          <View style={styles.View_1_1371}>
            <View style={styles.View_1_1372}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f93/8761/cd05cb33b1b8476377af0e1198666aa2"
                }}
                style={styles.ImageBackground_1_1373}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85a4/c8ae/9f98d73993a64fe703ebfa6ef91991dc"
                }}
                style={styles.ImageBackground_1_1374}
              />
            </View>
            <View style={styles.View_1_1376}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f93/8761/cd05cb33b1b8476377af0e1198666aa2"
                }}
                style={styles.ImageBackground_1_1377}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70ec/b8f0/1255fd2760dd8fa95ea5ce799d0e7596"
                }}
                style={styles.ImageBackground_1_1378}
              />
            </View>
            <View style={styles.View_1_1380}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f93/8761/cd05cb33b1b8476377af0e1198666aa2"
                }}
                style={styles.ImageBackground_1_1381}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a7f/0ac5/c5bc11587392442f7e99fcfd467377c2"
                }}
                style={styles.ImageBackground_1_1382}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1_1028}>
          <View style={styles.View_1_1029}>
            <Text style={styles.Text_1_1029}>A propos</Text>
          </View>
          <View style={styles.View_1_1030}>
            <Text style={styles.Text_1_1030}>CGU</Text>
          </View>
          <View style={styles.View_1_1031}>
            <Text style={styles.Text_1_1031}>CGV</Text>
          </View>
          <View style={styles.View_1_1032}>
            <Text style={styles.Text_1_1032}>Moyens de paiements</Text>
          </View>
        </View>
        <View style={styles.View_1_1022}>
          <View style={styles.View_1_1023}>
            <Text style={styles.Text_1_1023}>Support</Text>
          </View>
          <View style={styles.View_1_1024}>
            <Text style={styles.Text_1_1024}>06.17.84.05.85</Text>
          </View>
          <View style={styles.View_1_1025}>
            <Text style={styles.Text_1_1025}>support@scouthosting.net</Text>
          </View>
          <View style={styles.View_1_1026}>
            <Text style={styles.Text_1_1026}>Crée un ticket</Text>
          </View>
          <View style={styles.View_1_1027}>
            <Text style={styles.Text_1_1027}>Statut des services</Text>
          </View>
        </View>
        <View style={styles.View_1_1016}>
          <View style={styles.View_1_1017}>
            <Text style={styles.Text_1_1017}>Nos Services</Text>
          </View>
          <View style={styles.View_1_1018}>
            <Text style={styles.Text_1_1018}>VPS</Text>
          </View>
          <View style={styles.View_1_1019}>
            <Text style={styles.Text_1_1019}>Game Serveur</Text>
          </View>
          <View style={styles.View_1_1020}>
            <Text style={styles.Text_1_1020}>Nom de domaine</Text>
          </View>
          <View style={styles.View_1_1021}>
            <Text style={styles.Text_1_1021}>Web Serveur</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1416}>
        <View style={styles.View_1_962} />
        <View style={styles.View_1_963}>
          <Text style={styles.Text_1_963}>Contact us</Text>
        </View>
        <View style={styles.View_1_965}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dad9/83fc/9a5ed269f6a2621edbf2ffc2e4a6953c"
            }}
            style={styles.ImageBackground_1_966}
          />
          <View style={styles.View_1_985}>
            <View style={styles.View_1_986} />
            <View style={styles.View_1_987}>
              <Text style={styles.Text_1_987}>Send Message</Text>
            </View>
          </View>
          <View style={styles.View_1_967}>
            <View style={styles.View_1_968} />
            <View style={styles.View_1_969}>
              <Text style={styles.Text_1_969}>Message</Text>
            </View>
          </View>
          <View style={styles.View_1_970}>
            <View style={styles.View_1_971} />
            <View style={styles.View_1_972}>
              <Text style={styles.Text_1_972}>Mail*</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8595/dfbb/bec959db8ba0f3921742b251334742c1"
              }}
              style={styles.ImageBackground_1_973}
            />
          </View>
          <View style={styles.View_1_975}>
            <View style={styles.View_1_976} />
            <View style={styles.View_1_977}>
              <Text style={styles.Text_1_977}>Name*</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9882/956f/a4d811e62218a7a650480af0b71aa429"
              }}
              style={styles.ImageBackground_1_978}
            />
          </View>
          <View style={styles.View_1_980}>
            <View style={styles.View_1_981} />
            <View style={styles.View_1_982}>
              <Text style={styles.Text_1_982}>Phone*</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c21/5d4a/10565b272c85f3dae0d5f8b1a7573a0e"
              }}
              style={styles.ImageBackground_1_983}
            />
          </View>
          <View style={styles.View_1_988}>
            <Text style={styles.Text_1_988}>Write us a message</Text>
          </View>
        </View>
        <View style={styles.View_1_989}>
          <View style={styles.View_1_990} />
          <View style={styles.View_1_991}>
            <View style={styles.View_1_992}>
              <Text style={styles.Text_1_992}>06.17.84.05.85</Text>
            </View>
            <View style={styles.View_1_993}>
              <Text style={styles.Text_1_993}>Phone</Text>
            </View>
            <View style={styles.View_1_994} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75f2/a87e/d5cc4174fe694c03a3d12c6c480eaed2"
              }}
              style={styles.ImageBackground_1_995}
            />
          </View>
          <View style={styles.View_1_997}>
            <View style={styles.View_1_998}>
              <View style={styles.View_1_999} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca61/49d7/2b1cc3e546e75f15c49e3dfd975e4e0d"
                }}
                style={styles.ImageBackground_1_1000}
              />
            </View>
            <View style={styles.View_1_1002}>
              <Text style={styles.Text_1_1002}>contact@scouthosting.net</Text>
            </View>
            <View style={styles.View_1_1003}>
              <Text style={styles.Text_1_1003}>Email</Text>
            </View>
          </View>
          <View style={styles.View_1_1004}>
            <View style={styles.View_1_1005}>
              <Text style={styles.Text_1_1005}>Rumilly, France</Text>
            </View>
            <View style={styles.View_1_1006}>
              <View style={styles.View_1_1007} />
              <View style={styles.View_1_1008}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d22/963f/ab85607dd557feb1096aa625d80be15f"
                  }}
                  style={styles.ImageBackground_1_1009}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_549}>
        <View style={styles.View_1_550} />
        <View style={styles.View_1_551}>
          <View style={styles.View_1_552}>
            <View style={styles.View_1_553} />
            <View style={styles.View_1_554} />
            <View style={styles.View_1_555}>
              <Text style={styles.Text_1_555}>Checkout</Text>
            </View>
            <View style={styles.View_1_556}>
              <Text style={styles.Text_1_556}>Checkout</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1529/d766/8f155579e6da007d59824df29795f609"
              }}
              style={styles.ImageBackground_1_557}
            />
            <View style={styles.View_1_558}>
              <Text style={styles.Text_1_558}>Wood</Text>
            </View>
            <View style={styles.View_1_559}>
              <View style={styles.View_1_560}>
                <View style={styles.View_1_561}>
                  <Text style={styles.Text_1_561}>1 vCoeurs</Text>
                </View>
                <View style={styles.View_1_562}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bee7/d8d1/22c988a990f8441ac98ad84e503b5ede"
                    }}
                    style={styles.ImageBackground_1_563}
                  />
                </View>
              </View>
              <View style={styles.View_1_565}>
                <View style={styles.View_1_566}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a064/1db5/217689d983eb6cf456789e14b01be04e"
                    }}
                    style={styles.ImageBackground_1_567}
                  />
                  <View style={styles.View_1_568} />
                </View>
                <View style={styles.View_1_569}>
                  <Text style={styles.Text_1_569}>4 Go DDR3</Text>
                </View>
              </View>
              <View style={styles.View_1_570}>
                <View style={styles.View_1_571}>
                  <Text style={styles.Text_1_571}>40 Go HDD</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b6b/e6fb/14cc0e66395bd5ecbb575c174baa12f6"
                  }}
                  style={styles.ImageBackground_1_572}
                />
              </View>
              <View style={styles.View_1_574} />
              <View style={styles.View_1_575}>
                <Text style={styles.Text_1_575}>Prix : 5€</Text>
              </View>
              <View style={styles.View_1_576}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2f/02de/fb0951619805c75656883f552f1c7294"
                  }}
                  style={styles.ImageBackground_1_577}
                />
                <View style={styles.View_1_580}>
                  <Text style={styles.Text_1_580}>100Mbits/s</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_581}>
            <View style={styles.View_1_582} />
            <View style={styles.View_1_583} />
            <View style={styles.View_1_584}>
              <Text style={styles.Text_1_584}>Checkout</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1529/d766/8f155579e6da007d59824df29795f609"
              }}
              style={styles.ImageBackground_1_585}
            />
            <View style={styles.View_1_586}>
              <Text style={styles.Text_1_586}>Raccon</Text>
            </View>
            <View style={styles.View_1_587}>
              <View style={styles.View_1_588}>
                <View style={styles.View_1_589}>
                  <Text style={styles.Text_1_589}>2 vCoeurs</Text>
                </View>
                <View style={styles.View_1_590}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bee7/d8d1/22c988a990f8441ac98ad84e503b5ede"
                    }}
                    style={styles.ImageBackground_1_591}
                  />
                </View>
              </View>
              <View style={styles.View_1_593}>
                <View style={styles.View_1_594}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a064/1db5/217689d983eb6cf456789e14b01be04e"
                    }}
                    style={styles.ImageBackground_1_595}
                  />
                  <View style={styles.View_1_596} />
                </View>
                <View style={styles.View_1_597}>
                  <Text style={styles.Text_1_597}>8 Go DDR3</Text>
                </View>
              </View>
              <View style={styles.View_1_598}>
                <View style={styles.View_1_599}>
                  <Text style={styles.Text_1_599}>40 Go HDD</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b6b/e6fb/14cc0e66395bd5ecbb575c174baa12f6"
                  }}
                  style={styles.ImageBackground_1_600}
                />
              </View>
              <View style={styles.View_1_602} />
              <View style={styles.View_1_603}>
                <Text style={styles.Text_1_603}>Prix : 10€</Text>
              </View>
              <View style={styles.View_1_604}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2f/02de/fb0951619805c75656883f552f1c7294"
                  }}
                  style={styles.ImageBackground_1_605}
                />
                <View style={styles.View_1_608}>
                  <Text style={styles.Text_1_608}>100Mbits/s</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_609}>
            <View style={styles.View_1_610} />
            <View style={styles.View_1_611} />
            <View style={styles.View_1_612}>
              <Text style={styles.Text_1_612}>Checkout</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1529/d766/8f155579e6da007d59824df29795f609"
              }}
              style={styles.ImageBackground_1_613}
            />
            <View style={styles.View_1_614}>
              <Text style={styles.Text_1_614}>Medal</Text>
            </View>
            <View style={styles.View_1_615}>
              <View style={styles.View_1_616}>
                <View style={styles.View_1_617}>
                  <Text style={styles.Text_1_617}>4 vCoeurs</Text>
                </View>
                <View style={styles.View_1_618}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bee7/d8d1/22c988a990f8441ac98ad84e503b5ede"
                    }}
                    style={styles.ImageBackground_1_619}
                  />
                </View>
              </View>
              <View style={styles.View_1_621}>
                <View style={styles.View_1_622}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a064/1db5/217689d983eb6cf456789e14b01be04e"
                    }}
                    style={styles.ImageBackground_1_623}
                  />
                  <View style={styles.View_1_624} />
                </View>
                <View style={styles.View_1_625}>
                  <Text style={styles.Text_1_625}>16 Go DDR3</Text>
                </View>
              </View>
              <View style={styles.View_1_626}>
                <View style={styles.View_1_627}>
                  <Text style={styles.Text_1_627}>80 Go HDD</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b6b/e6fb/14cc0e66395bd5ecbb575c174baa12f6"
                  }}
                  style={styles.ImageBackground_1_628}
                />
              </View>
              <View style={styles.View_1_630} />
              <View style={styles.View_1_631}>
                <Text style={styles.Text_1_631}>Prix : 20€</Text>
              </View>
              <View style={styles.View_1_632}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2f/02de/fb0951619805c75656883f552f1c7294"
                  }}
                  style={styles.ImageBackground_1_633}
                />
                <View style={styles.View_1_636}>
                  <Text style={styles.Text_1_636}>100Mbits/s</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_637}>
            <View style={styles.View_1_638} />
            <View style={styles.View_1_639} />
            <View style={styles.View_1_640}>
              <Text style={styles.Text_1_640}>Checkout</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1529/d766/8f155579e6da007d59824df29795f609"
              }}
              style={styles.ImageBackground_1_641}
            />
            <View style={styles.View_1_642}>
              <Text style={styles.Text_1_642}>Campfire</Text>
            </View>
            <View style={styles.View_1_643}>
              <View style={styles.View_1_644}>
                <View style={styles.View_1_645}>
                  <Text style={styles.Text_1_645}>8 vCoeurs</Text>
                </View>
                <View style={styles.View_1_646}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bee7/d8d1/22c988a990f8441ac98ad84e503b5ede"
                    }}
                    style={styles.ImageBackground_1_647}
                  />
                </View>
              </View>
              <View style={styles.View_1_649}>
                <View style={styles.View_1_650}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a064/1db5/217689d983eb6cf456789e14b01be04e"
                    }}
                    style={styles.ImageBackground_1_651}
                  />
                  <View style={styles.View_1_652} />
                </View>
                <View style={styles.View_1_653}>
                  <Text style={styles.Text_1_653}>32 Go DDR3</Text>
                </View>
              </View>
              <View style={styles.View_1_654}>
                <View style={styles.View_1_655}>
                  <Text style={styles.Text_1_655}>160 Go HDD</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b6b/e6fb/14cc0e66395bd5ecbb575c174baa12f6"
                  }}
                  style={styles.ImageBackground_1_656}
                />
              </View>
              <View style={styles.View_1_658} />
              <View style={styles.View_1_659}>
                <Text style={styles.Text_1_659}>Prix : 40€</Text>
              </View>
              <View style={styles.View_1_660}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c2f/02de/fb0951619805c75656883f552f1c7294"
                  }}
                  style={styles.ImageBackground_1_661}
                />
                <View style={styles.View_1_664}>
                  <Text style={styles.Text_1_664}>100Mbits/s</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_1415}>
          <Text style={styles.Text_1_1415}>Offers</Text>
        </View>
      </View>
      <View style={styles.View_1_665}>
        <View style={styles.View_1_666}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7032/d3cb/7b94d96e5110b0c71e0c76d90e3401a5"
            }}
            style={styles.ImageBackground_1_667}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c6f/ffe9/f10a592c7e8c066f8e2a801e7a10e631"
            }}
            style={styles.ImageBackground_1_669}
          />
          <View style={styles.View_1_671}>
            <View style={styles.View_1_672}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbc8/5f7e/fb5ad411e12f79fa6f1f03f646408c75"
                }}
                style={styles.ImageBackground_1_673}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27fe/62d8/09e31ce0f7e75ad230ff1c7c986cf14c"
                }}
                style={styles.ImageBackground_1_675}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c35/863b/559b31a5d438e8f438e13595732be613"
                }}
                style={styles.ImageBackground_1_677}
              />
              <View style={styles.View_1_679}>
                <View style={styles.View_1_680}>
                  <View style={styles.View_1_681}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8548/bc20/6a6ed28eaa6a2dda576d68c51864c35a"
                      }}
                      style={styles.ImageBackground_1_682}
                    />
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e9f/afd4/7db9bc16f7461c90b3bd137400f516e4"
                }}
                style={styles.ImageBackground_1_684}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e0f/ab85/561465c23f39dafe3369c3e6daefa74e"
                }}
                style={styles.ImageBackground_1_686}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2ec/9c02/b0978da798f3efc723cf4fd90bfa8996"
                }}
                style={styles.ImageBackground_1_688}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/623e/0b9d/94db5a4092f6ebf9b5495701442607f6"
                }}
                style={styles.ImageBackground_1_690}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b63/8f13/158e7a9f8c68d1e83ee70226718a7b68"
                }}
                style={styles.ImageBackground_1_692}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0db7/f5f7/962936e6787386061917de4cf4491132"
                }}
                style={styles.ImageBackground_1_694}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad6/0894/60ced85a2aae1884405c6ab72c1798b5"
                }}
                style={styles.ImageBackground_1_696}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ce/6684/ee22ff46e94bbf5b12321721106eaa86"
                }}
                style={styles.ImageBackground_1_698}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0970/eef2/29e1445e8315dfca4bf407f15267a130"
                }}
                style={styles.ImageBackground_1_700}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ac3/517c/34b50010b3f4d0382582e4f586f94076"
                }}
                style={styles.ImageBackground_1_702}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4653/3fdc/1338fe7fb73ac6bba84d0de08147e7b1"
                }}
                style={styles.ImageBackground_1_704}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ead2/6f73/cc576dce4671d423c0414ffa0d644d94"
                }}
                style={styles.ImageBackground_1_706}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c8d/3050/6664e07020802b2e72cfbea936061207"
                }}
                style={styles.ImageBackground_1_708}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b507/0daa/d80a884d39f622a7ab4ae0304a318d4d"
                }}
                style={styles.ImageBackground_1_710}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb50/cfa8/c1b266c396c2555a39b77d1b0ac4ca7e"
                }}
                style={styles.ImageBackground_1_712}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b913/469a/d1101e7473b42829029b86321f2d5a3f"
                }}
                style={styles.ImageBackground_1_714}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46ff/b7fc/67d9f0976eddafd5790fe55a4e094695"
                }}
                style={styles.ImageBackground_1_716}
              />
              <View style={styles.View_1_718}>
                <View style={styles.View_1_719}>
                  <View style={styles.View_1_720}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c0c/0a62/ac685d41d1dbfe1d0cb68a87bde5c0fd"
                      }}
                      style={styles.ImageBackground_1_721}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_723}>
                <View style={styles.View_1_724}>
                  <View style={styles.View_1_725}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97d4/8f9f/cffea9910d3f60c62168fff8ac43480c"
                      }}
                      style={styles.ImageBackground_1_726}
                    />
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5dee/6f81/e9c04a0a6fb8266b98937aeb0288e8ed"
                }}
                style={styles.ImageBackground_1_728}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86f0/d47c/aed58bf3b72548e9dc1d8169ff4b9164"
                }}
                style={styles.ImageBackground_1_730}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e059/6677/9d28910a723ef84ce1ab2ca1b22bbb9a"
                }}
                style={styles.ImageBackground_1_732}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdbd/e6d2/6ff356882b41ca9129b364d0280611c1"
                }}
                style={styles.ImageBackground_1_734}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a6d/f4da/5da2117df0318b30bb2e73f2b9770d43"
                }}
                style={styles.ImageBackground_1_736}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbe5/51ba/3c67d06238a6eb6a5db15570b16c98b9"
                }}
                style={styles.ImageBackground_1_738}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1178/d03c/62e6e69fb13a49b6bb3558587a3432f5"
                }}
                style={styles.ImageBackground_1_740}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b719/953b/1f6a8b5a4a20fbf7d20515fcc90918aa"
                }}
                style={styles.ImageBackground_1_742}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90d2/b4e0/21a866429ae0740cdc7001b2c7225295"
                }}
                style={styles.ImageBackground_1_744}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a9a/f9f4/b21ba2677ad6e9ab2ee03fa0c2008b3e"
                }}
                style={styles.ImageBackground_1_746}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30e2/bdf7/45b1b9e57457eabfc50d0b1687a6e976"
                }}
                style={styles.ImageBackground_1_748}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4271/6dda/d8a11eb643734b502cae2df1723fc29d"
                }}
                style={styles.ImageBackground_1_750}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/371b/ec25/188f9b8638bff5db9abc4f694c7f7ca0"
                }}
                style={styles.ImageBackground_1_752}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e90/e5fd/c675138dc3c3876b6e10d68c6394c932"
                }}
                style={styles.ImageBackground_1_754}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1a4/692d/37690180da070aad145b5016cc6fb8b4"
                }}
                style={styles.ImageBackground_1_756}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90de/c613/2e9a87c8538541f49417d79bc66b1a64"
                }}
                style={styles.ImageBackground_1_758}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c21b/defa/bc84154a4786833c537c4ba51c0e94e0"
                }}
                style={styles.ImageBackground_1_760}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/077d/b9c7/c923bb0a0450d5f7f7f0a17972dc4433"
                }}
                style={styles.ImageBackground_1_762}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0445/14de/2861343f0f9508be72064e7c37039227"
                }}
                style={styles.ImageBackground_1_764}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee99/a249/80d29c3121aef200fd1af51f7531cb8b"
                }}
                style={styles.ImageBackground_1_766}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee99/a249/80d29c3121aef200fd1af51f7531cb8b"
                }}
                style={styles.ImageBackground_1_768}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec30/cfe5/1935c8108c8c4badcb9b7d1019a75d77"
                }}
                style={styles.ImageBackground_1_770}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8f1/c69d/5cc63d353caaccc21bc5d880443c55dd"
                }}
                style={styles.ImageBackground_1_772}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70b2/3dd8/88e96b657fde7b569ef8fb6be1004ccc"
                }}
                style={styles.ImageBackground_1_774}
              />
              <View style={styles.View_1_776}>
                <View style={styles.View_1_777}>
                  <View style={styles.View_1_778}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efb0/dcf1/30a969f93fd4c03f379b5a03b0bb0963"
                      }}
                      style={styles.ImageBackground_1_779}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_781}>
                <View style={styles.View_1_782}>
                  <View style={styles.View_1_783}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdb7/e615/c549af5b68babf8415ff65d4a284b35a"
                      }}
                      style={styles.ImageBackground_1_784}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_786}>
                <View style={styles.View_1_787}>
                  <View style={styles.View_1_788}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54f0/4856/26d41c22c4f4ffb3834c455604c89f11"
                      }}
                      style={styles.ImageBackground_1_789}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_791}>
                <View style={styles.View_1_792}>
                  <View style={styles.View_1_793}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3703/daab/cf4a8ce74dfc75c962ca6a730bb10914"
                      }}
                      style={styles.ImageBackground_1_794}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_796}>
                <View style={styles.View_1_797}>
                  <View style={styles.View_1_798}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24e8/c244/48527645459b7c1113e6da95ad491359"
                      }}
                      style={styles.ImageBackground_1_799}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_801}>
                <View style={styles.View_1_802}>
                  <View style={styles.View_1_803}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce9b/1f25/8c17f02d3c17bcc985f3caafae6a5b86"
                      }}
                      style={styles.ImageBackground_1_804}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_806}>
                <View style={styles.View_1_807}>
                  <View style={styles.View_1_808}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff11/1137/4d72986bc10f294e03aff82a4d3e9a70"
                      }}
                      style={styles.ImageBackground_1_809}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_811}>
                <View style={styles.View_1_812}>
                  <View style={styles.View_1_813}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cd6/318c/c6de86c68e651317487b3624164a7189"
                      }}
                      style={styles.ImageBackground_1_814}
                    />
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b76/ce79/24332c5d88ce55fd42796fb753bc7575"
                }}
                style={styles.ImageBackground_1_816}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/245e/9976/861da450a1d93643550b4cd17f04ba61"
                }}
                style={styles.ImageBackground_1_818}
              />
              <View style={styles.View_1_820}>
                <View style={styles.View_1_821}>
                  <View style={styles.View_1_822}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1438/7f51/e61fb99f87249f9f557d98d4fed32d77"
                      }}
                      style={styles.ImageBackground_1_823}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_825}>
                <View style={styles.View_1_826}>
                  <View style={styles.View_1_827}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0e5/03c6/9242fd66bd80d477389e998bf8fa0694"
                      }}
                      style={styles.ImageBackground_1_828}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_830}>
                <View style={styles.View_1_831}>
                  <View style={styles.View_1_832}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae82/62b8/fdd65ea19124564c7a3e2a2341cf9e8a"
                      }}
                      style={styles.ImageBackground_1_833}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_835}>
                <View style={styles.View_1_836}>
                  <View style={styles.View_1_837}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28a7/207d/289bbb048125fa19a4b00ac514d23f55"
                      }}
                      style={styles.ImageBackground_1_838}
                    />
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73f2/d3da/405f9a18fa49b460eb7fe425315add0c"
                }}
                style={styles.ImageBackground_1_840}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73f2/d3da/405f9a18fa49b460eb7fe425315add0c"
                }}
                style={styles.ImageBackground_1_842}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38c1/17d8/989f7d9752e0acc53fdd4496d161d2e7"
                }}
                style={styles.ImageBackground_1_844}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73f2/d3da/405f9a18fa49b460eb7fe425315add0c"
                }}
                style={styles.ImageBackground_1_846}
              />
              <View style={styles.View_1_848}>
                <View style={styles.View_1_849}>
                  <View style={styles.View_1_850}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94ec/16fe/0cbdb2eec66b6edc4397869bd6bbd846"
                      }}
                      style={styles.ImageBackground_1_851}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddf5/f0d8/c4639c127e15133a6476bfb4e0f03a7d"
                      }}
                      style={styles.ImageBackground_1_853}
                    />
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7f4/81c5/3371b195cbabc7a39a3ea0f108a55e0a"
                }}
                style={styles.ImageBackground_1_855}
              />
              <View style={styles.View_1_857}>
                <View style={styles.View_1_858}>
                  <View style={styles.View_1_859}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fc3/d7a8/df57e09bbe52bffc64f1dabc4fd7fae8"
                      }}
                      style={styles.ImageBackground_1_860}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_862}>
                <View style={styles.View_1_863}>
                  <View style={styles.View_1_864}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b9f/7309/50029aae5bf0ebe504dffded593ffe50"
                      }}
                      style={styles.ImageBackground_1_865}
                    />
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad01/fe9b/b9311fc54106974685f261270694be6c"
                }}
                style={styles.ImageBackground_1_867}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d896/f2bb/c627b284eb288b1e1a6fd722e7d85706"
                }}
                style={styles.ImageBackground_1_869}
              />
              <View style={styles.View_1_871}>
                <View style={styles.View_1_872}>
                  <View style={styles.View_1_873}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33aa/2bb8/a80254d0a40c3d9fd27a126a4d26bfbe"
                      }}
                      style={styles.ImageBackground_1_874}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_876}>
                <View style={styles.View_1_877}>
                  <View style={styles.View_1_878}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bfe/a927/dd5884d70a2d46eaff66e5ec06fb54c9"
                      }}
                      style={styles.ImageBackground_1_879}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_881}>
                <View style={styles.View_1_882}>
                  <View style={styles.View_1_883}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d944/165d/748d968f7bc756094951318040858200"
                      }}
                      style={styles.ImageBackground_1_884}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_886}>
                <View style={styles.View_1_887}>
                  <View style={styles.View_1_888}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff03/ec0d/a2816ba72c6c7b1b751143f2290c736e"
                      }}
                      style={styles.ImageBackground_1_889}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_891}>
                <View style={styles.View_1_892}>
                  <View style={styles.View_1_893}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ab4/9e3f/5af915a48e8efcf6c08f00c0c32046d7"
                      }}
                      style={styles.ImageBackground_1_894}
                    />
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f7b/85d1/efa7ddd142ed23b7421d22ccc57026cd"
                }}
                style={styles.ImageBackground_1_896}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc56/a0c2/a1bf34ff7fd23af253dda1c21e32a2d9"
                }}
                style={styles.ImageBackground_1_898}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec1b/39e9/4dd8fefde4c1e6eb2c9ba13cd8437ea9"
                }}
                style={styles.ImageBackground_1_900}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed63/0d5d/da2f71d5b598cadefa15fd68f29a2cbc"
                }}
                style={styles.ImageBackground_1_902}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0345/c5af/fae6baa697e86b0e7273655d8095df1b"
                }}
                style={styles.ImageBackground_1_904}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5634/732b/7f8bdf285681f80bdb13676034deb034"
                }}
                style={styles.ImageBackground_1_906}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e899/49a5/bf8974401051671bca89afa9ec612b08"
                }}
                style={styles.ImageBackground_1_908}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ca7/b137/1a437a70d142b8b3e60577fd0f295eb6"
                }}
                style={styles.ImageBackground_1_910}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f81/646c/f10d323530d90aff1b6ee83c47d051ee"
                }}
                style={styles.ImageBackground_1_912}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7e6/a760/722f78d30b16358ebf7b31be7ed53d92"
                }}
                style={styles.ImageBackground_1_914}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0540/0c2f/7196ed98027a3602609f225744f59c98"
                }}
                style={styles.ImageBackground_1_916}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b981/425e/81aceca0d9c5f783125536f2fe226ce2"
                }}
                style={styles.ImageBackground_1_918}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5350/bf18/1388121eaceca4976a0e4a0732240af8"
                }}
                style={styles.ImageBackground_1_920}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36dc/85c2/f2dcbc906aa67d2d7bad3de87fc5b36e"
                }}
                style={styles.ImageBackground_1_922}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a2/129d/85d22858c2b9661a4a1cb3216d434b4a"
                }}
                style={styles.ImageBackground_1_924}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9a6/7bdd/cc3d34a3a7d4e75cb331be3b32bbde22"
                }}
                style={styles.ImageBackground_1_926}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e552/09cb/eb43cfb11abc2dcb6ad2c36eb660397e"
                }}
                style={styles.ImageBackground_1_928}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68d1/e24c/5aaded0def696bdb16912c9fda55ff49"
                }}
                style={styles.ImageBackground_1_930}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d19/df53/8c7c7660a6b85fb40c3078b64dba3123"
                }}
                style={styles.ImageBackground_1_932}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7042/7fa9/dfdb1ec0c00e1d4258667e82a1ab692a"
                }}
                style={styles.ImageBackground_1_934}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4fe/087a/6e9dfc6e691c75af71ad6392c0b039c9"
                }}
                style={styles.ImageBackground_1_936}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1_938}>
          <Text style={styles.Text_1_938}>Frequently Asked Question</Text>
        </View>
        <View style={styles.View_1_939}>
          <View style={styles.View_1_940}>
            <View style={styles.View_1_941} />
            <View style={styles.View_1_942}>
              <Text style={styles.Text_1_942}>
                Can I Install Windows on server ?
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ff4/21f8/76cb5be50b974b77ca1899021abf8ab2"
              }}
              style={styles.ImageBackground_1_943}
            />
          </View>
          <View style={styles.View_1_945}>
            <View style={styles.View_1_946} />
            <View style={styles.View_1_947}>
              <Text style={styles.Text_1_947}>
                Can I Install Windows on server ?
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ff4/21f8/76cb5be50b974b77ca1899021abf8ab2"
              }}
              style={styles.ImageBackground_1_948}
            />
          </View>
          <View style={styles.View_1_950}>
            <View style={styles.View_1_951} />
            <View style={styles.View_1_952}>
              <Text style={styles.Text_1_952}>
                Can I Install Windows on server ?
              </Text>
            </View>
            <View style={styles.View_1_953}>
              <Text style={styles.Text_1_953}>
                Yes, you can install windows on every offer. Windows Server 2016
                is recommended, you cannot install windows 10 on our machine.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pulvinar sagittis diam, neque a vulputate cursus nibh. Amet
                blandit justo ullamcorper nibh a augue et tincidunt. Et viverra
                ornare sed in arcu. Massa est, euismod at tempus, donec. Quam
                tortor adipiscing bibendum dolor neque, adipiscing mi.
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d78d/bfac/0c693a5dba36b6be2f5ed19e7c1b69ba"
              }}
              style={styles.ImageBackground_1_954}
            />
          </View>
          <View style={styles.View_1_956}>
            <View style={styles.View_1_957} />
            <View style={styles.View_1_958}>
              <Text style={styles.Text_1_958}>
                Can I Install Windows on server ?
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ff4/21f8/76cb5be50b974b77ca1899021abf8ab2"
              }}
              style={styles.ImageBackground_1_959}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_1384}>
        <View style={styles.View_1_1385} />
        <View style={styles.View_1_1463}>
          <View style={styles.View_1_1407}>
            <View style={styles.View_1_1408} />
            <View style={styles.View_1_1409}>
              <Text style={styles.Text_1_1409}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam
              </Text>
            </View>
            <View style={styles.View_1_1413}>
              <Text style={styles.Text_1_1413}>Cheap</Text>
            </View>
            <View style={styles.View_1_1438}>
              <View style={styles.View_1_1410} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8486/3fb3/b5575015f74bb095f105d79f77b00554"
                }}
                style={styles.ImageBackground_1_1411}
              />
            </View>
          </View>
          <View style={styles.View_1_1439}>
            <View style={styles.View_1_1440} />
            <View style={styles.View_1_1441}>
              <Text style={styles.Text_1_1441}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam
              </Text>
            </View>
            <View style={styles.View_1_1442}>
              <Text style={styles.Text_1_1442}>Cheap</Text>
            </View>
            <View style={styles.View_1_1443}>
              <View style={styles.View_1_1444} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8486/3fb3/b5575015f74bb095f105d79f77b00554"
                }}
                style={styles.ImageBackground_1_1445}
              />
            </View>
          </View>
          <View style={styles.View_1_1447}>
            <View style={styles.View_1_1448} />
            <View style={styles.View_1_1449}>
              <Text style={styles.Text_1_1449}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam
              </Text>
            </View>
            <View style={styles.View_1_1450}>
              <Text style={styles.Text_1_1450}>Cheap</Text>
            </View>
            <View style={styles.View_1_1451}>
              <View style={styles.View_1_1452} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8486/3fb3/b5575015f74bb095f105d79f77b00554"
                }}
                style={styles.ImageBackground_1_1453}
              />
            </View>
          </View>
          <View style={styles.View_1_1455}>
            <View style={styles.View_1_1456} />
            <View style={styles.View_1_1457}>
              <Text style={styles.Text_1_1457}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam
              </Text>
            </View>
            <View style={styles.View_1_1458}>
              <Text style={styles.Text_1_1458}>Cheap</Text>
            </View>
            <View style={styles.View_1_1459}>
              <View style={styles.View_1_1460} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8486/3fb3/b5575015f74bb095f105d79f77b00554"
                }}
                style={styles.ImageBackground_1_1461}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1_1414}>
          <Text style={styles.Text_1_1414}>Why choosing us ?</Text>
        </View>
      </View>
      <View style={styles.View_1_358}>
        <View style={styles.View_1_359} />
        <View style={styles.View_1_542}>
          <View style={styles.View_1_543}>
            <View style={styles.View_1_544} />
            <View style={styles.View_1_545}>
              <Text style={styles.Text_1_545}>Contact us</Text>
            </View>
          </View>
          <View style={styles.View_1_546}>
            <View style={styles.View_1_547} />
            <View style={styles.View_1_548}>
              <Text style={styles.Text_1_548}>Pricing</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_360}>
          <View style={styles.View_1_361}>
            <View style={styles.View_1_362}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f87f/c676/33465a5b3f5fe3e8135b1f77a1e2b7c1"
                }}
                style={styles.ImageBackground_1_363}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b43/4b84/a70077e9c50ad969e8586683828700cc"
                }}
                style={styles.ImageBackground_1_364}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ef8/204d/36fbd5e4dad33b2f70bd9f8bc24fca35"
                }}
                style={styles.ImageBackground_1_365}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/628c/3ba4/b6cf2f6203585464239cf16d6a826280"
                }}
                style={styles.ImageBackground_1_366}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b9/8fa2/628815654b562c5a774562fdf5c1c152"
                }}
                style={styles.ImageBackground_1_367}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e75/a3e2/c96a5acfc637efb0c42dafb0cfd4c0db"
                }}
                style={styles.ImageBackground_1_368}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee2a/0c86/a764e114d82fb898cd8f0fbef7208b8e"
                }}
                style={styles.ImageBackground_1_369}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36b8/afdd/a40345f856bad6127279468973781911"
                }}
                style={styles.ImageBackground_1_370}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee2a/0c86/a764e114d82fb898cd8f0fbef7208b8e"
                }}
                style={styles.ImageBackground_1_371}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36b8/afdd/a40345f856bad6127279468973781911"
                }}
                style={styles.ImageBackground_1_372}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aea/4b93/4a47599c2bd9266e873197098f02ace9"
                }}
                style={styles.ImageBackground_1_373}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28db/7fdf/c5bcea66d0786e4485b4dc0743a88a7e"
                }}
                style={styles.ImageBackground_1_374}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b374/39cb/7392b6978da2c54eb9753b062c7a853c"
                }}
                style={styles.ImageBackground_1_375}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb12/d437/fcf7cf5964e59f071fcb9800d7da711a"
                }}
                style={styles.ImageBackground_1_376}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29f0/7c52/55f0a8993b0ef5c56f2f12ee8fc83ed2"
                }}
                style={styles.ImageBackground_1_377}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fe0/cfc6/6d3a62fb49d890565aebddae3b2c4db3"
                }}
                style={styles.ImageBackground_1_378}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcf3/6c14/9755794910cd10d5d6b0382031d55b82"
                }}
                style={styles.ImageBackground_1_379}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6af2/edb5/353aaa2fa07f9eabcce2aea0dc48f491"
                }}
                style={styles.ImageBackground_1_380}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/604c/e535/3dbc6303dcb2ca97cfd0ce68c0231e62"
                }}
                style={styles.ImageBackground_1_381}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d12/cca8/12ffe195df9f307a759feb3e6ea7bc1e"
                }}
                style={styles.ImageBackground_1_382}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6af2/edb5/353aaa2fa07f9eabcce2aea0dc48f491"
                }}
                style={styles.ImageBackground_1_383}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/604c/e535/3dbc6303dcb2ca97cfd0ce68c0231e62"
                }}
                style={styles.ImageBackground_1_384}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d12/cca8/12ffe195df9f307a759feb3e6ea7bc1e"
                }}
                style={styles.ImageBackground_1_385}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6af2/edb5/353aaa2fa07f9eabcce2aea0dc48f491"
                }}
                style={styles.ImageBackground_1_386}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/604c/e535/3dbc6303dcb2ca97cfd0ce68c0231e62"
                }}
                style={styles.ImageBackground_1_387}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d12/cca8/12ffe195df9f307a759feb3e6ea7bc1e"
                }}
                style={styles.ImageBackground_1_388}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b455/03f8/f33dd0db77eaf93e176997b14277e307"
                }}
                style={styles.ImageBackground_1_389}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995f/ad4d/80f603cbdcfcc6ebec169f3d16ddf8e5"
                }}
                style={styles.ImageBackground_1_390}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a98b/aabc/a8567a941c6f56694263112a9fa1ab5c"
                }}
                style={styles.ImageBackground_1_391}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a98b/aabc/a8567a941c6f56694263112a9fa1ab5c"
                }}
                style={styles.ImageBackground_1_392}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a98b/aabc/a8567a941c6f56694263112a9fa1ab5c"
                }}
                style={styles.ImageBackground_1_393}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a98b/aabc/a8567a941c6f56694263112a9fa1ab5c"
                }}
                style={styles.ImageBackground_1_394}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/788c/471a/568d06a3ec48b89f1677b0ffde338417"
                }}
                style={styles.ImageBackground_1_395}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f6a/3a4e/dac15f232bd0c26ea5853ef8b7f3866b"
                }}
                style={styles.ImageBackground_1_396}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eeb/8cb9/0cdb51ad12338303689827fc9efec76e"
                }}
                style={styles.ImageBackground_1_397}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c22/daa7/dcb09934bc5a7a5a52573d1bbb7a94c2"
                }}
                style={styles.ImageBackground_1_398}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a140/2531/18ca910b6f45b4efec625b3da3daa27e"
                }}
                style={styles.ImageBackground_1_399}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94d9/e17e/cb8fe34c0a77e40657ea963ba60d6639"
                }}
                style={styles.ImageBackground_1_400}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bd4/2bfa/9cc75f15837633a0212b87c28fdb08e5"
                }}
                style={styles.ImageBackground_1_401}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/825c/9187/5d1a5ba9cf944ecd855ec43b352453d3"
                }}
                style={styles.ImageBackground_1_402}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b483/f8d3/adb729442b9d61a63487aabdf20324af"
                }}
                style={styles.ImageBackground_1_403}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbb6/6d04/05001461d698fccc99b94f7404a4b0e0"
                }}
                style={styles.ImageBackground_1_404}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/078c/5645/e6a3562978e34c0ad71cb948f6d3849d"
                }}
                style={styles.ImageBackground_1_405}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/078c/5645/e6a3562978e34c0ad71cb948f6d3849d"
                }}
                style={styles.ImageBackground_1_406}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/078c/5645/e6a3562978e34c0ad71cb948f6d3849d"
                }}
                style={styles.ImageBackground_1_407}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4591/b3e4/0dbd77c6a2b8c31d68a6c61580538e05"
                }}
                style={styles.ImageBackground_1_408}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4591/b3e4/0dbd77c6a2b8c31d68a6c61580538e05"
                }}
                style={styles.ImageBackground_1_409}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8382/b87b/413bd4b48feca3dc01c3dcfe38ab21c2"
                }}
                style={styles.ImageBackground_1_410}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8382/b87b/413bd4b48feca3dc01c3dcfe38ab21c2"
                }}
                style={styles.ImageBackground_1_411}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8382/b87b/413bd4b48feca3dc01c3dcfe38ab21c2"
                }}
                style={styles.ImageBackground_1_412}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8382/b87b/413bd4b48feca3dc01c3dcfe38ab21c2"
                }}
                style={styles.ImageBackground_1_413}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8382/b87b/413bd4b48feca3dc01c3dcfe38ab21c2"
                }}
                style={styles.ImageBackground_1_414}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8382/b87b/413bd4b48feca3dc01c3dcfe38ab21c2"
                }}
                style={styles.ImageBackground_1_415}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8382/b87b/413bd4b48feca3dc01c3dcfe38ab21c2"
                }}
                style={styles.ImageBackground_1_416}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/064c/b426/d8a0e272b996e4998cc613b7db767839"
                }}
                style={styles.ImageBackground_1_417}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/064c/b426/d8a0e272b996e4998cc613b7db767839"
                }}
                style={styles.ImageBackground_1_418}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/064c/b426/d8a0e272b996e4998cc613b7db767839"
                }}
                style={styles.ImageBackground_1_419}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8382/b87b/413bd4b48feca3dc01c3dcfe38ab21c2"
                }}
                style={styles.ImageBackground_1_420}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8382/b87b/413bd4b48feca3dc01c3dcfe38ab21c2"
                }}
                style={styles.ImageBackground_1_421}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8382/b87b/413bd4b48feca3dc01c3dcfe38ab21c2"
                }}
                style={styles.ImageBackground_1_422}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8382/b87b/413bd4b48feca3dc01c3dcfe38ab21c2"
                }}
                style={styles.ImageBackground_1_423}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8382/b87b/413bd4b48feca3dc01c3dcfe38ab21c2"
                }}
                style={styles.ImageBackground_1_424}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8382/b87b/413bd4b48feca3dc01c3dcfe38ab21c2"
                }}
                style={styles.ImageBackground_1_425}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8382/b87b/413bd4b48feca3dc01c3dcfe38ab21c2"
                }}
                style={styles.ImageBackground_1_426}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8382/b87b/413bd4b48feca3dc01c3dcfe38ab21c2"
                }}
                style={styles.ImageBackground_1_427}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf76/0777/afe1dec3b2622916c7c681d0383df317"
                }}
                style={styles.ImageBackground_1_428}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce11/76b8/1978ad2592fefc8f520252b2a4cfd514"
                }}
                style={styles.ImageBackground_1_429}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984a/3723/498d4e9af68d067d795d487ba0e22d7c"
                }}
                style={styles.ImageBackground_1_430}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52c2/2c47/fc7447f44daac6c94ae2f4a063d4dd4f"
                }}
                style={styles.ImageBackground_1_431}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2df6/3f1d/4960db6241555af4570ff48d12d8bc8f"
                }}
                style={styles.ImageBackground_1_432}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47bd/e3d1/9740707f28dc7da07bb3f9388c30c942"
                }}
                style={styles.ImageBackground_1_433}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4e7/cc2b/f630d4e27938b43fc6cc9c69128d9a05"
                }}
                style={styles.ImageBackground_1_434}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1fd/612f/5b9d06ac8d3e8c5f6a13d62852c72b62"
                }}
                style={styles.ImageBackground_1_435}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edd9/8a52/92eb0c0aa705d89fb395f92b97207a77"
                }}
                style={styles.ImageBackground_1_436}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f65/7c6e/1f3d56e592df4bfba846e513b7fc280a"
                }}
                style={styles.ImageBackground_1_437}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69a9/ed26/76f5a80d1822d4340df28b1ae69f51cf"
                }}
                style={styles.ImageBackground_1_438}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0aab/30c8/c01c6ddb8d751e42889f37d75f12cd4f"
                }}
                style={styles.ImageBackground_1_439}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20ec/6fac/59cd6cbfb828c7ec64cae21c255c0bdc"
                }}
                style={styles.ImageBackground_1_440}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef1e/9440/eb8cbfc48c98766e74b40b484c3097b6"
                }}
                style={styles.ImageBackground_1_441}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620d/eb20/fd7f181089a0103a8b40f64b3a2d6b9b"
                }}
                style={styles.ImageBackground_1_442}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0728/40bd/ea9a820f4cc667f8b70719b8bd923c10"
                }}
                style={styles.ImageBackground_1_443}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620d/eb20/fd7f181089a0103a8b40f64b3a2d6b9b"
                }}
                style={styles.ImageBackground_1_444}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c18/fd9a/2d826a6e39307c37d7feeff28ddd0bd0"
                }}
                style={styles.ImageBackground_1_445}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44d2/29b5/a8cc7daefa8f7bd8ff71a84a74a89d0d"
                }}
                style={styles.ImageBackground_1_446}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/408f/3a64/77dd4f3bca8c361595703568d90a270c"
                }}
                style={styles.ImageBackground_1_447}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/741f/0ca0/ef6f47c05821db93179e3dd643da1d88"
                }}
                style={styles.ImageBackground_1_448}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c49/a5fe/9e8f415ea6031b8a7363d087359efbf7"
                }}
                style={styles.ImageBackground_1_449}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c18/fd9a/2d826a6e39307c37d7feeff28ddd0bd0"
                }}
                style={styles.ImageBackground_1_450}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/651f/ec12/40c4496b20247ac6419ceaa08ff68bdf"
                }}
                style={styles.ImageBackground_1_451}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df33/7990/ca6011ba32bbe458c8a9adb7fe4e1b5e"
                }}
                style={styles.ImageBackground_1_452}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620d/eb20/fd7f181089a0103a8b40f64b3a2d6b9b"
                }}
                style={styles.ImageBackground_1_453}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e050/1abf/01fc4a505090760ed7ad1900383f628a"
                }}
                style={styles.ImageBackground_1_454}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a77/8c14/189d65d7d9e81fa3851f1a02b3d677f3"
                }}
                style={styles.ImageBackground_1_455}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620d/eb20/fd7f181089a0103a8b40f64b3a2d6b9b"
                }}
                style={styles.ImageBackground_1_456}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c18/fd9a/2d826a6e39307c37d7feeff28ddd0bd0"
                }}
                style={styles.ImageBackground_1_457}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d426/fab9/4d19db54f2f45b0647bcea78c1cd2aa6"
                }}
                style={styles.ImageBackground_1_458}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9631/12f5/138158baeaefa720f4e6937fa27672d0"
                }}
                style={styles.ImageBackground_1_459}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9631/12f5/138158baeaefa720f4e6937fa27672d0"
                }}
                style={styles.ImageBackground_1_460}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9631/12f5/138158baeaefa720f4e6937fa27672d0"
                }}
                style={styles.ImageBackground_1_461}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9631/12f5/138158baeaefa720f4e6937fa27672d0"
                }}
                style={styles.ImageBackground_1_462}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9631/12f5/138158baeaefa720f4e6937fa27672d0"
                }}
                style={styles.ImageBackground_1_463}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9631/12f5/138158baeaefa720f4e6937fa27672d0"
                }}
                style={styles.ImageBackground_1_464}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9631/12f5/138158baeaefa720f4e6937fa27672d0"
                }}
                style={styles.ImageBackground_1_465}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9631/12f5/138158baeaefa720f4e6937fa27672d0"
                }}
                style={styles.ImageBackground_1_466}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9631/12f5/138158baeaefa720f4e6937fa27672d0"
                }}
                style={styles.ImageBackground_1_467}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9631/12f5/138158baeaefa720f4e6937fa27672d0"
                }}
                style={styles.ImageBackground_1_468}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9631/12f5/138158baeaefa720f4e6937fa27672d0"
                }}
                style={styles.ImageBackground_1_469}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9631/12f5/138158baeaefa720f4e6937fa27672d0"
                }}
                style={styles.ImageBackground_1_470}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9631/12f5/138158baeaefa720f4e6937fa27672d0"
                }}
                style={styles.ImageBackground_1_471}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf2b/da4e/a94990fb5d8caa0b69fb42e53d1209e2"
                }}
                style={styles.ImageBackground_1_472}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2775/0ddb/add8cd61493493827be45ffb8501cfae"
                }}
                style={styles.ImageBackground_1_473}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd56/0a49/ac3631a3152a233a17a20d20fe554b89"
                }}
                style={styles.ImageBackground_1_474}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef47/14fa/7f18093c44aada601dbc0bc7d2934ca3"
                }}
                style={styles.ImageBackground_1_475}
              />
              <View style={styles.View_1_476}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/974e/30dc/09527ac5eea21183e2618f608c1eafa0"
                  }}
                  style={styles.ImageBackground_1_477}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba76/1027/941560761fb0276849199b182e252a4a"
                }}
                style={styles.ImageBackground_1_479}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba76/1027/941560761fb0276849199b182e252a4a"
                }}
                style={styles.ImageBackground_1_480}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba76/1027/941560761fb0276849199b182e252a4a"
                }}
                style={styles.ImageBackground_1_481}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/009b/6e04/8c6179e3acb255d84f6be18b867c7126"
                }}
                style={styles.ImageBackground_1_482}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e039/a6a4/873d609ea75e68cf501d39b13c1a9fca"
                }}
                style={styles.ImageBackground_1_483}
              />
              <View style={styles.View_1_484}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d303/6ff6/25aaaee0bf362fb89b9114a8d7cdae04"
                  }}
                  style={styles.ImageBackground_1_485}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5403/483c/ec06f798256cfbea095b892a56975fba"
                }}
                style={styles.ImageBackground_1_487}
              />
              <View style={styles.View_1_488}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4168/b5ad/802b87c356aa91c3d837fa8e08ac102c"
                  }}
                  style={styles.ImageBackground_1_489}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd88/a072/8b62e2a3f75d39ca4dfc7a7b1fdee07d"
                }}
                style={styles.ImageBackground_1_492}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb19/d9c7/9f9f54678e571c19763df4abd57d4a4e"
                }}
                style={styles.ImageBackground_1_493}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8688/af59/51964a594651c44db12cbbd1451e071e"
                }}
                style={styles.ImageBackground_1_494}
              />
              <View style={styles.View_1_495}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afa9/6569/4fc4dd2674e278e89c4780706af7d7c3"
                  }}
                  style={styles.ImageBackground_1_496}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7116/2ad0/26e8fb943298063b4b4eff14f28eb170"
                }}
                style={styles.ImageBackground_1_498}
              />
              <View style={styles.View_1_499}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35ee/548e/325759bfd5f061c002fd6130b4bada88"
                  }}
                  style={styles.ImageBackground_1_500}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4427/b1af/44767c155c7a5f64519e8fcc595408c2"
                }}
                style={styles.ImageBackground_1_502}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4427/b1af/44767c155c7a5f64519e8fcc595408c2"
                }}
                style={styles.ImageBackground_1_503}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e814/3e54/14e880531359dfdb8dcdce2dba7a495b"
                }}
                style={styles.ImageBackground_1_504}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e814/3e54/14e880531359dfdb8dcdce2dba7a495b"
                }}
                style={styles.ImageBackground_1_505}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9530/886e/5dd1b1b3e5ce2509d37484daa6111d83"
                }}
                style={styles.ImageBackground_1_506}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95d9/26b4/bfee7db5d279d600287045874c54109e"
                }}
                style={styles.ImageBackground_1_507}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3017/3e72/68e00bba456458766a689267b408a805"
                }}
                style={styles.ImageBackground_1_508}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e996/1214/14563c2ba210cb11a4d9b2003f541bb6"
                }}
                style={styles.ImageBackground_1_509}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec7f/a7b7/a7b41e3cf70be297b9d81e7bc585d397"
                }}
                style={styles.ImageBackground_1_510}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a45c/aa75/4d61c6e97cb9ad3491abc740ea9dca4c"
                }}
                style={styles.ImageBackground_1_511}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/074f/8295/7c1eaa13e03134a0de15caca208501c7"
                }}
                style={styles.ImageBackground_1_512}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2f1/144e/44a4631b1ee71952400d0dcecb919366"
                }}
                style={styles.ImageBackground_1_513}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53e6/322f/57eeb1b8ea6677ba9377098be786519d"
                }}
                style={styles.ImageBackground_1_514}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a091/a75b/beffdf24d6a8c323c3dd5e2e545c9dfc"
                }}
                style={styles.ImageBackground_1_515}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd0b/fc8e/5f26a8c8855a2279265de0eecd0e78db"
                }}
                style={styles.ImageBackground_1_516}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/824d/d7af/35ec799d42d148c5cc9917b9547f47ed"
                }}
                style={styles.ImageBackground_1_517}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5753/7e12/258d9577816409d7e65bc34b8a66792a"
                }}
                style={styles.ImageBackground_1_518}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fc4/9847/afde53383fe7dccb993e8b51787f626a"
                }}
                style={styles.ImageBackground_1_519}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02be/d6b7/9c9d4d2d30712cc994acb31712abc267"
                }}
                style={styles.ImageBackground_1_520}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b06b/a561/d23cd01f0904b296db8c7cab39f2b53e"
                }}
                style={styles.ImageBackground_1_521}
              />
              <View style={styles.View_1_522}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49e3/5b49/18e74f074cb4cb25c6cba394ff6508f1"
                  }}
                  style={styles.ImageBackground_1_523}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd50/8946/67a36612b7784ebc7782d41cd62bce09"
                }}
                style={styles.ImageBackground_1_525}
              />
              <View style={styles.View_1_526}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e6f/4b6c/37561c733588f15f25b27a31daa7d25c"
                  }}
                  style={styles.ImageBackground_1_527}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06b9/3968/3aeaad86a6b20849689c837dc418944e"
                }}
                style={styles.ImageBackground_1_529}
              />
              <View style={styles.View_1_530}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16e5/331e/0195058cf00ae276a61db316033ce995"
                  }}
                  style={styles.ImageBackground_1_531}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5678/e79f/3a4f13869d39fb7420fa6d702de645f0"
                }}
                style={styles.ImageBackground_1_533}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7216/b155/e5ba62c9177e4300e93af86b12f4c98f"
                }}
                style={styles.ImageBackground_1_534}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e91/49ed/f840fdf81d23034f21d1c87dca6d768c"
                }}
                style={styles.ImageBackground_1_535}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74b0/ec84/eff1c83fcf906bc947a35830f3069382"
                }}
                style={styles.ImageBackground_1_536}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2488/e983/2d401fafb1db95b0d4200ed416efe9d0"
                }}
                style={styles.ImageBackground_1_537}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e56/ccd2/83731cabebc5ffbe8e39a87b63ed3156"
                }}
                style={styles.ImageBackground_1_538}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc0c/e5fc/fbe25635c17036f46c609427d0ea92da"
                }}
                style={styles.ImageBackground_1_539}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1_1437}>
          <View style={styles.View_1_540}>
            <Text style={styles.Text_1_540}>
              We offer attractive pricing and excellent service and therefore
              have a lot of clients worldwide who choose to work with us.
            </Text>
          </View>
          <View style={styles.View_1_541}>
            <Text style={styles.Text_1_541}>Work with us</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1802}>
        <View style={styles.View_1_1464}>
          <View style={styles.View_1_346}>
            <View style={styles.View_1_347}>
              <Text style={styles.Text_1_347}>About us</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8139/1a99/b19475faae96d63306417fa5a89cb67e"
              }}
              style={styles.ImageBackground_1_348}
            />
          </View>
          <View style={styles.View_1_342}>
            <View style={styles.View_1_343}>
              <Text style={styles.Text_1_343}>Support</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2c2/88d1/9a218974ada2597d24d2f2b0ef9edca9"
              }}
              style={styles.ImageBackground_1_344}
            />
          </View>
          <View style={styles.View_1_350}>
            <View style={styles.View_1_351}>
              <Text style={styles.Text_1_351}>Product</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bf4/6025/63403555b700defe6e121e392cc241af"
              }}
              style={styles.ImageBackground_1_352}
            />
          </View>
          <View style={styles.View_1_354}>
            <View style={styles.View_1_355}>
              <Text style={styles.Text_1_355}>Manager</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/469d/6351/6f14e9ea6bdc10937c829d2dd48f2f8b"
              }}
              style={styles.ImageBackground_1_356}
            />
          </View>
          <View style={styles.View_1_338}>
            <View style={styles.View_1_339}>
              <Text style={styles.Text_1_339}>Home</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0472/1252/91dceb7247b3964018fd11a570bcce3e"
              }}
              style={styles.ImageBackground_1_340}
            />
          </View>
        </View>
        <View style={styles.View_1_1801}>
          <View style={styles.View_1_3}>
            <Text style={styles.Text_1_3}>ScoutHosting</Text>
          </View>
          <View style={styles.View_1_1465}>
            <View style={styles.View_1_1466}>
              <View style={styles.View_1_1467}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca43/dea1/102ef6b0e398504fb7c86c38198d0b83"
                  }}
                  style={styles.ImageBackground_1_1468}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2950/1e4c/3714466923c03cb9889f52d8e7a62f17"
                  }}
                  style={styles.ImageBackground_1_1470}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e22c/e2d1/0053a1b7546b954e5615b857c3ae5933"
                  }}
                  style={styles.ImageBackground_1_1472}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6a3/c33a/6ddca16d4519e2286e5e885853f45a21"
                  }}
                  style={styles.ImageBackground_1_1474}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2598/ddd5/e63a08e76a75a357563e5a008962d752"
                  }}
                  style={styles.ImageBackground_1_1476}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a130/25a2/eea450cc536145a3efa914ac59bbcdc4"
                  }}
                  style={styles.ImageBackground_1_1478}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03fa/6bf4/48914c71b086490659d92965620f7cf6"
                  }}
                  style={styles.ImageBackground_1_1480}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7fa/0414/89951800c0f20d99dc598747c4aa4726"
                  }}
                  style={styles.ImageBackground_1_1482}
                />
                <View style={styles.View_1_1484}>
                  <View style={styles.View_1_1485}>
                    <View style={styles.View_1_1486}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d1b/dc28/bf396e36842ef1d9b9cd1aab2a615910"
                        }}
                        style={styles.ImageBackground_1_1487}
                      />
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4363/4440/2579e9d64ec317b10cbcbdcdc4e3f407"
                  }}
                  style={styles.ImageBackground_1_1489}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e7/641c/8e0d9439fc2f464f1112cac459d5186b"
                  }}
                  style={styles.ImageBackground_1_1491}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c364/6bfe/17d3996e51b32d9cefd86433818015cb"
                  }}
                  style={styles.ImageBackground_1_1493}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfc5/d8ae/510199ab9fdd7a8bdc5a3811216d8388"
                  }}
                  style={styles.ImageBackground_1_1495}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c13/b23e/209ea0c8db94b4cb1387b3726cd87071"
                  }}
                  style={styles.ImageBackground_1_1497}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb49/5222/75c958f1362d3d90d129dec74b152d64"
                  }}
                  style={styles.ImageBackground_1_1499}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bda/b086/f98ab6c00357bf2d4192ae67034460ca"
                  }}
                  style={styles.ImageBackground_1_1501}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcdc/6b36/1580e125959396717cb637d3b102b530"
                  }}
                  style={styles.ImageBackground_1_1503}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91b3/8822/07ea7fd070fa1cff3b920833ddc2396b"
                  }}
                  style={styles.ImageBackground_1_1505}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/489b/82f9/97a731b07cc018a2db53427c691aff39"
                  }}
                  style={styles.ImageBackground_1_1507}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3f9/11ad/4e8ea6225486fe5d83209953e009e5bf"
                  }}
                  style={styles.ImageBackground_1_1509}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af11/f4c7/7ad0a81fca16dcbfe0cc640357c11387"
                  }}
                  style={styles.ImageBackground_1_1511}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6329/307b/80a23f826453ed42f185046b3b5806c4"
                  }}
                  style={styles.ImageBackground_1_1513}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70a0/da54/f103247d5e8b3f8a24c5dae6cc3d1170"
                  }}
                  style={styles.ImageBackground_1_1515}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92f8/1c6d/11f2ce59c69c8d6392277d201f27ab62"
                  }}
                  style={styles.ImageBackground_1_1517}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c517/3624/6b1186d497fb2b81beb9fa6193a5f9d8"
                  }}
                  style={styles.ImageBackground_1_1519}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ed1/f644/1141c6726d678a6bcb5a8e701a1d59c8"
                  }}
                  style={styles.ImageBackground_1_1521}
                />
                <View style={styles.View_1_1523}>
                  <View style={styles.View_1_1524}>
                    <View style={styles.View_1_1525}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30e8/dccd/cdea0ae50c6d3b33900420270c36492c"
                        }}
                        style={styles.ImageBackground_1_1526}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1528}>
                  <View style={styles.View_1_1529}>
                    <View style={styles.View_1_1530}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c42b/b36f/98007e34db6d4d32fd7afcaa20ffb7be"
                        }}
                        style={styles.ImageBackground_1_1531}
                      />
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2d1/b3dd/b9c08a98b3d6672c43f1789909cc4e58"
                  }}
                  style={styles.ImageBackground_1_1533}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3c6/d7a6/7c9fdc2124e1c8baf7908733be346617"
                  }}
                  style={styles.ImageBackground_1_1535}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd6d/c58d/b7d005a961f27c2135d6c7d9718da684"
                  }}
                  style={styles.ImageBackground_1_1537}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2888/1cc4/ab41fa8c75ffc8bf035791a0894bbc02"
                  }}
                  style={styles.ImageBackground_1_1539}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3776/6999/84c17a7239cf2d45c07f30c438a62ca5"
                  }}
                  style={styles.ImageBackground_1_1541}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb21/3677/32dcb51778142c8443b5134917fd7f97"
                  }}
                  style={styles.ImageBackground_1_1543}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48d2/bcd0/833f13989a44123e1bd3ec4b5661ed66"
                  }}
                  style={styles.ImageBackground_1_1545}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d5d/21af/6f8a4c546572e26e8ee0c88c658c412f"
                  }}
                  style={styles.ImageBackground_1_1547}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b25/97cf/33990416b663144b44838771cba5c139"
                  }}
                  style={styles.ImageBackground_1_1549}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85ca/742c/45b2a1227ce81ecb0ec1a22429c462ae"
                  }}
                  style={styles.ImageBackground_1_1551}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edef/e1be/83bd4f5e6c66d568f6ca6df2a2484192"
                  }}
                  style={styles.ImageBackground_1_1553}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/932f/c4b1/6150693d6369830a804d52373a7ad1f9"
                  }}
                  style={styles.ImageBackground_1_1555}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6866/2cb3/581a1363eb48e25777ebb9b261db08cf"
                  }}
                  style={styles.ImageBackground_1_1557}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3527/48b9/69a72e3a576ab46ef1a6afaaf74b3e68"
                  }}
                  style={styles.ImageBackground_1_1559}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e398/d8e8/1284e9131033447387971b51d3fd6280"
                  }}
                  style={styles.ImageBackground_1_1561}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31cd/beb9/3c3a1cd8a083bb40627f9179921fdc2a"
                  }}
                  style={styles.ImageBackground_1_1563}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/800c/3137/270ac76e0aba1d5644050e5b6f0fadbf"
                  }}
                  style={styles.ImageBackground_1_1565}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f471/5537/52bb3584bea2cd5cc4b2b4a2e9b4615e"
                  }}
                  style={styles.ImageBackground_1_1567}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a38/b023/7a98fc16459542cb4438a4f2f396c00a"
                  }}
                  style={styles.ImageBackground_1_1569}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/668a/a1f9/7bd8c2007b6403d3d0f6b6953f996dcf"
                  }}
                  style={styles.ImageBackground_1_1571}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7a2/98bd/fb4b6f8f8a0e9ec75d8ba210256fe2c6"
                  }}
                  style={styles.ImageBackground_1_1573}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/524a/62ee/44ff46184821f3b31193d890ee2a8830"
                  }}
                  style={styles.ImageBackground_1_1575}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c6d/0ae6/e26b4268401e2d3f2f1cf87e3d0786fb"
                  }}
                  style={styles.ImageBackground_1_1577}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9fb/d8e6/107f3e213c331a535c3a74f0ccff9629"
                  }}
                  style={styles.ImageBackground_1_1579}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d91/d0a3/7bac5b2d74a66d7af2f17578159ee968"
                  }}
                  style={styles.ImageBackground_1_1581}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcfc/0560/7ccfeec1dc1aa3aa30ba815459564b56"
                  }}
                  style={styles.ImageBackground_1_1583}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ec0/aea4/cedb98dca99ff43c057104f338fd60d3"
                  }}
                  style={styles.ImageBackground_1_1585}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08b8/3cd5/2a56fa41a19eb5dac246e7e8f1ac9b4c"
                  }}
                  style={styles.ImageBackground_1_1587}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c048/bd30/d337a922a749ab4bad29840f839a00a2"
                  }}
                  style={styles.ImageBackground_1_1589}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a404/9cb8/06665f8ca9460aa49d5161881176361a"
                  }}
                  style={styles.ImageBackground_1_1591}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c06/6342/ae4e7068acf81e8a1f2cf9923a548f04"
                  }}
                  style={styles.ImageBackground_1_1593}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/147f/e80f/67698e42d1271b39b51261b170e52f7a"
                  }}
                  style={styles.ImageBackground_1_1595}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8355/072e/f7ae54ed7c40f3d906eb1adebffac03c"
                  }}
                  style={styles.ImageBackground_1_1597}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d93/445c/6a09cca8bca675513bb55dbc9d35e235"
                  }}
                  style={styles.ImageBackground_1_1599}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efb1/ce33/b93d70005a26f76d740ff95979deaa3d"
                  }}
                  style={styles.ImageBackground_1_1601}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66d3/2268/53c405e380476edbec551011b231d030"
                  }}
                  style={styles.ImageBackground_1_1603}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f22/c6c9/c349cd0942e0fc785619d13bfc9422a2"
                  }}
                  style={styles.ImageBackground_1_1605}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8da/1e12/ab24fec1bbdcfb10c4fc1cd398c9b40a"
                  }}
                  style={styles.ImageBackground_1_1607}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50ad/a037/a4ea56bd9fa902f0c72da8ef8a7e60ee"
                  }}
                  style={styles.ImageBackground_1_1609}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d98e/6a81/b6285061c6fa5fa7bc7f2a7979058ccf"
                  }}
                  style={styles.ImageBackground_1_1611}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c46c/c3b8/75132e3c181a66a0f9c1176f45eba73e"
                  }}
                  style={styles.ImageBackground_1_1613}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4863/dfdc/e1ddd2ba922cfa71048ec9b57b2b23d5"
                  }}
                  style={styles.ImageBackground_1_1615}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fca2/3c94/d879dc6efa2ef53992cd5c9d9598bb05"
                  }}
                  style={styles.ImageBackground_1_1617}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c80/1bed/c266ffe0cd173eef7ef3e645ea23627a"
                  }}
                  style={styles.ImageBackground_1_1619}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cf2/dc7f/e2e5aa91fd97fcc09d8098e5083d2120"
                  }}
                  style={styles.ImageBackground_1_1621}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7f3/bc38/d47f9327bdda0b2a0ee6d5b124a8618e"
                  }}
                  style={styles.ImageBackground_1_1623}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a54/04c0/1c73d614b5c8bb04a17310b737830791"
                  }}
                  style={styles.ImageBackground_1_1625}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/982a/6c84/a3a6ef3891f4a39c88009c8caf2c4993"
                  }}
                  style={styles.ImageBackground_1_1627}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76af/9227/d6ecd6fa86d9639ad8ef8f442f263dd4"
                  }}
                  style={styles.ImageBackground_1_1629}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1fb/685c/7e1d0d8a1dfde1d6b647a34773f9ee3d"
                  }}
                  style={styles.ImageBackground_1_1631}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d6f/7deb/3112aade8c5ce4a4af65348758a9d13a"
                  }}
                  style={styles.ImageBackground_1_1633}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92e3/ef12/5c01c752d504d4fdebdf334d617ab586"
                  }}
                  style={styles.ImageBackground_1_1635}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a7f/ec86/f0583ca54a2daf67d81c21383105d422"
                  }}
                  style={styles.ImageBackground_1_1637}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75a1/a6cb/7660c14a09e530fc8bbcfc070ee39536"
                  }}
                  style={styles.ImageBackground_1_1639}
                />
                <View style={styles.View_1_1641}>
                  <View style={styles.View_1_1642}>
                    <View style={styles.View_1_1643}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a92/05a9/033842867b5ee37532743d68855cd62a"
                        }}
                        style={styles.ImageBackground_1_1644}
                      />
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaf3/7115/26f132d4166deb9fef8f10c629e64c25"
                  }}
                  style={styles.ImageBackground_1_1646}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e372/f9a6/bfb1dfbb31d04c6a6cd592b7223ebf31"
                  }}
                  style={styles.ImageBackground_1_1648}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e372/f9a6/bfb1dfbb31d04c6a6cd592b7223ebf31"
                  }}
                  style={styles.ImageBackground_1_1650}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1328/93db/ac41769a8ad8bddf171c9be54f07eb81"
                  }}
                  style={styles.ImageBackground_1_1652}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1328/93db/ac41769a8ad8bddf171c9be54f07eb81"
                  }}
                  style={styles.ImageBackground_1_1654}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59fa/2bbc/148faed66a771acb519bb5bc72f54a27"
                  }}
                  style={styles.ImageBackground_1_1656}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0207/7ed6/3a31b7e87a008fa4d43ddfb98b3cda46"
                  }}
                  style={styles.ImageBackground_1_1658}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d4/dbe5/a31757ff3a8e0fe163d8805b849d6f3b"
                  }}
                  style={styles.ImageBackground_1_1660}
                />
                <View style={styles.View_1_1662}>
                  <View style={styles.View_1_1663}>
                    <View style={styles.View_1_1664}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70d3/aab8/0ce2d8d2f804b143b0e3a25861c4a30e"
                        }}
                        style={styles.ImageBackground_1_1665}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1667}>
                  <View style={styles.View_1_1668}>
                    <View style={styles.View_1_1669}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d17/0b2e/ed8c571045646f0b4c6167f0a025cfb5"
                        }}
                        style={styles.ImageBackground_1_1670}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1672}>
                  <View style={styles.View_1_1673}>
                    <View style={styles.View_1_1674}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffcc/e439/5b3af09b83975510f77e116ebef9b64e"
                        }}
                        style={styles.ImageBackground_1_1675}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1677}>
                  <View style={styles.View_1_1678}>
                    <View style={styles.View_1_1679}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8faf/ca4b/07340c81a25575490302d7187a9a6ade"
                        }}
                        style={styles.ImageBackground_1_1680}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1682}>
                  <View style={styles.View_1_1683}>
                    <View style={styles.View_1_1684}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e66/4629/dcfd322a576bc73fb812d0359ae809e4"
                        }}
                        style={styles.ImageBackground_1_1685}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1687}>
                  <View style={styles.View_1_1688}>
                    <View style={styles.View_1_1689}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8169/13ae/25de5583d6a2c26117af1f9fe3976da6"
                        }}
                        style={styles.ImageBackground_1_1690}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1692}>
                  <View style={styles.View_1_1693}>
                    <View style={styles.View_1_1694}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7752/329c/de4753ac0eee25d99cbf77fd0daef587"
                        }}
                        style={styles.ImageBackground_1_1695}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1697}>
                  <View style={styles.View_1_1698}>
                    <View style={styles.View_1_1699}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4696/fe3c/6aaa85857851cbfc72db6ad0c6707de7"
                        }}
                        style={styles.ImageBackground_1_1700}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1702}>
                  <View style={styles.View_1_1703}>
                    <View style={styles.View_1_1704}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/753d/3b35/a7882cd22e068c29a1f5990df757eaa7"
                        }}
                        style={styles.ImageBackground_1_1705}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1707}>
                  <View style={styles.View_1_1708}>
                    <View style={styles.View_1_1709}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed36/955b/f45b54a292dd1dd37ae03d7107d14ad6"
                        }}
                        style={styles.ImageBackground_1_1710}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1712}>
                  <View style={styles.View_1_1713}>
                    <View style={styles.View_1_1714}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a13d/6634/360667a3b8ad5f07ca1efec3c0da11cd"
                        }}
                        style={styles.ImageBackground_1_1715}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1717}>
                  <View style={styles.View_1_1718}>
                    <View style={styles.View_1_1719}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d02/be17/c9a14d490da68fd4767ed4478e396a84"
                        }}
                        style={styles.ImageBackground_1_1720}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1722}>
                  <View style={styles.View_1_1723}>
                    <View style={styles.View_1_1724}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ef5/6fe5/2aef861dc897b5de1a3ad380f24569f4"
                        }}
                        style={styles.ImageBackground_1_1725}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1727}>
                  <View style={styles.View_1_1728}>
                    <View style={styles.View_1_1729}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fc8/1d58/c87d572cab69c14a6a5b90b0f19d004d"
                        }}
                        style={styles.ImageBackground_1_1730}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1732}>
                  <View style={styles.View_1_1733}>
                    <View style={styles.View_1_1734}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60ec/4aef/24ccce6f908b88dd718a5f64da2aad7d"
                        }}
                        style={styles.ImageBackground_1_1735}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1737}>
                  <View style={styles.View_1_1738}>
                    <View style={styles.View_1_1739}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb53/245e/d14e2a9bee1dd5debdeae6ba3faa6535"
                        }}
                        style={styles.ImageBackground_1_1740}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1742}>
                  <View style={styles.View_1_1743}>
                    <View style={styles.View_1_1744}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/887e/35f2/97f46325976c8a7665bb94eca5d360fa"
                        }}
                        style={styles.ImageBackground_1_1745}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1747}>
                  <View style={styles.View_1_1748}>
                    <View style={styles.View_1_1749}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb68/1885/64e85d5d4ad858e8c66b8e6352024ee1"
                        }}
                        style={styles.ImageBackground_1_1750}
                      />
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/505e/ffd1/8d49e006fc68b2809ded4f0c4d356793"
                  }}
                  style={styles.ImageBackground_1_1752}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b7/700c/582f44c970208051ff8d37a5fbdf6c05"
                  }}
                  style={styles.ImageBackground_1_1754}
                />
                <View style={styles.View_1_1756}>
                  <View style={styles.View_1_1757}>
                    <View style={styles.View_1_1758}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5903/9d16/bac4481bc546f963b837a93342ba7a04"
                        }}
                        style={styles.ImageBackground_1_1759}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1761}>
                  <View style={styles.View_1_1762}>
                    <View style={styles.View_1_1763}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/071b/5c33/11ba56ff40e06bc7a102bd8bdb379bee"
                        }}
                        style={styles.ImageBackground_1_1764}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1766}>
                  <View style={styles.View_1_1767}>
                    <View style={styles.View_1_1768}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/182e/0d34/026164c919e2d78f6f4af2cc48f6f1a6"
                        }}
                        style={styles.ImageBackground_1_1769}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_1771}>
                  <View style={styles.View_1_1772}>
                    <View style={styles.View_1_1773}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afb1/89a0/30b87a1d60d94782a2d04501f3890976"
                        }}
                        style={styles.ImageBackground_1_1774}
                      />
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51d1/c7a4/bb4c450f23dccaf31643540a58df5650"
                  }}
                  style={styles.ImageBackground_1_1776}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51d1/c7a4/bb4c450f23dccaf31643540a58df5650"
                  }}
                  style={styles.ImageBackground_1_1778}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/040d/25f7/804fb6132a6e4db1af0b63ca6afafde3"
                  }}
                  style={styles.ImageBackground_1_1780}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51d1/c7a4/bb4c450f23dccaf31643540a58df5650"
                  }}
                  style={styles.ImageBackground_1_1782}
                />
                <View style={styles.View_1_1784}>
                  <View style={styles.View_1_1785}>
                    <View style={styles.View_1_1786}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7136/3032/f33641875beff1ca27e26d2c27c1b22b"
                        }}
                        style={styles.ImageBackground_1_1787}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/674e/8fab/e8d5438524c61f4fe819b92f69cdbe79"
                        }}
                        style={styles.ImageBackground_1_1789}
                      />
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d195/b31e/0d1b538e9775e6433c55d521ed099dd4"
                  }}
                  style={styles.ImageBackground_1_1791}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66c1/9214/7a45516708298eac0ca88238498b3e37"
                  }}
                  style={styles.ImageBackground_1_1793}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c35/880c/17d420d7d77edb4448390d7e6bd6d177"
                  }}
                  style={styles.ImageBackground_1_1795}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66c1/9214/7a45516708298eac0ca88238498b3e37"
                  }}
                  style={styles.ImageBackground_1_1797}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_19_1} />
      <View style={styles.View_19_2} />
      <View style={styles.View_19_3} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_1014: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("29.6448087431694%"),
    minHeight: hp("29.6448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("418.9890710382514%")
  },
  View_1_1015: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("29.6448087431694%"),
    minHeight: hp("29.6448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_1033: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.11111111111111%"),
    top: hp("3.5519125683060224%")
  },
  View_1_1034: {
    width: wp("7.784635225931804%"),
    height: hp("22.404371584699454%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1035: {
    width: wp("7.784635225931804%"),
    height: hp("22.404371584699454%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1036: {
    width: wp("7.784635225931804%"),
    height: hp("22.404371584699454%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1037: {
    width: wp("1.4222568935818143%"),
    height: hp("5.145753016237353%"),
    top: hp("12.7685546875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5284966362847143%")
  },
  ImageBackground_1_1039: {
    width: wp("1.9417639573415122%"),
    height: hp("2.862058962629141%"),
    top: hp("11.147954555157128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4205390082465215%")
  },
  ImageBackground_1_1041: {
    width: wp("3.5599025090535483%"),
    height: hp("5.789466503539372%"),
    top: hp("10.730297317921782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0139295789930571%")
  },
  ImageBackground_1_1043: {
    width: wp("0.7068680392371284%"),
    height: hp("0.8687532664648171%"),
    top: hp("19.28425773245391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8911404079861143%")
  },
  ImageBackground_1_1045: {
    width: wp("0.6898401843176948%"),
    height: hp("0.9266920428458459%"),
    top: hp("19.033680066384818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.211195203993057%")
  },
  ImageBackground_1_1047: {
    width: wp("1.0049512651231554%"),
    height: hp("0.7351115101673564%"),
    top: hp("15.775820205771822%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8145073784722143%")
  },
  ImageBackground_1_1049: {
    width: wp("0.7190416918860542%"),
    height: hp("0.9522894692551243%"),
    top: hp("15.441677739711395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3730061848958286%")
  },
  ImageBackground_1_1051: {
    width: wp("0.5450555682182312%"),
    height: hp("0.5847542663740981%"),
    top: hp("15.909430498633867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8279622395833286%")
  },
  View_1_1053: {
    width: wp("2.3124927944607205%"),
    height: hp("2.7212244565369654%"),
    top: hp("13.555791469219628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7847696940104072%")
  },
  View_1_1054: {
    width: wp("2.3124927944607205%"),
    height: hp("2.7212244565369654%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1055: {
    width: wp("2.3124927944607205%"),
    height: hp("2.7212244565369654%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1056: {
    width: wp("2.3124927944607205%"),
    height: hp("2.7212244565369654%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1058: {
    width: wp("3.6764025688171387%"),
    height: hp("4.87952831664372%"),
    top: hp("6.461688599299805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8479478624131929%")
  },
  ImageBackground_1_1060: {
    width: wp("3.7530557314554853%"),
    height: hp("5.029855008985176%"),
    top: hp("6.386511964224724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.80963134765625%")
  },
  ImageBackground_1_1062: {
    width: wp("0.2202828228473663%"),
    height: hp("1.4932730158821481%"),
    top: hp("7.984682510459322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444919162326386%")
  },
  ImageBackground_1_1064: {
    width: wp("0.29695285691155326%"),
    height: hp("1.6436337121848852%"),
    top: hp("7.909489199111988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.406602647569443%")
  },
  ImageBackground_1_1066: {
    width: wp("4.248381720648871%"),
    height: hp("3.221594701047804%"),
    top: hp("5.916708023821627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4109022352430429%")
  },
  ImageBackground_1_1068: {
    width: wp("0.1848924822277493%"),
    height: hp("0.8186318183857235%"),
    top: hp("9.026215766948383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2537841796875%")
  },
  ImageBackground_1_1070: {
    width: wp("0.8090849717458088%"),
    height: hp("0.3659393618015644%"),
    top: hp("10.128834208504088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.61505126953125%")
  },
  ImageBackground_1_1072: {
    width: wp("0.3576944271723429%"),
    height: hp("0.7016942149302998%"),
    top: hp("9.201616797942222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6143459743923643%")
  },
  ImageBackground_1_1074: {
    width: wp("0.2725277841091156%"),
    height: hp("0.5346216139246206%"),
    top: hp("9.118068674222968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.930833604600693%")
  },
  ImageBackground_1_1076: {
    width: wp("0.434340238571167%"),
    height: hp("1.4535076631222916%"),
    top: hp("7.93188543267587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1764458550347143%")
  },
  ImageBackground_1_1078: {
    width: wp("0.34447915024227566%"),
    height: hp("1.1527794957812367%"),
    top: hp("7.998723931651227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4624565972222143%")
  },
  ImageBackground_1_1080: {
    width: wp("4.985772238837348%"),
    height: hp("6.3829755522514295%"),
    top: hp("1.4149316673069734%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03790961371527146%")
  },
  ImageBackground_1_1082: {
    width: wp("5.062093734741211%"),
    height: hp("6.531559574148043%"),
    top: hp("1.3411891916410354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1084: {
    width: wp("0.5127700832155015%"),
    height: hp("0.8982655129146054%"),
    top: hp("7.148167344390345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06435818142360006%")
  },
  ImageBackground_1_1086: {
    width: wp("0.5896360344356961%"),
    height: hp("1.0487830704027186%"),
    top: hp("7.0729907093152065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025804307725692865%")
  },
  ImageBackground_1_1088: {
    width: wp("0.43450693289438885%"),
    height: hp("1.0600613114612352%"),
    top: hp("6.303780977843246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.569430881076386%")
  },
  ImageBackground_1_1090: {
    width: wp("0.43450693289438885%"),
    height: hp("1.0600613114612352%"),
    top: hp("6.303780977843246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.569430881076386%")
  },
  View_1_1092: {
    width: wp("0.5127700832155015%"),
    height: hp("0.8982655129146054%"),
    top: hp("7.148167344390345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06435818142360006%")
  },
  View_1_1093: {
    width: wp("0.5127700832155015%"),
    height: hp("0.8982655129146054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1094: {
    width: wp("0.5127700832155015%"),
    height: hp("0.8982655129146054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1095: {
    width: wp("0.5127700832155015%"),
    height: hp("0.8982655129146054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1097: {
    width: wp("0.43450693289438885%"),
    height: hp("1.0600613114612352%"),
    top: hp("6.303780977843246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.569430881076386%")
  },
  View_1_1098: {
    width: wp("0.43450693289438885%"),
    height: hp("1.0600613114612352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1099: {
    width: wp("0.43450693289438885%"),
    height: hp("1.0600613114612352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1100: {
    width: wp("0.43450693289438885%"),
    height: hp("1.0600613114612352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1102: {
    width: wp("0.5111669169531928%"),
    height: hp("1.210447478164089%"),
    top: hp("6.228604342768051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.531114366319443%")
  },
  ImageBackground_1_1104: {
    width: wp("2.1802340613471136%"),
    height: hp("1.2697469992715804%"),
    top: hp("4.732492582394059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3240966796875%")
  },
  ImageBackground_1_1106: {
    width: wp("1.3370956314934626%"),
    height: hp("0.43683055320072695%"),
    top: hp("4.679945648693604%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3559841579861143%")
  },
  ImageBackground_1_1108: {
    width: wp("1.3607491387261286%"),
    height: hp("6.444584476491793%"),
    top: hp("10.901679367315523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5014716254340215%")
  },
  ImageBackground_1_1110: {
    width: wp("0.3917783498764038%"),
    height: hp("0.7046691055506306%"),
    top: hp("16.794940552424805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7499186197916714%")
  },
  ImageBackground_1_1112: {
    width: wp("1.0648988352881539%"),
    height: hp("4.410835432876004%"),
    top: hp("13.603902514515028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0221354166666572%")
  },
  ImageBackground_1_1114: {
    width: wp("0.23464585343996683%"),
    height: hp("3.188070964292099%"),
    top: hp("12.718392460724033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8840060763888857%")
  },
  ImageBackground_1_1116: {
    width: wp("0.14192061291800603%"),
    height: hp("2.2539654716116484%"),
    top: hp("14.03825270022196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7662556966145786%")
  },
  ImageBackground_1_1118: {
    width: wp("0.9855445226033528%"),
    height: hp("1.3617885568754269%"),
    top: hp("12.70193298006319%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9636773003472143%")
  },
  ImageBackground_1_1120: {
    width: wp("1.0073214769363403%"),
    height: hp("1.4983242326746873%"),
    top: hp("12.352098141862996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.03759765625%")
  },
  ImageBackground_1_1122: {
    width: wp("1.6266632080078125%"),
    height: hp("0.8664640572553124%"),
    top: hp("10.649067196038231%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.764784071180543%")
  },
  ImageBackground_1_1124: {
    width: wp("0.6756203704410129%"),
    height: hp("2.188607773494199%"),
    top: hp("11.198100105660842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.923780653211807%")
  },
  ImageBackground_1_1126: {
    width: wp("0.21421151028739083%"),
    height: hp("2.43337636436921%"),
    top: hp("10.930796138575772%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.206339518229157%")
  },
  ImageBackground_1_1128: {
    width: wp("0.8090689447191027%"),
    height: hp("0.3007287536162496%"),
    top: hp("13.236340798966864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.386494954427079%")
  },
  ImageBackground_1_1130: {
    width: wp("0.7465260558658176%"),
    height: hp("1.5965517752808953%"),
    top: hp("11.059153405694985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.2466498480902715%")
  },
  ImageBackground_1_1132: {
    width: wp("0.28463946448432076%"),
    height: hp("0.8353968135646133%"),
    top: hp("13.035808625768368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.132344563802079%")
  },
  ImageBackground_1_1134: {
    width: wp("0.8281281259324815%"),
    height: hp("2.7636838089572926%"),
    top: hp("11.246344561133867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.583360460069443%")
  },
  ImageBackground_1_1136: {
    width: wp("0.37882082992129856%"),
    height: hp("0.2132572762953128%"),
    top: hp("11.916480559468937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.906846788194443%")
  },
  ImageBackground_1_1138: {
    width: wp("0.5147364735603333%"),
    height: hp("0.23681081709314564%"),
    top: hp("12.542641228013963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.651719835069443%")
  },
  ImageBackground_1_1140: {
    width: wp("0.5417268474896749%"),
    height: hp("0.4043447189643735%"),
    top: hp("13.094359017460704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.582139756944443%")
  },
  ImageBackground_1_1142: {
    width: wp("0.5740139219495985%"),
    height: hp("0.7691961820008325%"),
    top: hp("11.239190440360346%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2441609700520786%")
  },
  ImageBackground_1_1144: {
    width: wp("0.6506652964486016%"),
    height: hp("0.9195451527996792%"),
    top: hp("11.164030481557347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2058444552951357%")
  },
  ImageBackground_1_1146: {
    width: wp("0.5862241321139865%"),
    height: hp("0.7409557618730055%"),
    top: hp("11.100360474299805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8951687282986143%")
  },
  ImageBackground_1_1148: {
    width: wp("0.6629449791378446%"),
    height: hp("0.891337108090927%"),
    top: hp("11.025167162952528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8568183051215215%")
  },
  ImageBackground_1_1150: {
    width: wp("0.35768747329711914%"),
    height: hp("0.7016942149302998%"),
    top: hp("11.690950654243466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.79815673828125%")
  },
  ImageBackground_1_1152: {
    width: wp("0.434340238571167%"),
    height: hp("0.8520513935818699%"),
    top: hp("11.615757342896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.759840223524307%")
  },
  ImageBackground_1_1154: {
    width: wp("0.2757638692855835%"),
    height: hp("0.6592449594716556%"),
    top: hp("11.505510507385509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.550218370225693%")
  },
  ImageBackground_1_1156: {
    width: wp("0.3524098131391737%"),
    height: hp("0.8096230486051632%"),
    top: hp("11.430350548582624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5119357638888857%")
  },
  ImageBackground_1_1158: {
    width: wp("0.24791664547390407%"),
    height: hp("0.5473182501037264%"),
    top: hp("11.456048684041946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0630154079861143%")
  },
  ImageBackground_1_1160: {
    width: wp("0.3245690133836534%"),
    height: hp("0.6976932124361966%"),
    top: hp("11.380872048966864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.024698893229157%")
  },
  ImageBackground_1_1162: {
    width: wp("0.5188676714897156%"),
    height: hp("2.566861845756489%"),
    top: hp("12.264997972165247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6126776801215215%")
  },
  ImageBackground_1_1164: {
    width: wp("0.5956490834554036%"),
    height: hp("2.7172054749368972%"),
    top: hp("12.189821337090109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5745307074652715%")
  },
  ImageBackground_1_1166: {
    width: wp("0.40280699729919434%"),
    height: hp("2.138322819777525%"),
    top: hp("12.108791330472968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0523681640625%")
  },
  ImageBackground_1_1168: {
    width: wp("0.47945658365885413%"),
    height: hp("2.288692766199998%"),
    top: hp("12.033614695397887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.014051649305543%")
  },
  ImageBackground_1_1170: {
    width: wp("2.3448509640163846%"),
    height: hp("1.2786217725993505%"),
    top: hp("15.306499877262581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7737833658854214%")
  },
  ImageBackground_1_1172: {
    width: wp("0.651521815194024%"),
    height: hp("0.744014620129528%"),
    top: hp("15.841091135160468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7640787760416714%")
  },
  ImageBackground_1_1174: {
    width: wp("2.386027706993951%"),
    height: hp("3.5300007283361885%"),
    top: hp("15.831285487107209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7236667209201357%")
  },
  ImageBackground_1_1176: {
    width: wp("2.462560865614149%"),
    height: hp("3.679929535245635%"),
    top: hp("15.756075499487679%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6854519314236143%")
  },
  ImageBackground_1_1178: {
    width: wp("0.2895815504921807%"),
    height: hp("0.7852787528533101%"),
    top: hp("17.062194490693287%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.032362196180543%")
  },
  ImageBackground_1_1180: {
    width: wp("0.8077083693610296%"),
    height: hp("1.0756168860555346%"),
    top: hp("19.168491050845205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8486531575520786%")
  },
  ImageBackground_1_1182: {
    width: wp("0.672374963760376%"),
    height: hp("1.0304568243808434%"),
    top: hp("19.88940629802761%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9168429904513857%")
  },
  ImageBackground_1_1184: {
    width: wp("0.7490273316701254%"),
    height: hp("1.1812707765506265%"),
    top: hp("19.81421298668033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8785264756944429%")
  },
  ImageBackground_1_1186: {
    width: wp("0.8042948775821263%"),
    height: hp("1.075594281889702%"),
    top: hp("18.96800890646341%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.163587782118043%")
  },
  ImageBackground_1_1188: {
    width: wp("0.672374963760376%"),
    height: hp("1.0304954534019928%"),
    top: hp("19.688890801101422%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2273017035590215%")
  },
  ImageBackground_1_1190: {
    width: wp("0.749028656217787%"),
    height: hp("1.1804084308811875%"),
    top: hp("19.613714166026227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1889851888020786%")
  },
  ImageBackground_1_1192: {
    width: wp("1.2276617685953777%"),
    height: hp("1.681800487914372%"),
    top: hp("20.7225695333845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.392364501953125%")
  },
  ImageBackground_1_1194: {
    width: wp("1.2849685880872939%"),
    height: hp("1.8471194095298893%"),
    top: hp("20.512932115565206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2101779513888857%")
  },
  ImageBackground_1_1196: {
    width: wp("0.13446581860383353%"),
    height: hp("2.6130256757058734%"),
    top: hp("13.45266540193819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030802408854157%")
  },
  ImageBackground_1_1198: {
    width: wp("0.1618055502573649%"),
    height: hp("0.31744345941178786%"),
    top: hp("15.30798406548837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.862040201822907%")
  },
  ImageBackground_1_1200: {
    width: wp("1.5732569164699979%"),
    height: hp("6.7925218675957355%"),
    top: hp("12.569056443177942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1693115234375%")
  },
  ImageBackground_1_1202: {
    width: wp("1.6499047809176974%"),
    height: hp("6.942859503740821%"),
    top: hp("12.493896484375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.130995008680543%")
  },
  ImageBackground_1_1204: {
    width: wp("1.8757441308763292%"),
    height: hp("10.248202964907787%"),
    top: hp("1.1488617443647513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.870836046006943%")
  },
  ImageBackground_1_1206: {
    width: wp("1.9521496031019423%"),
    height: hp("10.398561446393122%"),
    top: hp("1.0737184618340052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.832485622829864%")
  },
  ImageBackground_1_1208: {
    width: wp("3.771020571390788%"),
    height: hp("4.423893996275187%"),
    top: hp("0.07539342661368664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8371785481770786%")
  },
  View_1_1210: {
    width: wp("3.519020875295003%"),
    height: hp("2.1154876615180345%"),
    top: hp("0.07539342661368664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8371785481770786%")
  },
  View_1_1211: {
    width: wp("3.519020875295003%"),
    height: hp("2.1154876615180345%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1212: {
    width: wp("3.519020875295003%"),
    height: hp("2.1154876615180345%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1213: {
    width: wp("3.519020875295003%"),
    height: hp("2.1154876615180345%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1215: {
    width: wp("3.8476779725816512%"),
    height: hp("4.574453114160423%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.798828125%")
  },
  ImageBackground_1_1217: {
    width: wp("0.19588195615344578%"),
    height: hp("0.584740716902936%"),
    top: hp("8.14072238942964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3510064019097143%")
  },
  ImageBackground_1_1219: {
    width: wp("0.1618125041325887%"),
    height: hp("0.5012179984421027%"),
    top: hp("8.124012764685801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.594462076822907%")
  },
  ImageBackground_1_1221: {
    width: wp("0.7835170957777235%"),
    height: hp("0.4773332773010588%"),
    top: hp("7.421141244023204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9635687934027715%")
  },
  ImageBackground_1_1223: {
    width: wp("0.7835153738657634%"),
    height: hp("0.4773259814319715%"),
    top: hp("7.371029046063825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2495456271701357%")
  },
  ImageBackground_1_1225: {
    width: wp("0.7103223270840114%"),
    height: hp("1.843941537408881%"),
    top: hp("8.268445958205177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5122884114583286%")
  },
  ImageBackground_1_1227: {
    width: wp("0.4002484348085191%"),
    height: hp("0.5027112087916807%"),
    top: hp("8.765749071465109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6605360243055571%")
  },
  ImageBackground_1_1229: {
    width: wp("0.786883036295573%"),
    height: hp("1.9945949804587442%"),
    top: hp("8.193402733307664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4740397135416572%")
  },
  View_1_1231: {
    width: wp("2.8137085172865124%"),
    height: hp("1.5825446186169898%"),
    top: hp("9.761289169228064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1498345269097143%")
  },
  View_1_1232: {
    width: wp("2.8137085172865124%"),
    height: hp("1.5825446186169898%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1233: {
    width: wp("2.8137085172865124%"),
    height: hp("1.5825446186169898%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1234: {
    width: wp("2.8137085172865124%"),
    height: hp("1.5825446186169898%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1236: {
    width: wp("0.2260077330801222%"),
    height: hp("0.5657199953423172%"),
    top: hp("9.085833440061492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.076917860243057%")
  },
  View_1_1237: {
    width: wp("0.2260077330801222%"),
    height: hp("0.5657199953423172%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1238: {
    width: wp("0.2260077330801222%"),
    height: hp("0.5657199953423172%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1239: {
    width: wp("0.2260077330801222%"),
    height: hp("0.5657199953423172%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1241: {
    width: wp("0.5283962355719672%"),
    height: hp("1.6389575812334571%"),
    top: hp("8.343372449197318%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5500284830729214%")
  },
  View_1_1242: {
    width: wp("0.5283962355719672%"),
    height: hp("1.6389575812334571%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1243: {
    width: wp("0.5283962355719672%"),
    height: hp("1.6389575812334571%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1244: {
    width: wp("0.5283962355719672%"),
    height: hp("1.6389575812334571%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1246: {
    width: wp("1.0031596819559734%"),
    height: hp("2.1521910943620193%"),
    top: hp("5.362021857923423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03811306423611427%")
  },
  View_1_1247: {
    width: wp("1.0031596819559734%"),
    height: hp("2.1521910943620193%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1248: {
    width: wp("1.0031596819559734%"),
    height: hp("2.1521910943620193%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1249: {
    width: wp("1.0031596819559734%"),
    height: hp("2.1521910943620193%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1251: {
    width: wp("0.7544810242123074%"),
    height: hp("1.9450256733295046%"),
    top: hp("4.883879781420774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.269205729166657%")
  },
  View_1_1252: {
    width: wp("0.7544810242123074%"),
    height: hp("1.9450256733295046%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1253: {
    width: wp("0.7544810242123074%"),
    height: hp("1.9450256733295046%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1254: {
    width: wp("0.7544810242123074%"),
    height: hp("1.9450256733295046%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1256: {
    width: wp("1.0248651769426134%"),
    height: hp("1.2827173608248352%"),
    top: hp("1.9025291901468222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0351765950520786%")
  },
  View_1_1257: {
    width: wp("1.0248651769426134%"),
    height: hp("1.2827173608248352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1258: {
    width: wp("1.0248651769426134%"),
    height: hp("1.2827173608248352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1259: {
    width: wp("1.0248651769426134%"),
    height: hp("1.2827173608248352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1261: {
    width: wp("0.24546340107917788%"),
    height: hp("0.7127729269976173%"),
    top: hp("3.281823663763646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0976630316840215%")
  },
  View_1_1262: {
    width: wp("0.24546340107917788%"),
    height: hp("0.7127729269976173%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1263: {
    width: wp("0.24546340107917788%"),
    height: hp("0.7127729269976173%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1264: {
    width: wp("0.24546340107917788%"),
    height: hp("0.7127729269976173%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1266: {
    width: wp("0.687811639573839%"),
    height: hp("0.240697479638897%"),
    top: hp("5.021459027066214%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0880466037326357%")
  },
  View_1_1267: {
    width: wp("0.687811639573839%"),
    height: hp("0.240697479638897%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1268: {
    width: wp("0.687811639573839%"),
    height: hp("0.240697479638897%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1269: {
    width: wp("0.687811639573839%"),
    height: hp("0.240697479638897%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1271: {
    width: wp("1.607145733303494%"),
    height: hp("4.261442611777717%"),
    top: hp("0.23785367038078675%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.0010443793402715%")
  },
  View_1_1272: {
    width: wp("1.607145733303494%"),
    height: hp("4.261442611777717%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1273: {
    width: wp("1.607145733303494%"),
    height: hp("4.261442611777717%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1274: {
    width: wp("1.607145733303494%"),
    height: hp("4.261442611777717%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1276: {
    width: wp("3.3088329103257923%"),
    height: hp("1.2747257785067532%"),
    top: hp("10.730313994193978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2649875217013857%")
  },
  View_1_1277: {
    width: wp("3.3088329103257923%"),
    height: hp("1.2747257785067532%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1278: {
    width: wp("3.3088329103257923%"),
    height: hp("1.2747257785067532%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1279: {
    width: wp("3.3088329103257923%"),
    height: hp("1.2747257785067532%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1281: {
    width: wp("0.6337842676374648%"),
    height: hp("1.3276717701896292%"),
    top: hp("11.992224187798797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8821072048611%")
  },
  View_1_1282: {
    width: wp("0.6337842676374648%"),
    height: hp("1.3276717701896292%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1283: {
    width: wp("0.6337842676374648%"),
    height: hp("1.3276717701896292%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1284: {
    width: wp("0.6337842676374648%"),
    height: hp("1.3276717701896292%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1286: {
    width: wp("1.4222568935818143%"),
    height: hp("4.493333472580206%"),
    top: hp("13.420963808486988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5284966362847143%")
  },
  View_1_1287: {
    width: wp("1.4222568935818143%"),
    height: hp("4.493333472580206%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1288: {
    width: wp("1.4222568935818143%"),
    height: hp("4.493333472580206%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1289: {
    width: wp("1.4222568935818143%"),
    height: hp("4.493333472580206%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1291: {
    width: wp("1.9417639573415122%"),
    height: hp("2.700326742370272%"),
    top: hp("11.309697719219628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4205390082465215%")
  },
  View_1_1292: {
    width: wp("1.9417639573415122%"),
    height: hp("2.700326742370272%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1293: {
    width: wp("1.9417639573415122%"),
    height: hp("2.700326742370272%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1294: {
    width: wp("1.9417639573415122%"),
    height: hp("2.700326742370272%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1296: {
    width: wp("0.235948512951533%"),
    height: hp("1.4790860681585927%"),
    top: hp("13.607804762209696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7597181532118071%")
  },
  View_1_1297: {
    width: wp("0.235948512951533%"),
    height: hp("1.4790860681585927%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1298: {
    width: wp("0.235948512951533%"),
    height: hp("1.4790860681585927%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1299: {
    width: wp("0.235948512951533%"),
    height: hp("1.4790860681585927%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1301: {
    width: wp("0.18736110793219674%"),
    height: hp("0.818647778099352%"),
    top: hp("11.448694448001959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.663960774739579%")
  },
  View_1_1302: {
    width: wp("0.18736110793219674%"),
    height: hp("0.818647778099352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1303: {
    width: wp("0.18736110793219674%"),
    height: hp("0.818647778099352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1304: {
    width: wp("0.18736110793219674%"),
    height: hp("0.818647778099352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1306: {
    width: wp("0.09368055396609837%"),
    height: hp("0.3174298122280934%"),
    top: hp("11.88307798625334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9983181423611143%")
  },
  View_1_1307: {
    width: wp("0.09368055396609837%"),
    height: hp("0.3174298122280934%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1308: {
    width: wp("0.09368055396609837%"),
    height: hp("0.3174298122280934%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1309: {
    width: wp("0.09368055396609837%"),
    height: hp("0.3174298122280934%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1311: {
    width: wp("0.10565705597400665%"),
    height: hp("0.5991734442163686%"),
    top: hp("12.6861572265625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9369439019097143%")
  },
  View_1_1312: {
    width: wp("0.10565705597400665%"),
    height: hp("0.5991734442163686%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1313: {
    width: wp("0.10565705597400665%"),
    height: hp("0.5991734442163686%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1314: {
    width: wp("0.10565705597400665%"),
    height: hp("0.5991734442163686%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1316: {
    width: wp("0.5380436778068542%"),
    height: hp("1.453735007614386%"),
    top: hp("12.166874786543701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7618069118923643%")
  },
  View_1_1317: {
    width: wp("0.5380436778068542%"),
    height: hp("1.453735007614386%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1318: {
    width: wp("0.5380436778068542%"),
    height: hp("1.453735007614386%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1319: {
    width: wp("0.5380436778068542%"),
    height: hp("1.453735007614386%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1321: {
    width: wp("0.03406944374243418%"),
    height: hp("1.8711757138778602%"),
    top: hp("16.377249962645124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.06146240234375%")
  },
  ImageBackground_1_1323: {
    width: wp("0.07659721705648634%"),
    height: hp("1.8738729706227455%"),
    top: hp("16.37456508282105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0572238498263857%")
  },
  View_1_1325: {
    width: wp("2.3403331968519425%"),
    height: hp("3.165470706960542%"),
    top: hp("15.992995298625374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7239040798611%")
  },
  View_1_1326: {
    width: wp("2.3403331968519425%"),
    height: hp("3.165470706960542%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1327: {
    width: wp("2.3403331968519425%"),
    height: hp("3.165470706960542%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1328: {
    width: wp("2.3403331968519425%"),
    height: hp("3.165470706960542%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1330: {
    width: wp("0.38595835367838544%"),
    height: hp("2.0717649511952216%"),
    top: hp("17.17919521644467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.08074951171875%")
  },
  View_1_1331: {
    width: wp("0.38595835367838544%"),
    height: hp("2.0717649511952216%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1332: {
    width: wp("0.38595835367838544%"),
    height: hp("2.0717649511952216%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1333: {
    width: wp("0.38595835367838544%"),
    height: hp("2.0717649511952216%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1335: {
    width: wp("0.7112222247653537%"),
    height: hp("0.33302180102614104%"),
    top: hp("19.323363590761574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9123331705729072%")
  },
  View_1_1336: {
    width: wp("0.7112222247653537%"),
    height: hp("0.33302180102614104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1337: {
    width: wp("0.7112222247653537%"),
    height: hp("0.33302180102614104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1338: {
    width: wp("0.7112222247653537%"),
    height: hp("0.33302180102614104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1340: {
    width: wp("0.7286204232109917%"),
    height: hp("0.4900523547917767%"),
    top: hp("19.030328135672846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.211195203993057%")
  },
  View_1_1341: {
    width: wp("0.7286204232109917%"),
    height: hp("0.4900523547917767%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1342: {
    width: wp("0.7286204232109917%"),
    height: hp("0.4900523547917767%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1343: {
    width: wp("0.7286204232109917%"),
    height: hp("0.4900523547917767%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1345: {
    width: wp("0.034013887246449784%"),
    height: hp("0.302580764384869%"),
    top: hp("20.134480794270814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0614963107638857%")
  },
  ImageBackground_1_1347: {
    width: wp("0.034013887246449784%"),
    height: hp("0.302580764384869%"),
    top: hp("20.151173742742515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.393663194444443%")
  },
  ImageBackground_1_1349: {
    width: wp("0.03400694164964888%"),
    height: hp("0.3025671172011745%"),
    top: hp("20.386926202826146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3645290798611143%")
  },
  ImageBackground_1_1351: {
    width: wp("0.034013887246449784%"),
    height: hp("0.302580764384869%"),
    top: hp("19.900562724129088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7307400173611143%")
  },
  View_1_1353: {
    width: wp("0.2552555667029487%"),
    height: hp("0.28240472241177583%"),
    top: hp("21.329469107539296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5593804253472285%")
  },
  View_1_1354: {
    width: wp("0.2552555667029487%"),
    height: hp("0.28240472241177583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1355: {
    width: wp("0.2552555667029487%"),
    height: hp("0.28240472241177583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1356: {
    width: wp("0.24674064583248562%"),
    height: hp("0.26589736261003005%"),
    top: hp("0.008171373377649616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.004272460937485789%")
  },
  ImageBackground_1_1358: {
    width: wp("0.2552555667029487%"),
    height: hp("0.28240472241177583%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1360: {
    width: wp("0.6046767367257012%"),
    height: hp("0.5012179984421027%"),
    top: hp("12.698897898522887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.945936414930543%")
  },
  ImageBackground_1_1362: {
    width: wp("0.07404166791174147%"),
    height: hp("0.15037084212068652%"),
    top: hp("12.87878484673837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.229749891493043%")
  },
  ImageBackground_1_1364: {
    width: wp("0.3832368055979411%"),
    height: hp("0.3174894494437129%"),
    top: hp("12.640380859375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4490966796875%")
  },
  ImageBackground_1_1366: {
    width: wp("0.042583329810036555%"),
    height: hp("0.08352269403270034%"),
    top: hp("12.757414937670774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6194525824652715%")
  },
  View_1_1368: {
    width: wp("10.76388888888889%"),
    minWidth: wp("10.76388888888889%"),
    height: hp("6.539047220365597%"),
    minHeight: hp("6.539047220365597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.569444444444443%"),
    top: hp("2.588374236893742%")
  },
  View_1_1369: {
    width: wp("10.76388888888889%"),
    minWidth: wp("10.76388888888889%"),
    minHeight: hp("3.814444255307724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1369: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1370: {
    width: wp("10.208333333333334%"),
    minWidth: wp("10.208333333333334%"),
    minHeight: hp("2.179682319932948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.359360991931339%")
  },
  Text_1_1370: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1371: {
    width: wp("10.694444444444445%"),
    minWidth: wp("10.694444444444445%"),
    height: hp("5.5854359611136015%"),
    minHeight: hp("5.5854359611136015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.569444444444443%"),
    top: hp("12.396940637807347%")
  },
  View_1_1372: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.449205930115747%"),
    minHeight: hp("5.449205930115747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1362284675973342%")
  },
  ImageBackground_1_1373: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.449205930115747%"),
    minHeight: hp("5.449205930115747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1374: {
    width: wp("1.6666666666666667%"),
    height: hp("3.2695236101827985%"),
    top: hp("1.0898444170508697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555571%")
  },
  View_1_1376: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.449205930115747%"),
    minHeight: hp("5.449205930115747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.916666666666657%"),
    top: hp("0%")
  },
  ImageBackground_1_1377: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.449205930115747%"),
    minHeight: hp("5.449205930115747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1378: {
    width: wp("1.6666666666666667%"),
    height: hp("3.2695236101827985%"),
    top: hp("1.0898444170509265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555571%")
  },
  View_1_1380: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.449205930115747%"),
    minHeight: hp("5.449205930115747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9583333333333286%"),
    top: hp("0.1362284675973342%")
  },
  ImageBackground_1_1381: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.449205930115747%"),
    minHeight: hp("5.449205930115747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1382: {
    width: wp("1.6666666666666667%"),
    height: hp("3.2695236101827985%"),
    top: hp("1.0898444170508697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555571%")
  },
  View_1_1028: {
    width: wp("10.069444444444445%"),
    minWidth: wp("10.069444444444445%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.861111111111114%"),
    top: hp("4.508196721311492%")
  },
  View_1_1029: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1029: {
    color: "rgba(78, 205, 196, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1030: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.601092896174862%")
  },
  Text_1_1030: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1031: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.83606557377044%")
  },
  Text_1_1031: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1032: {
    width: wp("10.069444444444445%"),
    minWidth: wp("10.069444444444445%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.071038251366076%")
  },
  Text_1_1032: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1022: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.47222222222222%"),
    top: hp("4.508196721311492%")
  },
  View_1_1023: {
    width: wp("6.458333333333334%"),
    minWidth: wp("6.458333333333334%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1023: {
    color: "rgba(78, 205, 196, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1024: {
    width: wp("6.527777777777779%"),
    minWidth: wp("6.527777777777779%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.874316939890662%")
  },
  Text_1_1024: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1025: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.109289617486354%")
  },
  Text_1_1025: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1026: {
    width: wp("6.527777777777779%"),
    minWidth: wp("6.527777777777779%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.344262295081876%")
  },
  Text_1_1026: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1027: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.57923497267757%")
  },
  Text_1_1027: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1016: {
    width: wp("10.208333333333334%"),
    minWidth: wp("10.208333333333334%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("4.508196721311492%")
  },
  View_1_1017: {
    width: wp("10.208333333333334%"),
    minWidth: wp("10.208333333333334%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1017: {
    color: "rgba(78, 205, 196, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1018: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.874316939890662%")
  },
  Text_1_1018: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1019: {
    width: wp("6.527777777777779%"),
    minWidth: wp("6.527777777777779%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.109289617486354%")
  },
  Text_1_1019: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1020: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.344262295081876%")
  },
  Text_1_1020: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1021: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.57923497267757%")
  },
  Text_1_1021: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1416: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("81.9672131147541%"),
    minHeight: hp("81.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("336.88524590163934%")
  },
  View_1_962: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("81.9672131147541%"),
    minHeight: hp("81.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 255, 247, 1)"
  },
  View_1_963: {
    width: wp("16.944444444444446%"),
    minWidth: wp("16.944444444444446%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.52777777777778%"),
    top: hp("4.491595492336899%")
  },
  Text_1_963: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_965: {
    width: wp("70.27777353922527%"),
    minWidth: wp("70.27777353922527%"),
    height: hp("61.47540983606557%"),
    minHeight: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.86111111111111%"),
    top: hp("16.120218579234972%")
  },
  ImageBackground_1_966: {
    width: wp("70.27777353922527%"),
    minWidth: wp("70.27777353922527%"),
    height: hp("61.47540983606557%"),
    minHeight: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_985: {
    width: wp("10.416666666666668%"),
    minWidth: wp("10.416666666666668%"),
    height: hp("5.288207465833653%"),
    minHeight: hp("5.288207465833653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.52777777777777%"),
    top: hp("52.48544828487883%")
  },
  View_1_986: {
    width: wp("10.416666666666668%"),
    minWidth: wp("10.416666666666668%"),
    height: hp("5.288207465833653%"),
    minHeight: hp("5.288207465833653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 109, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_987: {
    width: wp("6.597222222222222%"),
    minWidth: wp("6.597222222222222%"),
    minHeight: hp("2.1152829863334612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444429%"),
    top: hp("1.5864638031505365%")
  },
  Text_1_987: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_967: {
    width: wp("41.66666666666667%"),
    minWidth: wp("41.66666666666667%"),
    height: hp("19.83077877857646%"),
    minHeight: hp("19.83077877857646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.277777777777782%"),
    top: hp("28.820734076161216%")
  },
  View_1_968: {
    width: wp("41.66666666666667%"),
    minWidth: wp("41.66666666666667%"),
    height: hp("19.83077877857646%"),
    minHeight: hp("19.83077877857646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(26, 83, 92, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_969: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    minHeight: hp("2.7763090498460445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5277777777777786%"),
    top: hp("1.983075584870221%")
  },
  Text_1_969: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_970: {
    width: wp("41.66666666666667%"),
    minWidth: wp("41.66666666666667%"),
    height: hp("6.610259071725314%"),
    minHeight: hp("6.610259071725314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.277777777777782%"),
    top: hp("19.566370229252072%")
  },
  View_1_971: {
    width: wp("41.66666666666667%"),
    minWidth: wp("41.66666666666667%"),
    height: hp("6.610259071725314%"),
    minHeight: hp("6.610259071725314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(26, 83, 92, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_972: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("2.7763090498460445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444443%"),
    top: hp("1.8508660988729275%")
  },
  Text_1_972: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_973: {
    width: wp("1.6666666666666667%"),
    height: hp("3.172924479500192%"),
    top: hp("1.718656612875634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  View_1_975: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("6.610259071725314%"),
    minHeight: hp("6.610259071725314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.277777777777782%"),
    top: hp("10.312006382342872%")
  },
  View_1_976: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("6.610259071725314%"),
    minHeight: hp("6.610259071725314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(26, 83, 92, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_977: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("2.7763090498460445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444443%"),
    top: hp("1.983075584870278%")
  },
  Text_1_977: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_978: {
    width: wp("1.6666666666666667%"),
    height: hp("3.172924479500192%"),
    top: hp("1.7186732891479437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  View_1_980: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("6.610259071725314%"),
    minHeight: hp("6.610259071725314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.58333333333333%"),
    top: hp("10.444215868340166%")
  },
  View_1_981: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("6.610259071725314%"),
    minHeight: hp("6.610259071725314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(26, 83, 92, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_982: {
    width: wp("5.71895440419515%"),
    minWidth: wp("5.71895440419515%"),
    minHeight: hp("2.7763090498460445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.464874267578125%"),
    top: hp("1.983075584870221%")
  },
  Text_1_982: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_983: {
    width: wp("1.6666666666666667%"),
    height: hp("3.4521308753008397%"),
    top: hp("1.5324827100409948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  View_1_988: {
    width: wp("14.51388888888889%"),
    minWidth: wp("14.51388888888889%"),
    minHeight: hp("3.7017452260835575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.277777777777782%"),
    top: hp("3.9661595078765686%")
  },
  Text_1_988: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_989: {
    width: wp("21.59722222222222%"),
    minWidth: wp("21.59722222222222%"),
    height: hp("61.54562944922942%"),
    minHeight: hp("61.54562944922942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.86111111111111%"),
    top: hp("16.120218579234972%")
  },
  View_1_990: {
    width: wp("21.59722222222222%"),
    minWidth: wp("21.59722222222222%"),
    height: hp("61.54562944922942%"),
    minHeight: hp("61.54562944922942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(26, 83, 92, 1)"
  },
  View_1_991: {
    width: wp("10.76388888888889%"),
    minWidth: wp("10.76388888888889%"),
    height: hp("5.572159563908811%"),
    minHeight: hp("5.572159563908811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569444444444443%"),
    top: hp("17.073951262593937%")
  },
  View_1_992: {
    width: wp("6.597222222222222%"),
    minWidth: wp("6.597222222222222%"),
    minHeight: hp("2.1176990915517337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666668%"),
    top: hp("3.1765463573685224%")
  },
  Text_1_992: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_993: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    minHeight: hp("2.779480147231472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666668%"),
    top: hp("0%")
  },
  Text_1_993: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_994: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.10767868959186444%"),
    backgroundColor: "rgba(255, 230, 109, 1)"
  },
  ImageBackground_1_995: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("0.10767868959186444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_997: {
    width: wp("16.458333333333332%"),
    minWidth: wp("16.458333333333332%"),
    height: hp("5.2942479243044%"),
    minHeight: hp("5.2942479243044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569444444444443%"),
    top: hp("27.530090665556713%")
  },
  View_1_998: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.2942479243044%"),
    minHeight: hp("5.2942479243044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_999: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.2942479243044%"),
    minHeight: hp("5.2942479243044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 109, 1)"
  },
  ImageBackground_1_1000: {
    width: wp("2.314814726511637%"),
    height: hp("4.411873009686913%"),
    top: hp("0.4411874573087289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23149278428819642%")
  },
  View_1_1002: {
    width: wp("12.291666666666666%"),
    minWidth: wp("12.291666666666666%"),
    minHeight: hp("2.1176990915517337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666668%"),
    top: hp("3.1765463573684656%")
  },
  Text_1_1002: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1003: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    minHeight: hp("2.779480147231472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666668%"),
    top: hp("0%")
  },
  Text_1_1003: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1004: {
    width: wp("11.180555555555555%"),
    minWidth: wp("11.180555555555555%"),
    height: hp("5.2942479243044%"),
    minHeight: hp("5.2942479243044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569444444444443%"),
    top: hp("39.309792440445676%")
  },
  View_1_1005: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: hp("2.1176990915517337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666668%"),
    top: hp("1.5882815168203592%")
  },
  Text_1_1005: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1006: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.2942479243044%"),
    minHeight: hp("5.2942479243044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1007: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.2942479243044%"),
    minHeight: hp("5.2942479243044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 109, 1)"
  },
  View_1_1008: {
    width: wp("2.314814726511637%"),
    minWidth: wp("2.314814726511637%"),
    height: hp("4.411873009686913%"),
    minHeight: hp("4.411873009686913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23149278428819642%"),
    top: hp("0.4411874573087857%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_1009: {
    width: wp("1.5432095527648926%"),
    height: hp("3.676560928261345%"),
    top: hp("0.3676617731813394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3857930501302107%")
  },
  View_1_549: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("82.10382513661202%"),
    minHeight: hp("82.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("162.97814207650273%")
  },
  View_1_550: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("82.10382513661202%"),
    minHeight: hp("82.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 205, 196, 1)"
  },
  View_1_551: {
    width: wp("92.98611111111111%"),
    minWidth: wp("92.98611111111111%"),
    height: hp("61.47540983606557%"),
    minHeight: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4722222222222223%"),
    top: hp("16.2568306010929%")
  },
  View_1_552: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("61.47540983606557%"),
    minHeight: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_553: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("61.47540983606557%"),
    minHeight: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(26, 83, 92, 1)"
  },
  View_1_554: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.64480874316939%"),
    backgroundColor: "rgba(255, 230, 109, 1)"
  },
  View_1_555: {
    width: wp("7.569444444444444%"),
    minWidth: wp("7.569444444444444%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.930555555555556%"),
    top: hp("56.14754098360655%")
  },
  Text_1_555: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_556: {
    width: wp("7.569444444444444%"),
    minWidth: wp("7.569444444444444%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.930555555555556%"),
    top: hp("56.14754098360655%")
  },
  Text_1_556: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_557: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_558: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%"),
    top: hp("3.005464480874309%")
  },
  Text_1_558: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_559: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555562%"),
    top: hp("12.158469945355193%")
  },
  View_1_560: {
    width: wp("10.76388888888889%"),
    minWidth: wp("10.76388888888889%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20833333333333215%"),
    top: hp("0%")
  },
  View_1_561: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8611111111111125%"),
    top: hp("1.229508196721298%")
  },
  Text_1_561: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_562: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_563: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_565: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.016393442622928%")
  },
  View_1_566: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557378494%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_567: {
    width: wp("2.7777777777777777%"),
    height: hp("2.1809140189749296%"),
    top: hp("0.31469584814186646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_568: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.541666666666664%"),
    top: hp("58.33333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_569: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111111%"),
    top: hp("0%")
  },
  Text_1_569: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_570: {
    width: wp("11.319444444444445%"),
    minWidth: wp("11.319444444444445%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.2568306010929%")
  },
  View_1_571: {
    width: wp("6.458333333333334%"),
    minWidth: wp("6.458333333333334%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111111%"),
    top: hp("1.3661202185792547%")
  },
  Text_1_571: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_572: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_574: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    top: hp("34.289617486338784%"),
    backgroundColor: "rgba(255, 107, 107, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_575: {
    width: wp("4.722222222222222%"),
    minWidth: wp("4.722222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888875%"),
    top: hp("35.51912568306008%")
  },
  Text_1_575: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_576: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.273224043715828%")
  },
  ImageBackground_1_577: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_580: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.069444444444445%"),
    top: hp("1.2295081967213264%")
  },
  Text_1_580: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_581: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("61.47540983606557%"),
    minHeight: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.208333333333332%"),
    top: hp("0%")
  },
  View_1_582: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("61.47540983606557%"),
    minHeight: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(26, 83, 92, 1)"
  },
  View_1_583: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.64480874316939%"),
    backgroundColor: "rgba(255, 230, 109, 1)"
  },
  View_1_584: {
    width: wp("7.569444444444444%"),
    minWidth: wp("7.569444444444444%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.930555555555561%"),
    top: hp("56.14754098360655%")
  },
  Text_1_584: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_585: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_586: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.902777777777782%"),
    top: hp("2.868852459016381%")
  },
  Text_1_586: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_587: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.847222222222225%"),
    top: hp("12.158469945355193%")
  },
  View_1_588: {
    width: wp("10.76388888888889%"),
    minWidth: wp("10.76388888888889%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20833333333333215%"),
    top: hp("0%")
  },
  View_1_589: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111111%"),
    top: hp("1.229508196721298%")
  },
  Text_1_589: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_590: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_591: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_593: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.016393442622928%")
  },
  View_1_594: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557378494%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_595: {
    width: wp("2.7777777777777777%"),
    height: hp("2.1809140189749296%"),
    top: hp("0.31469584814186646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_596: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.541666666666664%"),
    top: hp("58.33333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_597: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111107%"),
    top: hp("0%")
  },
  Text_1_597: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_598: {
    width: wp("11.319444444444445%"),
    minWidth: wp("11.319444444444445%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.2568306010929%")
  },
  View_1_599: {
    width: wp("6.458333333333334%"),
    minWidth: wp("6.458333333333334%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111107%"),
    top: hp("1.3661202185792547%")
  },
  Text_1_599: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_600: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_602: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: hp("34.289617486338784%"),
    backgroundColor: "rgba(255, 107, 107, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_603: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8472222222222214%"),
    top: hp("35.51912568306008%")
  },
  Text_1_603: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_604: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.273224043715828%")
  },
  ImageBackground_1_605: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_608: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.069444444444443%"),
    top: hp("1.2295081967213264%")
  },
  Text_1_608: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_609: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("61.47540983606557%"),
    minHeight: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.416666666666664%"),
    top: hp("0%")
  },
  View_1_610: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("61.47540983606557%"),
    minHeight: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(26, 83, 92, 1)"
  },
  View_1_611: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.64480874316939%"),
    backgroundColor: "rgba(255, 230, 109, 1)"
  },
  View_1_612: {
    width: wp("7.569444444444444%"),
    minWidth: wp("7.569444444444444%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.930555555555557%"),
    top: hp("56.14754098360655%")
  },
  Text_1_612: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_613: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_614: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("3.005464480874309%")
  },
  Text_1_614: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_615: {
    width: wp("11.944444444444445%"),
    minWidth: wp("11.944444444444445%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8472222222222214%"),
    top: hp("12.158469945355193%")
  },
  View_1_616: {
    width: wp("10.76388888888889%"),
    minWidth: wp("10.76388888888889%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333357%"),
    top: hp("0%")
  },
  View_1_617: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111114%"),
    top: hp("1.229508196721298%")
  },
  Text_1_617: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_618: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_619: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_621: {
    width: wp("11.944444444444445%"),
    minWidth: wp("11.944444444444445%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.016393442622928%")
  },
  View_1_622: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557378494%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_623: {
    width: wp("2.7777777777777777%"),
    height: hp("2.1809140189749296%"),
    top: hp("0.31469584814186646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_624: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.54166666666668%"),
    top: hp("58.33333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_625: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111121%"),
    top: hp("0%")
  },
  Text_1_625: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_626: {
    width: wp("11.319444444444445%"),
    minWidth: wp("11.319444444444445%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.2568306010929%")
  },
  View_1_627: {
    width: wp("6.458333333333334%"),
    minWidth: wp("6.458333333333334%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111121%"),
    top: hp("1.3661202185792547%")
  },
  Text_1_627: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_628: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_630: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111214%"),
    top: hp("34.289617486338784%"),
    backgroundColor: "rgba(255, 107, 107, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_631: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666714%"),
    top: hp("35.51912568306008%")
  },
  Text_1_631: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_632: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.273224043715828%")
  },
  ImageBackground_1_633: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_636: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.06944444444445%"),
    top: hp("1.2295081967213264%")
  },
  Text_1_636: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_637: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("61.47540983606557%"),
    minHeight: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.62499999999999%"),
    top: hp("0%")
  },
  View_1_638: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("61.47540983606557%"),
    minHeight: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(26, 83, 92, 1)"
  },
  View_1_639: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.64480874316939%"),
    backgroundColor: "rgba(255, 230, 109, 1)"
  },
  View_1_640: {
    width: wp("7.569444444444444%"),
    minWidth: wp("7.569444444444444%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.930555555555571%"),
    top: hp("56.14754098360655%")
  },
  Text_1_640: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_641: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_642: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.208333333333343%"),
    top: hp("2.868852459016381%")
  },
  Text_1_642: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_643: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8472222222222285%"),
    top: hp("12.158469945355193%")
  },
  View_1_644: {
    width: wp("10.76388888888889%"),
    minWidth: wp("10.76388888888889%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333286%"),
    top: hp("0%")
  },
  View_1_645: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111114%"),
    top: hp("1.229508196721298%")
  },
  Text_1_645: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_646: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_647: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_649: {
    width: wp("11.944444444444445%"),
    minWidth: wp("11.944444444444445%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.016393442622928%")
  },
  View_1_650: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557378494%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_651: {
    width: wp("2.7777777777777777%"),
    height: hp("2.1809140189749296%"),
    top: hp("0.31469584814186646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_652: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.54166666666667%"),
    top: hp("58.33333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_653: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111114%"),
    top: hp("0%")
  },
  Text_1_653: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_654: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.2568306010929%")
  },
  View_1_655: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111114%"),
    top: hp("1.3661202185792547%")
  },
  Text_1_655: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_656: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_658: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: hp("34.289617486338784%"),
    backgroundColor: "rgba(255, 107, 107, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_659: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666714%"),
    top: hp("35.51912568306008%")
  },
  Text_1_659: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_660: {
    width: wp("11.73611111111111%"),
    minWidth: wp("11.73611111111111%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.273224043715828%")
  },
  ImageBackground_1_661: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_664: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.069444444444443%"),
    top: hp("1.2295081967213264%")
  },
  Text_1_664: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1415: {
    width: wp("10.416666666666668%"),
    minWidth: wp("10.416666666666668%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.79166666666667%"),
    top: hp("4.3715846994535354%")
  },
  Text_1_1415: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_665: {
    width: wp("92.99897087944878%"),
    minWidth: wp("92.99897087944878%"),
    height: hp("81.4207650273224%"),
    minHeight: hp("81.4207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4722222222222223%"),
    top: hp("250.27322404371586%")
  },
  View_1_666: {
    width: wp("21.47119310167101%"),
    height: hp("58.25680592021004%"),
    top: hp("15.84697785924692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.52777777777777%")
  },
  ImageBackground_1_667: {
    width: wp("1.9699258274502225%"),
    height: hp("2.4766119451470714%"),
    top: hp("49.362082559554324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.943067762586807%")
  },
  ImageBackground_1_669: {
    width: wp("1.9224629137251112%"),
    height: hp("2.641857647504963%"),
    top: hp("48.64763770598529%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.621893988715286%")
  },
  View_1_671: {
    width: wp("21.47119310167101%"),
    height: hp("58.25680592021004%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_672: {
    width: wp("21.47119310167101%"),
    height: hp("58.25680592021004%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_673: {
    width: wp("2.8006294038560657%"),
    height: hp("2.09562830586251%"),
    top: hp("39.36022982571296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.729478624131943%")
  },
  ImageBackground_1_675: {
    width: wp("2.0038146442837186%"),
    height: hp("2.3412021782880275%"),
    top: hp("38.78128802190059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.072740342881943%")
  },
  ImageBackground_1_677: {
    width: wp("1.5189814567565918%"),
    height: hp("1.6669944335854119%"),
    top: hp("39.74124095478993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.553846571180557%")
  },
  View_1_679: {
    width: wp("5.960259437561035%"),
    height: hp("3.0670309327339216%"),
    top: hp("37.72201121179131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.646436903211807%")
  },
  View_1_680: {
    width: wp("5.960259437561035%"),
    height: hp("3.0670309327339216%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_681: {
    width: wp("5.960259437561035%"),
    height: hp("3.0670309327339216%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_682: {
    width: wp("5.960259437561035%"),
    height: hp("3.0670309327339216%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_684: {
    width: wp("9.977925618489584%"),
    height: hp("13.280364073039404%"),
    top: hp("13.936227266905746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3013983832465215%")
  },
  ImageBackground_1_686: {
    width: wp("10.185882780287%"),
    height: hp("13.68970714631628%"),
    top: hp("13.731663604903076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1974690755208286%")
  },
  ImageBackground_1_688: {
    width: wp("0.5978640582826402%"),
    height: hp("4.0641529312550695%"),
    top: hp("18.081310668278263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.063666449652771%")
  },
  ImageBackground_1_690: {
    width: wp("0.8059523502985636%"),
    height: hp("4.473404806168353%"),
    top: hp("17.876684470254872%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.959635416666671%")
  },
  ImageBackground_1_692: {
    width: wp("11.530277464124891%"),
    height: hp("8.768068115567901%"),
    top: hp("12.452997926805836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1151801215277857%")
  },
  ImageBackground_1_694: {
    width: wp("0.5018049478530884%"),
    height: hp("2.2280442910116225%"),
    top: hp("20.915980938353812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.830905490451386%")
  },
  ImageBackground_1_696: {
    width: wp("2.1958846516079373%"),
    height: hp("0.9959571999930293%"),
    top: hp("23.916951163870408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.097337510850693%")
  },
  ImageBackground_1_698: {
    width: wp("0.9707962804370456%"),
    height: hp("1.9097266952848173%"),
    top: hp("21.39340176608391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.381442599826386%")
  },
  ImageBackground_1_700: {
    width: wp("0.7396482096778022%"),
    height: hp("1.4550820074446214%"),
    top: hp("21.166016625576333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.668504503038193%")
  },
  ImageBackground_1_702: {
    width: wp("1.1788333786858454%"),
    height: hp("3.955919495045813%"),
    top: hp("17.937627907007766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.906982421875%")
  },
  ImageBackground_1_704: {
    width: wp("0.9349259403016832%"),
    height: hp("3.137486358809341%"),
    top: hp("18.11949516254697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.397243923611114%")
  },
  ImageBackground_1_706: {
    width: wp("13.531604342990452%"),
    height: hp("17.372231405289444%"),
    top: hp("0.2007281193967856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10291205512153567%")
  },
  ImageBackground_1_708: {
    width: wp("13.738747702704535%"),
    height: hp("17.77661224531997%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_710: {
    width: wp("1.3916662004258897%"),
    height: hp("2.4447881458886984%"),
    top: hp("15.804586775315954%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17469618055555713%")
  },
  ImageBackground_1_712: {
    width: wp("1.6002837816874185%"),
    height: hp("2.8544577093072276%"),
    top: hp("15.599977253564703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0700887044270786%")
  },
  ImageBackground_1_714: {
    width: wp("1.1792963080936008%"),
    height: hp("2.88510009890697%"),
    top: hp("13.506517253938227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.401597764756943%")
  },
  ImageBackground_1_716: {
    width: wp("1.1792963080936008%"),
    height: hp("2.88510009890697%"),
    top: hp("13.506517253938227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.401597764756943%")
  },
  View_1_718: {
    width: wp("1.3916662004258897%"),
    height: hp("2.4447881458886984%"),
    top: hp("15.804586775315954%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17469618055555713%")
  },
  View_1_719: {
    width: wp("1.3916662004258897%"),
    height: hp("2.4447881458886984%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_720: {
    width: wp("1.3916662004258897%"),
    height: hp("2.4447881458886984%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_721: {
    width: wp("1.3916662004258897%"),
    height: hp("2.4447881458886984%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_723: {
    width: wp("1.1792963080936008%"),
    height: hp("2.88510009890697%"),
    top: hp("13.506517253938227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.401597764756943%")
  },
  View_1_724: {
    width: wp("1.1792963080936008%"),
    height: hp("2.88510009890697%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_725: {
    width: wp("1.1792963080936008%"),
    height: hp("2.88510009890697%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_726: {
    width: wp("1.1792963080936008%"),
    height: hp("2.88510009890697%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_728: {
    width: wp("1.3873304261101618%"),
    height: hp("3.294370995193231%"),
    top: hp("13.301845196166312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.297566731770843%")
  },
  ImageBackground_1_730: {
    width: wp("5.91724713643392%"),
    height: hp("3.4558215427919814%"),
    top: hp("9.229983136953535%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8796522352430571%")
  },
  ImageBackground_1_732: {
    width: wp("3.6289411120944552%"),
    height: hp("1.1888807588587693%"),
    top: hp("9.087000779115442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.1082763671875%")
  },
  ImageBackground_1_734: {
    width: wp("0.31391468313005233%"),
    height: hp("2.1473587536420977%"),
    top: hp("38.68535776607325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.605000813802079%")
  },
  ImageBackground_1_736: {
    width: wp("6.515686776902941%"),
    height: hp("2.9919853627356026%"),
    top: hp("38.67549375106728%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.615919325086807%")
  },
  ImageBackground_1_738: {
    width: wp("1.8156674173143175%"),
    height: hp("2.1210112858339736%"),
    top: hp("39.546420404819855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.375827365451386%")
  },
  ImageBackground_1_740: {
    width: wp("6.649467150370279%"),
    height: hp("10.063223500069373%"),
    top: hp("39.51837925311645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.476352267795136%")
  },
  ImageBackground_1_742: {
    width: wp("6.862761179606119%"),
    height: hp("10.490657201881618%"),
    top: hp("39.30402245026471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.369879828559036%")
  },
  ImageBackground_1_744: {
    width: wp("0.8070086108313665%"),
    height: hp("2.2386378929263255%"),
    top: hp("43.02750050695869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.123440212673614%")
  },
  ImageBackground_1_746: {
    width: wp("2.2509434488084583%"),
    height: hp("3.0663089022610355%"),
    top: hp("49.03201744204665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.824659559461807%")
  },
  ImageBackground_1_748: {
    width: wp("1.8738146622975669%"),
    height: hp("2.9376196730983715%"),
    top: hp("51.087167875362866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.014750162760421%")
  },
  ImageBackground_1_750: {
    width: wp("2.08740234375%"),
    height: hp("3.3675579425415707%"),
    top: hp("50.87282774878332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.907972547743057%")
  },
  ImageBackground_1_752: {
    width: wp("2.2414241896735296%"),
    height: hp("3.0662880569207864%"),
    top: hp("48.46050491749918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.489210340711807%")
  },
  ImageBackground_1_754: {
    width: wp("1.8738146622975669%"),
    height: hp("2.9377004487918374%"),
    top: hp("50.51563033640707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.666754828559036%")
  },
  ImageBackground_1_756: {
    width: wp("2.087420622507731%"),
    height: hp("3.3650760442181364%"),
    top: hp("50.301265195419205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.559943305121536%")
  },
  ImageBackground_1_758: {
    width: wp("3.4213039610120983%"),
    height: hp("4.794458483086258%"),
    top: hp("53.46234431032275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5530429416232607%")
  },
  ImageBackground_1_760: {
    width: wp("3.581004672580295%"),
    height: hp("5.265703357633997%"),
    top: hp("52.8651169740437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61907958984375%")
  },
  ImageBackground_1_762: {
    width: wp("0.5316296219825745%"),
    height: hp("1.59147541379668%"),
    top: hp("18.506005292381758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.380818684895829%")
  },
  ImageBackground_1_764: {
    width: wp("0.43916665845447117%"),
    height: hp("1.3641529395932057%"),
    top: hp("18.46051659088971%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.755486382378479%")
  },
  ImageBackground_1_766: {
    width: wp("2.126507626639472%"),
    height: hp("1.2991183442496212%"),
    top: hp("16.54756473061815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.329115125868057%")
  },
  ImageBackground_1_768: {
    width: wp("2.1264937188890243%"),
    height: hp("1.2991342388215612%"),
    top: hp("16.411148654958595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.819376627604171%")
  },
  ImageBackground_1_770: {
    width: wp("1.9278328948550754%"),
    height: hp("5.018553186635502%"),
    top: hp("18.85362218637931%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3903469509548643%")
  },
  ImageBackground_1_772: {
    width: wp("1.0862969027625191%"),
    height: hp("1.3681948510675481%"),
    top: hp("20.207101790631384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7927381727430571%")
  },
  ImageBackground_1_774: {
    width: wp("2.135630316204495%"),
    height: hp("5.428585719541122%"),
    top: hp("18.649350359140215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.28662109375%")
  },
  View_1_776: {
    width: wp("7.636537551879882%"),
    height: hp("4.30710380846034%"),
    top: hp("22.916641652258363%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1207275390625%")
  },
  View_1_777: {
    width: wp("7.636537551879882%"),
    height: hp("4.30710380846034%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_778: {
    width: wp("7.636537551879882%"),
    height: hp("4.30710380846034%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_779: {
    width: wp("7.636537551879882%"),
    height: hp("4.30710380846034%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_781: {
    width: wp("0.6134018633100722%"),
    height: hp("1.5396907681324443%"),
    top: hp("21.078245235922566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.350863986545136%")
  },
  View_1_782: {
    width: wp("0.6134018633100722%"),
    height: hp("1.5396907681324443%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_783: {
    width: wp("0.6134018633100722%"),
    height: hp("1.5396907681324443%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_784: {
    width: wp("0.6134018633100722%"),
    height: hp("1.5396907681324443%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_786: {
    width: wp("1.4340910646650527%"),
    height: hp("4.460619316726435%"),
    top: hp("19.05758550258281%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4927842881944429%")
  },
  View_1_787: {
    width: wp("1.4340910646650527%"),
    height: hp("4.460619316726435%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_788: {
    width: wp("1.4340910646650527%"),
    height: hp("4.460619316726435%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_789: {
    width: wp("1.4340910646650527%"),
    height: hp("4.460619316726435%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_791: {
    width: wp("2.7226108974880643%"),
    height: hp("5.857522891518848%"),
    top: hp("10.943345033405933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10348849826388573%")
  },
  View_1_792: {
    width: wp("2.7226108974880643%"),
    height: hp("5.857522891518848%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_793: {
    width: wp("2.7226108974880643%"),
    height: hp("5.857522891518848%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_794: {
    width: wp("2.7226108974880643%"),
    height: hp("5.857522891518848%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_796: {
    width: wp("2.047719293170505%"),
    height: hp("5.293697607321817%"),
    top: hp("9.64195376536884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.586812337239579%")
  },
  View_1_797: {
    width: wp("2.047719293170505%"),
    height: hp("5.293697607321817%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_798: {
    width: wp("2.047719293170505%"),
    height: hp("5.293697607321817%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_799: {
    width: wp("2.047719293170505%"),
    height: hp("5.293697607321817%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_801: {
    width: wp("2.7815251880221896%"),
    height: hp("3.4911124432673217%"),
    top: hp("1.5278216919612078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.23760986328125%")
  },
  View_1_802: {
    width: wp("2.7815251880221896%"),
    height: hp("3.4911124432673217%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_803: {
    width: wp("2.7815251880221896%"),
    height: hp("3.4911124432673217%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_804: {
    width: wp("2.7815251880221896%"),
    height: hp("3.4911124432673217%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_806: {
    width: wp("0.6662044922510783%"),
    height: hp("1.9399301601889356%"),
    top: hp("5.281733945419205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.121283637152786%")
  },
  View_1_807: {
    width: wp("0.6662044922510783%"),
    height: hp("1.9399301601889356%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_808: {
    width: wp("0.6662044922510783%"),
    height: hp("1.9399301601889356%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_809: {
    width: wp("0.6662044922510783%"),
    height: hp("1.9399301601889356%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_811: {
    width: wp("1.8667414453294542%"),
    height: hp("0.6550733508959494%"),
    top: hp("10.01650283896862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6670464409722285%")
  },
  View_1_812: {
    width: wp("1.8667414453294542%"),
    height: hp("0.6550733508959494%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_813: {
    width: wp("1.8667414453294542%"),
    height: hp("0.6550733508959494%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_814: {
    width: wp("1.8667414453294542%"),
    height: hp("0.6550733508959494%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_816: {
    width: wp("0.09494443734486897%"),
    height: hp("5.334352795543566%"),
    top: hp("41.07480909003584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.417751736111114%")
  },
  ImageBackground_1_818: {
    width: wp("0.21346295873324078%"),
    height: hp("5.342003556548572%"),
    top: hp("41.067163019232396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.405985514322921%")
  },
  View_1_820: {
    width: wp("6.522147920396593%"),
    height: hp("9.02404368249445%"),
    top: hp("39.97939479807036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4769287109375%")
  },
  View_1_821: {
    width: wp("6.522147920396593%"),
    height: hp("9.02404368249445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_822: {
    width: wp("6.522147920396593%"),
    height: hp("9.02404368249445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_823: {
    width: wp("6.522147920396593%"),
    height: hp("9.02404368249445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_825: {
    width: wp("1.0756111145019531%"),
    height: hp("5.906113379640006%"),
    top: hp("43.360967583995034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.258293999565964%")
  },
  View_1_826: {
    width: wp("1.0756111145019531%"),
    height: hp("5.906113379640006%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_827: {
    width: wp("1.0756111145019531%"),
    height: hp("5.906113379640006%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_828: {
    width: wp("1.0756111145019531%"),
    height: hp("5.906113379640006%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_830: {
    width: wp("1.9820555051167805%"),
    height: hp("0.9493873419006014%"),
    top: hp("49.47353008666323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.002170138888886%")
  },
  View_1_831: {
    width: wp("1.9820555051167805%"),
    height: hp("0.9493873419006014%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_832: {
    width: wp("1.9820555051167805%"),
    height: hp("0.9493873419006014%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_833: {
    width: wp("1.9820555051167805%"),
    height: hp("0.9493873419006014%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_835: {
    width: wp("2.0305396450890436%"),
    height: hp("1.3970286468339097%"),
    top: hp("48.638132230831616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.621893988715286%")
  },
  View_1_836: {
    width: wp("2.0305396450890436%"),
    height: hp("1.3970286468339097%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_837: {
    width: wp("2.0305396450890436%"),
    height: hp("1.3970286468339097%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_838: {
    width: wp("2.0305396450890436%"),
    height: hp("1.3970286468339097%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_840: {
    width: wp("0.09479629496733348%"),
    height: hp("0.862586498260498%"),
    top: hp("51.78580362288682%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.4178534613715215%")
  },
  ImageBackground_1_842: {
    width: wp("0.09479629496733348%"),
    height: hp("0.862586498260498%"),
    top: hp("51.83343105628842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3434516059027715%")
  },
  ImageBackground_1_844: {
    width: wp("0.09479629496733348%"),
    height: hp("0.8625865634021863%"),
    top: hp("52.505484825926374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.049173990885421%")
  },
  ImageBackground_1_846: {
    width: wp("0.09479629496733348%"),
    height: hp("0.8626229776059343%"),
    top: hp("51.11900287899164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.069715711805557%")
  },
  View_1_848: {
    width: wp("0.7113656732771132%"),
    height: hp("0.8050452164613484%"),
    top: hp("55.192557579832624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0185546875%")
  },
  View_1_849: {
    width: wp("0.7113656732771132%"),
    height: hp("0.8050452164613484%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_850: {
    width: wp("0.7113656732771132%"),
    height: hp("0.8050452164613484%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_851: {
    width: wp("0.6876395146052042%"),
    height: hp("0.7580411238748519%"),
    top: hp("0.023238385309980458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.011800130208342807%")
  },
  ImageBackground_1_853: {
    width: wp("0.7113656732771132%"),
    height: hp("0.8050452164613484%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_855: {
    width: wp("11.266055636935764%"),
    height: hp("13.678355816283513%"),
    top: hp("26.16838132097422%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8199666341145786%")
  },
  View_1_857: {
    width: wp("5.964814821879069%"),
    height: hp("6.909216687978943%"),
    top: hp("33.26477717832137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.71435546875%")
  },
  View_1_858: {
    width: wp("5.964814821879069%"),
    height: hp("6.909216687978943%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_859: {
    width: wp("5.964814821879069%"),
    height: hp("6.909216687978943%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_860: {
    width: wp("5.964814821879069%"),
    height: hp("6.909216687978943%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_862: {
    width: wp("9.686518775092232%"),
    height: hp("6.488338845675109%"),
    top: hp("26.168372982838093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1175740559895786%")
  },
  View_1_863: {
    width: wp("9.686518775092232%"),
    height: hp("6.488338845675109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_864: {
    width: wp("9.686518775092232%"),
    height: hp("6.488338845675109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_865: {
    width: wp("9.686518775092232%"),
    height: hp("6.488338845675109%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_867: {
    width: wp("7.983795801798503%"),
    height: hp("13.711184100375148%"),
    top: hp("25.90874010096485%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7687310112847143%")
  },
  ImageBackground_1_869: {
    width: wp("5.256212022569445%"),
    height: hp("6.41530406931059%"),
    top: hp("32.733379426549675%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.657809787326386%")
  },
  View_1_871: {
    width: wp("7.983795801798503%"),
    height: hp("12.905881704528474%"),
    top: hp("26.71403728547648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7687310112847143%")
  },
  View_1_872: {
    width: wp("7.983795801798503%"),
    height: hp("12.905881704528474%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_873: {
    width: wp("7.983795801798503%"),
    height: hp("12.905881704528474%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_874: {
    width: wp("7.983795801798503%"),
    height: hp("12.905881704528474%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_876: {
    width: wp("1.1626712481180828%"),
    height: hp("1.577739246556016%"),
    top: hp("35.83405708354678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4534030490451357%")
  },
  View_1_877: {
    width: wp("1.1626712481180828%"),
    height: hp("1.577739246556016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_878: {
    width: wp("1.1626712481180828%"),
    height: hp("1.577739246556016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_879: {
    width: wp("1.1626712481180828%"),
    height: hp("1.577739246556016%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_881: {
    width: wp("5.256212022569445%"),
    height: hp("6.41530406931059%"),
    top: hp("32.733379426549675%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.657809787326386%")
  },
  View_1_882: {
    width: wp("5.256212022569445%"),
    height: hp("6.41530406931059%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_883: {
    width: wp("5.256212022569445%"),
    height: hp("6.41530406931059%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_884: {
    width: wp("5.256212022569445%"),
    height: hp("6.41530406931059%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_886: {
    width: wp("1.1522221565246582%"),
    height: hp("0.7555555124751857%"),
    top: hp("34.73406515486255%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.26947021484375%")
  },
  View_1_887: {
    width: wp("1.1522221565246582%"),
    height: hp("0.7555555124751857%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_888: {
    width: wp("1.1522221565246582%"),
    height: hp("0.7555555124751857%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_889: {
    width: wp("1.1522221565246582%"),
    height: hp("0.7555555124751857%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_891: {
    width: wp("2.5092591179741754%"),
    height: hp("3.9191983436626163%"),
    top: hp("30.51264194842895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.4771728515625%")
  },
  View_1_892: {
    width: wp("2.5092591179741754%"),
    height: hp("3.9191983436626163%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_893: {
    width: wp("2.5092591179741754%"),
    height: hp("3.9191983436626163%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_894: {
    width: wp("2.5092591179741754%"),
    height: hp("3.9191983436626163%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_896: {
    width: wp("7.4423980712890625%"),
    height: hp("11.496241626843728%"),
    top: hp("11.756475896783229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.028795030381943%")
  },
  ImageBackground_1_898: {
    width: wp("2.2835736804538302%"),
    height: hp("4.439074615311752%"),
    top: hp("18.498196627924358%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.079013400607636%")
  },
  ImageBackground_1_900: {
    width: wp("2.173314889272054%"),
    height: hp("7.277522582173999%"),
    top: hp("13.84612119914408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.852247450086807%")
  },
  ImageBackground_1_902: {
    width: wp("0.43916665845447117%"),
    height: hp("0.8639344100743694%"),
    top: hp("38.466181520555836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.588433159722214%")
  },
  ImageBackground_1_904: {
    width: wp("1.0834013753467135%"),
    height: hp("2.1652437950092587%"),
    top: hp("28.438547269894116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.272298177083343%")
  },
  ImageBackground_1_906: {
    width: wp("1.110506190194024%"),
    height: hp("2.2271143282697503%"),
    top: hp("29.736636636035655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.9906548394097285%")
  },
  ImageBackground_1_908: {
    width: wp("1.634316841761271%"),
    height: hp("2.1663294463861185%"),
    top: hp("31.359838266841678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.094489203559036%")
  },
  ImageBackground_1_910: {
    width: wp("1.8190214369032116%"),
    height: hp("0.738298046132906%"),
    top: hp("33.64313678011865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7687649197048643%")
  },
  ImageBackground_1_912: {
    width: wp("1.9781237178378634%"),
    height: hp("1.0081204560285058%"),
    top: hp("32.95539897647711%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8711344401041714%")
  },
  ImageBackground_1_914: {
    width: wp("3.430959383646647%"),
    height: hp("8.81487528483073%"),
    top: hp("25.919187785497797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.783087836371536%")
  },
  ImageBackground_1_916: {
    width: wp("2.227641741434733%"),
    height: hp("0.8569006711407436%"),
    top: hp("33.02091171181263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.909593370225693%")
  },
  ImageBackground_1_918: {
    width: wp("4.473635885450575%"),
    height: hp("2.4766484244925078%"),
    top: hp("32.458879648010566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.639397515190964%")
  },
  ImageBackground_1_920: {
    width: wp("0.6023950046963161%"),
    height: hp("2.0909370620394014%"),
    top: hp("33.851998751280746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.535400390625%")
  },
  ImageBackground_1_922: {
    width: wp("0.8822951051923964%"),
    height: hp("2.468258435608911%"),
    top: hp("34.88509381403685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.543674045138886%")
  },
  ImageBackground_1_924: {
    width: wp("5.390793482462565%"),
    height: hp("5.41936843121638%"),
    top: hp("34.079196283726105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.6294623480902715%")
  },
  ImageBackground_1_926: {
    width: wp("0.23962961302863225%"),
    height: hp("2.037049121544009%"),
    top: hp("37.83621866194932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.307766384548614%")
  },
  ImageBackground_1_928: {
    width: wp("1.4130344655778673%"),
    height: hp("1.1739053361402834%"),
    top: hp("31.288322073514337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.125705295138886%")
  },
  ImageBackground_1_930: {
    width: wp("1.1259182294209797%"),
    height: hp("1.1635700861612954%"),
    top: hp("31.349198805178446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4912041558159785%")
  },
  ImageBackground_1_932: {
    width: wp("0.1570185191101498%"),
    height: hp("0.3088524432781616%"),
    top: hp("31.7209212506404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.75372314453125%")
  },
  ImageBackground_1_934: {
    width: wp("5.934619903564453%"),
    height: hp("13.53347653248271%"),
    top: hp("26.27684379535947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6719563802083286%")
  },
  ImageBackground_1_936: {
    width: wp("6.723892953660752%"),
    height: hp("8.852209289217255%"),
    top: hp("25.680400243873805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1769476996527715%")
  },
  View_1_938: {
    width: wp("43.40277777777778%"),
    minWidth: wp("43.40277777777778%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_938: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_939: {
    width: wp("63.888888888888886%"),
    minWidth: wp("63.888888888888886%"),
    height: hp("69.53551912568307%"),
    minHeight: hp("69.53551912568307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.885245901639337%")
  },
  View_1_940: {
    width: wp("63.888888888888886%"),
    minWidth: wp("63.888888888888886%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_941: {
    width: wp("63.888888888888886%"),
    minWidth: wp("63.888888888888886%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 255, 247, 1)"
  },
  View_1_942: {
    width: wp("19.51388888888889%"),
    minWidth: wp("19.51388888888889%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333333%"),
    top: hp("4.098360655737679%")
  },
  Text_1_942: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_943: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("2.7322404371585094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.375%")
  },
  View_1_945: {
    width: wp("63.888888888888886%"),
    minWidth: wp("63.888888888888886%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.60655737704917%")
  },
  View_1_946: {
    width: wp("63.888888888888886%"),
    minWidth: wp("63.888888888888886%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 255, 247, 1)"
  },
  View_1_947: {
    width: wp("19.51388888888889%"),
    minWidth: wp("19.51388888888889%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333333%"),
    top: hp("3.961748633879779%")
  },
  Text_1_947: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_948: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("2.7322404371585094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.375%")
  },
  View_1_950: {
    width: wp("63.888888888888886%"),
    minWidth: wp("63.888888888888886%"),
    height: hp("34.15300546448087%"),
    minHeight: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.22404371584696%")
  },
  View_1_951: {
    width: wp("63.888888888888886%"),
    minWidth: wp("63.888888888888886%"),
    height: hp("34.15300546448087%"),
    minHeight: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 255, 247, 1)"
  },
  View_1_952: {
    width: wp("19.51388888888889%"),
    minWidth: wp("19.51388888888889%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333333%"),
    top: hp("4.098360655737736%")
  },
  Text_1_952: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_953: {
    width: wp("57.291666666666664%"),
    minWidth: wp("57.291666666666664%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333333%"),
    top: hp("9.836065573770497%")
  },
  Text_1_953: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_954: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("2.7322404371585094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.375%")
  },
  View_1_956: {
    width: wp("63.888888888888886%"),
    minWidth: wp("63.888888888888886%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.612021857923537%")
  },
  View_1_957: {
    width: wp("63.888888888888886%"),
    minWidth: wp("63.888888888888886%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 255, 247, 1)"
  },
  View_1_958: {
    width: wp("19.51388888888889%"),
    minWidth: wp("19.51388888888889%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333333%"),
    top: hp("4.098360655737679%")
  },
  Text_1_958: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_959: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("2.7322404371583957%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.375%")
  },
  View_1_1384: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("61.47540983606557%"),
    minHeight: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.50273224043715%")
  },
  View_1_1385: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("61.47540983606557%"),
    minHeight: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 255, 247, 1)"
  },
  View_1_1463: {
    width: wp("92.98611111111111%"),
    minWidth: wp("92.98611111111111%"),
    height: hp("34.15300546448087%"),
    minHeight: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4722222222222223%"),
    top: hp("21.58469945355192%")
  },
  View_1_1407: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("34.15300546448087%"),
    minHeight: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.62499999999999%"),
    top: hp("0%")
  },
  View_1_1408: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("34.15300546448087%"),
    minHeight: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(26, 83, 92, 1)"
  },
  View_1_1409: {
    width: wp("13.194444444444445%"),
    minWidth: wp("13.194444444444445%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333343%"),
    top: hp("18.306010928961754%")
  },
  Text_1_1409: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1413: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333343%"),
    top: hp("14.754098360655732%")
  },
  Text_1_1413: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1438: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333343%"),
    top: hp("4.508196721311464%")
  },
  View_1_1410: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 205, 196, 1)",
    opacity: 0.8999999761581421
  },
  ImageBackground_1_1411: {
    width: wp("3.4722222222222223%"),
    height: hp("6.830601092896176%"),
    top: hp("0.8196721311475557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666572%")
  },
  View_1_1439: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("34.15300546448087%"),
    minHeight: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1440: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("34.15300546448087%"),
    minHeight: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(26, 83, 92, 1)"
  },
  View_1_1441: {
    width: wp("13.194444444444445%"),
    minWidth: wp("13.194444444444445%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333333%"),
    top: hp("18.306010928961754%")
  },
  Text_1_1441: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1442: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333333%"),
    top: hp("14.754098360655732%")
  },
  Text_1_1442: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1443: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333333%"),
    top: hp("4.508196721311464%")
  },
  View_1_1444: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 205, 196, 1)",
    opacity: 0.8999999761581421
  },
  ImageBackground_1_1445: {
    width: wp("3.4722222222222223%"),
    height: hp("6.830601092896176%"),
    top: hp("0.8196721311475557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.41666666666666696%")
  },
  View_1_1447: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("34.15300546448087%"),
    minHeight: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.208333333333332%"),
    top: hp("0%")
  },
  View_1_1448: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("34.15300546448087%"),
    minHeight: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(26, 83, 92, 1)"
  },
  View_1_1449: {
    width: wp("13.194444444444445%"),
    minWidth: wp("13.194444444444445%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333357%"),
    top: hp("18.306010928961754%")
  },
  Text_1_1449: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1450: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333357%"),
    top: hp("14.754098360655732%")
  },
  Text_1_1450: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1451: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333357%"),
    top: hp("4.508196721311464%")
  },
  View_1_1452: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 205, 196, 1)",
    opacity: 0.8999999761581421
  },
  ImageBackground_1_1453: {
    width: wp("3.4722222222222223%"),
    height: hp("6.830601092896176%"),
    top: hp("0.8196721311475557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.41666666666666785%")
  },
  View_1_1455: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("34.15300546448087%"),
    minHeight: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.416666666666664%"),
    top: hp("0%")
  },
  View_1_1456: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("34.15300546448087%"),
    minHeight: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(26, 83, 92, 1)"
  },
  View_1_1457: {
    width: wp("13.194444444444445%"),
    minWidth: wp("13.194444444444445%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333357%"),
    top: hp("18.306010928961754%")
  },
  Text_1_1457: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1458: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333357%"),
    top: hp("14.754098360655732%")
  },
  Text_1_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1459: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333357%"),
    top: hp("4.508196721311464%")
  },
  View_1_1460: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 205, 196, 1)",
    opacity: 0.8999999761581421
  },
  ImageBackground_1_1461: {
    width: wp("3.4722222222222223%"),
    height: hp("6.830601092896176%"),
    top: hp("0.8196721311475557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666643%")
  },
  View_1_1414: {
    width: wp("28.61111111111111%"),
    minWidth: wp("28.61111111111111%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.90277777777778%"),
    top: hp("4.918032786885249%")
  },
  Text_1_1414: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_358: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("81.9672131147541%"),
    minHeight: hp("81.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.53551912568306%")
  },
  View_1_359: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("81.9672131147541%"),
    minHeight: hp("81.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(78, 205, 196, 1)"
  },
  View_1_542: {
    width: wp("32.63888888888889%"),
    minWidth: wp("32.63888888888889%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4722222222222223%"),
    top: hp("59.15300546448088%")
  },
  View_1_543: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.75%"),
    top: hp("0%")
  },
  View_1_544: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 230, 109, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_1_545: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7500000000000036%"),
    top: hp("1.9125683060109253%")
  },
  Text_1_545: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_546: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_547: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 109, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_1_548: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.86111111111111%"),
    top: hp("1.9125683060109253%")
  },
  Text_1_548: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_360: {
    width: wp("43.541666666666664%"),
    height: hp("62.58674579891351%"),
    top: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.59722222222223%")
  },
  View_1_361: {
    width: wp("43.541666666666664%"),
    height: hp("62.58674579891351%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_362: {
    width: wp("43.541666666666664%"),
    height: hp("62.58674579891351%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_363: {
    width: wp("2.283333672417535%"),
    height: hp("6.2574834771495045%"),
    top: hp("9.68201017119194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.76389567057291%")
  },
  ImageBackground_1_364: {
    width: wp("2.0069461398654513%"),
    height: hp("5.680784631948002%"),
    top: hp("9.970359593792693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.9013943142361%")
  },
  ImageBackground_1_365: {
    width: wp("3.838890923394097%"),
    height: hp("10.178444033763448%"),
    top: hp("4.268775481343923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.200012207031236%")
  },
  ImageBackground_1_366: {
    width: wp("3.394444783528646%"),
    height: hp("9.259892031143272%"),
    top: hp("4.726555829491119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.422214084201386%")
  },
  ImageBackground_1_367: {
    width: wp("15.122222900390625%"),
    height: hp("33.64179850927467%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5416700575086679%")
  },
  ImageBackground_1_368: {
    width: wp("14.854168362087675%"),
    height: hp("33.06211878041752%"),
    top: hp("0.5766988452015056%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5416531032986001%")
  },
  ImageBackground_1_369: {
    width: wp("13.665279812282986%"),
    height: hp("6.1950600212389%"),
    top: hp("1.985743788422134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1847262912326286%")
  },
  ImageBackground_1_370: {
    width: wp("13.665279812282986%"),
    height: hp("6.1950600212389%"),
    top: hp("1.8252179922301934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1097208658854072%")
  },
  ImageBackground_1_371: {
    width: wp("13.665279812282986%"),
    height: hp("6.1950600212389%"),
    top: hp("26.40035660540471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1916775173611%")
  },
  ImageBackground_1_372: {
    width: wp("13.665279812282986%"),
    height: hp("6.1950600212389%"),
    top: hp("26.17741152237022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1097208658854072%")
  },
  ImageBackground_1_373: {
    width: wp("4.298612806532118%"),
    height: hp("0.8561306312435963%"),
    top: hp("27.03947473744877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5805392795138786%")
  },
  ImageBackground_1_374: {
    width: wp("12.884724934895834%"),
    height: hp("0.8561264621755463%"),
    top: hp("29.06684250128074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5805392795138786%")
  },
  ImageBackground_1_375: {
    width: wp("12.884724934895834%"),
    height: hp("0.8561348003116462%"),
    top: hp("30.64830342277152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5805392795138786%")
  },
  ImageBackground_1_376: {
    width: wp("2.8944439358181424%"),
    height: hp("16.21892543438354%"),
    top: hp("9.21232296469433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1847262912326286%")
  },
  ImageBackground_1_377: {
    width: wp("2.8944439358181424%"),
    height: hp("16.21892543438354%"),
    top: hp("8.99829968728654%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.126403808593743%")
  },
  ImageBackground_1_378: {
    width: wp("10.175001356336805%"),
    height: hp("16.215957057932034%"),
    top: hp("9.21232296469433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.711100260416657%")
  },
  ImageBackground_1_379: {
    width: wp("10.175001356336805%"),
    height: hp("16.215952888863985%"),
    top: hp("8.99829968728654%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.598626030815964%")
  },
  ImageBackground_1_380: {
    width: wp("3.109720018174913%"),
    height: hp("0.8620757222827016%"),
    top: hp("9.673088365565235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9930487738715215%")
  },
  ImageBackground_1_381: {
    width: wp("9.318055046929254%"),
    height: hp("0.8620757222827016%"),
    top: hp("11.703441182120905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9930487738715215%")
  },
  ImageBackground_1_382: {
    width: wp("9.318055046929254%"),
    height: hp("0.8620840604188011%"),
    top: hp("13.281917050887984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9930487738715215%")
  },
  ImageBackground_1_383: {
    width: wp("3.109720018174913%"),
    height: hp("0.8620757222827016%"),
    top: hp("14.863394648650953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9930487738715215%")
  },
  ImageBackground_1_384: {
    width: wp("9.318055046929254%"),
    height: hp("0.8620798913507514%"),
    top: hp("16.89076241248292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9930487738715215%")
  },
  ImageBackground_1_385: {
    width: wp("9.318055046929254%"),
    height: hp("0.8620757222827016%"),
    top: hp("18.4722233339737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9930487738715215%")
  },
  ImageBackground_1_386: {
    width: wp("3.109720018174913%"),
    height: hp("0.8620757222827016%"),
    top: hp("20.053684255464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9930487738715215%")
  },
  ImageBackground_1_387: {
    width: wp("9.318055046929254%"),
    height: hp("0.8620757222827016%"),
    top: hp("22.08105201929645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9930487738715215%")
  },
  ImageBackground_1_388: {
    width: wp("9.318055046929254%"),
    height: hp("0.8620757222827016%"),
    top: hp("23.662512940787224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9930487738715215%")
  },
  ImageBackground_1_389: {
    width: wp("2.491667005750868%"),
    height: hp("4.940587445035007%"),
    top: hp("9.673088365565235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.31527370876735%")
  },
  ImageBackground_1_390: {
    width: wp("2.491667005750868%"),
    height: hp("4.940587445035007%"),
    top: hp("15.520356391948432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.31527370876735%")
  },
  ImageBackground_1_391: {
    width: wp("2.9958343505859375%"),
    height: hp("1.825222161298241%"),
    top: hp("5.5886357208418715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.743041992187493%")
  },
  ImageBackground_1_392: {
    width: wp("2.9958343505859375%"),
    height: hp("1.825222161298241%"),
    top: hp("5.5886357208418715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4083184136284643%")
  },
  ImageBackground_1_393: {
    width: wp("2.9958343505859375%"),
    height: hp("1.825222161298241%"),
    top: hp("5.5886357208418715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.1069607204861%")
  },
  ImageBackground_1_394: {
    width: wp("2.9958343505859375%"),
    height: hp("1.825222161298241%"),
    top: hp("5.5886357208418715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.470845540364579%")
  },
  ImageBackground_1_395: {
    width: wp("13.143056233723957%"),
    height: hp("2.5416368995207907%"),
    top: hp("2.42868225431182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3236151801215144%")
  },
  ImageBackground_1_396: {
    width: wp("8.055555555555555%"),
    height: hp("4.637371125768443%"),
    top: hp("57.949378842213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.880560980902779%")
  },
  ImageBackground_1_397: {
    width: wp("3.861109415690104%"),
    height: hp("2.59216808881916%"),
    top: hp("55.35721909153006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0402899848090215%")
  },
  ImageBackground_1_398: {
    width: wp("6.627773708767361%"),
    height: hp("3.489926864540642%"),
    top: hp("55.78526564634563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.298624674479157%")
  },
  ImageBackground_1_399: {
    width: wp("10.444446139865452%"),
    height: hp("2.4316506307633197%"),
    top: hp("53.39227061454064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.09722900390625%")
  },
  ImageBackground_1_400: {
    width: wp("3.016671074761285%"),
    height: hp("2.009524152578552%"),
    top: hp("59.74487971738389%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.556939019097214%")
  },
  ImageBackground_1_401: {
    width: wp("41.21944851345486%"),
    height: hp("0.5885806891436134%"),
    top: hp("50.8119843696636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_402: {
    width: wp("10.144441392686632%"),
    height: hp("35.76130684607667%"),
    top: hp("18.888396382983267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.319430881076386%")
  },
  ImageBackground_1_403: {
    width: wp("4.144439697265625%"),
    height: hp("7.47924971450222%"),
    top: hp("45.11336863366632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.24723307291666%")
  },
  ImageBackground_1_404: {
    width: wp("4.112497965494791%"),
    height: hp("7.47924971450222%"),
    top: hp("45.11336863366632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.391655815972214%")
  },
  ImageBackground_1_405: {
    width: wp("8.256946139865452%"),
    height: hp("6.465570001654286%"),
    top: hp("20.799830702484634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.24723307291666%")
  },
  ImageBackground_1_406: {
    width: wp("8.256946139865452%"),
    height: hp("6.465574170722337%"),
    top: hp("28.903348328637293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.24723307291666%")
  },
  ImageBackground_1_407: {
    width: wp("8.256946139865452%"),
    height: hp("6.465574170722337%"),
    top: hp("37.00983433124146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.24723307291666%")
  },
  ImageBackground_1_408: {
    width: wp("0.5861070421006944%"),
    height: hp("1.1890765747737362%"),
    top: hp("46.74535865992144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.200012207031236%")
  },
  ImageBackground_1_409: {
    width: wp("0.5861155192057291%"),
    height: hp("1.1890765747737362%"),
    top: hp("46.74535865992144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.049987792968736%")
  },
  ImageBackground_1_410: {
    width: wp("0.6902737087673612%"),
    height: hp("4.931669808476348%"),
    top: hp("22.24157781548839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.458346896701386%")
  },
  ImageBackground_1_411: {
    width: wp("0.6902737087673612%"),
    height: hp("4.931669808476348%"),
    top: hp("22.24157781548839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.14862060546875%")
  },
  ImageBackground_1_412: {
    width: wp("0.6902737087673612%"),
    height: hp("4.931669808476348%"),
    top: hp("22.24157781548839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.84028455946179%")
  },
  ImageBackground_1_413: {
    width: wp("0.6902737087673612%"),
    height: hp("4.931669808476348%"),
    top: hp("22.24157781548839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53055826822916%")
  },
  ImageBackground_1_414: {
    width: wp("0.6902737087673612%"),
    height: hp("4.931669808476348%"),
    top: hp("22.24157781548839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.222222222222214%")
  },
  ImageBackground_1_415: {
    width: wp("0.6902737087673612%"),
    height: hp("4.9316656394082985%"),
    top: hp("30.410499781207307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.540276421440964%")
  },
  ImageBackground_1_416: {
    width: wp("0.6902821858723959%"),
    height: hp("4.9316656394082985%"),
    top: hp("30.410499781207307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.23055013020833%")
  },
  ImageBackground_1_417: {
    width: wp("2.4222225613064237%"),
    height: hp("1.4060765667691257%"),
    top: hp("32.53000394894126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.08470323350694%")
  },
  ImageBackground_1_418: {
    width: wp("2.4222225613064237%"),
    height: hp("1.4060807358371756%"),
    top: hp("31.123927382172127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.319451226128464%")
  },
  ImageBackground_1_419: {
    width: wp("2.4222225613064237%"),
    height: hp("1.4060765667691257%"),
    top: hp("33.936097191982576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.355563693576386%")
  },
  ImageBackground_1_420: {
    width: wp("0.6902737087673612%"),
    height: hp("4.9316656394082985%"),
    top: hp("30.410499781207307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.922214084201386%")
  },
  ImageBackground_1_421: {
    width: wp("0.6902821858723959%"),
    height: hp("4.9316656394082985%"),
    top: hp("30.410499781207307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.612487792968736%")
  },
  ImageBackground_1_422: {
    width: wp("0.6902737087673612%"),
    height: hp("4.9316656394082985%"),
    top: hp("30.410499781207307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.3027615017361%")
  },
  ImageBackground_1_423: {
    width: wp("0.6902737087673612%"),
    height: hp("4.931673977544399%"),
    top: hp("38.5437345244194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.949985080295136%")
  },
  ImageBackground_1_424: {
    width: wp("0.6902821858723959%"),
    height: hp("4.931673977544399%"),
    top: hp("38.5437345244194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.6402587890625%")
  },
  ImageBackground_1_425: {
    width: wp("0.6902737087673612%"),
    height: hp("4.931673977544399%"),
    top: hp("38.5437345244194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.33195665147569%")
  },
  ImageBackground_1_426: {
    width: wp("0.6902821858723959%"),
    height: hp("4.931673977544399%"),
    top: hp("38.5437345244194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.02223036024304%")
  },
  ImageBackground_1_427: {
    width: wp("0.6902737087673612%"),
    height: hp("4.931673977544399%"),
    top: hp("38.5437345244194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.7138943142361%")
  },
  ImageBackground_1_428: {
    width: wp("1.4875030517578125%"),
    height: hp("5.113003423305157%"),
    top: hp("22.15239311176572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.92917887369791%")
  },
  ImageBackground_1_429: {
    width: wp("1.4875030517578125%"),
    height: hp("5.113003423305157%"),
    top: hp("22.15239311176572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.672214084201386%")
  },
  ImageBackground_1_430: {
    width: wp("2.0111083984375%"),
    height: hp("4.786015078018272%"),
    top: hp("22.39021342960212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.51666937934027%")
  },
  ImageBackground_1_431: {
    width: wp("2.0722198486328125%"),
    height: hp("4.22120641489498%"),
    top: hp("37.862992416965504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.495849609375%")
  },
  ImageBackground_1_432: {
    width: wp("1.2458377414279513%"),
    height: hp("5.077324538934426%"),
    top: hp("37.43196080942622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.28609212239583%")
  },
  ImageBackground_1_433: {
    width: wp("1.4986165364583333%"),
    height: hp("0.42211814004866804%"),
    top: hp("43.053282023779026%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.74443223741318%")
  },
  ImageBackground_1_434: {
    width: wp("0.09722391764322917%"),
    height: hp("1.2069118478910519%"),
    top: hp("41.935571555882866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.43470594618054%")
  },
  ImageBackground_1_435: {
    width: wp("7.015143500434028%"),
    height: hp("11.191241988718835%"),
    top: hp("40.12609596460894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4626329210069358%")
  },
  ImageBackground_1_436: {
    width: wp("4.8995251125759545%"),
    height: hp("8.801803171960383%"),
    top: hp("42.83280502903006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8579644097222143%")
  },
  ImageBackground_1_437: {
    width: wp("3.2652791341145835%"),
    height: hp("5.844291311795594%"),
    top: hp("51.12708253287226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.570821126302079%")
  },
  ImageBackground_1_438: {
    width: wp("0.641665988498264%"),
    height: hp("5.844291311795594%"),
    top: hp("51.12708253287226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.194451226128464%")
  },
  ImageBackground_1_439: {
    width: wp("15.420837402343752%"),
    height: hp("26.037685206679047%"),
    top: hp("3.9239268485314227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.80416531032985%")
  },
  ImageBackground_1_440: {
    width: wp("15.144449869791668%"),
    height: hp("25.4104489185771%"),
    top: hp("4.551171474769468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.805555555555557%")
  },
  ImageBackground_1_441: {
    width: wp("1.9125281439887152%"),
    height: hp("0.5350811233937415%"),
    top: hp("6.640958525443992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.33888753255208%")
  },
  ImageBackground_1_442: {
    width: wp("3.094473944769965%"),
    height: hp("0.5350873769958162%"),
    top: hp("9.03693860997268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.81526692708333%")
  },
  ImageBackground_1_443: {
    width: wp("4.612528483072917%"),
    height: hp("0.5350873769958162%"),
    top: hp("9.03693860997268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.862474229600693%")
  },
  ImageBackground_1_444: {
    width: wp("3.094473944769965%"),
    height: hp("0.5350790388597165%"),
    top: hp("11.43291869450136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.81526692708333%")
  },
  ImageBackground_1_445: {
    width: wp("3.095838758680556%"),
    height: hp("0.5350832079277664%"),
    top: hp("13.828898779030055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.33888753255208%")
  },
  ImageBackground_1_446: {
    width: wp("5.163887871636285%"),
    height: hp("0.5350832079277664%"),
    top: hp("13.828898779030055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.386094835069443%")
  },
  ImageBackground_1_447: {
    width: wp("1.6680908203125%"),
    height: hp("0.5350790388597165%"),
    top: hp("11.43291869450136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.73470730251735%")
  },
  ImageBackground_1_448: {
    width: wp("1.6694471571180556%"),
    height: hp("0.5350790388597165%"),
    top: hp("11.43291869450136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.293063693576386%")
  },
  ImageBackground_1_449: {
    width: wp("2.10555182562934%"),
    height: hp("0.5350748697916667%"),
    top: hp("16.224878863558743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.375%")
  },
  ImageBackground_1_450: {
    width: wp("3.094473944769965%"),
    height: hp("0.5350748697916667%"),
    top: hp("16.224878863558743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.313876681857636%")
  },
  ImageBackground_1_451: {
    width: wp("1.28753662109375%"),
    height: hp("0.5350748697916667%"),
    top: hp("16.224878863558743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.22361924913193%")
  },
  ImageBackground_1_452: {
    width: wp("1.9000328911675346%"),
    height: hp("0.5350790388597165%"),
    top: hp("18.62085894808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.36250813802083%")
  },
  ImageBackground_1_453: {
    width: wp("3.094473944769965%"),
    height: hp("0.5350790388597165%"),
    top: hp("18.62085894808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.209730360243057%")
  },
  ImageBackground_1_454: {
    width: wp("5.6153106689453125%"),
    height: hp("0.5350832079277664%"),
    top: hp("21.01683903261612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.76527913411458%")
  },
  ImageBackground_1_455: {
    width: wp("3.4750281439887156%"),
    height: hp("0.5350832079277664%"),
    top: hp("21.01683903261612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.94722493489583%")
  },
  ImageBackground_1_456: {
    width: wp("3.095838758680556%"),
    height: hp("0.5350832079277664%"),
    top: hp("23.412819117144807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.33888753255208%")
  },
  ImageBackground_1_457: {
    width: wp("3.094473944769965%"),
    height: hp("0.5350832079277664%"),
    top: hp("23.412819117144807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.82918294270833%")
  },
  ImageBackground_1_458: {
    width: wp("4.5917002360026045%"),
    height: hp("0.5350832079277664%"),
    top: hp("25.8087992016735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.609734429253464%")
  },
  ImageBackground_1_459: {
    width: wp("0.2124998304578993%"),
    height: hp("0.5350832079277664%"),
    top: hp("6.64392690189549%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.929178873697907%")
  },
  ImageBackground_1_460: {
    width: wp("0.2124998304578993%"),
    height: hp("0.5350832079277664%"),
    top: hp("9.039906986424185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.929178873697907%")
  },
  ImageBackground_1_461: {
    width: wp("0.2124998304578993%"),
    height: hp("0.5350790388597165%"),
    top: hp("11.43291869450136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.929178873697907%")
  },
  ImageBackground_1_462: {
    width: wp("0.2124998304578993%"),
    height: hp("0.5350832079277664%"),
    top: hp("13.828898779030055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.929178873697907%")
  },
  ImageBackground_1_463: {
    width: wp("0.2124998304578993%"),
    height: hp("0.5350748697916667%"),
    top: hp("16.224878863558743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.929178873697907%")
  },
  ImageBackground_1_464: {
    width: wp("0.2124998304578993%"),
    height: hp("0.5350790388597165%"),
    top: hp("18.62085894808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.929178873697907%")
  },
  ImageBackground_1_465: {
    width: wp("0.2124998304578993%"),
    height: hp("0.5350832079277664%"),
    top: hp("19.818848990351775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.929178873697907%")
  },
  ImageBackground_1_466: {
    width: wp("0.2124998304578993%"),
    height: hp("0.5350832079277664%"),
    top: hp("21.01683903261612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.929178873697907%")
  },
  ImageBackground_1_467: {
    width: wp("0.2124998304578993%"),
    height: hp("0.5350832079277664%"),
    top: hp("22.214812398608267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.929178873697907%")
  },
  ImageBackground_1_468: {
    width: wp("0.2124998304578993%"),
    height: hp("0.5350832079277664%"),
    top: hp("23.412819117144807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.929178873697907%")
  },
  ImageBackground_1_469: {
    width: wp("0.2124998304578993%"),
    height: hp("0.5350832079277664%"),
    top: hp("24.610792483136947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.929178873697907%")
  },
  ImageBackground_1_470: {
    width: wp("0.2124998304578993%"),
    height: hp("0.5350832079277664%"),
    top: hp("25.8087992016735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.929178873697907%")
  },
  ImageBackground_1_471: {
    width: wp("0.2124998304578993%"),
    height: hp("0.5350832079277664%"),
    top: hp("27.006772567665642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.929178873697907%")
  },
  ImageBackground_1_472: {
    width: wp("0.9043460422092013%"),
    height: hp("2.161069776191086%"),
    top: hp("25.28471399526127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.38741726345485%")
  },
  ImageBackground_1_473: {
    width: wp("0.4874165852864583%"),
    height: hp("3.439385252572148%"),
    top: hp("24.62268266521516%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.41809760199652%")
  },
  ImageBackground_1_474: {
    width: wp("0.9029557969835069%"),
    height: hp("2.159668969326332%"),
    top: hp("25.28496413934426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.031873914930557%")
  },
  ImageBackground_1_475: {
    width: wp("0.6124962700737847%"),
    height: hp("3.978333186582138%"),
    top: hp("46.720677777066264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.34027777777777%")
  },
  View_1_476: {
    width: wp("1.4890840318467882%"),
    height: hp("3.552579619193989%"),
    top: hp("45.80608430455943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.041612413194443%")
  },
  ImageBackground_1_477: {
    width: wp("1.4890840318467882%"),
    height: hp("3.552579619193989%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_479: {
    width: wp("0.9472232394748265%"),
    height: hp("2.2354542883367485%"),
    top: hp("55.82688962175546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.944444444444443%")
  },
  ImageBackground_1_480: {
    width: wp("0.9472232394748265%"),
    height: hp("2.2354542883367485%"),
    top: hp("56.831651698044745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.201388888888886%")
  },
  ImageBackground_1_481: {
    width: wp("0.9472232394748265%"),
    height: hp("2.2354542883367485%"),
    top: hp("55.82688962175546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.43612331814235%")
  },
  ImageBackground_1_482: {
    width: wp("5.1152801513671875%"),
    height: hp("6.9286575734289615%"),
    top: hp("50.518348568775615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.126397026909714%")
  },
  ImageBackground_1_483: {
    width: wp("8.510496351453993%"),
    height: hp("22.04494788998463%"),
    top: hp("26.96483174308402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.687493218315964%")
  },
  View_1_484: {
    width: wp("7.576802571614584%"),
    height: hp("23.00777747982838%"),
    top: hp("25.99023704320355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.92916531032985%")
  },
  ImageBackground_1_485: {
    width: wp("7.576802571614584%"),
    height: hp("23.00777747982838%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_487: {
    width: wp("4.965697394476996%"),
    height: hp("14.889968288400784%"),
    top: hp("26.477801213498978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.75971137152777%")
  },
  View_1_488: {
    width: wp("4.085862901475695%"),
    height: hp("10.17546940370987%"),
    top: hp("28.267198573044745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.40719265407985%")
  },
  ImageBackground_1_489: {
    width: wp("4.085862901475695%"),
    height: hp("10.17546940370987%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_492: {
    width: wp("2.992740207248264%"),
    height: hp("4.889908253820868%"),
    top: hp("56.13605103206114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.5973171657986%")
  },
  ImageBackground_1_493: {
    width: wp("2.99285888671875%"),
    height: hp("4.886964891777664%"),
    top: hp("56.82868332159324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.248711480034714%")
  },
  ImageBackground_1_494: {
    width: wp("7.6572460598415795%"),
    height: hp("18.125677890464907%"),
    top: hp("39.486077313866126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.974711100260407%")
  },
  View_1_495: {
    width: wp("6.6375011867947045%"),
    height: hp("13.837820584656763%"),
    top: hp("38.40698909238389%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.973626030815964%")
  },
  ImageBackground_1_496: {
    width: wp("6.6375011867947045%"),
    height: hp("13.837820584656763%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_498: {
    width: wp("3.930816650390625%"),
    height: hp("18.422011078381146%"),
    top: hp("39.569325264685794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.744140624999986%")
  },
  View_1_499: {
    width: wp("4.569769965277778%"),
    height: hp("11.45966743510929%"),
    top: hp("38.772633036629095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.52916124131943%")
  },
  ImageBackground_1_500: {
    width: wp("4.569769965277778%"),
    height: hp("11.45966743510929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_502: {
    width: wp("0.3486124674479167%"),
    height: hp("22.464527067590932%"),
    top: hp("39.87251656954407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.241651746961793%")
  },
  ImageBackground_1_503: {
    width: wp("0.3486124674479167%"),
    height: hp("22.464527067590932%"),
    top: hp("39.87251656954407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.429151746961793%")
  },
  ImageBackground_1_504: {
    width: wp("0.987866719563802%"),
    height: hp("20.054468040257856%"),
    top: hp("39.542176293545076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.897047254774293%")
  },
  ImageBackground_1_505: {
    width: wp("0.9878709581163195%"),
    height: hp("20.054468040257856%"),
    top: hp("39.542176293545076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.530381944444443%")
  },
  ImageBackground_1_506: {
    width: wp("21.97638617621528%"),
    height: hp("1.498233816011356%"),
    top: hp("39.123418422344606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.541680230034714%")
  },
  ImageBackground_1_507: {
    width: wp("4.5361073811848955%"),
    height: hp("1.1771738854913762%"),
    top: hp("35.59186758239412%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.379150390624986%")
  },
  ImageBackground_1_508: {
    width: wp("4.53611585828993%"),
    height: hp("1.1771738854913762%"),
    top: hp("36.76904563695356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.498609754774307%")
  },
  ImageBackground_1_509: {
    width: wp("4.53611585828993%"),
    height: hp("1.177182223627476%"),
    top: hp("37.94622369151298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.279154459635407%")
  },
  ImageBackground_1_510: {
    width: wp("0.7458326551649306%"),
    height: hp("1.397154761142418%"),
    top: hp("23.88844307654542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.579182942708329%")
  },
  ImageBackground_1_511: {
    width: wp("0.6676228841145834%"),
    height: hp("1.4289105524782275%"),
    top: hp("29.968511862832997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.199971516927071%")
  },
  ImageBackground_1_512: {
    width: wp("0.6666649712456597%"),
    height: hp("1.4239118398864412%"),
    top: hp("23.106626083290642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.190287272135414%")
  },
  ImageBackground_1_513: {
    width: wp("2.606942918565538%"),
    height: hp("6.135604941779799%"),
    top: hp("24.19461943412739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.730570475260414%")
  },
  ImageBackground_1_514: {
    width: wp("2.116665310329861%"),
    height: hp("0.6660002828295766%"),
    top: hp("38.11196916090335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.025004069010407%")
  },
  ImageBackground_1_515: {
    width: wp("0.7055536905924479%"),
    height: hp("6.994712287610998%"),
    top: hp("31.379591311261947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.458319769965271%")
  },
  ImageBackground_1_516: {
    width: wp("1.641667683919271%"),
    height: hp("3.3353461593878073%"),
    top: hp("24.215431421832307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.7777845594618%")
  },
  ImageBackground_1_517: {
    width: wp("1.3431294759114583%"),
    height: hp("2.771050291634648%"),
    top: hp("24.9390315488388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.112460666232636%")
  },
  ImageBackground_1_518: {
    width: wp("2.116665310329861%"),
    height: hp("0.5915574037312158%"),
    top: hp("38.53186101861339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.025004069010407%")
  },
  ImageBackground_1_519: {
    width: wp("3.3444383409288196%"),
    height: hp("2.3662546293331626%"),
    top: hp("52.24184130058914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.35138617621527%")
  },
  ImageBackground_1_520: {
    width: wp("3.3208296034071183%"),
    height: hp("7.858434791773394%"),
    top: hp("53.55873316363559%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.361117892795136%")
  },
  ImageBackground_1_521: {
    width: wp("0.9125010172526041%"),
    height: hp("3.2701252588157446%"),
    top: hp("23.93005037568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.33333333333333%")
  },
  View_1_522: {
    width: wp("1.2285274929470487%"),
    height: hp("2.749725508559597%"),
    top: hp("23.39200712943989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.180202907986114%")
  },
  ImageBackground_1_523: {
    width: wp("1.2285274929470487%"),
    height: hp("2.749725508559597%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_525: {
    width: wp("3.007180955674913%"),
    height: hp("7.125504290471311%"),
    top: hp("17.797434655695014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.91809760199652%")
  },
  View_1_526: {
    width: wp("3.1013870239257812%"),
    height: hp("5.612082559554303%"),
    top: hp("19.95292621883538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.823594835069443%")
  },
  ImageBackground_1_527: {
    width: wp("3.1013870239257812%"),
    height: hp("5.612082559554303%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_529: {
    width: wp("1.9611019558376737%"),
    height: hp("4.59380853371542%"),
    top: hp("20.6482267119194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.352464463975693%")
  },
  View_1_530: {
    width: wp("2.2475687662760415%"),
    height: hp("2.76886153090847%"),
    top: hp("20.33906530161373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.234734429253464%")
  },
  ImageBackground_1_531: {
    width: wp("2.2475687662760415%"),
    height: hp("2.76886153090847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_533: {
    width: wp("3.045832316080729%"),
    height: hp("3.3521475036287565%"),
    top: hp("34.94978107389856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.0263943142361%")
  },
  ImageBackground_1_534: {
    width: wp("6.388888888888888%"),
    height: hp("0.9988294924543204%"),
    top: hp("38.12756147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.973626030815964%")
  },
  ImageBackground_1_535: {
    width: wp("6.37083265516493%"),
    height: hp("8.347274696892077%"),
    top: hp("30.77612704918033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.295837402343743%")
  },
  ImageBackground_1_536: {
    width: wp("6.37083265516493%"),
    height: hp("8.347274696892077%"),
    top: hp("30.77612704918033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.879170735677079%")
  },
  ImageBackground_1_537: {
    width: wp("2.7736070421006946%"),
    height: hp("2.624874427670338%"),
    top: hp("34.73277274376708%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.45001220703125%")
  },
  ImageBackground_1_538: {
    width: wp("2.773615519205729%"),
    height: hp("2.624874427670338%"),
    top: hp("37.35765134050546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.57082112630208%")
  },
  ImageBackground_1_539: {
    width: wp("1.198705037434896%"),
    height: hp("2.7575883709016393%"),
    top: hp("32.87471917157617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.244215223524307%")
  },
  View_1_1437: {
    width: wp("43.40277777777778%"),
    minWidth: wp("43.40277777777778%"),
    height: hp("36.33879781420765%"),
    minHeight: hp("36.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4722222222222223%"),
    top: hp("15.983606557377051%")
  },
  View_1_540: {
    width: wp("43.40277777777778%"),
    minWidth: wp("43.40277777777778%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.841530054644807%")
  },
  Text_1_540: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_541: {
    width: wp("41.94444444444444%"),
    minWidth: wp("41.94444444444444%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_541: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1802: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("14.97811593644606%"),
    minHeight: hp("14.97811593644606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4722222222222223%"),
    top: hp("2.459016393442623%")
  },
  View_1_1464: {
    width: wp("46.041666666666664%"),
    minWidth: wp("46.041666666666664%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.013888888888886%"),
    top: hp("6.693989071038253%")
  },
  View_1_346: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.402777777777786%"),
    top: hp("0%")
  },
  View_1_347: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7083333333333357%"),
    top: hp("0.13661202185792298%")
  },
  Text_1_347: {
    color: "rgba(78, 205, 196, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_348: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_342: {
    width: wp("7.569444444444444%"),
    minWidth: wp("7.569444444444444%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.333333333333336%"),
    top: hp("0.13661202185792298%")
  },
  View_1_343: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7083333333333286%"),
    top: hp("0.13661202185792298%")
  },
  Text_1_343: {
    color: "rgba(78, 205, 196, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_344: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_350: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.680555555555564%"),
    top: hp("0.13661202185792298%")
  },
  View_1_351: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7083333333333286%"),
    top: hp("0.13661202185792298%")
  },
  Text_1_351: {
    color: "rgba(78, 205, 196, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_352: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_354: {
    width: wp("7.986111111111111%"),
    minWidth: wp("7.986111111111111%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555555%"),
    top: hp("0%")
  },
  View_1_355: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.708333333333343%"),
    top: hp("0.27322404371584597%")
  },
  Text_1_355: {
    color: "rgba(78, 205, 196, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_356: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_338: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.00001667627219781309%")
  },
  View_1_339: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7083333333333357%"),
    top: hp("0.27322404371584774%")
  },
  Text_1_339: {
    color: "rgba(78, 205, 196, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_340: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1801: {
    width: wp("18.680555555555557%"),
    minWidth: wp("18.680555555555557%"),
    height: hp("14.97811593644606%"),
    minHeight: hp("14.97811593644606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_3: {
    width: wp("11.458333333333332%"),
    top: hp("6.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222222%")
  },
  Text_1_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1465: {
    width: wp("5.189765824211968%"),
    height: hp("14.97811593644606%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1466: {
    width: wp("5.189765824211968%"),
    height: hp("14.97811593644606%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1467: {
    width: wp("5.189765824211968%"),
    height: hp("14.97811593644606%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1468: {
    width: wp("0.9481712182362875%"),
    height: hp("3.4401184874154183%"),
    top: hp("8.536216860911885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3523423936631942%")
  },
  ImageBackground_1_1470: {
    width: wp("1.2945093048943412%"),
    height: hp("1.9133879187328569%"),
    top: hp("7.452809484929988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.947031656901042%")
  },
  ImageBackground_1_1472: {
    width: wp("2.373268339369032%"),
    height: hp("3.870463240993479%"),
    top: hp("7.173581983222338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.67596435546875%")
  },
  ImageBackground_1_1474: {
    width: wp("0.4712453484535218%"),
    height: hp("0.5807923488929624%"),
    top: hp("12.892209245858949%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2607659233940973%")
  },
  ImageBackground_1_1476: {
    width: wp("0.45989347828759086%"),
    height: hp("0.619526443585672%"),
    top: hp("12.724679415343237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.14080810546875%")
  },
  ImageBackground_1_1478: {
    width: wp("0.669967532157898%"),
    height: hp("0.4914480806048451%"),
    top: hp("10.546674884733607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.209665934244791%")
  },
  ImageBackground_1_1480: {
    width: wp("0.4793611168861389%"),
    height: hp("0.6366392953799722%"),
    top: hp("10.323312894894126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2486707899305554%")
  },
  ImageBackground_1_1482: {
    width: wp("0.3633703788121541%"),
    height: hp("0.39092895111751036%"),
    top: hp("10.63602635117828%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8853081597222223%")
  },
  View_1_1484: {
    width: wp("1.5416618188222249%"),
    height: hp("1.8192349887285075%"),
    top: hp("9.06252001152664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1898464626736116%")
  },
  View_1_1485: {
    width: wp("1.5416618188222249%"),
    height: hp("1.8192349887285075%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1486: {
    width: wp("1.5416618188222249%"),
    height: hp("1.8192349887285075%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1487: {
    width: wp("1.5416618188222249%"),
    height: hp("1.8192349887285075%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1489: {
    width: wp("2.4509350458780927%"),
    height: hp("3.2621375849989596%"),
    top: hp("4.319854903090848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5653042263454857%")
  },
  ImageBackground_1_1491: {
    width: wp("2.5020371543036566%"),
    height: hp("3.3626363577087073%"),
    top: hp("4.269592618681694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.539754231770833%")
  },
  ImageBackground_1_1493: {
    width: wp("0.14685521523157755%"),
    height: hp("0.9983059487056211%"),
    top: hp("5.338041378500682%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9632737901475696%")
  },
  ImageBackground_1_1495: {
    width: wp("0.19796858231226605%"),
    height: hp("1.0988273255812013%"),
    top: hp("5.28777909409153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.937723795572916%")
  },
  ImageBackground_1_1497: {
    width: wp("2.8322545687357583%"),
    height: hp("2.153750325812668%"),
    top: hp("3.955511708077186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2739291720920134%")
  },
  ImageBackground_1_1499: {
    width: wp("0.12326166033744812%"),
    height: hp("0.5472843764258213%"),
    top: hp("6.034342447916668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.169189453125%")
  },
  ImageBackground_1_1501: {
    width: wp("0.5393899811638726%"),
    height: hp("0.24464342112098234%"),
    top: hp("6.771467031676913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.743367513020833%")
  },
  ImageBackground_1_1503: {
    width: wp("0.23846295144822863%"),
    height: hp("0.4691074454719252%"),
    top: hp("6.151609994023225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0762363009982634%")
  },
  ImageBackground_1_1505: {
    width: wp("0.18168518940607706%"),
    height: hp("0.3574134873562172%"),
    top: hp("6.095761158427255%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6205783420138884%")
  },
  ImageBackground_1_1507: {
    width: wp("0.28956015904744464%"),
    height: hp("0.9717213000104727%"),
    top: hp("5.302737710254441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4509752061631946%")
  },
  ImageBackground_1_1509: {
    width: wp("0.22965277234713236%"),
    height: hp("0.7706739863411325%"),
    top: hp("5.347413443476775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3082817925347223%")
  },
  ImageBackground_1_1511: {
    width: wp("3.3238482475280757%"),
    height: hp("4.267245433369621%"),
    top: hp("0.9459281879696038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02527872721354152%")
  },
  ImageBackground_1_1513: {
    width: wp("3.3747291564941406%"),
    height: hp("4.366579212126185%"),
    top: hp("0.8966164510758197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1515: {
    width: wp("0.34184671110577053%"),
    height: hp("0.6005223331555642%"),
    top: hp("4.778802590292008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04291110568576384%")
  },
  ImageBackground_1_1517: {
    width: wp("0.3930906785859002%"),
    height: hp("0.7011486532909622%"),
    top: hp("4.728540305882856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.017225477430555358%")
  },
  ImageBackground_1_1519: {
    width: wp("0.28967128859625924%"),
    height: hp("0.7086885431425167%"),
    top: hp("4.214310776340506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0462816026475688%")
  },
  ImageBackground_1_1521: {
    width: wp("0.28967128859625924%"),
    height: hp("0.7086885431425167%"),
    top: hp("4.214310776340506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0462816026475688%")
  },
  View_1_1523: {
    width: wp("0.34184671110577053%"),
    height: hp("0.6005223331555642%"),
    top: hp("4.778802590292008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04291110568576384%")
  },
  View_1_1524: {
    width: wp("0.34184671110577053%"),
    height: hp("0.6005223331555642%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1525: {
    width: wp("0.34184671110577053%"),
    height: hp("0.6005223331555642%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1526: {
    width: wp("0.34184671110577053%"),
    height: hp("0.6005223331555642%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1528: {
    width: wp("0.28967128859625924%"),
    height: hp("0.7086885431425167%"),
    top: hp("4.214310776340506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0462816026475688%")
  },
  View_1_1529: {
    width: wp("0.28967128859625924%"),
    height: hp("0.7086885431425167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1530: {
    width: wp("0.28967128859625924%"),
    height: hp("0.7086885431425167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1531: {
    width: wp("0.28967128859625924%"),
    height: hp("0.7086885431425167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1533: {
    width: wp("0.3407779335975647%"),
    height: hp("0.8092270522821144%"),
    top: hp("4.164031815659152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.020731608072917%")
  },
  ImageBackground_1_1535: {
    width: wp("1.4534893300798204%"),
    height: hp("0.848870850651642%"),
    top: hp("3.163839037952527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.216064453125%")
  },
  ImageBackground_1_1537: {
    width: wp("0.891397065586514%"),
    height: hp("0.2920367027241024%"),
    top: hp("3.128702132428278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2373114691840277%")
  },
  ImageBackground_1_1539: {
    width: wp("0.9071660704082912%"),
    height: hp("4.30843322003474%"),
    top: hp("7.288147973232583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3343370225694442%")
  },
  ImageBackground_1_1541: {
    width: wp("0.26118556658426917%"),
    height: hp("0.47109628635677486%"),
    top: hp("11.228017337986682%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.49994574652777724%")
  },
  ImageBackground_1_1543: {
    width: wp("0.7099325789345635%"),
    height: hp("2.9487998107743394%"),
    top: hp("9.094688540599385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6814236111111107%")
  },
  ImageBackground_1_1545: {
    width: wp("0.1564305689599779%"),
    height: hp("2.131338458243615%"),
    top: hp("8.502680877518785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5893317328559027%")
  },
  ImageBackground_1_1547: {
    width: wp("0.09461374746428595%"),
    height: hp("1.5068557093052266%"),
    top: hp("9.38507246840847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1775037977430554%")
  },
  ImageBackground_1_1549: {
    width: wp("0.6570296817355685%"),
    height: hp("0.9104039499668476%"),
    top: hp("8.491674537867144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6424628363715277%")
  },
  ImageBackground_1_1551: {
    width: wp("0.6715476512908936%"),
    height: hp("1.0016828286843222%"),
    top: hp("8.257823172814208%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.691731770833333%")
  },
  ImageBackground_1_1553: {
    width: wp("1.084442138671875%"),
    height: hp("0.5792619100685328%"),
    top: hp("7.119267364668717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5098503960503473%")
  },
  ImageBackground_1_1555: {
    width: wp("0.4504135913319058%"),
    height: hp("1.4631617916086332%"),
    top: hp("7.486328792050887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6158481174045134%")
  },
  ImageBackground_1_1557: {
    width: wp("0.14280767904387578%"),
    height: hp("1.6267983639826538%"),
    top: hp("7.307609182889346%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8042263454861107%")
  },
  ImageBackground_1_1559: {
    width: wp("0.539379318555196%"),
    height: hp("0.20104783480284646%"),
    top: hp("8.848963669740437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9243299696180562%")
  },
  ImageBackground_1_1561: {
    width: wp("0.4976840482817756%"),
    height: hp("1.0673513829382393%"),
    top: hp("7.393425279627733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4977552625868062%")
  },
  ImageBackground_1_1563: {
    width: wp("0.18975963195165%"),
    height: hp("0.5584923296026845%"),
    top: hp("8.71490311752903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4215630425347223%")
  },
  ImageBackground_1_1565: {
    width: wp("0.5520854062504238%"),
    height: hp("1.8476204793961324%"),
    top: hp("7.518580702484632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.722229003906249%")
  },
  ImageBackground_1_1567: {
    width: wp("0.2525472144285838%"),
    height: hp("0.1425700435221521%"),
    top: hp("7.966572078850753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9379035101996527%")
  },
  ImageBackground_1_1569: {
    width: wp("0.34315764904022217%"),
    height: hp("0.15831641812142128%"),
    top: hp("8.385179863601435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.767801920572916%")
  },
  ImageBackground_1_1571: {
    width: wp("0.36115123165978325%"),
    height: hp("0.27031875698944263%"),
    top: hp("8.754042328381148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.721415201822917%")
  },
  ImageBackground_1_1573: {
    width: wp("0.3826759258906047%"),
    height: hp("0.514234936302477%"),
    top: hp("7.513794612363387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4961073133680554%")
  },
  ImageBackground_1_1575: {
    width: wp("0.4337768753369649%"),
    height: hp("0.6147485613171519%"),
    top: hp("7.463532327954235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4705573187934027%")
  },
  ImageBackground_1_1577: {
    width: wp("0.3908160660001967%"),
    height: hp("0.495355181355294%"),
    top: hp("7.420974481301229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9301011827256946%")
  },
  ImageBackground_1_1579: {
    width: wp("0.44196334150102407%"),
    height: hp("0.5958904334104778%"),
    top: hp("7.370695520619877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9045681423611107%")
  },
  ImageBackground_1_1581: {
    width: wp("0.23845831553141275%"),
    height: hp("0.4691074454719252%"),
    top: hp("7.815801901895492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.865437825520833%")
  },
  ImageBackground_1_1583: {
    width: wp("0.28956015904744464%"),
    height: hp("0.5696265423884158%"),
    top: hp("7.76553961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8398878309461804%")
  },
  ImageBackground_1_1585: {
    width: wp("0.18384257952372235%"),
    height: hp("0.44072859925650504%"),
    top: hp("7.6918471706369544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7001681857638893%")
  },
  ImageBackground_1_1587: {
    width: wp("0.23493988646401298%"),
    height: hp("0.5412616690651315%"),
    top: hp("7.6415848862278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.674601236979167%")
  },
  ImageBackground_1_1589: {
    width: wp("0.165277769168218%"),
    height: hp("0.3659016447640508%"),
    top: hp("7.658778122865437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0420159233940973%")
  },
  ImageBackground_1_1591: {
    width: wp("0.21637934777471754%"),
    height: hp("0.46643263003865226%"),
    top: hp("7.6085158384562845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0164659288194446%")
  },
  ImageBackground_1_1593: {
    width: wp("0.34591178099314374%"),
    height: hp("1.7160381775736158%"),
    top: hp("8.199572954021518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7418077256944446%")
  },
  ImageBackground_1_1595: {
    width: wp("0.3970993889702691%"),
    height: hp("1.8165481546537472%"),
    top: hp("8.149327345884563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7163425021701384%")
  },
  ImageBackground_1_1597: {
    width: wp("0.2685379981994629%"),
    height: hp("1.4295446416719364%"),
    top: hp("8.095146137508538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.034912109375%")
  },
  ImageBackground_1_1599: {
    width: wp("0.3196377224392361%"),
    height: hp("1.53007233729128%"),
    top: hp("8.044883853099385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0093621148003473%")
  },
  ImageBackground_1_1601: {
    width: wp("1.5632339318593345%"),
    height: hp("0.8548039556201039%"),
    top: hp("10.232927499573089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1825222439236107%")
  },
  ImageBackground_1_1603: {
    width: wp("0.4343478878339132%"),
    height: hp("0.49740014180459613%"),
    top: hp("10.590316689079577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8427191840277777%")
  },
  ImageBackground_1_1605: {
    width: wp("1.5906851821475558%"),
    height: hp("2.359930413668273%"),
    top: hp("10.583762914105192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1491224500868054%")
  },
  ImageBackground_1_1607: {
    width: wp("1.6417072878943548%"),
    height: hp("2.4601631477230885%"),
    top: hp("10.53348395342384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1236402723524304%")
  },
  ImageBackground_1_1609: {
    width: wp("0.19305436147583854%"),
    height: hp("0.5249866696654774%"),
    top: hp("11.406686918331626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0215691460503473%")
  },
  ImageBackground_1_1611: {
    width: wp("0.5384722352027893%"),
    height: hp("0.7190880228261478%"),
    top: hp("12.814814666581285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2324354383680554%")
  },
  ImageBackground_1_1613: {
    width: wp("0.44824997584025067%"),
    height: hp("0.6888968697011145%"),
    top: hp("13.296758933145492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2779066297743054%")
  },
  ImageBackground_1_1615: {
    width: wp("0.49935155444675017%"),
    height: hp("0.7897214159939459%"),
    top: hp("13.24649664873634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2523566351996527%")
  },
  ImageBackground_1_1617: {
    width: wp("0.5361965960926479%"),
    height: hp("0.719072909954467%"),
    top: hp("12.680770790642077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.10906982421875%")
  },
  ImageBackground_1_1619: {
    width: wp("0.44824997584025067%"),
    height: hp("0.6889227309513613%"),
    top: hp("13.162715057206285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.151540120442708%")
  },
  ImageBackground_1_1621: {
    width: wp("0.4993524154027303%"),
    height: hp("0.789144781769299%"),
    top: hp("13.11246944906933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1259901258680554%")
  },
  ImageBackground_1_1623: {
    width: wp("0.818441179063585%"),
    height: hp("1.1243431945967544%"),
    top: hp("13.853763100879442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.928243001302083%")
  },
  ImageBackground_1_1625: {
    width: wp("0.8566457033157348%"),
    height: hp("1.2348647977485032%"),
    top: hp("13.713715766948427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1401299370659723%")
  },
  ImageBackground_1_1627: {
    width: wp("0.08964387906922235%"),
    height: hp("1.7469003552296123%"),
    top: hp("8.993580302254099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0205349392361107%")
  },
  ImageBackground_1_1629: {
    width: wp("0.10787036683824328%"),
    height: hp("0.21222220743940173%"),
    top: hp("10.233928075905055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9080268012152777%")
  },
  ImageBackground_1_1631: {
    width: wp("1.0488379001617432%"),
    height: hp("4.541041681675312%"),
    top: hp("8.402856712132856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.779541015624999%")
  },
  ImageBackground_1_1633: {
    width: wp("1.099936564763387%"),
    height: hp("4.641547489687394%"),
    top: hp("8.352611103995903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7539910210503473%")
  },
  ImageBackground_1_1635: {
    width: wp("1.2504960430992975%"),
    height: hp("6.851286966292585%"),
    top: hp("0.7680423924180326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.91387939453125%")
  },
  ImageBackground_1_1637: {
    width: wp("1.3014331128862169%"),
    height: hp("6.951806844909335%"),
    top: hp("0.7178134605532787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8883293999565973%")
  },
  ImageBackground_1_1639: {
    width: wp("2.5140137142605252%"),
    height: hp("2.9575298392707534%"),
    top: hp("0.05039569458674853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5581190321180554%")
  },
  View_1_1641: {
    width: wp("2.3460139168633356%"),
    height: hp("1.4142784264569725%"),
    top: hp("0.05039569458674853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5581190321180554%")
  },
  View_1_1642: {
    width: wp("2.3460139168633356%"),
    height: hp("1.4142784264569725%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1643: {
    width: wp("2.3460139168633356%"),
    height: hp("1.4142784264569725%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1644: {
    width: wp("2.3460139168633356%"),
    height: hp("1.4142784264569725%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1646: {
    width: wp("2.565118736690945%"),
    height: hp("3.0581841703321113%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.532552083333333%")
  },
  ImageBackground_1_1648: {
    width: wp("0.13058796525001526%"),
    height: hp("0.3909198638519954%"),
    top: hp("5.442351461108265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5673489040798607%")
  },
  ImageBackground_1_1650: {
    width: wp("0.10787500275505914%"),
    height: hp("0.33508197205965634%"),
    top: hp("5.4311783587346305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3963080512152777%")
  },
  ImageBackground_1_1652: {
    width: wp("0.522344708442688%"),
    height: hp("0.31911421343277063%"),
    top: hp("4.9612910369706285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3090345594618054%")
  },
  ImageBackground_1_1654: {
    width: wp("0.5223435825771756%"),
    height: hp("0.3191093278061497%"),
    top: hp("4.927771729849727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.166341145833333%")
  },
  ImageBackground_1_1656: {
    width: wp("0.4735482401318021%"),
    height: hp("1.232740266726968%"),
    top: hp("5.527750651041668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.34152560763888884%")
  },
  ImageBackground_1_1658: {
    width: wp("0.26683229539129466%"),
    height: hp("0.3360802684325338%"),
    top: hp("5.860208813609972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.44036865234375%")
  },
  ImageBackground_1_1660: {
    width: wp("0.5245886908637153%"),
    height: hp("1.3334573943758272%"),
    top: hp("5.47757174799351%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3160264756944442%")
  },
  View_1_1662: {
    width: wp("1.8758055898878307%"),
    height: hp("1.0579872001064279%"),
    top: hp("6.525758837090164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7665676540798607%")
  },
  View_1_1663: {
    width: wp("1.8758055898878307%"),
    height: hp("1.0579872001064279%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1664: {
    width: wp("1.8758055898878307%"),
    height: hp("1.0579872001064279%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1665: {
    width: wp("1.8758055898878307%"),
    height: hp("1.0579872001064279%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1667: {
    width: wp("0.1506718165344662%"),
    height: hp("0.3782038805914707%"),
    top: hp("6.074198738473362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0512729220920134%")
  },
  View_1_1668: {
    width: wp("0.1506718165344662%"),
    height: hp("0.3782038805914707%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1669: {
    width: wp("0.1506718165344662%"),
    height: hp("0.3782038805914707%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1670: {
    width: wp("0.1506718165344662%"),
    height: hp("0.3782038805914707%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1672: {
    width: wp("0.352264146010081%"),
    height: hp("1.0957011759606865%"),
    top: hp("5.577846172728824%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.36668565538194464%")
  },
  View_1_1673: {
    width: wp("0.352264146010081%"),
    height: hp("1.0957011759606865%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1674: {
    width: wp("0.352264146010081%"),
    height: hp("1.0957011759606865%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1675: {
    width: wp("0.352264146010081%"),
    height: hp("1.0957011759606865%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1677: {
    width: wp("0.6687731213039823%"),
    height: hp("1.4388159975979498%"),
    top: hp("3.584698119450137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02541436089409732%")
  },
  View_1_1678: {
    width: wp("0.6687731213039823%"),
    height: hp("1.4388159975979498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1679: {
    width: wp("0.6687731213039823%"),
    height: hp("1.4388159975979498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1680: {
    width: wp("0.6687731213039823%"),
    height: hp("1.4388159975979498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1682: {
    width: wp("0.5029873384369744%"),
    height: hp("1.300318644997852%"),
    top: hp("3.2650473339310104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8461371527777777%")
  },
  View_1_1683: {
    width: wp("0.5029873384369744%"),
    height: hp("1.300318644997852%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1684: {
    width: wp("0.5029873384369744%"),
    height: hp("1.300318644997852%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1685: {
    width: wp("0.5029873384369744%"),
    height: hp("1.300318644997852%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1687: {
    width: wp("0.68324347337087%"),
    height: hp("0.8575419910618516%"),
    top: hp("1.2719159569245222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0234510633680554%")
  },
  View_1_1688: {
    width: wp("0.68324347337087%"),
    height: hp("0.8575419910618516%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1689: {
    width: wp("0.68324347337087%"),
    height: hp("0.8575419910618516%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1690: {
    width: wp("0.68324347337087%"),
    height: hp("0.8575419910618516%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1692: {
    width: wp("0.16364226738611856%"),
    height: hp("0.47651395771672816%"),
    top: hp("2.1939970756489067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7317979600694446%")
  },
  View_1_1693: {
    width: wp("0.16364226738611856%"),
    height: hp("0.47651395771672816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1694: {
    width: wp("0.16364226738611856%"),
    height: hp("0.47651395771672816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1695: {
    width: wp("0.16364226738611856%"),
    height: hp("0.47651395771672816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1697: {
    width: wp("0.4585411151250203%"),
    height: hp("0.16091478978349863%"),
    top: hp("3.357033651383197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3920254177517366%")
  },
  View_1_1698: {
    width: wp("0.4585411151250203%"),
    height: hp("0.16091478978349863%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1699: {
    width: wp("0.4585411151250203%"),
    height: hp("0.16091478978349863%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1700: {
    width: wp("0.4585411151250203%"),
    height: hp("0.16091478978349863%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1702: {
    width: wp("1.0714305109447904%"),
    height: hp("2.8489253560050587%"),
    top: hp("0.15900825542178953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000684950086805%")
  },
  View_1_1703: {
    width: wp("1.0714305109447904%"),
    height: hp("2.8489253560050587%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1704: {
    width: wp("1.0714305109447904%"),
    height: hp("2.8489253560050587%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1705: {
    width: wp("1.0714305109447904%"),
    height: hp("2.8489253560050587%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1707: {
    width: wp("2.205888695187039%"),
    height: hp("0.85219939549764%"),
    top: hp("7.173581983222338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8433363172743054%")
  },
  View_1_1708: {
    width: wp("2.205888695187039%"),
    height: hp("0.85219939549764%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1709: {
    width: wp("2.205888695187039%"),
    height: hp("0.85219939549764%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1710: {
    width: wp("2.205888695187039%"),
    height: hp("0.85219939549764%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1712: {
    width: wp("0.4225228561295403%"),
    height: hp("0.8875956300829277%"),
    top: hp("8.017217917520492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5880601671006938%")
  },
  View_1_1713: {
    width: wp("0.4225228561295403%"),
    height: hp("0.8875956300829277%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1714: {
    width: wp("0.4225228561295403%"),
    height: hp("0.8875956300829277%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1715: {
    width: wp("0.4225228561295403%"),
    height: hp("0.8875956300829277%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1717: {
    width: wp("0.9481712182362875%"),
    height: hp("3.003952412005982%"),
    top: hp("8.972384760288593%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3523423936631942%")
  },
  View_1_1718: {
    width: wp("0.9481712182362875%"),
    height: hp("3.003952412005982%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1719: {
    width: wp("0.9481712182362875%"),
    height: hp("3.003952412005982%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1720: {
    width: wp("0.9481712182362875%"),
    height: hp("3.003952412005982%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1722: {
    width: wp("1.2945093048943412%"),
    height: hp("1.8052640508432856%"),
    top: hp("7.560938433871243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.947031656901042%")
  },
  View_1_1723: {
    width: wp("1.2945093048943412%"),
    height: hp("1.8052640508432856%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1724: {
    width: wp("1.2945093048943412%"),
    height: hp("1.8052640508432856%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1725: {
    width: wp("1.2945093048943412%"),
    height: hp("1.8052640508432856%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1727: {
    width: wp("0.15729900863435534%"),
    height: hp("0.9888214491755585%"),
    top: hp("9.0972900390625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5064731174045134%")
  },
  View_1_1728: {
    width: wp("0.15729900863435534%"),
    height: hp("0.9888214491755585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1729: {
    width: wp("0.15729900863435534%"),
    height: hp("0.9888214491755585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1730: {
    width: wp("0.15729900863435534%"),
    height: hp("0.9888214491755585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1732: {
    width: wp("0.12490740252865686%"),
    height: hp("0.5472950596626991%"),
    top: hp("7.653858622566599%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7759738498263893%")
  },
  View_1_1733: {
    width: wp("0.12490740252865686%"),
    height: hp("0.5472950596626991%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1734: {
    width: wp("0.12490740252865686%"),
    height: hp("0.5472950596626991%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1735: {
    width: wp("0.12490740252865686%"),
    height: hp("0.5472950596626991%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1737: {
    width: wp("0.06245370126432843%"),
    height: hp("0.2122130876030427%"),
    top: hp("7.944259226647883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9988674587673607%")
  },
  View_1_1738: {
    width: wp("0.06245370126432843%"),
    height: hp("0.2122130876030427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1739: {
    width: wp("0.06245370126432843%"),
    height: hp("0.2122130876030427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1740: {
    width: wp("0.06245370126432843%"),
    height: hp("0.2122130876030427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1742: {
    width: wp("0.07043803731600443%"),
    height: hp("0.40056865071989806%"),
    top: hp("8.48115181010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9579739040798607%")
  },
  View_1_1743: {
    width: wp("0.07043803731600443%"),
    height: hp("0.40056865071989806%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1744: {
    width: wp("0.07043803731600443%"),
    height: hp("0.40056865071989806%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1745: {
    width: wp("0.07043803731600443%"),
    height: hp("0.40056865071989806%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1747: {
    width: wp("0.35869578520456946%"),
    height: hp("0.9718733407109161%"),
    top: hp("8.133968499188867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.841227213541666%")
  },
  View_1_1748: {
    width: wp("0.35869578520456946%"),
    height: hp("0.9718733407109161%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1749: {
    width: wp("0.35869578520456946%"),
    height: hp("0.9718733407109161%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1750: {
    width: wp("0.35869578520456946%"),
    height: hp("0.9718733407109161%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1752: {
    width: wp("0.02271296249495612%"),
    height: hp("1.2509472383176041%"),
    top: hp("10.94877316000683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.374308268229166%")
  },
  ImageBackground_1_1754: {
    width: wp("0.051064814130465194%"),
    height: hp("1.2527504905325468%"),
    top: hp("10.946972122609289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3714938693576384%")
  },
  View_1_1756: {
    width: wp("1.5602221753862169%"),
    height: hp("2.1162293647807804%"),
    top: hp("10.691875186774249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1492580837673607%")
  },
  View_1_1757: {
    width: wp("1.5602221753862169%"),
    height: hp("2.1162293647807804%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1758: {
    width: wp("1.5602221753862169%"),
    height: hp("2.1162293647807804%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1759: {
    width: wp("1.5602221753862169%"),
    height: hp("2.1162293647807804%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1761: {
    width: wp("0.2573055691189236%"),
    height: hp("1.385048308659121%"),
    top: hp("11.484898634947063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0538330078125%")
  },
  View_1_1762: {
    width: wp("0.2573055691189236%"),
    height: hp("1.385048308659121%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1763: {
    width: wp("0.2573055691189236%"),
    height: hp("1.385048308659121%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1764: {
    width: wp("0.2573055691189236%"),
    height: hp("1.385048308659121%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1766: {
    width: wp("0.47414812776777476%"),
    height: hp("0.2226368651364019%"),
    top: hp("12.918340964395492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2748887803819446%")
  },
  View_1_1767: {
    width: wp("0.47414812776777476%"),
    height: hp("0.2226368651364019%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1768: {
    width: wp("0.47414812776777476%"),
    height: hp("0.2226368651364019%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1769: {
    width: wp("0.47414812776777476%"),
    height: hp("0.2226368651364019%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1771: {
    width: wp("0.48574692673153347%"),
    height: hp("0.32761735342890835%"),
    top: hp("12.722428118596314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.14080810546875%")
  },
  View_1_1772: {
    width: wp("0.48574692673153347%"),
    height: hp("0.32761735342890835%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1773: {
    width: wp("0.48574692673153347%"),
    height: hp("0.32761735342890835%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1774: {
    width: wp("0.48574692673153347%"),
    height: hp("0.32761735342890835%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1776: {
    width: wp("0.022675924830966525%"),
    height: hp("0.20228596658654555%"),
    top: hp("13.460603307505123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3743421766493054%")
  },
  ImageBackground_1_1778: {
    width: wp("0.022675924830966525%"),
    height: hp("0.20228596658654555%"),
    top: hp("13.471759733606559%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.59576416015625%")
  },
  ImageBackground_1_1780: {
    width: wp("0.022671295122967824%"),
    height: hp("0.20227684675018642%"),
    top: hp("13.629383858435792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2430080837673607%")
  },
  ImageBackground_1_1782: {
    width: wp("0.022675924830966525%"),
    height: hp("0.20228596658654555%"),
    top: hp("13.304229903090848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4871487087673607%")
  },
  View_1_1784: {
    width: wp("0.1701703833209144%"),
    height: hp("0.18879756575725118%"),
    top: hp("14.259530156036542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0395982530381946%")
  },
  View_1_1785: {
    width: wp("0.1701703833209144%"),
    height: hp("0.18879756575725118%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1786: {
    width: wp("0.1701703833209144%"),
    height: hp("0.18879756575725118%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1787: {
    width: wp("0.16449376940727234%"),
    height: hp("0.1777618146333538%"),
    top: hp("0.00545314100922667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.002814398871527679%")
  },
  ImageBackground_1_1789: {
    width: wp("0.1701703833209144%"),
    height: hp("0.18879756575725118%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1791: {
    width: wp("0.403117835521698%"),
    height: hp("0.33508197205965634%"),
    top: hp("8.48967338520321%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2972852918836804%")
  },
  ImageBackground_1_1793: {
    width: wp("0.04936111470063528%"),
    height: hp("0.10052823303827171%"),
    top: hp("8.60992598403347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4864773220486107%")
  },
  ImageBackground_1_1795: {
    width: wp("0.2554912037319607%"),
    height: hp("0.2122529543162695%"),
    top: hp("8.450534174351093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.299397786458333%")
  },
  ImageBackground_1_1797: {
    width: wp("0.028388887229892943%"),
    height: hp("0.05583788364962802%"),
    top: hp("8.52877924351093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4129570855034723%")
  },
  View_19_1: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("428.0054644808743%"),
    backgroundColor: "rgba(26, 83, 92, 1)"
  },
  View_19_2: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%"),
    top: hp("427.8688524590164%"),
    backgroundColor: "rgba(26, 83, 92, 1)"
  },
  View_19_3: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.861111111111114%"),
    top: hp("428.0054644808743%"),
    backgroundColor: "rgba(26, 83, 92, 1)"
  },
  View_2: { height: 3284 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
